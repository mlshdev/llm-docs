> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/invisualcodedomainhandling](https://developer.apple.com/documentation/intents/invisualcodedomainhandling)

# INVisualCodeDomainHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 6.0)

An interface for adopting all of the protocols in the visual codes domain.

> Please conform to INGetVisualCodeIntentHandling instead

## Declaration

```swift
protocol INVisualCodeDomainHandling : INGetVisualCodeIntentHandling
```

<a id="overview"></a>

## Overview

The [INVisualCodeDomainHandling](invisualcodedomainhandling.md) protocol is a convenience protocol that adopts all of the protocols used to handle QR codes and other visual codes. You can adopt this protocol instead of adopting the [INGetVisualCodeIntentHandling](ingetvisualcodeintenthandling.md) protocol.

An object that adopts this protocol must be able to respond to the following intent:

- An [INGetVisualCodeIntent](ingetvisualcodeintent.md) object is a request for your app to provide a visual code.

Your handler object must be prepared to resolve any parameters associated with this intent and to confirm and handle the requests. When confirming and handling a request, you provide the response object that matches the specified intent.

## Relationships

### Inherits From

- [INGetVisualCodeIntentHandling](ingetvisualcodeintenthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Domain-Handling Protocols

- [INMessagesDomainHandling](inmessagesdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the messages domain.
- [INNotebookDomainHandling](innotebookdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the lists and notes domain.
- [INWorkoutsDomainHandling](inworkoutsdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the workouts domain.
- [INPaymentsDomainHandling](inpaymentsdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the payments domain.
- [INCallsDomainHandling](incallsdomainhandling.md): Deprecated. Provides a convenient way to adopt all of the protocols in the VoIP calling domain.
- [INPhotosDomainHandling](inphotosdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the photos domain.
- [INRidesharingDomainHandling](inridesharingdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the ride-booking domain.
- [INCarCommandsDomainHandling](incarcommandsdomainhandling.md): Deprecated. An interface for adopting all the handling protocols in the car commands domain.
- [INCarPlayDomainHandling](incarplaydomainhandling.md): Deprecated. An interface for adopting all of the protocols in the CarPlay domain.
- [INRadioDomainHandling](inradiodomainhandling.md): Deprecated. An interface for adopting all of the protocols in the radio domain.

# INVisualCodeDomainHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 6.0)

An interface for adopting all of the protocols in the visual codes domain.

> Please conform to INGetVisualCodeIntentHandling instead

## Declaration

```objectivec
@protocol INVisualCodeDomainHandling <INGetVisualCodeIntentHandling>
```

<a id="overview"></a>

## Overview

The [INVisualCodeDomainHandling](invisualcodedomainhandling.md) protocol is a convenience protocol that adopts all of the protocols used to handle QR codes and other visual codes. You can adopt this protocol instead of adopting the [INGetVisualCodeIntentHandling](ingetvisualcodeintenthandling.md) protocol.

An object that adopts this protocol must be able to respond to the following intent:

- An [INGetVisualCodeIntent](ingetvisualcodeintent.md) object is a request for your app to provide a visual code.

Your handler object must be prepared to resolve any parameters associated with this intent and to confirm and handle the requests. When confirming and handling a request, you provide the response object that matches the specified intent.

## Relationships

### Inherits From

- [INGetVisualCodeIntentHandling](ingetvisualcodeintenthandling.md)

## See Also

### Domain-Handling Protocols

- [INMessagesDomainHandling](inmessagesdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the messages domain.
- [INNotebookDomainHandling](innotebookdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the lists and notes domain.
- [INWorkoutsDomainHandling](inworkoutsdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the workouts domain.
- [INPaymentsDomainHandling](inpaymentsdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the payments domain.
- [INCallsDomainHandling](incallsdomainhandling.md): Deprecated. Provides a convenient way to adopt all of the protocols in the VoIP calling domain.
- [INPhotosDomainHandling](inphotosdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the photos domain.
- [INRidesharingDomainHandling](inridesharingdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the ride-booking domain.
- [INCarCommandsDomainHandling](incarcommandsdomainhandling.md): Deprecated. An interface for adopting all the handling protocols in the car commands domain.
- [INCarPlayDomainHandling](incarplaydomainhandling.md): Deprecated. An interface for adopting all of the protocols in the CarPlay domain.
- [INRadioDomainHandling](inradiodomainhandling.md): Deprecated. An interface for adopting all of the protocols in the radio domain.
