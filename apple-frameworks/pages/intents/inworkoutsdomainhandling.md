> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inworkoutsdomainhandling](https://developer.apple.com/documentation/intents/inworkoutsdomainhandling)

# INWorkoutsDomainHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 6.0)

An interface for adopting all of the protocols in the workouts domain.

> Please conform to INStartWorkoutIntentHandling, INPauseWorkoutIntentHandling, INEndWorkoutIntentHandling, INCancelWorkoutIntentHandling and INResumeWorkoutIntentHandling instead

## Declaration

```swift
protocol INWorkoutsDomainHandling : INCancelWorkoutIntentHandling, INEndWorkoutIntentHandling, INPauseWorkoutIntentHandling, INResumeWorkoutIntentHandling, INStartWorkoutIntentHandling
```

<a id="overview"></a>

## Overview

The [INWorkoutsDomainHandling](inworkoutsdomainhandling.md) protocol is a convenience protocol that adopts all of the protocols used to handle workout-related intents. When your app adopts all of the protocols associated with workouts, you can adopt this one protocol instead of adopting the [INStartWorkoutIntentHandling](instartworkoutintenthandling.md), [INPauseWorkoutIntentHandling](inpauseworkoutintenthandling.md), [INResumeWorkoutIntentHandling](inresumeworkoutintenthandling.md), [INCancelWorkoutIntentHandling](incancelworkoutintenthandling.md), and [INEndWorkoutIntentHandling](inendworkoutintenthandling.md) protocols separately.

An object that adopts this protocol must be able to respond to the following intents:

- [INStartWorkoutIntent](instartworkoutintent.md), a request to start a new workout.
- [INPauseWorkoutIntent](inpauseworkoutintent.md), a request to pause the current workout.
- [INResumeWorkoutIntent](inresumeworkoutintent.md), a request to resume a paused workout.
- [INEndWorkoutIntent](inendworkoutintent.md), a request to end the active workout and save the results.
- [INCancelWorkoutIntent](incancelworkoutintent.md), a request to cancel the active workout without saving the results.

Your handler object must be prepared to resolve any parameters associated with these intents and to confirm and handle the requests. When confirming and handling a request, you provide the response object that matches the specified intent.

## Relationships

### Inherits From

- [INCancelWorkoutIntentHandling](incancelworkoutintenthandling.md)
- [INEndWorkoutIntentHandling](inendworkoutintenthandling.md)
- [INPauseWorkoutIntentHandling](inpauseworkoutintenthandling.md)
- [INResumeWorkoutIntentHandling](inresumeworkoutintenthandling.md)
- [INStartWorkoutIntentHandling](instartworkoutintenthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Domain-Handling Protocols

- [INMessagesDomainHandling](inmessagesdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the messages domain.
- [INNotebookDomainHandling](innotebookdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the lists and notes domain.
- [INPaymentsDomainHandling](inpaymentsdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the payments domain.
- [INCallsDomainHandling](incallsdomainhandling.md): Deprecated. Provides a convenient way to adopt all of the protocols in the VoIP calling domain.
- [INVisualCodeDomainHandling](invisualcodedomainhandling.md): Deprecated. An interface for adopting all of the protocols in the visual codes domain.
- [INPhotosDomainHandling](inphotosdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the photos domain.
- [INRidesharingDomainHandling](inridesharingdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the ride-booking domain.
- [INCarCommandsDomainHandling](incarcommandsdomainhandling.md): Deprecated. An interface for adopting all the handling protocols in the car commands domain.
- [INCarPlayDomainHandling](incarplaydomainhandling.md): Deprecated. An interface for adopting all of the protocols in the CarPlay domain.
- [INRadioDomainHandling](inradiodomainhandling.md): Deprecated. An interface for adopting all of the protocols in the radio domain.

# INWorkoutsDomainHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 6.0)

An interface for adopting all of the protocols in the workouts domain.

> Please conform to INStartWorkoutIntentHandling, INPauseWorkoutIntentHandling, INEndWorkoutIntentHandling, INCancelWorkoutIntentHandling and INResumeWorkoutIntentHandling instead

## Declaration

```objectivec
@protocol INWorkoutsDomainHandling <INStartWorkoutIntentHandling, INPauseWorkoutIntentHandling, INEndWorkoutIntentHandling, INCancelWorkoutIntentHandling, INResumeWorkoutIntentHandling>
```

<a id="overview"></a>

## Overview

The [INWorkoutsDomainHandling](inworkoutsdomainhandling.md) protocol is a convenience protocol that adopts all of the protocols used to handle workout-related intents. When your app adopts all of the protocols associated with workouts, you can adopt this one protocol instead of adopting the [INStartWorkoutIntentHandling](instartworkoutintenthandling.md), [INPauseWorkoutIntentHandling](inpauseworkoutintenthandling.md), [INResumeWorkoutIntentHandling](inresumeworkoutintenthandling.md), [INCancelWorkoutIntentHandling](incancelworkoutintenthandling.md), and [INEndWorkoutIntentHandling](inendworkoutintenthandling.md) protocols separately.

An object that adopts this protocol must be able to respond to the following intents:

- [INStartWorkoutIntent](instartworkoutintent.md), a request to start a new workout.
- [INPauseWorkoutIntent](inpauseworkoutintent.md), a request to pause the current workout.
- [INResumeWorkoutIntent](inresumeworkoutintent.md), a request to resume a paused workout.
- [INEndWorkoutIntent](inendworkoutintent.md), a request to end the active workout and save the results.
- [INCancelWorkoutIntent](incancelworkoutintent.md), a request to cancel the active workout without saving the results.

Your handler object must be prepared to resolve any parameters associated with these intents and to confirm and handle the requests. When confirming and handling a request, you provide the response object that matches the specified intent.

## Relationships

### Inherits From

- [INCancelWorkoutIntentHandling](incancelworkoutintenthandling.md)
- [INEndWorkoutIntentHandling](inendworkoutintenthandling.md)
- [INPauseWorkoutIntentHandling](inpauseworkoutintenthandling.md)
- [INResumeWorkoutIntentHandling](inresumeworkoutintenthandling.md)
- [INStartWorkoutIntentHandling](instartworkoutintenthandling.md)

## See Also

### Domain-Handling Protocols

- [INMessagesDomainHandling](inmessagesdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the messages domain.
- [INNotebookDomainHandling](innotebookdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the lists and notes domain.
- [INPaymentsDomainHandling](inpaymentsdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the payments domain.
- [INCallsDomainHandling](incallsdomainhandling.md): Deprecated. Provides a convenient way to adopt all of the protocols in the VoIP calling domain.
- [INVisualCodeDomainHandling](invisualcodedomainhandling.md): Deprecated. An interface for adopting all of the protocols in the visual codes domain.
- [INPhotosDomainHandling](inphotosdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the photos domain.
- [INRidesharingDomainHandling](inridesharingdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the ride-booking domain.
- [INCarCommandsDomainHandling](incarcommandsdomainhandling.md): Deprecated. An interface for adopting all the handling protocols in the car commands domain.
- [INCarPlayDomainHandling](incarplaydomainhandling.md): Deprecated. An interface for adopting all of the protocols in the CarPlay domain.
- [INRadioDomainHandling](inradiodomainhandling.md): Deprecated. An interface for adopting all of the protocols in the radio domain.
