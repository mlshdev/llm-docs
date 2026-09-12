> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inradiodomainhandling](https://developer.apple.com/documentation/intents/inradiodomainhandling)

# INRadioDomainHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

An interface for adopting all of the protocols in the radio domain.

> Please conform to INSetRadioStationIntentHandling instead

## Declaration

```swift
protocol INRadioDomainHandling : INSetRadioStationIntentHandling
```

<a id="overview"></a>

## Overview

The [INRadioDomainHandling](inradiodomainhandling.md) protocol is a convenience protocol that adopts all of the protocols used to handle radio-related intents in a CarPlay environment. You can adopt this protocol instead of adopting the [INSetRadioStationIntentHandling](insetradiostationintenthandling.md) protocol.

An object that adopts this protocol must be able to respond to the following intent:

- [INSetRadioStationIntent](insetradiostationintent.md), a request to change the audio source.

Your handler object must be prepared to resolve any parameters associated with this intent and to confirm and handle the requests. When confirming and handling a request, you provide the response object that matches the specified intent.

## Relationships

### Inherits From

- [INSetRadioStationIntentHandling](insetradiostationintenthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Domain-Handling Protocols

- [INMessagesDomainHandling](inmessagesdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the messages domain.
- [INNotebookDomainHandling](innotebookdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the lists and notes domain.
- [INWorkoutsDomainHandling](inworkoutsdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the workouts domain.
- [INPaymentsDomainHandling](inpaymentsdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the payments domain.
- [INCallsDomainHandling](incallsdomainhandling.md): Deprecated. Provides a convenient way to adopt all of the protocols in the VoIP calling domain.
- [INVisualCodeDomainHandling](invisualcodedomainhandling.md): Deprecated. An interface for adopting all of the protocols in the visual codes domain.
- [INPhotosDomainHandling](inphotosdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the photos domain.
- [INRidesharingDomainHandling](inridesharingdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the ride-booking domain.
- [INCarCommandsDomainHandling](incarcommandsdomainhandling.md): Deprecated. An interface for adopting all the handling protocols in the car commands domain.
- [INCarPlayDomainHandling](incarplaydomainhandling.md): Deprecated. An interface for adopting all of the protocols in the CarPlay domain.

# INRadioDomainHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

An interface for adopting all of the protocols in the radio domain.

> Please conform to INSetRadioStationIntentHandling instead

## Declaration

```objectivec
@protocol INRadioDomainHandling <INSetRadioStationIntentHandling>
```

<a id="overview"></a>

## Overview

The [INRadioDomainHandling](inradiodomainhandling.md) protocol is a convenience protocol that adopts all of the protocols used to handle radio-related intents in a CarPlay environment. You can adopt this protocol instead of adopting the [INSetRadioStationIntentHandling](insetradiostationintenthandling.md) protocol.

An object that adopts this protocol must be able to respond to the following intent:

- [INSetRadioStationIntent](insetradiostationintent.md), a request to change the audio source.

Your handler object must be prepared to resolve any parameters associated with this intent and to confirm and handle the requests. When confirming and handling a request, you provide the response object that matches the specified intent.

## Relationships

### Inherits From

- [INSetRadioStationIntentHandling](insetradiostationintenthandling.md)

## See Also

### Domain-Handling Protocols

- [INMessagesDomainHandling](inmessagesdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the messages domain.
- [INNotebookDomainHandling](innotebookdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the lists and notes domain.
- [INWorkoutsDomainHandling](inworkoutsdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the workouts domain.
- [INPaymentsDomainHandling](inpaymentsdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the payments domain.
- [INCallsDomainHandling](incallsdomainhandling.md): Deprecated. Provides a convenient way to adopt all of the protocols in the VoIP calling domain.
- [INVisualCodeDomainHandling](invisualcodedomainhandling.md): Deprecated. An interface for adopting all of the protocols in the visual codes domain.
- [INPhotosDomainHandling](inphotosdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the photos domain.
- [INRidesharingDomainHandling](inridesharingdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the ride-booking domain.
- [INCarCommandsDomainHandling](incarcommandsdomainhandling.md): Deprecated. An interface for adopting all the handling protocols in the car commands domain.
- [INCarPlayDomainHandling](incarplaydomainhandling.md): Deprecated. An interface for adopting all of the protocols in the CarPlay domain.
