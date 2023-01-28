import { Module } from "@nestjs/common";
import { SaleModuleBase } from "./base/sale.module.base";
import { SaleService } from "./sale.service";
import { SaleController } from "./sale.controller";
import { SaleResolver } from "./sale.resolver";
import { OrderModule } from "../order/order.module";

@Module({
  imports: [SaleModuleBase, OrderModule],
  controllers: [SaleController],
  providers: [SaleService, SaleResolver],
  exports: [SaleService],
})
export class SaleModule {}
