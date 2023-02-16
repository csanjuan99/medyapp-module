import { PrismaClient } from '@prisma/client';
import boom from '@hapi/boom';

export class UserService {
  prisma = new PrismaClient();

  async findAll(): Promise<unknown> {
    const users = await this.prisma.user.findMany();
    if (users.length === 0) {
      throw boom.notFound('No hay usuarios registrados');
    }
    return users;
  }

  async findOne(id: number): Promise<unknown> {
    const user = await this.prisma.user.findUnique({
      where: {
        id
      }
    });
    if (user == null) {
      throw boom.notFound('El usuario no ha sido encontrado');
    }
    return user;
  }

  async create(data: any): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: {
        email: data.email
      }
    });
    if (user != null) {
      throw boom.conflict(
        'Ya existe un usuario con ese correo electrónico, por favor ingrese otro'
      );
    }
    return await this.prisma.user.create({
      data
    });
  }

  async update(id: number, data: any): Promise<unknown> {
    try {
      return await this.prisma.user.update({
        where: {
          id
        },
        data
      });
    } catch {
      throw new Error('Error while updating user');
    }
  }

  async delete(id: number): Promise<unknown> {
    try {
      return await this.prisma.user.delete({
        where: {
          id
        }
      });
    } catch {
      throw new Error('Error while deleting user');
    }
  }
}
