> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indatecomponentsrangeresolutionresult](https://developer.apple.com/documentation/intents/indatecomponentsrangeresolutionresult)

# INDateComponentsRangeResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A resolution result for a range of dates in a parameter of an intent.

## Declaration

```swift
class INDateComponentsRangeResolutionResult
```

<a id="overview"></a>

## Overview

An [INDateComponentsRangeResolutionResult](indatecomponentsrangeresolutionresult.md) object is what you return when resolving parameters containing an [INDateComponentsRange](indatecomponentsrange.md) object. Use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [success(with:)](indatecomponentsrangeresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequired(with:)](indatecomponentsrangeresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguation(with:)](indatecomponentsrangeresolutionresult/disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

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

### Providing Resolution Results

- [INMessageAttributeResolutionResult](inmessageattributeresolutionresult.md): A resolution result for assorted attributes of a message.
- [INMessageAttributeOptionsResolutionResult](inmessageattributeoptionsresolutionresult.md): A resolution result for a search parameter that filters by message status.
- [INSendMessageRecipientResolutionResult](insendmessagerecipientresolutionresult.md): A resolution result for the recipient of a message.
- [INPersonResolutionResult](inpersonresolutionresult.md): A resolution result for a user as a parameter of an intent.
- [INOutgoingMessageTypeResolutionResult](inoutgoingmessagetyperesolutionresult.md): A resolution result for the message’s format.

# INDateComponentsRangeResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A resolution result for a range of dates in a parameter of an intent.

## Declaration

```objectivec
@interface INDateComponentsRangeResolutionResult : INIntentResolutionResult
```

<a id="overview"></a>

## Overview

An [INDateComponentsRangeResolutionResult](indatecomponentsrangeresolutionresult.md) object is what you return when resolving parameters containing an [INDateComponentsRange](indatecomponentsrange.md) object. Use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [successWithResolvedDateComponentsRange:](indatecomponentsrangeresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithDateComponentsRangeToConfirm:](indatecomponentsrangeresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguationWithDateComponentsRangesToDisambiguate:](indatecomponentsrangeresolutionresult/disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

## See Also

### Providing Resolution Results

- [INMessageAttributeResolutionResult](inmessageattributeresolutionresult.md): A resolution result for assorted attributes of a message.
- [INMessageAttributeOptionsResolutionResult](inmessageattributeoptionsresolutionresult.md): A resolution result for a search parameter that filters by message status.
- [INSendMessageRecipientResolutionResult](insendmessagerecipientresolutionresult.md): A resolution result for the recipient of a message.
- [INPersonResolutionResult](inpersonresolutionresult.md): A resolution result for a user as a parameter of an intent.
- [INOutgoingMessageTypeResolutionResult](inoutgoingmessagetyperesolutionresult.md): A resolution result for the message’s format.
