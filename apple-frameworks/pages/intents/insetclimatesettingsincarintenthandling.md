> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetclimatesettingsincarintenthandling](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintenthandling)

# INSetClimateSettingsInCarIntentHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The handler interface for changing a vehicle’s climate control settings.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
protocol INSetClimateSettingsInCarIntentHandling : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Automotive vendors can support the [INSetClimateSettingsInCarIntentHandling](insetclimatesettingsincarintenthandling.md) protocol in an Intents extension that they ship with their automotive apps. Use the methods of this protocol to resolve, confirm, and handle requests to change the vehicle’s current climate control settings. Your extension should be able to communicate with the vehicle and make the necessary changes.

Siri delivers an [INSetClimateSettingsInCarIntent](insetclimatesettingsincarintent.md) object to your handler when the user asks to change any climate settings. The provided intent object contains information that you use to determine which settings changed and what the new settings should be.

## Topics

### Resolving the Intent Parameters

- [resolveEnableFan(for:with:)](insetclimatesettingsincarintenthandling/resolveenablefan%28for_with_%29.md): Deprecated. Resolves whether you can enable the car’s fan.
- [resolveEnableAirConditioner(for:with:)](insetclimatesettingsincarintenthandling/resolveenableairconditioner%28for_with_%29.md): Deprecated. Resolves whether you can enable the air conditioner.
- [resolveEnableClimateControl(for:with:)](insetclimatesettingsincarintenthandling/resolveenableclimatecontrol%28for_with_%29.md): Deprecated. Resolves whether you can enable the climate control system.
- [resolveEnableAutoMode(for:with:)](insetclimatesettingsincarintenthandling/resolveenableautomode%28for_with_%29.md): Deprecated. Resolves whether you can enable automatic mode for the car’s climate control.
- [resolveAirCirculationMode(for:with:)](insetclimatesettingsincarintenthandling/resolveaircirculationmode%28for_with_%29.md): Deprecated. Resolves the requested air circulation mode.
- [resolveFanSpeedIndex(for:with:)](insetclimatesettingsincarintenthandling/resolvefanspeedindex%28for_with_%29.md): Deprecated. Resolves the requested fan speed index.
- [resolveFanSpeedPercentage(for:with:)](insetclimatesettingsincarintenthandling/resolvefanspeedpercentage%28for_with_%29.md): Deprecated. Resolves the requested fan speed percentage.
- [resolveRelativeFanSpeedSetting(for:with:)](insetclimatesettingsincarintenthandling/resolverelativefanspeedsetting%28for_with_%29.md): Deprecated. Resolves the requested relative qualifier for the fan speed.
- [resolveTemperature(for:with:)](insetclimatesettingsincarintenthandling/resolvetemperature%28for_with_%29.md): Deprecated. Resolves the requested temperature value.
- [resolveRelativeTemperatureSetting(for:with:)](insetclimatesettingsincarintenthandling/resolverelativetemperaturesetting%28for_with_%29.md): Deprecated. Resolves the requested relative qualifier for the temperature change.
- [resolveClimateZone(for:with:)](insetclimatesettingsincarintenthandling/resolveclimatezone%28for_with_%29.md): Deprecated. Resolves the requested climate zone.
- [resolveCarName(for:with:)](insetclimatesettingsincarintenthandling/resolvecarname%28for_with_%29.md): Deprecated. Resolves the car name.

### Confirming the Response

- [confirm(intent:completion:)](insetclimatesettingsincarintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms whether you can change the climate settings.

### Handling the Intent

- [handle(intent:completion:)](insetclimatesettingsincarintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles changing the climate control settings.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INCarPlayDomainHandling](incarplaydomainhandling.md)

## See Also

### CarPlay Climate Settings

- [INSetClimateSettingsInCarIntent](insetclimatesettingsincarintent.md): Deprecated. A request to change the climate settings in a CarPlay-enabled vehicle.
- [INSetClimateSettingsInCarIntentResponse](insetclimatesettingsincarintentresponse.md): Deprecated. Your app’s response to a set climate settings in car intent.

# INSetClimateSettingsInCarIntentHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

The handler interface for changing a vehicle’s climate control settings.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@protocol INSetClimateSettingsInCarIntentHandling <NSObject>
```

<a id="overview"></a>

## Overview

Automotive vendors can support the [INSetClimateSettingsInCarIntentHandling](insetclimatesettingsincarintenthandling.md) protocol in an Intents extension that they ship with their automotive apps. Use the methods of this protocol to resolve, confirm, and handle requests to change the vehicle’s current climate control settings. Your extension should be able to communicate with the vehicle and make the necessary changes.

Siri delivers an [INSetClimateSettingsInCarIntent](insetclimatesettingsincarintent.md) object to your handler when the user asks to change any climate settings. The provided intent object contains information that you use to determine which settings changed and what the new settings should be.

## Topics

### Resolving the Intent Parameters

- [resolveEnableFanForSetClimateSettingsInCar:withCompletion:](insetclimatesettingsincarintenthandling/resolveenablefan%28for_with_%29.md): Deprecated. Resolves whether you can enable the car’s fan.
- [resolveEnableAirConditionerForSetClimateSettingsInCar:withCompletion:](insetclimatesettingsincarintenthandling/resolveenableairconditioner%28for_with_%29.md): Deprecated. Resolves whether you can enable the air conditioner.
- [resolveEnableClimateControlForSetClimateSettingsInCar:withCompletion:](insetclimatesettingsincarintenthandling/resolveenableclimatecontrol%28for_with_%29.md): Deprecated. Resolves whether you can enable the climate control system.
- [resolveEnableAutoModeForSetClimateSettingsInCar:withCompletion:](insetclimatesettingsincarintenthandling/resolveenableautomode%28for_with_%29.md): Deprecated. Resolves whether you can enable automatic mode for the car’s climate control.
- [resolveAirCirculationModeForSetClimateSettingsInCar:withCompletion:](insetclimatesettingsincarintenthandling/resolveaircirculationmode%28for_with_%29.md): Deprecated. Resolves the requested air circulation mode.
- [resolveFanSpeedIndexForSetClimateSettingsInCar:withCompletion:](insetclimatesettingsincarintenthandling/resolvefanspeedindex%28for_with_%29.md): Deprecated. Resolves the requested fan speed index.
- [resolveFanSpeedPercentageForSetClimateSettingsInCar:withCompletion:](insetclimatesettingsincarintenthandling/resolvefanspeedpercentage%28for_with_%29.md): Deprecated. Resolves the requested fan speed percentage.
- [resolveRelativeFanSpeedSettingForSetClimateSettingsInCar:withCompletion:](insetclimatesettingsincarintenthandling/resolverelativefanspeedsetting%28for_with_%29.md): Deprecated. Resolves the requested relative qualifier for the fan speed.
- [resolveTemperatureForSetClimateSettingsInCar:withCompletion:](insetclimatesettingsincarintenthandling/resolvetemperature%28for_with_%29.md): Deprecated. Resolves the requested temperature value.
- [resolveRelativeTemperatureSettingForSetClimateSettingsInCar:withCompletion:](insetclimatesettingsincarintenthandling/resolverelativetemperaturesetting%28for_with_%29.md): Deprecated. Resolves the requested relative qualifier for the temperature change.
- [resolveClimateZoneForSetClimateSettingsInCar:withCompletion:](insetclimatesettingsincarintenthandling/resolveclimatezone%28for_with_%29.md): Deprecated. Resolves the requested climate zone.
- [resolveCarNameForSetClimateSettingsInCar:withCompletion:](insetclimatesettingsincarintenthandling/resolvecarname%28for_with_%29.md): Deprecated. Resolves the car name.

### Confirming the Response

- [confirmSetClimateSettingsInCar:completion:](insetclimatesettingsincarintenthandling/confirm%28intent_completion_%29.md): Deprecated. Confirms whether you can change the climate settings.

### Handling the Intent

- [handleSetClimateSettingsInCar:completion:](insetclimatesettingsincarintenthandling/handle%28intent_completion_%29.md): Deprecated. Handles changing the climate control settings.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Inherited By

- [INCarPlayDomainHandling](incarplaydomainhandling.md)

## See Also

### CarPlay Climate Settings

- [INSetClimateSettingsInCarIntent](insetclimatesettingsincarintent.md): Deprecated. A request to change the climate settings in a CarPlay-enabled vehicle.
- [INSetClimateSettingsInCarIntentResponse](insetclimatesettingsincarintentresponse.md): Deprecated. Your app’s response to a set climate settings in car intent.
