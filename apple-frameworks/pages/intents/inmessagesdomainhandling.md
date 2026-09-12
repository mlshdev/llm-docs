> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmessagesdomainhandling](https://developer.apple.com/documentation/intents/inmessagesdomainhandling)

# INMessagesDomainHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 6.0)

An interface for adopting all of the protocols in the messages domain.

> Please conform to INSendMessageIntentHandling, INSearchForMessagesIntentHandling and INSetMessageAttributeIntentHandling instead

## Declaration

```swift
protocol INMessagesDomainHandling : INSearchForMessagesIntentHandling, INSendMessageIntentHandling, INSetMessageAttributeIntentHandling
```

```swift
protocol INMessagesDomainHandling : INSearchForMessagesIntentHandling, INSendMessageIntentHandling
```

<a id="overview"></a>

## Overview

The [INMessagesDomainHandling](inmessagesdomainhandling.md) protocol is a convenience protocol that adopts all of the protocols used to handle message-related intents. When your app adopts all of the protocols associated with messages, you can adopt this one protocol instead of adopting the [INSendMessageIntentHandling](insendmessageintenthandling.md), [INSearchForMessagesIntentHandling](insearchformessagesintenthandling.md), and [INSetMessageAttributeIntent](insetmessageattributeintent.md) protocols separately.

An object that adopts this protocol must be able to respond to the following intents:

- [INSendMessageIntent](insendmessageintent.md), a request to compose and send a message to one or more recipients.
- [INSearchForMessagesIntent](insearchformessagesintent.md), a request to search for specific messages based on a set of query parameters.
- [INSetMessageAttributeIntent](insetmessageattributeintent.md), a request to modify a message, such as mark it as read.

You must prepare your handler object to resolve any parameters associated with these intents and to confirm and handle the requests. When confirming and handling a request, you provide the response object that matches the specified intent.

## Relationships

### Inherits From

- [INSearchForMessagesIntentHandling](insearchformessagesintenthandling.md)
- [INSendMessageIntentHandling](insendmessageintenthandling.md)
- [INSetMessageAttributeIntentHandling](insetmessageattributeintenthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Domain-Handling Protocols

- [INNotebookDomainHandling](innotebookdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the lists and notes domain.
- [INWorkoutsDomainHandling](inworkoutsdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the workouts domain.
- [INPaymentsDomainHandling](inpaymentsdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the payments domain.
- [INCallsDomainHandling](incallsdomainhandling.md): Deprecated. Provides a convenient way to adopt all of the protocols in the VoIP calling domain.
- [INVisualCodeDomainHandling](invisualcodedomainhandling.md): Deprecated. An interface for adopting all of the protocols in the visual codes domain.
- [INPhotosDomainHandling](inphotosdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the photos domain.
- [INRidesharingDomainHandling](inridesharingdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the ride-booking domain.
- [INCarCommandsDomainHandling](incarcommandsdomainhandling.md): Deprecated. An interface for adopting all the handling protocols in the car commands domain.
- [INCarPlayDomainHandling](incarplaydomainhandling.md): Deprecated. An interface for adopting all of the protocols in the CarPlay domain.
- [INRadioDomainHandling](inradiodomainhandling.md): Deprecated. An interface for adopting all of the protocols in the radio domain.

# INMessagesDomainHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 6.0)

An interface for adopting all of the protocols in the messages domain.

> Please conform to INSendMessageIntentHandling, INSearchForMessagesIntentHandling and INSetMessageAttributeIntentHandling instead

## Declaration

```objectivec
@protocol INMessagesDomainHandling <INSendMessageIntentHandling, INSearchForMessagesIntentHandling, INSetMessageAttributeIntentHandling>
```

```objectivec
@protocol INMessagesDomainHandling <INSendMessageIntentHandling, INSearchForMessagesIntentHandling>
```

<a id="overview"></a>

## Overview

The [INMessagesDomainHandling](inmessagesdomainhandling.md) protocol is a convenience protocol that adopts all of the protocols used to handle message-related intents. When your app adopts all of the protocols associated with messages, you can adopt this one protocol instead of adopting the [INSendMessageIntentHandling](insendmessageintenthandling.md), [INSearchForMessagesIntentHandling](insearchformessagesintenthandling.md), and [INSetMessageAttributeIntent](insetmessageattributeintent.md) protocols separately.

An object that adopts this protocol must be able to respond to the following intents:

- [INSendMessageIntent](insendmessageintent.md), a request to compose and send a message to one or more recipients.
- [INSearchForMessagesIntent](insearchformessagesintent.md), a request to search for specific messages based on a set of query parameters.
- [INSetMessageAttributeIntent](insetmessageattributeintent.md), a request to modify a message, such as mark it as read.

You must prepare your handler object to resolve any parameters associated with these intents and to confirm and handle the requests. When confirming and handling a request, you provide the response object that matches the specified intent.

## Relationships

### Inherits From

- [INSearchForMessagesIntentHandling](insearchformessagesintenthandling.md)
- [INSendMessageIntentHandling](insendmessageintenthandling.md)
- [INSetMessageAttributeIntentHandling](insetmessageattributeintenthandling.md)

## See Also

### Domain-Handling Protocols

- [INNotebookDomainHandling](innotebookdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the lists and notes domain.
- [INWorkoutsDomainHandling](inworkoutsdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the workouts domain.
- [INPaymentsDomainHandling](inpaymentsdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the payments domain.
- [INCallsDomainHandling](incallsdomainhandling.md): Deprecated. Provides a convenient way to adopt all of the protocols in the VoIP calling domain.
- [INVisualCodeDomainHandling](invisualcodedomainhandling.md): Deprecated. An interface for adopting all of the protocols in the visual codes domain.
- [INPhotosDomainHandling](inphotosdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the photos domain.
- [INRidesharingDomainHandling](inridesharingdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the ride-booking domain.
- [INCarCommandsDomainHandling](incarcommandsdomainhandling.md): Deprecated. An interface for adopting all the handling protocols in the car commands domain.
- [INCarPlayDomainHandling](incarplaydomainhandling.md): Deprecated. An interface for adopting all of the protocols in the CarPlay domain.
- [INRadioDomainHandling](inradiodomainhandling.md): Deprecated. An interface for adopting all of the protocols in the radio domain.
