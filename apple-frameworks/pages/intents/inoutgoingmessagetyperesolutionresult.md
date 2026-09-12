> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inoutgoingmessagetyperesolutionresult](https://developer.apple.com/documentation/intents/inoutgoingmessagetyperesolutionresult)

# INOutgoingMessageTypeResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

A resolution result for the message’s format.

## Declaration

```swift
class INOutgoingMessageTypeResolutionResult
```

<a id="overview"></a>

## Overview

Return an [INOutgoingMessageTypeResolutionResult](inoutgoingmessagetyperesolutionresult.md) when you resolve an [INOutgoingMessageType](inoutgoingmessagetype.md) parameter. Use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result

- [success(with:)](inoutgoingmessagetyperesolutionresult/success%28with_%29.md): Creates an object with a resolution that involves the successful matching of the specified parameter.
- [confirmationRequired(with:)](inoutgoingmessagetyperesolutionresult/confirmationrequired%28with_%29.md): Creates an object with a resolution that requires the user to confirm the value before proceeding.

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
- [INDateComponentsRangeResolutionResult](indatecomponentsrangeresolutionresult.md): A resolution result for a range of dates in a parameter of an intent.
- [INSendMessageRecipientResolutionResult](insendmessagerecipientresolutionresult.md): A resolution result for the recipient of a message.
- [INPersonResolutionResult](inpersonresolutionresult.md): A resolution result for a user as a parameter of an intent.

# INOutgoingMessageTypeResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 12.0+ · visionOS 1.0+ · watchOS 7.0+

A resolution result for the message’s format.

## Declaration

```objectivec
@interface INOutgoingMessageTypeResolutionResult : INIntentResolutionResult
```

<a id="overview"></a>

## Overview

Return an [INOutgoingMessageTypeResolutionResult](inoutgoingmessagetyperesolutionresult.md) when you resolve an [INOutgoingMessageType](inoutgoingmessagetype.md) parameter. Use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result

- [successWithResolvedOutgoingMessageType:](inoutgoingmessagetyperesolutionresult/success%28with_%29.md): Creates an object with a resolution that involves the successful matching of the specified parameter.
- [confirmationRequiredWithOutgoingMessageTypeToConfirm:](inoutgoingmessagetyperesolutionresult/confirmationrequired%28with_%29.md): Creates an object with a resolution that requires the user to confirm the value before proceeding.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

## See Also

### Providing Resolution Results

- [INMessageAttributeResolutionResult](inmessageattributeresolutionresult.md): A resolution result for assorted attributes of a message.
- [INMessageAttributeOptionsResolutionResult](inmessageattributeoptionsresolutionresult.md): A resolution result for a search parameter that filters by message status.
- [INDateComponentsRangeResolutionResult](indatecomponentsrangeresolutionresult.md): A resolution result for a range of dates in a parameter of an intent.
- [INSendMessageRecipientResolutionResult](insendmessagerecipientresolutionresult.md): A resolution result for the recipient of a message.
- [INPersonResolutionResult](inpersonresolutionresult.md): A resolution result for a user as a parameter of an intent.
