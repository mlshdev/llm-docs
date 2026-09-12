> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetprofileincarintenthandling](https://developer.apple.com/documentation/intents/insetprofileincarintenthandling)

# INSetProfileInCarIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The handler interface for restoring vehicle environment settings from a user-specified profile.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
protocol INSetProfileInCarIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Automotive venders can support the [INSetProfileInCarIntentHandling](insetprofileincarintenthandling.md) protocol in an Intents extension that they ship with their automotive apps. Use the methods of this protocol to resolve, confirm, and handle requests to restore vehicle-related settings from the profile that the user designated. Your extension should be able to communicate with the vehicle and make the necessary changes.

Siri delivers an [INSetProfileInCarIntent](insetprofileincarintent.md) object to your handler when the user asks to restore the current settings from a profile. The provided intent object contains information for determining which profile to use.

## Topics

### Resolving the Intent Parameters

- [resolveProfileNumber(for:with:)](insetprofileincarintenthandling/resolveprofilenumber%28for_with_%29.md): Deprecated. Resolves the profile index from which to restore any settings.
- [resolveProfileName(for:with:)](insetprofileincarintenthandling/resolveprofilename%28for_with_%29.md): Deprecated. Resolves the profile name from which to retrieve settings.
- [resolveCarName(for:with:)](insetprofileincarintenthandling/resolvecarname%28for_with_%29.md): Deprecated. Resolves the car name.
- [resolveDefaultProfile(forSetProfileInCar:with:)](insetprofileincarintenthandling/resolvedefaultprofile%28forsetprofileincar_with_%29.md): Deprecated. Resolves whether the profile can become the default profile.

### Confirming the Response

- [confirm(intent:completion:)](insetprofileincarintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms whether you can restore the settings from the designated profile.

### Handling the Intent

- [handle(intent:completion:)](insetprofileincarintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles restoring settings from the designated profile.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INCarPlayDomainHandling](incarplaydomainhandling.md)

## See Also

### CarPlay Profile Settings

- [INSetProfileInCarIntent](insetprofileincarintent.md): Deprecated. A request to change the user’s vehicle environment settings to the ones from the specified profile.
- [INSetProfileInCarIntentResponse](insetprofileincarintentresponse.md): Deprecated. Your app’s response to a set profile in car intent.

# INSetProfileInCarIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The handler interface for restoring vehicle environment settings from a user-specified profile.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@protocol INSetProfileInCarIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Automotive venders can support the [INSetProfileInCarIntentHandling](insetprofileincarintenthandling.md) protocol in an Intents extension that they ship with their automotive apps. Use the methods of this protocol to resolve, confirm, and handle requests to restore vehicle-related settings from the profile that the user designated. Your extension should be able to communicate with the vehicle and make the necessary changes.

Siri delivers an [INSetProfileInCarIntent](insetprofileincarintent.md) object to your handler when the user asks to restore the current settings from a profile. The provided intent object contains information for determining which profile to use.

## Topics

### Resolving the Intent Parameters

- [resolveProfileNumberForSetProfileInCar:withCompletion:](insetprofileincarintenthandling/resolveprofilenumber%28for_with_%29.md): Deprecated. Resolves the profile index from which to restore any settings.
- [resolveProfileNameForSetProfileInCar:withCompletion:](insetprofileincarintenthandling/resolveprofilename%28for_with_%29.md): Deprecated. Resolves the profile name from which to retrieve settings.
- [resolveCarNameForSetProfileInCar:withCompletion:](insetprofileincarintenthandling/resolvecarname%28for_with_%29.md): Deprecated. Resolves the car name.
- [resolveDefaultProfileForSetProfileInCar:withCompletion:](insetprofileincarintenthandling/resolvedefaultprofile%28forsetprofileincar_with_%29.md): Deprecated. Resolves whether the profile can become the default profile.

### Confirming the Response

- [confirmSetProfileInCar:completion:](insetprofileincarintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms whether you can restore the settings from the designated profile.

### Handling the Intent

- [handleSetProfileInCar:completion:](insetprofileincarintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles restoring settings from the designated profile.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INCarPlayDomainHandling](incarplaydomainhandling.md)

## See Also

### CarPlay Profile Settings

- [INSetProfileInCarIntent](insetprofileincarintent.md): Deprecated. A request to change the user’s vehicle environment settings to the ones from the specified profile.
- [INSetProfileInCarIntentResponse](insetprofileincarintentresponse.md): Deprecated. Your app’s response to a set profile in car intent.
