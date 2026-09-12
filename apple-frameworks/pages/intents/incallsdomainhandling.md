> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incallsdomainhandling](https://developer.apple.com/documentation/intents/incallsdomainhandling)

# INCallsDomainHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 6.0)

Provides a convenient way to adopt all of the protocols in the VoIP calling domain.

> Please conform to INStartAudioCallIntentHandling, INStartVideoCallIntentHandling and INSearchCallHistoryIntentHandling instead

## Declaration

```swift
protocol INCallsDomainHandling : INSearchCallHistoryIntentHandling, INStartAudioCallIntentHandling, INStartVideoCallIntentHandling
```

```swift
protocol INCallsDomainHandling : INSearchCallHistoryIntentHandling, INStartAudioCallIntentHandling
```

<a id="overview"></a>

## Overview

The [INCallsDomainHandling](incallsdomainhandling.md) protocol is a convenience protocol that adopts all of the protocols used to handle call-related intents. When your app adopts all of the protocols associated with call handling, you can adopt this one protocol instead of adopting the [INStartAudioCallIntentHandling](instartaudiocallintenthandling.md), [INStartVideoCallIntentHandling](instartvideocallintenthandling.md), and [INSearchCallHistoryIntentHandling](insearchcallhistoryintenthandling.md) protocols separately.

An object that adopts this protocol must be able to respond to the following intents:

- [INSearchCallHistoryIntent](insearchcallhistoryintent.md), a request to search for an entry in the app’s call logs.
- [INStartAudioCallIntent](instartaudiocallintent.md), a request to start an audio-only call.
- [INStartVideoCallIntent](instartvideocallintent.md),  a request to start a video call.

Your handler object must be prepared to resolve any parameters associated with these intents and to confirm and handle the requests. When confirming and handling a request, you provide the response object that matches the specified intent.

## Relationships

### Inherits From

- [INSearchCallHistoryIntentHandling](insearchcallhistoryintenthandling.md)
- [INStartAudioCallIntentHandling](instartaudiocallintenthandling.md)
- [INStartVideoCallIntentHandling](instartvideocallintenthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Domain-Handling Protocols

- [INMessagesDomainHandling](inmessagesdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the messages domain.
- [INNotebookDomainHandling](innotebookdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the lists and notes domain.
- [INWorkoutsDomainHandling](inworkoutsdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the workouts domain.
- [INPaymentsDomainHandling](inpaymentsdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the payments domain.
- [INVisualCodeDomainHandling](invisualcodedomainhandling.md): Deprecated. An interface for adopting all of the protocols in the visual codes domain.
- [INPhotosDomainHandling](inphotosdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the photos domain.
- [INRidesharingDomainHandling](inridesharingdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the ride-booking domain.
- [INCarCommandsDomainHandling](incarcommandsdomainhandling.md): Deprecated. An interface for adopting all the handling protocols in the car commands domain.
- [INCarPlayDomainHandling](incarplaydomainhandling.md): Deprecated. An interface for adopting all of the protocols in the CarPlay domain.
- [INRadioDomainHandling](inradiodomainhandling.md): Deprecated. An interface for adopting all of the protocols in the radio domain.

# INCallsDomainHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 6.0)

Provides a convenient way to adopt all of the protocols in the VoIP calling domain.

> Please conform to INStartAudioCallIntentHandling, INStartVideoCallIntentHandling and INSearchCallHistoryIntentHandling instead

## Declaration

```objectivec
@protocol INCallsDomainHandling <INStartAudioCallIntentHandling, INStartVideoCallIntentHandling, INSearchCallHistoryIntentHandling>
```

```objectivec
@protocol INCallsDomainHandling <INStartAudioCallIntentHandling, INSearchCallHistoryIntentHandling>
```

<a id="overview"></a>

## Overview

The [INCallsDomainHandling](incallsdomainhandling.md) protocol is a convenience protocol that adopts all of the protocols used to handle call-related intents. When your app adopts all of the protocols associated with call handling, you can adopt this one protocol instead of adopting the [INStartAudioCallIntentHandling](instartaudiocallintenthandling.md), [INStartVideoCallIntentHandling](instartvideocallintenthandling.md), and [INSearchCallHistoryIntentHandling](insearchcallhistoryintenthandling.md) protocols separately.

An object that adopts this protocol must be able to respond to the following intents:

- [INSearchCallHistoryIntent](insearchcallhistoryintent.md), a request to search for an entry in the app’s call logs.
- [INStartAudioCallIntent](instartaudiocallintent.md), a request to start an audio-only call.
- [INStartVideoCallIntent](instartvideocallintent.md),  a request to start a video call.

Your handler object must be prepared to resolve any parameters associated with these intents and to confirm and handle the requests. When confirming and handling a request, you provide the response object that matches the specified intent.

## Relationships

### Inherits From

- [INSearchCallHistoryIntentHandling](insearchcallhistoryintenthandling.md)
- [INStartAudioCallIntentHandling](instartaudiocallintenthandling.md)
- [INStartVideoCallIntentHandling](instartvideocallintenthandling.md)

## See Also

### Domain-Handling Protocols

- [INMessagesDomainHandling](inmessagesdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the messages domain.
- [INNotebookDomainHandling](innotebookdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the lists and notes domain.
- [INWorkoutsDomainHandling](inworkoutsdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the workouts domain.
- [INPaymentsDomainHandling](inpaymentsdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the payments domain.
- [INVisualCodeDomainHandling](invisualcodedomainhandling.md): Deprecated. An interface for adopting all of the protocols in the visual codes domain.
- [INPhotosDomainHandling](inphotosdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the photos domain.
- [INRidesharingDomainHandling](inridesharingdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the ride-booking domain.
- [INCarCommandsDomainHandling](incarcommandsdomainhandling.md): Deprecated. An interface for adopting all the handling protocols in the car commands domain.
- [INCarPlayDomainHandling](incarplaydomainhandling.md): Deprecated. An interface for adopting all of the protocols in the CarPlay domain.
- [INRadioDomainHandling](inradiodomainhandling.md): Deprecated. An interface for adopting all of the protocols in the radio domain.
