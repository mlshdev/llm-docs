> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetclimatesettingsincarintenthandling/resolveenablefan(for:with:)](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintenthandling/resolveenablefan(for:with:))

# resolveEnableFan(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Resolves whether you can enable the car’s fan.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveEnableFan(for intent: INSetClimateSettingsInCarIntent, with completion: @escaping @Sendable (INBooleanResolutionResult) -> Void)
```

```swift
optional func resolveEnableFan(for intent: INSetClimateSettingsInCarIntent) async -> INBooleanResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the originally requested value. If the intent doesn’t apply to this setting, return a result that indicates the value isn’t required.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the user’s request. The intent object passed to this method a Boolean value that indicates whether you can enable the car’s fan.

## See Also

### Resolving the Intent Parameters

- [resolveEnableAirConditioner(for:with:)](resolveenableairconditioner%28for_with_%29.md): Deprecated. Resolves whether you can enable the air conditioner.
- [resolveEnableClimateControl(for:with:)](resolveenableclimatecontrol%28for_with_%29.md): Deprecated. Resolves whether you can enable the climate control system.
- [resolveEnableAutoMode(for:with:)](resolveenableautomode%28for_with_%29.md): Deprecated. Resolves whether you can enable automatic mode for the car’s climate control.
- [resolveAirCirculationMode(for:with:)](resolveaircirculationmode%28for_with_%29.md): Deprecated. Resolves the requested air circulation mode.
- [resolveFanSpeedIndex(for:with:)](resolvefanspeedindex%28for_with_%29.md): Deprecated. Resolves the requested fan speed index.
- [resolveFanSpeedPercentage(for:with:)](resolvefanspeedpercentage%28for_with_%29.md): Deprecated. Resolves the requested fan speed percentage.
- [resolveRelativeFanSpeedSetting(for:with:)](resolverelativefanspeedsetting%28for_with_%29.md): Deprecated. Resolves the requested relative qualifier for the fan speed.
- [resolveTemperature(for:with:)](resolvetemperature%28for_with_%29.md): Deprecated. Resolves the requested temperature value.
- [resolveRelativeTemperatureSetting(for:with:)](resolverelativetemperaturesetting%28for_with_%29.md): Deprecated. Resolves the requested relative qualifier for the temperature change.
- [resolveClimateZone(for:with:)](resolveclimatezone%28for_with_%29.md): Deprecated. Resolves the requested climate zone.
- [resolveCarName(for:with:)](resolvecarname%28for_with_%29.md): Deprecated. Resolves the car name.

# resolveEnableFanForSetClimateSettingsInCar:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Resolves whether you can enable the car’s fan.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveEnableFanForSetClimateSettingsInCar:(INSetClimateSettingsInCarIntent *) intent withCompletion:(void (^)(INBooleanResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the originally requested value. If the intent doesn’t apply to this setting, return a result that indicates the value isn’t required.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the user’s request. The intent object passed to this method a Boolean value that indicates whether you can enable the car’s fan.

## See Also

### Resolving the Intent Parameters

- [resolveEnableAirConditionerForSetClimateSettingsInCar:withCompletion:](resolveenableairconditioner%28for_with_%29.md): Deprecated. Resolves whether you can enable the air conditioner.
- [resolveEnableClimateControlForSetClimateSettingsInCar:withCompletion:](resolveenableclimatecontrol%28for_with_%29.md): Deprecated. Resolves whether you can enable the climate control system.
- [resolveEnableAutoModeForSetClimateSettingsInCar:withCompletion:](resolveenableautomode%28for_with_%29.md): Deprecated. Resolves whether you can enable automatic mode for the car’s climate control.
- [resolveAirCirculationModeForSetClimateSettingsInCar:withCompletion:](resolveaircirculationmode%28for_with_%29.md): Deprecated. Resolves the requested air circulation mode.
- [resolveFanSpeedIndexForSetClimateSettingsInCar:withCompletion:](resolvefanspeedindex%28for_with_%29.md): Deprecated. Resolves the requested fan speed index.
- [resolveFanSpeedPercentageForSetClimateSettingsInCar:withCompletion:](resolvefanspeedpercentage%28for_with_%29.md): Deprecated. Resolves the requested fan speed percentage.
- [resolveRelativeFanSpeedSettingForSetClimateSettingsInCar:withCompletion:](resolverelativefanspeedsetting%28for_with_%29.md): Deprecated. Resolves the requested relative qualifier for the fan speed.
- [resolveTemperatureForSetClimateSettingsInCar:withCompletion:](resolvetemperature%28for_with_%29.md): Deprecated. Resolves the requested temperature value.
- [resolveRelativeTemperatureSettingForSetClimateSettingsInCar:withCompletion:](resolverelativetemperaturesetting%28for_with_%29.md): Deprecated. Resolves the requested relative qualifier for the temperature change.
- [resolveClimateZoneForSetClimateSettingsInCar:withCompletion:](resolveclimatezone%28for_with_%29.md): Deprecated. Resolves the requested climate zone.
- [resolveCarNameForSetClimateSettingsInCar:withCompletion:](resolvecarname%28for_with_%29.md): Deprecated. Resolves the car name.
