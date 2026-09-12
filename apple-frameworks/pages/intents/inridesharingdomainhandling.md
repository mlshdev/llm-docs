> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridesharingdomainhandling](https://developer.apple.com/documentation/intents/inridesharingdomainhandling)

# INRidesharingDomainHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 6.0)

An interface for adopting all of the protocols in the ride-booking domain.

> Please conform to INListRideOptionsIntentHandling, INRequestRideIntentHandling, INGetRideStatusIntentHandling, INCancelRideIntentHandling and INSendRideFeedbackIntentHandling instead

## Declaration

```swift
protocol INRidesharingDomainHandling : INCancelRideIntentHandling, INGetRideStatusIntentHandling, INListRideOptionsIntentHandling, INRequestRideIntentHandling, INSendRideFeedbackIntentHandling
```

```swift
protocol INRidesharingDomainHandling : INGetRideStatusIntentHandling, INListRideOptionsIntentHandling, INRequestRideIntentHandling
```

<a id="overview"></a>

## Overview

The [INRidesharingDomainHandling](inridesharingdomainhandling.md) protocol is a convenience protocol that adopts all of the protocols used to handle ride sharing-related intents. When your app adopts all of the protocols associated with ride sharing, you can adopt this one protocol instead of adopting the [INListRideOptionsIntentHandling](inlistrideoptionsintenthandling.md), [INRequestRideIntentHandling](inrequestrideintenthandling.md), [INGetRideStatusIntentHandling](ingetridestatusintenthandling.md), [INCancelRideIntentHandling](incancelrideintenthandling.md), and [INSendRideFeedbackIntentHandling](insendridefeedbackintenthandling.md) protocols separately.

An object that adopts this protocol must be able to respond to the following intents:

- [INListRideOptionsIntent](inlistrideoptionsintent.md), a request to view the available vehicles and prices.
- [INRequestRideIntent](inrequestrideintent.md), a request to book a ride.
- [INGetRideStatusIntent](ingetridestatusintent.md), a request to get the status of a previously booked ride.
- [INCancelRideIntent](incancelrideintent.md), a request to cancel the currently active ride.
- [INSendRideFeedbackIntent](insendridefeedbackintent.md), a request to record feedback for the just-completed ride.

Your handler object must be prepared to resolve any parameters associated with these intents and to confirm and handle the requests. When confirming and handling a request, you provide the response object that matches the specified intent.

## Relationships

### Inherits From

- [INCancelRideIntentHandling](incancelrideintenthandling.md)
- [INGetRideStatusIntentHandling](ingetridestatusintenthandling.md)
- [INListRideOptionsIntentHandling](inlistrideoptionsintenthandling.md)
- [INRequestRideIntentHandling](inrequestrideintenthandling.md)
- [INSendRideFeedbackIntentHandling](insendridefeedbackintenthandling.md)
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
- [INCarCommandsDomainHandling](incarcommandsdomainhandling.md): Deprecated. An interface for adopting all the handling protocols in the car commands domain.
- [INCarPlayDomainHandling](incarplaydomainhandling.md): Deprecated. An interface for adopting all of the protocols in the CarPlay domain.
- [INRadioDomainHandling](inradiodomainhandling.md): Deprecated. An interface for adopting all of the protocols in the radio domain.

# INRidesharingDomainHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 6.0)

An interface for adopting all of the protocols in the ride-booking domain.

> Please conform to INListRideOptionsIntentHandling, INRequestRideIntentHandling, INGetRideStatusIntentHandling, INCancelRideIntentHandling and INSendRideFeedbackIntentHandling instead

## Declaration

```objectivec
@protocol INRidesharingDomainHandling <INListRideOptionsIntentHandling, INRequestRideIntentHandling, INGetRideStatusIntentHandling, INCancelRideIntentHandling, INSendRideFeedbackIntentHandling>
```

```objectivec
@protocol INRidesharingDomainHandling <INListRideOptionsIntentHandling, INRequestRideIntentHandling, INGetRideStatusIntentHandling>
```

<a id="overview"></a>

## Overview

The [INRidesharingDomainHandling](inridesharingdomainhandling.md) protocol is a convenience protocol that adopts all of the protocols used to handle ride sharing-related intents. When your app adopts all of the protocols associated with ride sharing, you can adopt this one protocol instead of adopting the [INListRideOptionsIntentHandling](inlistrideoptionsintenthandling.md), [INRequestRideIntentHandling](inrequestrideintenthandling.md), [INGetRideStatusIntentHandling](ingetridestatusintenthandling.md), [INCancelRideIntentHandling](incancelrideintenthandling.md), and [INSendRideFeedbackIntentHandling](insendridefeedbackintenthandling.md) protocols separately.

An object that adopts this protocol must be able to respond to the following intents:

- [INListRideOptionsIntent](inlistrideoptionsintent.md), a request to view the available vehicles and prices.
- [INRequestRideIntent](inrequestrideintent.md), a request to book a ride.
- [INGetRideStatusIntent](ingetridestatusintent.md), a request to get the status of a previously booked ride.
- [INCancelRideIntent](incancelrideintent.md), a request to cancel the currently active ride.
- [INSendRideFeedbackIntent](insendridefeedbackintent.md), a request to record feedback for the just-completed ride.

Your handler object must be prepared to resolve any parameters associated with these intents and to confirm and handle the requests. When confirming and handling a request, you provide the response object that matches the specified intent.

## Relationships

### Inherits From

- [INCancelRideIntentHandling](incancelrideintenthandling.md)
- [INGetRideStatusIntentHandling](ingetridestatusintenthandling.md)
- [INListRideOptionsIntentHandling](inlistrideoptionsintenthandling.md)
- [INRequestRideIntentHandling](inrequestrideintenthandling.md)
- [INSendRideFeedbackIntentHandling](insendridefeedbackintenthandling.md)

## See Also

### Domain-Handling Protocols

- [INMessagesDomainHandling](inmessagesdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the messages domain.
- [INNotebookDomainHandling](innotebookdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the lists and notes domain.
- [INWorkoutsDomainHandling](inworkoutsdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the workouts domain.
- [INPaymentsDomainHandling](inpaymentsdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the payments domain.
- [INCallsDomainHandling](incallsdomainhandling.md): Deprecated. Provides a convenient way to adopt all of the protocols in the VoIP calling domain.
- [INVisualCodeDomainHandling](invisualcodedomainhandling.md): Deprecated. An interface for adopting all of the protocols in the visual codes domain.
- [INPhotosDomainHandling](inphotosdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the photos domain.
- [INCarCommandsDomainHandling](incarcommandsdomainhandling.md): Deprecated. An interface for adopting all the handling protocols in the car commands domain.
- [INCarPlayDomainHandling](incarplaydomainhandling.md): Deprecated. An interface for adopting all of the protocols in the CarPlay domain.
- [INRadioDomainHandling](inradiodomainhandling.md): Deprecated. An interface for adopting all of the protocols in the radio domain.
