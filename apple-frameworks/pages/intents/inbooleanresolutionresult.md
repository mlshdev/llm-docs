> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbooleanresolutionresult](https://developer.apple.com/documentation/intents/inbooleanresolutionresult)

# INBooleanResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

A resolution result for a Boolean value associated with an intent.

## Declaration

```swift
class INBooleanResolutionResult
```

<a id="overview"></a>

## Overview

Return an [INBooleanResolutionResult](inbooleanresolutionresult.md) object when resolving intent parameters that contain a Boolean value. Use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [success(with:)](inbooleanresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified value.
- [confirmationRequired(with:)](inbooleanresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.

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

### Numerical Values

- [INIntegerResolutionResult](inintegerresolutionresult.md): A resolution result for an integer value associated with an intent.
- [INDoubleResolutionResult](indoubleresolutionresult.md): A resolution result for a double value associated with an intent.

# INBooleanResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

A resolution result for a Boolean value associated with an intent.

## Declaration

```objectivec
@interface INBooleanResolutionResult : INIntentResolutionResult
```

<a id="overview"></a>

## Overview

Return an [INBooleanResolutionResult](inbooleanresolutionresult.md) object when resolving intent parameters that contain a Boolean value. Use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [successWithResolvedValue:](inbooleanresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified value.
- [confirmationRequiredWithValueToConfirm:](https://developer.apple.com/documentation/intents/inbooleanresolutionresult/confirmationrequiredwithvaluetoconfirm:): Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

## See Also

### Numerical Values

- [INIntegerResolutionResult](inintegerresolutionresult.md): A resolution result for an integer value associated with an intent.
- [INDoubleResolutionResult](indoubleresolutionresult.md): A resolution result for a double value associated with an intent.
