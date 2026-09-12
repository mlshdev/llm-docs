> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmessageattributeoptionsresolutionresult](https://developer.apple.com/documentation/intents/inmessageattributeoptionsresolutionresult)

# INMessageAttributeOptionsResolutionResult (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A resolution result for a search parameter that filters by message status.

## Declaration

```swift
class INMessageAttributeOptionsResolutionResult
```

<a id="overview"></a>

## Overview

You create [INMessageAttributeOptionsResolutionResult](inmessageattributeoptionsresolutionresult.md) objects when resolving intent parameters containing a value of type [INMessageAttributeOptions](inmessageattributeoptions.md). Use the creation method that best reflects your ability to resolve the parameter. For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [success(with:)](inmessageattributeoptionsresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified attribute.
- [confirmationRequired(with:)](inmessageattributeoptionsresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.

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
- [INDateComponentsRangeResolutionResult](indatecomponentsrangeresolutionresult.md): A resolution result for a range of dates in a parameter of an intent.
- [INSendMessageRecipientResolutionResult](insendmessagerecipientresolutionresult.md): A resolution result for the recipient of a message.
- [INPersonResolutionResult](inpersonresolutionresult.md): A resolution result for a user as a parameter of an intent.
- [INOutgoingMessageTypeResolutionResult](inoutgoingmessagetyperesolutionresult.md): A resolution result for the message’s format.

# INMessageAttributeOptionsResolutionResult (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A resolution result for a search parameter that filters by message status.

## Declaration

```objectivec
@interface INMessageAttributeOptionsResolutionResult : INIntentResolutionResult
```

<a id="overview"></a>

## Overview

You create [INMessageAttributeOptionsResolutionResult](inmessageattributeoptionsresolutionresult.md) objects when resolving intent parameters containing a value of type [INMessageAttributeOptions](inmessageattributeoptions.md). Use the creation method that best reflects your ability to resolve the parameter. For additional resolution options, see [INIntentResolutionResult](inintentresolutionresult.md).

## Topics

### Creating a Resolution Result Object

- [successWithResolvedMessageAttributeOptions:](inmessageattributeoptionsresolutionresult/success%28with_%29.md): Creates an object whose resolution involves the successful matching of the specified attribute.
- [confirmationRequiredWithMessageAttributeOptionsToConfirm:](inmessageattributeoptionsresolutionresult/confirmationrequired%28with_%29.md): Creates an object whose resolution requires that the user must confirm the value before proceeding.
- [successWithResolvedValue:](https://developer.apple.com/documentation/intents/inmessageattributeoptionsresolutionresult/successwithresolvedvalue:): Deprecated.
- [confirmationRequiredWithValueToConfirm:](https://developer.apple.com/documentation/intents/inmessageattributeoptionsresolutionresult/confirmationrequiredwithvaluetoconfirm:): Deprecated.

## Relationships

### Inherits From

- [INIntentResolutionResult](inintentresolutionresult.md)

## See Also

### Providing Resolution Results

- [INMessageAttributeResolutionResult](inmessageattributeresolutionresult.md): A resolution result for assorted attributes of a message.
- [INDateComponentsRangeResolutionResult](indatecomponentsrangeresolutionresult.md): A resolution result for a range of dates in a parameter of an intent.
- [INSendMessageRecipientResolutionResult](insendmessagerecipientresolutionresult.md): A resolution result for the recipient of a message.
- [INPersonResolutionResult](inpersonresolutionresult.md): A resolution result for a user as a parameter of an intent.
- [INOutgoingMessageTypeResolutionResult](inoutgoingmessagetyperesolutionresult.md): A resolution result for the message’s format.
