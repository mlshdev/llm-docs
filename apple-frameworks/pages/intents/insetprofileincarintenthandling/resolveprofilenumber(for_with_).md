> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetprofileincarintenthandling/resolveprofilenumber(for:with:)](https://developer.apple.com/documentation/intents/insetprofileincarintenthandling/resolveprofilenumber(for:with:))

# resolveProfileNumber(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Resolves the profile index from which to restore any settings.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveProfileNumber(for intent: INSetProfileInCarIntent, with completion: @escaping @Sendable (INIntegerResolutionResult) -> Void)
```

```swift
optional func resolveProfileNumber(for intent: INSetProfileInCarIntent) async -> INIntegerResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with your response. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object whose value contains the index of the profile you intend to use. If the index doesn’t correspond to an available profile slot, you might specify a different slot and ask the user for confirmation.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the specified profile index. If your vehicle supports named profiles and there’s a valid name in the [INSetProfileInCarIntent](../insetprofileincarintent.md) object, return a successful resolution for this parameter and use the label to identify the profile.

## See Also

### Resolving the Intent Parameters

- [resolveProfileName(for:with:)](resolveprofilename%28for_with_%29.md): Deprecated. Resolves the profile name from which to retrieve settings.
- [resolveCarName(for:with:)](resolvecarname%28for_with_%29.md): Deprecated. Resolves the car name.
- [resolveDefaultProfile(forSetProfileInCar:with:)](resolvedefaultprofile%28forsetprofileincar_with_%29.md): Deprecated. Resolves whether the profile can become the default profile.

# resolveProfileNumberForSetProfileInCar:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Resolves the profile index from which to restore any settings.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveProfileNumberForSetProfileInCar:(INSetProfileInCarIntent *) intent withCompletion:(void (^)(INIntegerResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with your response. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object whose value contains the index of the profile you intend to use. If the index doesn’t correspond to an available profile slot, you might specify a different slot and ask the user for confirmation.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the specified profile index. If your vehicle supports named profiles and there’s a valid name in the [INSetProfileInCarIntent](../insetprofileincarintent.md) object, return a successful resolution for this parameter and use the label to identify the profile.

## See Also

### Resolving the Intent Parameters

- [resolveProfileNameForSetProfileInCar:withCompletion:](resolveprofilename%28for_with_%29.md): Deprecated. Resolves the profile name from which to retrieve settings.
- [resolveCarNameForSetProfileInCar:withCompletion:](resolvecarname%28for_with_%29.md): Deprecated. Resolves the car name.
- [resolveDefaultProfileForSetProfileInCar:withCompletion:](resolvedefaultprofile%28forsetprofileincar_with_%29.md): Deprecated. Resolves whether the profile can become the default profile.
