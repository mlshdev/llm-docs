> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbillpayeeresolutionresult](https://developer.apple.com/documentation/intents/inbillpayeeresolutionresult)

# INBillPayeeResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

A resolution result for the recipient of a bill payment.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class INBillPayeeResolutionResult
```

<a id="overview"></a>

## Overview

An [INBillPayeeResolutionResult](inbillpayeeresolutionresult.md) object is what you return when resolving parameters containing an [INBillPayee](inbillpayee.md) object. Use the creation method that best reflects your ability to resolve the parameter successfully. For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [success(with:)](inbillpayeeresolutionresult/success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified value.
- [confirmationRequired(with:)](inbillpayeeresolutionresult/confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguation(with:)](inbillpayeeresolutionresult/disambiguation%28with_%29.md): Deprecated. Creates an object whose resolution requires the user to select from among the specified objects.

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
- [INBillTypeResolutionResult](inbilltyperesolutionresult.md): Deprecated. A resolution result for the types of bills a user might pay.
- [INVisualCodeTypeResolutionResult](invisualcodetyperesolutionresult.md): Deprecated. A resolution result for the type of visual code used to exchange information.

# INBillPayeeResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

A resolution result for the recipient of a bill payment.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@interface INBillPayeeResolutionResult : INIntentResolutionResult
```

<a id="overview"></a>

## Overview

An [INBillPayeeResolutionResult](inbillpayeeresolutionresult.md) object is what you return when resolving parameters containing an [INBillPayee](inbillpayee.md) object. Use the creation method that best reflects your ability to resolve the parameter successfully. For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [successWithResolvedBillPayee:](inbillpayeeresolutionresult/success%28with_%29.md): Deprecated. Creates an object whose resolution involves the successful matching of the specified value.
- [confirmationRequiredWithBillPayeeToConfirm:](inbillpayeeresolutionresult/confirmationrequired%28with_%29.md): Deprecated. Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguationWithBillPayeesToDisambiguate:](inbillpayeeresolutionresult/disambiguation%28with_%29.md): Deprecated. Creates an object whose resolution requires the user to select from among the specified objects.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

## See Also

### Bill Data Objects

- [INBillDetails](inbilldetails.md): Deprecated. The detailed information associated with a bill.
- [INBillPayee](inbillpayee.md): Deprecated. The entity that receives the proceeds from a bill payment.
- [INBillTypeResolutionResult](inbilltyperesolutionresult.md): Deprecated. A resolution result for the types of bills a user might pay.
- [INVisualCodeTypeResolutionResult](invisualcodetyperesolutionresult.md): Deprecated. A resolution result for the type of visual code used to exchange information.
