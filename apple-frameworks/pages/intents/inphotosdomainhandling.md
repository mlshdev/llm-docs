> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inphotosdomainhandling](https://developer.apple.com/documentation/intents/inphotosdomainhandling)

# INPhotosDomainHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 6.0)

An interface for adopting all of the protocols in the photos domain.

> Please conform to INSearchForPhotosIntentHandling and INStartPhotoPlaybackIntentHandling instead

## Declaration

```swift
protocol INPhotosDomainHandling : INSearchForPhotosIntentHandling, INStartPhotoPlaybackIntentHandling
```

<a id="overview"></a>

## Overview

The [INPhotosDomainHandling](inphotosdomainhandling.md) protocol is a convenience protocol that adopts all of the protocols used to handle photo-related intents. When your app adopts all of the protocols associated with photos, you can adopt this one protocol instead of adopting the [INSearchForPhotosIntentHandling](insearchforphotosintenthandling.md) and [INStartPhotoPlaybackIntentHandling](instartphotoplaybackintenthandling.md) protocols separately.

An object that adopts this protocol must be able to respond to the following intents:

- [INSearchForPhotosIntent](insearchforphotosintent.md), a request to search for a specific photo.
- [INStartPhotoPlaybackIntent](instartphotoplaybackintent.md), a request to begin a slideshow of the specified photos.

Your handler object must be prepared to resolve any parameters associated with these intents and to confirm and handle the requests. When confirming and handling a request, you provide the response object that matches the specified intent.

## Relationships

### Inherits From

- [INSearchForPhotosIntentHandling](insearchforphotosintenthandling.md)
- [INStartPhotoPlaybackIntentHandling](instartphotoplaybackintenthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Domain-Handling Protocols

- [INMessagesDomainHandling](inmessagesdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the messages domain.
- [INNotebookDomainHandling](innotebookdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the lists and notes domain.
- [INWorkoutsDomainHandling](inworkoutsdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the workouts domain.
- [INPaymentsDomainHandling](inpaymentsdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the payments domain.
- [INCallsDomainHandling](incallsdomainhandling.md): Deprecated. Provides a convenient way to adopt all of the protocols in the VoIP calling domain.
- [INVisualCodeDomainHandling](invisualcodedomainhandling.md): Deprecated. An interface for adopting all of the protocols in the visual codes domain.
- [INRidesharingDomainHandling](inridesharingdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the ride-booking domain.
- [INCarCommandsDomainHandling](incarcommandsdomainhandling.md): Deprecated. An interface for adopting all the handling protocols in the car commands domain.
- [INCarPlayDomainHandling](incarplaydomainhandling.md): Deprecated. An interface for adopting all of the protocols in the CarPlay domain.
- [INRadioDomainHandling](inradiodomainhandling.md): Deprecated. An interface for adopting all of the protocols in the radio domain.

# INPhotosDomainHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 6.0)

An interface for adopting all of the protocols in the photos domain.

> Please conform to INSearchForPhotosIntentHandling and INStartPhotoPlaybackIntentHandling instead

## Declaration

```objectivec
@protocol INPhotosDomainHandling <INSearchForPhotosIntentHandling, INStartPhotoPlaybackIntentHandling>
```

<a id="overview"></a>

## Overview

The [INPhotosDomainHandling](inphotosdomainhandling.md) protocol is a convenience protocol that adopts all of the protocols used to handle photo-related intents. When your app adopts all of the protocols associated with photos, you can adopt this one protocol instead of adopting the [INSearchForPhotosIntentHandling](insearchforphotosintenthandling.md) and [INStartPhotoPlaybackIntentHandling](instartphotoplaybackintenthandling.md) protocols separately.

An object that adopts this protocol must be able to respond to the following intents:

- [INSearchForPhotosIntent](insearchforphotosintent.md), a request to search for a specific photo.
- [INStartPhotoPlaybackIntent](instartphotoplaybackintent.md), a request to begin a slideshow of the specified photos.

Your handler object must be prepared to resolve any parameters associated with these intents and to confirm and handle the requests. When confirming and handling a request, you provide the response object that matches the specified intent.

## Relationships

### Inherits From

- [INSearchForPhotosIntentHandling](insearchforphotosintenthandling.md)
- [INStartPhotoPlaybackIntentHandling](instartphotoplaybackintenthandling.md)

## See Also

### Domain-Handling Protocols

- [INMessagesDomainHandling](inmessagesdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the messages domain.
- [INNotebookDomainHandling](innotebookdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the lists and notes domain.
- [INWorkoutsDomainHandling](inworkoutsdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the workouts domain.
- [INPaymentsDomainHandling](inpaymentsdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the payments domain.
- [INCallsDomainHandling](incallsdomainhandling.md): Deprecated. Provides a convenient way to adopt all of the protocols in the VoIP calling domain.
- [INVisualCodeDomainHandling](invisualcodedomainhandling.md): Deprecated. An interface for adopting all of the protocols in the visual codes domain.
- [INRidesharingDomainHandling](inridesharingdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the ride-booking domain.
- [INCarCommandsDomainHandling](incarcommandsdomainhandling.md): Deprecated. An interface for adopting all the handling protocols in the car commands domain.
- [INCarPlayDomainHandling](incarplaydomainhandling.md): Deprecated. An interface for adopting all of the protocols in the CarPlay domain.
- [INRadioDomainHandling](inradiodomainhandling.md): Deprecated. An interface for adopting all of the protocols in the radio domain.
