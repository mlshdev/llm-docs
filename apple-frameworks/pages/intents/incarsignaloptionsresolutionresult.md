> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incarsignaloptionsresolutionresult](https://developer.apple.com/documentation/intents/incarsignaloptionsresolutionresult)

# INCarSignalOptionsResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A resolution result for the signals the intent is managing on the car.

## Declaration

```swift
class INCarSignalOptionsResolutionResult
```

<a id="overview"></a>

## Overview

Return an `INCarSignalOptionsResolutionResult` object when resolving the [signals](inactivatecarsignalintent/signals.md) property of a [INActivateCarSignalIntent](inactivatecarsignalintent.md) object. Use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [success(with:)](incarsignaloptionsresolutionresult/success%28with_%29.md): Creates a resolution object that indicates the successful resolution of the provided value.
- [confirmationRequired(with:)](incarsignaloptionsresolutionresult/confirmationrequired%28with_%29.md): Creates a resolution object that requires confirmation of the provided value.

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

# INCarSignalOptionsResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A resolution result for the signals the intent is managing on the car.

## Declaration

```objectivec
@interface INCarSignalOptionsResolutionResult : INIntentResolutionResult
```

<a id="overview"></a>

## Overview

Return an `INCarSignalOptionsResolutionResult` object when resolving the [signals](inactivatecarsignalintent/signals.md) property of a [INActivateCarSignalIntent](inactivatecarsignalintent.md) object. Use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [successWithResolvedCarSignalOptions:](incarsignaloptionsresolutionresult/success%28with_%29.md): Creates a resolution object that indicates the successful resolution of the provided value.
- [confirmationRequiredWithCarSignalOptionsToConfirm:](incarsignaloptionsresolutionresult/confirmationrequired%28with_%29.md): Creates a resolution object that requires confirmation of the provided value.
- [successWithResolvedValue:](https://developer.apple.com/documentation/intents/incarsignaloptionsresolutionresult/successwithresolvedvalue:): Deprecated.
- [confirmationRequiredWithValueToConfirm:](https://developer.apple.com/documentation/intents/incarsignaloptionsresolutionresult/confirmationrequiredwithvaluetoconfirm:): Deprecated.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)
