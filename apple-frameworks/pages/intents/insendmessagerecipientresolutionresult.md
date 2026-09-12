> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendmessagerecipientresolutionresult](https://developer.apple.com/documentation/intents/insendmessagerecipientresolutionresult)

# INSendMessageRecipientResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

A resolution result for the recipient of a message.

## Declaration

```swift
class INSendMessageRecipientResolutionResult
```

<a id="overview"></a>

## Overview

An [INSendMessageRecipientResolutionResult](insendmessagerecipientresolutionresult.md) object is what you return when resolving parameters containing an [INPerson](inperson.md) object. Use the [unsupported(forReason:)](insendmessagerecipientresolutionresult/unsupported%28forreason_%29.md) method to provide additional context about why a recipient was invalid. Otherwise, use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution options, see [INPersonResolutionResult](inpersonresolutionresult.md) and [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [unsupported(forReason:)](insendmessagerecipientresolutionresult/unsupported%28forreason_%29.md): Creates an object whose resolution indicates that your app can’t use the specified person as a message recipient.
- [INSendMessageRecipientUnsupportedReason](insendmessagerecipientunsupportedreason.md): Constants indicating the reason why a recipient is not supported.
- [init(personResolutionResult:)](insendmessagerecipientresolutionresult/init%28personresolutionresult_%29.md): Creates a resolution result object with the specified person resolution result object.

## Relationships

### Inherits From

- [INPersonResolutionResult](inpersonresolutionresult.md)

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
- [INDateComponentsRangeResolutionResult](indatecomponentsrangeresolutionresult.md): A resolution result for a range of dates in a parameter of an intent.
- [INPersonResolutionResult](inpersonresolutionresult.md): A resolution result for a user as a parameter of an intent.
- [INOutgoingMessageTypeResolutionResult](inoutgoingmessagetyperesolutionresult.md): A resolution result for the message’s format.

# INSendMessageRecipientResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 4.0+

A resolution result for the recipient of a message.

## Declaration

```objectivec
@interface INSendMessageRecipientResolutionResult : INPersonResolutionResult
```

<a id="overview"></a>

## Overview

An [INSendMessageRecipientResolutionResult](insendmessagerecipientresolutionresult.md) object is what you return when resolving parameters containing an [INPerson](inperson.md) object. Use the [unsupportedForReason:](insendmessagerecipientresolutionresult/unsupported%28forreason_%29.md) method to provide additional context about why a recipient was invalid. Otherwise, use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution options, see [INPersonResolutionResult](inpersonresolutionresult.md) and [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [unsupportedForReason:](insendmessagerecipientresolutionresult/unsupported%28forreason_%29.md): Creates an object whose resolution indicates that your app can’t use the specified person as a message recipient.
- [INSendMessageRecipientUnsupportedReason](insendmessagerecipientunsupportedreason.md): Constants indicating the reason why a recipient is not supported.
- [initWithPersonResolutionResult:](insendmessagerecipientresolutionresult/init%28personresolutionresult_%29.md): Creates a resolution result object with the specified person resolution result object.

## Relationships

### Inherits From

- [INPersonResolutionResult](inpersonresolutionresult.md)

## See Also

### Providing Resolution Results

- [INMessageAttributeResolutionResult](inmessageattributeresolutionresult.md): A resolution result for assorted attributes of a message.
- [INMessageAttributeOptionsResolutionResult](inmessageattributeoptionsresolutionresult.md): A resolution result for a search parameter that filters by message status.
- [INDateComponentsRangeResolutionResult](indatecomponentsrangeresolutionresult.md): A resolution result for a range of dates in a parameter of an intent.
- [INPersonResolutionResult](inpersonresolutionresult.md): A resolution result for a user as a parameter of an intent.
- [INOutgoingMessageTypeResolutionResult](inoutgoingmessagetyperesolutionresult.md): A resolution result for the message’s format.
