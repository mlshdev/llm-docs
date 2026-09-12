> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmessageattributeresolutionresult](https://developer.apple.com/documentation/intents/inmessageattributeresolutionresult)

# INMessageAttributeResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A resolution result for assorted attributes of a message.

## Declaration

```swift
class INMessageAttributeResolutionResult
```

<a id="overview"></a>

## Overview

An [INMessageAttributeResolutionResult](inmessageattributeresolutionresult.md) object is what you return when resolving parameters containing an [INMessageAttribute](inmessageattribute.md) type. Use the creation method that best reflects your ability to successfully resolve the parameter. For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [success(with:)](inmessageattributeresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified attribute.
- [confirmationRequired(with:)](inmessageattributeresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.

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

- [INMessageAttributeOptionsResolutionResult](inmessageattributeoptionsresolutionresult.md): A resolution result for a search parameter that filters by message status.
- [INDateComponentsRangeResolutionResult](indatecomponentsrangeresolutionresult.md): A resolution result for a range of dates in a parameter of an intent.
- [INSendMessageRecipientResolutionResult](insendmessagerecipientresolutionresult.md): A resolution result for the recipient of a message.
- [INPersonResolutionResult](inpersonresolutionresult.md): A resolution result for a user as a parameter of an intent.
- [INOutgoingMessageTypeResolutionResult](inoutgoingmessagetyperesolutionresult.md): A resolution result for the message’s format.

# INMessageAttributeResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A resolution result for assorted attributes of a message.

## Declaration

```objectivec
@interface INMessageAttributeResolutionResult : INIntentResolutionResult
```

<a id="overview"></a>

## Overview

An [INMessageAttributeResolutionResult](inmessageattributeresolutionresult.md) object is what you return when resolving parameters containing an [INMessageAttribute](inmessageattribute.md) type. Use the creation method that best reflects your ability to successfully resolve the parameter. For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [successWithResolvedMessageAttribute:](inmessageattributeresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified attribute.
- [confirmationRequiredWithMessageAttributeToConfirm:](inmessageattributeresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [successWithResolvedValue:](https://developer.apple.com/documentation/intents/inmessageattributeresolutionresult/successwithresolvedvalue:): Deprecated.
- [confirmationRequiredWithValueToConfirm:](https://developer.apple.com/documentation/intents/inmessageattributeresolutionresult/confirmationrequiredwithvaluetoconfirm:): Deprecated.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

## See Also

### Providing Resolution Results

- [INMessageAttributeOptionsResolutionResult](inmessageattributeoptionsresolutionresult.md): A resolution result for a search parameter that filters by message status.
- [INDateComponentsRangeResolutionResult](indatecomponentsrangeresolutionresult.md): A resolution result for a range of dates in a parameter of an intent.
- [INSendMessageRecipientResolutionResult](insendmessagerecipientresolutionresult.md): A resolution result for the recipient of a message.
- [INPersonResolutionResult](inpersonresolutionresult.md): A resolution result for a user as a parameter of an intent.
- [INOutgoingMessageTypeResolutionResult](inoutgoingmessagetyperesolutionresult.md): A resolution result for the message’s format.
