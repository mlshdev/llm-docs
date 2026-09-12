> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetseatsettingsincarintenthandling/resolvecarname(for:with:)](https://developer.apple.com/documentation/intents/insetseatsettingsincarintenthandling/resolvecarname(for:with:))

# resolveCarName(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 15.0) · iPadOS 12.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Resolves the car name.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveCarName(for intent: INSetSeatSettingsInCarIntent, with completion: @escaping @Sendable (INSpeakableStringResolutionResult) -> Void)
```

```swift
optional func resolveCarName(for intent: INSetSeatSettingsInCarIntent) async -> INSpeakableStringResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the name of the user’s car.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the name of the user’s car. If the app has access to more than one car, use the intent’s [carName](../insetseatsettingsincarintent/carname.md) property to identify the correct car. If the app has access to only a single car, you can call the completion block with a `notRequired()` resolution for Swift and `resolutionResultNotRequired` resolution for Objective-C, to indicate that the app doesn’t need the car name.

## See Also

### Resolving the Intent Parameters

- [resolveEnableCooling(for:with:)](resolveenablecooling%28for_with_%29.md): Deprecated. Resolves whether you can enable the seat cooling system.
- [resolveEnableHeating(for:with:)](resolveenableheating%28for_with_%29.md): Deprecated. Resolves whether you can enable the seat heating system.
- [resolveEnableMassage(for:with:)](resolveenablemassage%28for_with_%29.md): Deprecated. Resolves whether you can enable the seat massage system.
- [resolveSeat(for:with:)](resolveseat%28for_with_%29.md): Deprecated. Resolves the requested seat position.
- [resolveLevel(for:with:)](resolvelevel%28for_with_%29.md): Deprecated. Resolves the intensity level of the requested system.
- [resolveRelativeLevelSetting(for:with:)](resolverelativelevelsetting%28for_with_%29.md): Deprecated. Resolves the requested relative qualifier for the intensity level.

# resolveCarNameForSetSeatSettingsInCar:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ (deprecated in 15.0) · iPadOS 12.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Resolves the car name.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveCarNameForSetSeatSettingsInCar:(INSetSeatSettingsInCarIntent *) intent withCompletion:(void (^)(INSpeakableStringResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the name of the user’s car.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the name of the user’s car. If the app has access to more than one car, use the intent’s [carName](../insetseatsettingsincarintent/carname.md) property to identify the correct car. If the app has access to only a single car, you can call the completion block with a `notRequired()` resolution for Swift and `resolutionResultNotRequired` resolution for Objective-C, to indicate that the app doesn’t need the car name.

## See Also

### Resolving the Intent Parameters

- [resolveEnableCoolingForSetSeatSettingsInCar:withCompletion:](resolveenablecooling%28for_with_%29.md): Deprecated. Resolves whether you can enable the seat cooling system.
- [resolveEnableHeatingForSetSeatSettingsInCar:withCompletion:](resolveenableheating%28for_with_%29.md): Deprecated. Resolves whether you can enable the seat heating system.
- [resolveEnableMassageForSetSeatSettingsInCar:withCompletion:](resolveenablemassage%28for_with_%29.md): Deprecated. Resolves whether you can enable the seat massage system.
- [resolveSeatForSetSeatSettingsInCar:withCompletion:](resolveseat%28for_with_%29.md): Deprecated. Resolves the requested seat position.
- [resolveLevelForSetSeatSettingsInCar:withCompletion:](resolvelevel%28for_with_%29.md): Deprecated. Resolves the intensity level of the requested system.
- [resolveRelativeLevelSettingForSetSeatSettingsInCar:withCompletion:](resolverelativelevelsetting%28for_with_%29.md): Deprecated. Resolves the requested relative qualifier for the intensity level.
