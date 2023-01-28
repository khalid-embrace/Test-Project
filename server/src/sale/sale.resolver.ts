import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SaleResolverBase } from "./base/sale.resolver.base";
import { Sale } from "./base/Sale";
import { SaleService } from "./sale.service";
import { OrderService } from "../order/order.service";

@graphql.Resolver(() => Sale)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SaleResolver extends SaleResolverBase {
  constructor(
    protected readonly service: SaleService,
    protected readonly orderService: OrderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, orderService, rolesBuilder);
  }
}
