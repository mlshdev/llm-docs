> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indatecomponentsresolutionresult](https://developer.apple.com/documentation/intents/indatecomponentsresolutionresult)

# INDateComponentsResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

A resolution result for the date information associated with an intent.

## Declaration

```swift
class INDateComponentsResolutionResult
```

<a id="overview"></a>

## Overview

An [INDateComponentsResolutionResult](indatecomponentsresolutionresult.md) object is what you return when resolving parameters containing a [NSDateComponents](../foundation/nsdatecomponents.md) object. Use the creation method that best reflects your ability to successfully resolve the parameter. For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [success(with:)](indatecomponentsresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequired(with:)](indatecomponentsresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguation(with:)](indatecomponentsresolutionresult/disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

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

### Dates and Times

- [INDateComponentsRangeResolutionResult](indatecomponentsrangeresolutionresult.md): A resolution result for a range of dates in a parameter of an intent.
- [INTimeIntervalResolutionResult](intimeintervalresolutionresult.md): A resolution result for a time interval associated with an intent.

# INDateComponentsResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

A resolution result for the date information associated with an intent.

## Declaration

```objectivec
@interface INDateComponentsResolutionResult : INIntentResolutionResult
```

<a id="overview"></a>

## Overview

An [INDateComponentsResolutionResult](indatecomponentsresolutionresult.md) object is what you return when resolving parameters containing a [NSDateComponents](../foundation/nsdatecomponents.md) object. Use the creation method that best reflects your ability to successfully resolve the parameter. For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [successWithResolvedDateComponents:](indatecomponentsresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithDateComponentsToConfirm:](indatecomponentsresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguationWithDateComponentsToDisambiguate:](indatecomponentsresolutionresult/disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

## See Also

### Dates and Times

- [INDateComponentsRangeResolutionResult](indatecomponentsrangeresolutionresult.md): A resolution result for a range of dates in a parameter of an intent.
- [INTimeIntervalResolutionResult](intimeintervalresolutionresult.md): A resolution result for a time interval associated with an intent.
