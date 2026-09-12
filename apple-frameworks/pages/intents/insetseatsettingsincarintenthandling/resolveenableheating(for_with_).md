> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetseatsettingsincarintenthandling/resolveenableheating(for:with:)](https://developer.apple.com/documentation/intents/insetseatsettingsincarintenthandling/resolveenableheating(for:with:))

# resolveEnableHeating(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Resolves whether you can enable the seat heating system.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveEnableHeating(for intent: INSetSeatSettingsInCarIntent, with completion: @escaping @Sendable (INBooleanResolutionResult) -> Void)
```

```swift
optional func resolveEnableHeating(for intent: INSetSeatSettingsInCarIntent) async -> INBooleanResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with your response. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the originally requested value. If the intent doesn’t apply to this setting, return a result that indicates the value isn’t required.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve whether the app can enable the seat heating system.

## See Also

### Resolving the Intent Parameters

- [resolveEnableCooling(for:with:)](resolveenablecooling%28for_with_%29.md): Deprecated. Resolves whether you can enable the seat cooling system.
- [resolveEnableMassage(for:with:)](resolveenablemassage%28for_with_%29.md): Deprecated. Resolves whether you can enable the seat massage system.
- [resolveSeat(for:with:)](resolveseat%28for_with_%29.md): Deprecated. Resolves the requested seat position.
- [resolveLevel(for:with:)](resolvelevel%28for_with_%29.md): Deprecated. Resolves the intensity level of the requested system.
- [resolveRelativeLevelSetting(for:with:)](resolverelativelevelsetting%28for_with_%29.md): Deprecated. Resolves the requested relative qualifier for the intensity level.
- [resolveCarName(for:with:)](resolvecarname%28for_with_%29.md): Deprecated. Resolves the car name.

# resolveEnableHeatingForSetSeatSettingsInCar:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Resolves whether you can enable the seat heating system.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveEnableHeatingForSetSeatSettingsInCar:(INSetSeatSettingsInCarIntent *) intent withCompletion:(void (^)(INBooleanResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with your response. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object with the originally requested value. If the intent doesn’t apply to this setting, return a result that indicates the value isn’t required.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve whether the app can enable the seat heating system.

## See Also

### Resolving the Intent Parameters

- [resolveEnableCoolingForSetSeatSettingsInCar:withCompletion:](resolveenablecooling%28for_with_%29.md): Deprecated. Resolves whether you can enable the seat cooling system.
- [resolveEnableMassageForSetSeatSettingsInCar:withCompletion:](resolveenablemassage%28for_with_%29.md): Deprecated. Resolves whether you can enable the seat massage system.
- [resolveSeatForSetSeatSettingsInCar:withCompletion:](resolveseat%28for_with_%29.md): Deprecated. Resolves the requested seat position.
- [resolveLevelForSetSeatSettingsInCar:withCompletion:](resolvelevel%28for_with_%29.md): Deprecated. Resolves the intensity level of the requested system.
- [resolveRelativeLevelSettingForSetSeatSettingsInCar:withCompletion:](resolverelativelevelsetting%28for_with_%29.md): Deprecated. Resolves the requested relative qualifier for the intensity level.
- [resolveCarNameForSetSeatSettingsInCar:withCompletion:](resolvecarname%28for_with_%29.md): Deprecated. Resolves the car name.
