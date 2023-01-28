import { InputType, Field } from "@nestjs/graphql";
import { PaymentStatus as PS } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";
import { AddressWhereUniqueInput } from "../../address/base/AddressWhereUniqueInput";
import { ValidateNested, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { PaymentStatus } from "./PaymentStatusEnum";
import { OrderCreateNestedWithoutCustomersInput } from "./OrderCreateNestedWithoutSaleInput";

@InputType()
class SaleCreateInput {
  @ApiProperty({
    required: true,
    type: () => AddressWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AddressWhereUniqueInput)
  @Field(() => AddressWhereUniqueInput, {
    nullable: false,
  })
  address?: AddressWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String, {
    nullable: false,
  })
  trackingId!: string;

  @ApiProperty({
    required: true,
    type: String,
    pattern: "YYYY-MM-DDTHH:mm:ss.sssZ",
  })
  @IsString()
  @Field(() => String, {
    nullable: false,
  })
  shipmentDate!: Date;

  @ApiProperty({
    required: true,
    type: String,
    enum: PaymentStatus,
  })
  @Field(() => PaymentStatus, {
    nullable: false,
  })
  paymentStatus!: PS;

  @ApiProperty({
    required: false,
    type: () => OrderCreateNestedWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => OrderCreateNestedWithoutCustomersInput)
  @Field(() => OrderCreateNestedWithoutCustomersInput, {
    nullable: true,
  })
  order?: OrderCreateNestedWithoutCustomersInput;
}

export { SaleCreateInput };
