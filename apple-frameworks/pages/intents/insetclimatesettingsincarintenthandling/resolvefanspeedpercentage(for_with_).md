> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetclimatesettingsincarintenthandling/resolvefanspeedpercentage(for:with:)](https://developer.apple.com/documentation/intents/insetclimatesettingsincarintenthandling/resolvefanspeedpercentage(for:with:))

# resolveFanSpeedPercentage(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Resolves the requested fan speed percentage.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveFanSpeedPercentage(for intent: INSetClimateSettingsInCarIntent, with completion: @escaping @Sendable (INDoubleResolutionResult) -> Void)
```

```swift
optional func resolveFanSpeedPercentage(for intent: INSetClimateSettingsInCarIntent) async -> INDoubleResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the floating-point value representing the requested fan speed percentage. If the intent doesn’t apply to this setting, return a result that indicates the value isn’t required.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the fan speed percentage. Use the intent object to identify the fan speed percentage specified by the user.

## See Also

### Resolving the Intent Parameters

- [resolveEnableFan(for:with:)](resolveenablefan%28for_with_%29.md): Deprecated. Resolves whether you can enable the car’s fan.
- [resolveEnableAirConditioner(for:with:)](resolveenableairconditioner%28for_with_%29.md): Deprecated. Resolves whether you can enable the air conditioner.
- [resolveEnableClimateControl(for:with:)](resolveenableclimatecontrol%28for_with_%29.md): Deprecated. Resolves whether you can enable the climate control system.
- [resolveEnableAutoMode(for:with:)](resolveenableautomode%28for_with_%29.md): Deprecated. Resolves whether you can enable automatic mode for the car’s climate control.
- [resolveAirCirculationMode(for:with:)](resolveaircirculationmode%28for_with_%29.md): Deprecated. Resolves the requested air circulation mode.
- [resolveFanSpeedIndex(for:with:)](resolvefanspeedindex%28for_with_%29.md): Deprecated. Resolves the requested fan speed index.
- [resolveRelativeFanSpeedSetting(for:with:)](resolverelativefanspeedsetting%28for_with_%29.md): Deprecated. Resolves the requested relative qualifier for the fan speed.
- [resolveTemperature(for:with:)](resolvetemperature%28for_with_%29.md): Deprecated. Resolves the requested temperature value.
- [resolveRelativeTemperatureSetting(for:with:)](resolverelativetemperaturesetting%28for_with_%29.md): Deprecated. Resolves the requested relative qualifier for the temperature change.
- [resolveClimateZone(for:with:)](resolveclimatezone%28for_with_%29.md): Deprecated. Resolves the requested climate zone.
- [resolveCarName(for:with:)](resolvecarname%28for_with_%29.md): Deprecated. Resolves the car name.

# resolveFanSpeedPercentageForSetClimateSettingsInCar:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Resolves the requested fan speed percentage.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveFanSpeedPercentageForSetClimateSettingsInCar:(INSetClimateSettingsInCarIntent *) intent withCompletion:(void (^)(INDoubleResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the floating-point value representing the requested fan speed percentage. If the intent doesn’t apply to this setting, return a result that indicates the value isn’t required.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the fan speed percentage. Use the intent object to identify the fan speed percentage specified by the user.

## See Also

### Resolving the Intent Parameters

- [resolveEnableFanForSetClimateSettingsInCar:withCompletion:](resolveenablefan%28for_with_%29.md): Deprecated. Resolves whether you can enable the car’s fan.
- [resolveEnableAirConditionerForSetClimateSettingsInCar:withCompletion:](resolveenableairconditioner%28for_with_%29.md): Deprecated. Resolves whether you can enable the air conditioner.
- [resolveEnableClimateControlForSetClimateSettingsInCar:withCompletion:](resolveenableclimatecontrol%28for_with_%29.md): Deprecated. Resolves whether you can enable the climate control system.
- [resolveEnableAutoModeForSetClimateSettingsInCar:withCompletion:](resolveenableautomode%28for_with_%29.md): Deprecated. Resolves whether you can enable automatic mode for the car’s climate control.
- [resolveAirCirculationModeForSetClimateSettingsInCar:withCompletion:](resolveaircirculationmode%28for_with_%29.md): Deprecated. Resolves the requested air circulation mode.
- [resolveFanSpeedIndexForSetClimateSettingsInCar:withCompletion:](resolvefanspeedindex%28for_with_%29.md): Deprecated. Resolves the requested fan speed index.
- [resolveRelativeFanSpeedSettingForSetClimateSettingsInCar:withCompletion:](resolverelativefanspeedsetting%28for_with_%29.md): Deprecated. Resolves the requested relative qualifier for the fan speed.
- [resolveTemperatureForSetClimateSettingsInCar:withCompletion:](resolvetemperature%28for_with_%29.md): Deprecated. Resolves the requested temperature value.
- [resolveRelativeTemperatureSettingForSetClimateSettingsInCar:withCompletion:](resolverelativetemperaturesetting%28for_with_%29.md): Deprecated. Resolves the requested relative qualifier for the temperature change.
- [resolveClimateZoneForSetClimateSettingsInCar:withCompletion:](resolveclimatezone%28for_with_%29.md): Deprecated. Resolves the requested climate zone.
- [resolveCarNameForSetClimateSettingsInCar:withCompletion:](resolvecarname%28for_with_%29.md): Deprecated. Resolves the car name.
