> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbilldetails](https://developer.apple.com/documentation/intents/inbilldetails)

# INBillDetails (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The detailed information associated with a bill.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class INBillDetails
```

<a id="overview"></a>

## Overview

An [INBillDetails](inbilldetails.md) object contains the details surrounding the payment of a bill. You create instances of this class when handling bill payment-related intents. For example, you create instances of this class when searching for the user’s bill payments. The details include the recipient of the funds, the amount that’s due, and the date of payment.

When creating instances of this class, specify as many details as possible. During searches or when paying a bill, Siri may display some of the bill details to the user. Omitting an important piece of information, such as the payee, might cause the user to cancel a bill payment.

## Topics

### Initializing the Bill Details

- [init(billType:paymentStatus:billPayee:amountDue:minimumDue:lateFee:dueDate:paymentDate:)](inbilldetails/init%28billtype_paymentstatus_billpayee_amountdue_minimumdue_latefee_duedate_paymentdate_%29.md): Deprecated. Initializes a bill details object with information about the bill to pay.

### Accessing the Bill Information

- [billPayee](inbilldetails/billpayee.md): Deprecated. The entity receiving the payment.
- [paymentDate](inbilldetails/paymentdate.md): Deprecated. The scheduled payment date for the bill.
- [paymentStatus](inbilldetails/paymentstatus.md): Deprecated. The current status of the payment.
- [billType](inbilldetails/billtype.md): Deprecated. The type of the bill.

### Getting the Bill Amount

- [minimumDue](inbilldetails/minimumdue.md): Deprecated. The minimum amount to pay toward the bill.
- [amountDue](inbilldetails/amountdue.md): Deprecated. The amount due for the bill.
- [dueDate](inbilldetails/duedate.md): Deprecated. The due date of the payment.
- [lateFee](inbilldetails/latefee.md): Deprecated. The late fee to apply if the payment is late.

### Constants

- [INBillType](inbilltype.md): Deprecated. Constants indicating the type of bill.

### Initializers

- [init(coder:)](inbilldetails/init%28coder_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Bill Data Objects

- [INBillPayee](inbillpayee.md): Deprecated. The entity that receives the proceeds from a bill payment.
- [INBillTypeResolutionResult](inbilltyperesolutionresult.md): Deprecated. A resolution result for the types of bills a user might pay.
- [INBillPayeeResolutionResult](inbillpayeeresolutionresult.md): Deprecated. A resolution result for the recipient of a bill payment.
- [INVisualCodeTypeResolutionResult](invisualcodetyperesolutionresult.md): Deprecated. A resolution result for the type of visual code used to exchange information.

# INBillDetails (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The detailed information associated with a bill.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@interface INBillDetails : NSObject
```

<a id="overview"></a>

## Overview

An [INBillDetails](inbilldetails.md) object contains the details surrounding the payment of a bill. You create instances of this class when handling bill payment-related intents. For example, you create instances of this class when searching for the user’s bill payments. The details include the recipient of the funds, the amount that’s due, and the date of payment.

When creating instances of this class, specify as many details as possible. During searches or when paying a bill, Siri may display some of the bill details to the user. Omitting an important piece of information, such as the payee, might cause the user to cancel a bill payment.

## Topics

### Initializing the Bill Details

- [initWithBillType:paymentStatus:billPayee:amountDue:minimumDue:lateFee:dueDate:paymentDate:](inbilldetails/init%28billtype_paymentstatus_billpayee_amountdue_minimumdue_latefee_duedate_paymentdate_%29.md): Deprecated. Initializes a bill details object with information about the bill to pay.

### Accessing the Bill Information

- [billPayee](inbilldetails/billpayee.md): Deprecated. The entity receiving the payment.
- [paymentDate](inbilldetails/paymentdate.md): Deprecated. The scheduled payment date for the bill.
- [paymentStatus](inbilldetails/paymentstatus.md): Deprecated. The current status of the payment.
- [billType](inbilldetails/billtype.md): Deprecated. The type of the bill.

### Getting the Bill Amount

- [minimumDue](inbilldetails/minimumdue.md): Deprecated. The minimum amount to pay toward the bill.
- [amountDue](inbilldetails/amountdue.md): Deprecated. The amount due for the bill.
- [dueDate](inbilldetails/duedate.md): Deprecated. The due date of the payment.
- [lateFee](inbilldetails/latefee.md): Deprecated. The late fee to apply if the payment is late.

### Constants

- [INBillType](inbilltype.md): Deprecated. Constants indicating the type of bill.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Bill Data Objects

- [INBillPayee](inbillpayee.md): Deprecated. The entity that receives the proceeds from a bill payment.
- [INBillTypeResolutionResult](inbilltyperesolutionresult.md): Deprecated. A resolution result for the types of bills a user might pay.
- [INBillPayeeResolutionResult](inbillpayeeresolutionresult.md): Deprecated. A resolution result for the recipient of a bill payment.
- [INVisualCodeTypeResolutionResult](invisualcodetyperesolutionresult.md): Deprecated. A resolution result for the type of visual code used to exchange information.
