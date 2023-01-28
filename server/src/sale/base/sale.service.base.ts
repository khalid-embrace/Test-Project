import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Sale } from "@prisma/client";

export class SaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SaleFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SaleFindManyArgs>
  ): Promise<number> {
    return this.prisma.sale.count(args);
  }

  async findMany<T extends Prisma.SaleFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SaleFindManyArgs>
  ): Promise<Sale[]> {
    return this.prisma.sale.findMany(args);
  }

  async findOne<T extends Prisma.SaleFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SaleFindUniqueArgs>
  ): Promise<Sale> {
    return this.prisma.sale.findUniqueOrThrow(args);
  }

  async create<T extends Prisma.SaleCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SaleCreateArgs>
  ): Promise<Sale> {
    return this.prisma.sale.create<T>(args);
  }

  async update<T extends Prisma.SaleUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SaleUpdateArgs>
  ): Promise<Sale> {
    return this.prisma.sale.update<T>(args);
  }
  
  async delete<T extends Prisma.SaleDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SaleDeleteArgs>
  ): Promise<Sale> {
    return this.prisma.sale.delete(args);
  }
}