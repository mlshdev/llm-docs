> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetseatsettingsincarintenthandling/resolvelevel(for:with:)](https://developer.apple.com/documentation/intents/insetseatsettingsincarintenthandling/resolvelevel(for:with:))

# resolveLevel(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Resolves the intensity level of the requested system.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveLevel(for intent: INSetSeatSettingsInCarIntent, with completion: @escaping @Sendable (INIntegerResolutionResult) -> Void)
```

```swift
optional func resolveLevel(for intent: INSetSeatSettingsInCarIntent) async -> INIntegerResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with your response. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the integer value representing the intensity of the requested heating, cooling, or massage feature.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the intensity level for the requested system. Use the intent object to identify the intensity level specified by the user. This maps to the manual knob associated with the requested system in the vehicle.

## See Also

### Resolving the Intent Parameters

- [resolveEnableCooling(for:with:)](resolveenablecooling%28for_with_%29.md): Deprecated. Resolves whether you can enable the seat cooling system.
- [resolveEnableHeating(for:with:)](resolveenableheating%28for_with_%29.md): Deprecated. Resolves whether you can enable the seat heating system.
- [resolveEnableMassage(for:with:)](resolveenablemassage%28for_with_%29.md): Deprecated. Resolves whether you can enable the seat massage system.
- [resolveSeat(for:with:)](resolveseat%28for_with_%29.md): Deprecated. Resolves the requested seat position.
- [resolveRelativeLevelSetting(for:with:)](resolverelativelevelsetting%28for_with_%29.md): Deprecated. Resolves the requested relative qualifier for the intensity level.
- [resolveCarName(for:with:)](resolvecarname%28for_with_%29.md): Deprecated. Resolves the car name.

# resolveLevelForSetSeatSettingsInCar:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Resolves the intensity level of the requested system.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveLevelForSetSeatSettingsInCar:(INSetSeatSettingsInCarIntent *) intent withCompletion:(void (^)(INIntegerResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with your response. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the integer value representing the intensity of the requested heating, cooling, or massage feature.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the intensity level for the requested system. Use the intent object to identify the intensity level specified by the user. This maps to the manual knob associated with the requested system in the vehicle.

## See Also

### Resolving the Intent Parameters

- [resolveEnableCoolingForSetSeatSettingsInCar:withCompletion:](resolveenablecooling%28for_with_%29.md): Deprecated. Resolves whether you can enable the seat cooling system.
- [resolveEnableHeatingForSetSeatSettingsInCar:withCompletion:](resolveenableheating%28for_with_%29.md): Deprecated. Resolves whether you can enable the seat heating system.
- [resolveEnableMassageForSetSeatSettingsInCar:withCompletion:](resolveenablemassage%28for_with_%29.md): Deprecated. Resolves whether you can enable the seat massage system.
- [resolveSeatForSetSeatSettingsInCar:withCompletion:](resolveseat%28for_with_%29.md): Deprecated. Resolves the requested seat position.
- [resolveRelativeLevelSettingForSetSeatSettingsInCar:withCompletion:](resolverelativelevelsetting%28for_with_%29.md): Deprecated. Resolves the requested relative qualifier for the intensity level.
- [resolveCarNameForSetSeatSettingsInCar:withCompletion:](resolvecarname%28for_with_%29.md): Deprecated. Resolves the car name.
