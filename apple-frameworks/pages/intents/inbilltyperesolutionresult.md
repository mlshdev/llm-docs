> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbilltyperesolutionresult](https://developer.apple.com/documentation/intents/inbilltyperesolutionresult)

# INBillTypeResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

A resolution result for the types of bills a user might pay.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class INBillTypeResolutionResult
```

<a id="overview"></a>

## Overview

You create [INBillTypeResolutionResult](inbilltyperesolutionresult.md) objects when resolving intent parameters containing a value of type [INBillType](inbilltype.md). Use the creation method that best reflects your ability to resolve the parameter. For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [success(with:)](inbilltyperesolutionresult/success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified attribute.
- [confirmationRequired(with:)](inbilltyperesolutionresult/confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Bill Data Objects

- [INBillDetails](inbilldetails.md): Deprecated. The detailed information associated with a bill.
- [INBillPayee](inbillpayee.md): Deprecated. The entity that receives the proceeds from a bill payment.
- [INBillPayeeResolutionResult](inbillpayeeresolutionresult.md): Deprecated. A resolution result for the recipient of a bill payment.
- [INVisualCodeTypeResolutionResult](invisualcodetyperesolutionresult.md): Deprecated. A resolution result for the type of visual code used to exchange information.

# INBillTypeResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

A resolution result for the types of bills a user might pay.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@interface INBillTypeResolutionResult : INIntentResolutionResult
```

<a id="overview"></a>

## Overview

You create [INBillTypeResolutionResult](inbilltyperesolutionresult.md) objects when resolving intent parameters containing a value of type [INBillType](inbilltype.md). Use the creation method that best reflects your ability to resolve the parameter. For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [successWithResolvedBillType:](inbilltyperesolutionresult/success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified attribute.
- [confirmationRequiredWithBillTypeToConfirm:](inbilltyperesolutionresult/confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [successWithResolvedValue:](https://developer.apple.com/documentation/intents/inbilltyperesolutionresult/successwithresolvedvalue:): Deprecated. Creates an object whose resolution involves the successful matching of the specified attribute.
- [confirmationRequiredWithValueToConfirm:](https://developer.apple.com/documentation/intents/inbilltyperesolutionresult/confirmationrequiredwithvaluetoconfirm:): Deprecated. Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

## See Also

### Bill Data Objects

- [INBillDetails](inbilldetails.md): Deprecated. The detailed information associated with a bill.
- [INBillPayee](inbillpayee.md): Deprecated. The entity that receives the proceeds from a bill payment.
- [INBillPayeeResolutionResult](inbillpayeeresolutionresult.md): Deprecated. A resolution result for the recipient of a bill payment.
- [INVisualCodeTypeResolutionResult](invisualcodetyperesolutionresult.md): Deprecated. A resolution result for the type of visual code used to exchange information.
