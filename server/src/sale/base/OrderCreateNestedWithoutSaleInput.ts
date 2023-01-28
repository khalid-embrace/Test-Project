import { InputType, Field } from "@nestjs/graphql";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class OrderCreateNestedWithoutCustomersInput {
  @Field(() => OrderWhereUniqueInput, {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => OrderWhereUniqueInput,
  })
  connect?: OrderWhereUniqueInput;
}

export { OrderCreateNestedWithoutCustomersInput };
