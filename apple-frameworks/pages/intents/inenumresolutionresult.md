> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inenumresolutionresult](https://developer.apple.com/documentation/intents/inenumresolutionresult)

# INEnumResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

A resolution result for an enumeration associated with an intent.

## Declaration

```swift
class INEnumResolutionResult
```

<a id="overview"></a>

## Overview

An [INEnumResolutionResult](inenumresolutionresult.md) object is what you return when resolving enumeration related parameters of an intent object. Use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

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

### Custom Resolution Results

- [INObjectResolutionResult](inobjectresolutionresult.md): A resolution result for an Object associated with an intent.

# INEnumResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

A resolution result for an enumeration associated with an intent.

## Declaration

```objectivec
@interface INEnumResolutionResult : INIntentResolutionResult
```

<a id="overview"></a>

## Overview

An [INEnumResolutionResult](inenumresolutionresult.md) object is what you return when resolving enumeration related parameters of an intent object. Use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Type Methods

- [successWithResolvedValue:](https://developer.apple.com/documentation/intents/inenumresolutionresult/successwithresolvedvalue:): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithValueToConfirm:](https://developer.apple.com/documentation/intents/inenumresolutionresult/confirmationrequiredwithvaluetoconfirm:): Creates an object whose resolution requires that the user must confirm the value before proceeding.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

## See Also

### Custom Resolution Results

- [INObjectResolutionResult](inobjectresolutionresult.md): A resolution result for an Object associated with an intent.
