> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetdefrostersettingsincarintenthandling/resolveenable(for:with:)](https://developer.apple.com/documentation/intents/insetdefrostersettingsincarintenthandling/resolveenable(for:with:))

# resolveEnable(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Resolves whether you can enable or disable the defroster setting.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveEnable(for intent: INSetDefrosterSettingsInCarIntent, with completion: @escaping @Sendable (INBooleanResolutionResult) -> Void)
```

```swift
optional func resolveEnable(for intent: INSetDefrosterSettingsInCarIntent) async -> INBooleanResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object whose value reflects the value chosen by the user. If you can’t set the defroster to the specified value, specify a resolution result indicating whether you require confirmation from the user before making the change or whether the change isn’t possible.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve whether the app can enable the defrost.

## See Also

### Resolving the Intent Parameters

- [resolveDefroster(for:with:)](resolvedefroster%28for_with_%29.md): Deprecated. Resolves which defroster to change.
- [resolveCarName(for:with:)](resolvecarname%28for_with_%29.md): Deprecated. Resolves the car name.

# resolveEnableForSetDefrosterSettingsInCar:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Resolves whether you can enable or disable the defroster setting.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveEnableForSetDefrosterSettingsInCar:(INSetDefrosterSettingsInCarIntent *) intent withCompletion:(void (^)(INBooleanResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object whose value reflects the value chosen by the user. If you can’t set the defroster to the specified value, specify a resolution result indicating whether you require confirmation from the user before making the change or whether the change isn’t possible.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve whether the app can enable the defrost.

## See Also

### Resolving the Intent Parameters

- [resolveDefrosterForSetDefrosterSettingsInCar:withCompletion:](resolvedefroster%28for_with_%29.md): Deprecated. Resolves which defroster to change.
- [resolveCarNameForSetDefrosterSettingsInCar:withCompletion:](resolvecarname%28for_with_%29.md): Deprecated. Resolves the car name.
