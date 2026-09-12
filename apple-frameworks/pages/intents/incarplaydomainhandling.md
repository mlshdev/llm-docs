> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incarplaydomainhandling](https://developer.apple.com/documentation/intents/incarplaydomainhandling)

# INCarPlayDomainHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

An interface for adopting all of the protocols in the CarPlay domain.

> Please conform to INSetAudioSourceInCarIntentHandling, INSetClimateSettingsInCarIntentHandling, INSetDefrosterSettingsInCarIntentHandling, INSetSeatSettingsInCarIntentHandling, INSetProfileInCarIntentHandling and INSaveProfileInCarIntentHandling instead

## Declaration

```swift
protocol INCarPlayDomainHandling : INSaveProfileInCarIntentHandling, INSetAudioSourceInCarIntentHandling, INSetClimateSettingsInCarIntentHandling, INSetDefrosterSettingsInCarIntentHandling, INSetProfileInCarIntentHandling, INSetSeatSettingsInCarIntentHandling
```

<a id="overview"></a>

## Overview

The [INCarPlayDomainHandling](incarplaydomainhandling.md) protocol is a convenience protocol that adopts all of the protocols used to handle CarPlay-related intents. When your app adopts all of the protocols associated with CarPlay, you can adopt this one protocol instead of adopting the [INSetAudioSourceInCarIntentHandling](insetaudiosourceincarintenthandling.md), [INSetClimateSettingsInCarIntentHandling](insetclimatesettingsincarintenthandling.md), [INSetDefrosterSettingsInCarIntentHandling](insetdefrostersettingsincarintenthandling.md), [INSetSeatSettingsInCarIntentHandling](insetseatsettingsincarintenthandling.md), [INSetProfileInCarIntentHandling](insetprofileincarintenthandling.md), and [INSaveProfileInCarIntentHandling](insaveprofileincarintenthandling.md) protocols separately.

An object that adopts this protocol must be able to respond to the following intents:

- [INSetAudioSourceInCarIntent](insetaudiosourceincarintent.md), a request to change the audio source.
- [INSetClimateSettingsInCarIntent](insetclimatesettingsincarintent.md), a request to change the climate control settings.
- [INSetDefrosterSettingsInCarIntent](insetdefrostersettingsincarintent.md), a request to change the defroster settings.
- [INSetSeatSettingsInCarIntent](insetseatsettingsincarintent.md), a request to change the seat temperature settings.
- [INSetProfileInCarIntent](insetprofileincarintent.md), a request to configure the car with the specified profile information.
- [INSaveProfileInCarIntent](insaveprofileincarintent.md), a request to save the current settings to a designated profile.

Your handler object must be prepared to resolve any parameters associated with these intents and to confirm and handle the requests. When confirming and handling a request, you provide the response object that matches the specified intent.

## Relationships

### Inherits From

- [INSaveProfileInCarIntentHandling](insaveprofileincarintenthandling.md)
- [INSetAudioSourceInCarIntentHandling](insetaudiosourceincarintenthandling.md)
- [INSetClimateSettingsInCarIntentHandling](insetclimatesettingsincarintenthandling.md)
- [INSetDefrosterSettingsInCarIntentHandling](insetdefrostersettingsincarintenthandling.md)
- [INSetProfileInCarIntentHandling](insetprofileincarintenthandling.md)
- [INSetSeatSettingsInCarIntentHandling](insetseatsettingsincarintenthandling.md)
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
- [INRadioDomainHandling](inradiodomainhandling.md): Deprecated. An interface for adopting all of the protocols in the radio domain.

# INCarPlayDomainHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

An interface for adopting all of the protocols in the CarPlay domain.

> Please conform to INSetAudioSourceInCarIntentHandling, INSetClimateSettingsInCarIntentHandling, INSetDefrosterSettingsInCarIntentHandling, INSetSeatSettingsInCarIntentHandling, INSetProfileInCarIntentHandling and INSaveProfileInCarIntentHandling instead

## Declaration

```objectivec
@protocol INCarPlayDomainHandling <INSetAudioSourceInCarIntentHandling, INSetClimateSettingsInCarIntentHandling, INSetDefrosterSettingsInCarIntentHandling, INSetSeatSettingsInCarIntentHandling, INSetProfileInCarIntentHandling, INSaveProfileInCarIntentHandling>
```

<a id="overview"></a>

## Overview

The [INCarPlayDomainHandling](incarplaydomainhandling.md) protocol is a convenience protocol that adopts all of the protocols used to handle CarPlay-related intents. When your app adopts all of the protocols associated with CarPlay, you can adopt this one protocol instead of adopting the [INSetAudioSourceInCarIntentHandling](insetaudiosourceincarintenthandling.md), [INSetClimateSettingsInCarIntentHandling](insetclimatesettingsincarintenthandling.md), [INSetDefrosterSettingsInCarIntentHandling](insetdefrostersettingsincarintenthandling.md), [INSetSeatSettingsInCarIntentHandling](insetseatsettingsincarintenthandling.md), [INSetProfileInCarIntentHandling](insetprofileincarintenthandling.md), and [INSaveProfileInCarIntentHandling](insaveprofileincarintenthandling.md) protocols separately.

An object that adopts this protocol must be able to respond to the following intents:

- [INSetAudioSourceInCarIntent](insetaudiosourceincarintent.md), a request to change the audio source.
- [INSetClimateSettingsInCarIntent](insetclimatesettingsincarintent.md), a request to change the climate control settings.
- [INSetDefrosterSettingsInCarIntent](insetdefrostersettingsincarintent.md), a request to change the defroster settings.
- [INSetSeatSettingsInCarIntent](insetseatsettingsincarintent.md), a request to change the seat temperature settings.
- [INSetProfileInCarIntent](insetprofileincarintent.md), a request to configure the car with the specified profile information.
- [INSaveProfileInCarIntent](insaveprofileincarintent.md), a request to save the current settings to a designated profile.

Your handler object must be prepared to resolve any parameters associated with these intents and to confirm and handle the requests. When confirming and handling a request, you provide the response object that matches the specified intent.

## Relationships

### Inherits From

- [INSaveProfileInCarIntentHandling](insaveprofileincarintenthandling.md)
- [INSetAudioSourceInCarIntentHandling](insetaudiosourceincarintenthandling.md)
- [INSetClimateSettingsInCarIntentHandling](insetclimatesettingsincarintenthandling.md)
- [INSetDefrosterSettingsInCarIntentHandling](insetdefrostersettingsincarintenthandling.md)
- [INSetProfileInCarIntentHandling](insetprofileincarintenthandling.md)
- [INSetSeatSettingsInCarIntentHandling](insetseatsettingsincarintenthandling.md)

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
- [INRadioDomainHandling](inradiodomainhandling.md): Deprecated. An interface for adopting all of the protocols in the radio domain.
