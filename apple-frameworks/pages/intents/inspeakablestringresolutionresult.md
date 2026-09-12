> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inspeakablestringresolutionresult](https://developer.apple.com/documentation/intents/inspeakablestringresolutionresult)

# INSpeakableStringResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A resolution result for a speakable string object associated with an intent.

## Declaration

```swift
class INSpeakableStringResolutionResult
```

<a id="overview"></a>

## Overview

An [INSpeakableStringResolutionResult](inspeakablestringresolutionresult.md) object is what you return when resolving parameters containing an [INSpeakableString](inspeakablestring.md) object. Use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [success(with:)](inspeakablestringresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequired(with:)](inspeakablestringresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguation(with:)](inspeakablestringresolutionresult/disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

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

### Strings

- [INStringResolutionResult](instringresolutionresult.md): A resolution result for a string value associated with an intent.

# INSpeakableStringResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A resolution result for a speakable string object associated with an intent.

## Declaration

```objectivec
@interface INSpeakableStringResolutionResult : INIntentResolutionResult
```

<a id="overview"></a>

## Overview

An [INSpeakableStringResolutionResult](inspeakablestringresolutionresult.md) object is what you return when resolving parameters containing an [INSpeakableString](inspeakablestring.md) object. Use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [successWithResolvedString:](inspeakablestringresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithStringToConfirm:](inspeakablestringresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguationWithStringsToDisambiguate:](inspeakablestringresolutionresult/disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

## See Also

### Strings

- [INStringResolutionResult](instringresolutionresult.md): A resolution result for a string value associated with an intent.
