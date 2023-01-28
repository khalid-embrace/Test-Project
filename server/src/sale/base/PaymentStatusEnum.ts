import { registerEnumType } from "@nestjs/graphql";

export enum PaymentStatus {
  PENDING = "PENDING",
  PAID = "PAID",
  REJECTED = "REJECTED",
}

registerEnumType(PaymentStatus, {
  name: "PaymentStatus",
  description: "undefined",
});
