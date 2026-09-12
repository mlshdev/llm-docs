> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incarcommandsdomainhandling](https://developer.apple.com/documentation/intents/incarcommandsdomainhandling)

# INCarCommandsDomainHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.3+ (deprecated in 13.0) · iPadOS 10.3+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 6.0)

An interface for adopting all the handling protocols in the car commands domain.

> Please conform to INActivateCarSignalIntentHandling, INSetCarLockStatusIntentHandling, INGetCarLockStatusIntentHandling and INGetCarPowerLevelStatusIntentHandling instead

## Declaration

```swift
protocol INCarCommandsDomainHandling : INActivateCarSignalIntentHandling, INGetCarLockStatusIntentHandling, INGetCarPowerLevelStatusIntentHandling, INSetCarLockStatusIntentHandling
```

<a id="overview"></a>

## Overview

The `INCarCommandsDomainHandling` protocol adopts all of the protocols used to handle car command intents. You can adopt this one protocol instead of adopting the [INActivateCarSignalIntentHandling](inactivatecarsignalintenthandling.md), [INGetCarPowerLevelStatusIntentHandling](ingetcarpowerlevelstatusintenthandling.md), [INGetCarLockStatusIntentHandling](ingetcarlockstatusintenthandling.md), and [INSetCarLockStatusIntentHandling](insetcarlockstatusintenthandling.md) protocols separately.

An object that adopts this protocol must respond to the following intents:

- [INActivateCarSignalIntent](inactivatecarsignalintent.md), a request to activate an audible or visual signal from the car.
- [INGetCarPowerLevelStatusIntent](ingetcarpowerlevelstatusintent.md), a request for the current charge percentage remaining (for electric cars), fuel percentage remaining (for fuel-driven cars), or distance remaining given the car’s current charge or fuel.
- [INGetCarLockStatusIntent](ingetcarlockstatusintent.md), a request for the current status of the car’s locks (locked or unlocked).
- [INSetCarLockStatusIntent](insetcarlockstatusintent.md), a request to lock or unlock the car.

Your handler object must be prepared to resolve any parameters associated with these intents and to confirm and handle the requests. When confirming and handling a request, you provide the response object that matches the specified intent.

## Relationships

### Inherits From

- [INActivateCarSignalIntentHandling](inactivatecarsignalintenthandling.md)
- [INGetCarLockStatusIntentHandling](ingetcarlockstatusintenthandling.md)
- [INGetCarPowerLevelStatusIntentHandling](ingetcarpowerlevelstatusintenthandling.md)
- [INSetCarLockStatusIntentHandling](insetcarlockstatusintenthandling.md)
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
- [INCarPlayDomainHandling](incarplaydomainhandling.md): Deprecated. An interface for adopting all of the protocols in the CarPlay domain.
- [INRadioDomainHandling](inradiodomainhandling.md): Deprecated. An interface for adopting all of the protocols in the radio domain.

# INCarCommandsDomainHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.3+ (deprecated in 13.0) · iPadOS 10.3+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 6.0)

An interface for adopting all the handling protocols in the car commands domain.

> Please conform to INActivateCarSignalIntentHandling, INSetCarLockStatusIntentHandling, INGetCarLockStatusIntentHandling and INGetCarPowerLevelStatusIntentHandling instead

## Declaration

```objectivec
@protocol INCarCommandsDomainHandling <INActivateCarSignalIntentHandling, INSetCarLockStatusIntentHandling, INGetCarLockStatusIntentHandling, INGetCarPowerLevelStatusIntentHandling>
```

<a id="overview"></a>

## Overview

The `INCarCommandsDomainHandling` protocol adopts all of the protocols used to handle car command intents. You can adopt this one protocol instead of adopting the [INActivateCarSignalIntentHandling](inactivatecarsignalintenthandling.md), [INGetCarPowerLevelStatusIntentHandling](ingetcarpowerlevelstatusintenthandling.md), [INGetCarLockStatusIntentHandling](ingetcarlockstatusintenthandling.md), and [INSetCarLockStatusIntentHandling](insetcarlockstatusintenthandling.md) protocols separately.

An object that adopts this protocol must respond to the following intents:

- [INActivateCarSignalIntent](inactivatecarsignalintent.md), a request to activate an audible or visual signal from the car.
- [INGetCarPowerLevelStatusIntent](ingetcarpowerlevelstatusintent.md), a request for the current charge percentage remaining (for electric cars), fuel percentage remaining (for fuel-driven cars), or distance remaining given the car’s current charge or fuel.
- [INGetCarLockStatusIntent](ingetcarlockstatusintent.md), a request for the current status of the car’s locks (locked or unlocked).
- [INSetCarLockStatusIntent](insetcarlockstatusintent.md), a request to lock or unlock the car.

Your handler object must be prepared to resolve any parameters associated with these intents and to confirm and handle the requests. When confirming and handling a request, you provide the response object that matches the specified intent.

## Relationships

### Inherits From

- [INActivateCarSignalIntentHandling](inactivatecarsignalintenthandling.md)
- [INGetCarLockStatusIntentHandling](ingetcarlockstatusintenthandling.md)
- [INGetCarPowerLevelStatusIntentHandling](ingetcarpowerlevelstatusintenthandling.md)
- [INSetCarLockStatusIntentHandling](insetcarlockstatusintenthandling.md)

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
- [INCarPlayDomainHandling](incarplaydomainhandling.md): Deprecated. An interface for adopting all of the protocols in the CarPlay domain.
- [INRadioDomainHandling](inradiodomainhandling.md): Deprecated. An interface for adopting all of the protocols in the radio domain.
