> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetseatsettingsincarintenthandling](https://developer.apple.com/documentation/intents/insetseatsettingsincarintenthandling)

# INSetSeatSettingsInCarIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The handler interface for changing a vehicle’s seat-related settings.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
protocol INSetSeatSettingsInCarIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Automotive venders can support the [INSetSeatSettingsInCarIntentHandling](insetseatsettingsincarintenthandling.md) protocol in an Intents extension that they ship with their automotive apps. Use the methods of this protocol to resolve, confirm, and handle requests to change the vehicle’s seat-related settings. Your extension should be able to communicate with the vehicle and make the necessary changes.

Siri delivers an [INSetSeatSettingsInCarIntent](insetseatsettingsincarintent.md) object to your handler when the user asks to change any seat settings. The provided intent object contains information that you use to determine which settings changed and what the new settings should be.

## Topics

### Resolving the Intent Parameters

- [resolveEnableCooling(for:with:)](insetseatsettingsincarintenthandling/resolveenablecooling%28for_with_%29.md): Deprecated. Resolves whether you can enable the seat cooling system.
- [resolveEnableHeating(for:with:)](insetseatsettingsincarintenthandling/resolveenableheating%28for_with_%29.md): Deprecated. Resolves whether you can enable the seat heating system.
- [resolveEnableMassage(for:with:)](insetseatsettingsincarintenthandling/resolveenablemassage%28for_with_%29.md): Deprecated. Resolves whether you can enable the seat massage system.
- [resolveSeat(for:with:)](insetseatsettingsincarintenthandling/resolveseat%28for_with_%29.md): Deprecated. Resolves the requested seat position.
- [resolveLevel(for:with:)](insetseatsettingsincarintenthandling/resolvelevel%28for_with_%29.md): Deprecated. Resolves the intensity level of the requested system.
- [resolveRelativeLevelSetting(for:with:)](insetseatsettingsincarintenthandling/resolverelativelevelsetting%28for_with_%29.md): Deprecated. Resolves the requested relative qualifier for the intensity level.
- [resolveCarName(for:with:)](insetseatsettingsincarintenthandling/resolvecarname%28for_with_%29.md): Deprecated. Resolves the car name.

### Confirming the Response

- [confirm(intent:completion:)](insetseatsettingsincarintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms whether you can change the seat settings.

### Handling the Intent

- [handle(intent:completion:)](insetseatsettingsincarintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles changing the seat settings.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INCarPlayDomainHandling](incarplaydomainhandling.md)

## See Also

### CarPlay Seat Settings

- [INSetSeatSettingsInCarIntent](insetseatsettingsincarintent.md): Deprecated. A request to change the seat-related settings in a CarPlay-enabled vehicle.
- [INSetSeatSettingsInCarIntentResponse](insetseatsettingsincarintentresponse.md): Deprecated. Your app’s response to a set seat settings in car intent.

# INSetSeatSettingsInCarIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The handler interface for changing a vehicle’s seat-related settings.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@protocol INSetSeatSettingsInCarIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Automotive venders can support the [INSetSeatSettingsInCarIntentHandling](insetseatsettingsincarintenthandling.md) protocol in an Intents extension that they ship with their automotive apps. Use the methods of this protocol to resolve, confirm, and handle requests to change the vehicle’s seat-related settings. Your extension should be able to communicate with the vehicle and make the necessary changes.

Siri delivers an [INSetSeatSettingsInCarIntent](insetseatsettingsincarintent.md) object to your handler when the user asks to change any seat settings. The provided intent object contains information that you use to determine which settings changed and what the new settings should be.

## Topics

### Resolving the Intent Parameters

- [resolveEnableCoolingForSetSeatSettingsInCar:withCompletion:](insetseatsettingsincarintenthandling/resolveenablecooling%28for_with_%29.md): Deprecated. Resolves whether you can enable the seat cooling system.
- [resolveEnableHeatingForSetSeatSettingsInCar:withCompletion:](insetseatsettingsincarintenthandling/resolveenableheating%28for_with_%29.md): Deprecated. Resolves whether you can enable the seat heating system.
- [resolveEnableMassageForSetSeatSettingsInCar:withCompletion:](insetseatsettingsincarintenthandling/resolveenablemassage%28for_with_%29.md): Deprecated. Resolves whether you can enable the seat massage system.
- [resolveSeatForSetSeatSettingsInCar:withCompletion:](insetseatsettingsincarintenthandling/resolveseat%28for_with_%29.md): Deprecated. Resolves the requested seat position.
- [resolveLevelForSetSeatSettingsInCar:withCompletion:](insetseatsettingsincarintenthandling/resolvelevel%28for_with_%29.md): Deprecated. Resolves the intensity level of the requested system.
- [resolveRelativeLevelSettingForSetSeatSettingsInCar:withCompletion:](insetseatsettingsincarintenthandling/resolverelativelevelsetting%28for_with_%29.md): Deprecated. Resolves the requested relative qualifier for the intensity level.
- [resolveCarNameForSetSeatSettingsInCar:withCompletion:](insetseatsettingsincarintenthandling/resolvecarname%28for_with_%29.md): Deprecated. Resolves the car name.

### Confirming the Response

- [confirmSetSeatSettingsInCar:completion:](insetseatsettingsincarintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms whether you can change the seat settings.

### Handling the Intent

- [handleSetSeatSettingsInCar:completion:](insetseatsettingsincarintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles changing the seat settings.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INCarPlayDomainHandling](incarplaydomainhandling.md)

## See Also

### CarPlay Seat Settings

- [INSetSeatSettingsInCarIntent](insetseatsettingsincarintent.md): Deprecated. A request to change the seat-related settings in a CarPlay-enabled vehicle.
- [INSetSeatSettingsInCarIntentResponse](insetseatsettingsincarintentresponse.md): Deprecated. Your app’s response to a set seat settings in car intent.
