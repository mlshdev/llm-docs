> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetclimatesettingsincarintenthandling/resolverelativetemperaturesetting(for:with:)](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintenthandling/resolverelativetemperaturesetting(for:with:))

# resolveRelativeTemperatureSetting(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Resolves the requested relative qualifier for the temperature change.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveRelativeTemperatureSetting(for intent: INSetClimateSettingsInCarIntent, with completion: @escaping @Sendable (INRelativeSettingResolutionResult) -> Void)
```

```swift
optional func resolveRelativeTemperatureSetting(for intent: INSetClimateSettingsInCarIntent) async -> INRelativeSettingResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object that contains the [INRelativeSetting](../inrelativesetting.md) value that you intend to use. If the intent doesn’t apply to this setting, return a result that indicates the value isn’t required.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the requested temperature change. Use the intent object to identify the requested temperature change as applied to the current temperature.

## See Also

### Resolving the Intent Parameters

- [resolveEnableFan(for:with:)](resolveenablefan%28for_with_%29.md): Deprecated. Resolves whether you can enable the car’s fan.
- [resolveEnableAirConditioner(for:with:)](resolveenableairconditioner%28for_with_%29.md): Deprecated. Resolves whether you can enable the air conditioner.
- [resolveEnableClimateControl(for:with:)](resolveenableclimatecontrol%28for_with_%29.md): Deprecated. Resolves whether you can enable the climate control system.
- [resolveEnableAutoMode(for:with:)](resolveenableautomode%28for_with_%29.md): Deprecated. Resolves whether you can enable automatic mode for the car’s climate control.
- [resolveAirCirculationMode(for:with:)](resolveaircirculationmode%28for_with_%29.md): Deprecated. Resolves the requested air circulation mode.
- [resolveFanSpeedIndex(for:with:)](resolvefanspeedindex%28for_with_%29.md): Deprecated. Resolves the requested fan speed index.
- [resolveFanSpeedPercentage(for:with:)](resolvefanspeedpercentage%28for_with_%29.md): Deprecated. Resolves the requested fan speed percentage.
- [resolveRelativeFanSpeedSetting(for:with:)](resolverelativefanspeedsetting%28for_with_%29.md): Deprecated. Resolves the requested relative qualifier for the fan speed.
- [resolveTemperature(for:with:)](resolvetemperature%28for_with_%29.md): Deprecated. Resolves the requested temperature value.
- [resolveClimateZone(for:with:)](resolveclimatezone%28for_with_%29.md): Deprecated. Resolves the requested climate zone.
- [resolveCarName(for:with:)](resolvecarname%28for_with_%29.md): Deprecated. Resolves the car name.

# resolveRelativeTemperatureSettingForSetClimateSettingsInCar:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Resolves the requested relative qualifier for the temperature change.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveRelativeTemperatureSettingForSetClimateSettingsInCar:(INSetClimateSettingsInCarIntent *) intent withCompletion:(void (^)(INRelativeSettingResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object that contains the [INRelativeSetting](../inrelativesetting.md) value that you intend to use. If the intent doesn’t apply to this setting, return a result that indicates the value isn’t required.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the requested temperature change. Use the intent object to identify the requested temperature change as applied to the current temperature.

## See Also

### Resolving the Intent Parameters

- [resolveEnableFanForSetClimateSettingsInCar:withCompletion:](resolveenablefan%28for_with_%29.md): Deprecated. Resolves whether you can enable the car’s fan.
- [resolveEnableAirConditionerForSetClimateSettingsInCar:withCompletion:](resolveenableairconditioner%28for_with_%29.md): Deprecated. Resolves whether you can enable the air conditioner.
- [resolveEnableClimateControlForSetClimateSettingsInCar:withCompletion:](resolveenableclimatecontrol%28for_with_%29.md): Deprecated. Resolves whether you can enable the climate control system.
- [resolveEnableAutoModeForSetClimateSettingsInCar:withCompletion:](resolveenableautomode%28for_with_%29.md): Deprecated. Resolves whether you can enable automatic mode for the car’s climate control.
- [resolveAirCirculationModeForSetClimateSettingsInCar:withCompletion:](resolveaircirculationmode%28for_with_%29.md): Deprecated. Resolves the requested air circulation mode.
- [resolveFanSpeedIndexForSetClimateSettingsInCar:withCompletion:](resolvefanspeedindex%28for_with_%29.md): Deprecated. Resolves the requested fan speed index.
- [resolveFanSpeedPercentageForSetClimateSettingsInCar:withCompletion:](resolvefanspeedpercentage%28for_with_%29.md): Deprecated. Resolves the requested fan speed percentage.
- [resolveRelativeFanSpeedSettingForSetClimateSettingsInCar:withCompletion:](resolverelativefanspeedsetting%28for_with_%29.md): Deprecated. Resolves the requested relative qualifier for the fan speed.
- [resolveTemperatureForSetClimateSettingsInCar:withCompletion:](resolvetemperature%28for_with_%29.md): Deprecated. Resolves the requested temperature value.
- [resolveClimateZoneForSetClimateSettingsInCar:withCompletion:](resolveclimatezone%28for_with_%29.md): Deprecated. Resolves the requested climate zone.
- [resolveCarNameForSetClimateSettingsInCar:withCompletion:](resolvecarname%28for_with_%29.md): Deprecated. Resolves the car name.
