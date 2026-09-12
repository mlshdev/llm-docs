> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indoubleresolutionresult](https://developer.apple.com/documentation/intents/indoubleresolutionresult)

# INDoubleResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

A resolution result for a double value associated with an intent.

## Declaration

```swift
class INDoubleResolutionResult
```

<a id="overview"></a>

## Overview

An [INDoubleResolutionResult](indoubleresolutionresult.md) object is what you return when resolving floating-point parameters of an intent object. Use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [success(with:)](indoubleresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified value.
- [confirmationRequired(with:)](indoubleresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

### Inherited By

- [INPlayMediaPlaybackSpeedResolutionResult](inplaymediaplaybackspeedresolutionresult.md)

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
- [INBooleanResolutionResult](inbooleanresolutionresult.md): A resolution result for a Boolean value associated with an intent.

# INDoubleResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

A resolution result for a double value associated with an intent.

## Declaration

```objectivec
@interface INDoubleResolutionResult : INIntentResolutionResult
```

<a id="overview"></a>

## Overview

An [INDoubleResolutionResult](indoubleresolutionresult.md) object is what you return when resolving floating-point parameters of an intent object. Use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [successWithResolvedValue:](indoubleresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified value.
- [confirmationRequiredWithValueToConfirm:](https://developer.apple.com/documentation/intents/indoubleresolutionresult/confirmationrequiredwithvaluetoconfirm:): Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

### Inherited By

- [INPlayMediaPlaybackSpeedResolutionResult](inplaymediaplaybackspeedresolutionresult.md)

## See Also

### Numerical Values

- [INIntegerResolutionResult](inintegerresolutionresult.md): A resolution result for an integer value associated with an intent.
- [INBooleanResolutionResult](inbooleanresolutionresult.md): A resolution result for a Boolean value associated with an intent.
