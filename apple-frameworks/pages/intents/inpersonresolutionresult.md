> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpersonresolutionresult](https://developer.apple.com/documentation/intents/inpersonresolutionresult)

# INPersonResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

A resolution result for a user as a parameter of an intent.

## Declaration

```swift
class INPersonResolutionResult
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

<a id="overview"></a>

## Overview

An [INPersonResolutionResult](inpersonresolutionresult.md) object is what you return when resolving parameters containing an [INPerson](inperson.md) object. Use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [success(with:)](inpersonresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequired(with:)](inpersonresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguation(with:)](inpersonresolutionresult/disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

### Inherited By

- [INRequestPaymentPayerResolutionResult](inrequestpaymentpayerresolutionresult.md)
- [INSendMessageRecipientResolutionResult](insendmessagerecipientresolutionresult.md)
- [INSendPaymentPayeeResolutionResult](insendpaymentpayeeresolutionresult.md)
- [INStartCallContactResolutionResult](instartcallcontactresolutionresult.md)

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
- [INOutgoingMessageTypeResolutionResult](inoutgoingmessagetyperesolutionresult.md): A resolution result for the message’s format.

# INPersonResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

A resolution result for a user as a parameter of an intent.

## Declaration

```objectivec
@interface INPersonResolutionResult : INIntentResolutionResult
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

<a id="overview"></a>

## Overview

An [INPersonResolutionResult](inpersonresolutionresult.md) object is what you return when resolving parameters containing an [INPerson](inperson.md) object. Use the creation method that best reflects your ability to successfully resolve the parameter.

For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [successWithResolvedPerson:](inpersonresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified parameter.
- [confirmationRequiredWithPersonToConfirm:](inpersonresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [disambiguationWithPeopleToDisambiguate:](inpersonresolutionresult/disambiguation%28with_%29.md): Creates an object whose resolution requires the user to select from among the specified objects.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

### Inherited By

- [INRequestPaymentPayerResolutionResult](inrequestpaymentpayerresolutionresult.md)
- [INSendMessageRecipientResolutionResult](insendmessagerecipientresolutionresult.md)
- [INSendPaymentPayeeResolutionResult](insendpaymentpayeeresolutionresult.md)
- [INStartCallContactResolutionResult](instartcallcontactresolutionresult.md)

## See Also

### Providing Resolution Results

- [INMessageAttributeResolutionResult](inmessageattributeresolutionresult.md): A resolution result for assorted attributes of a message.
- [INMessageAttributeOptionsResolutionResult](inmessageattributeoptionsresolutionresult.md): A resolution result for a search parameter that filters by message status.
- [INDateComponentsRangeResolutionResult](indatecomponentsrangeresolutionresult.md): A resolution result for a range of dates in a parameter of an intent.
- [INSendMessageRecipientResolutionResult](insendmessagerecipientresolutionresult.md): A resolution result for the recipient of a message.
- [INOutgoingMessageTypeResolutionResult](inoutgoingmessagetyperesolutionresult.md): A resolution result for the message’s format.
