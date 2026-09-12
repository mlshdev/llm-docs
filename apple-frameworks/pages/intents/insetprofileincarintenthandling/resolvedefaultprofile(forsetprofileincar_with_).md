> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetprofileincarintenthandling/resolvedefaultprofile(forsetprofileincar:with:)](https://developer.apple.com/documentation/intents/insetprofileincarintenthandling/resolvedefaultprofile(forsetprofileincar:with:))

# resolveDefaultProfile(forSetProfileInCar:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Resolves whether the profile can become the default profile.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveDefaultProfile(forSetProfileInCar intent: INSetProfileInCarIntent, with completion: @escaping @Sendable (INBooleanResolutionResult) -> Void)
```

```swift
optional func resolveDefaultProfile(forSetProfileInCar intent: INSetProfileInCarIntent) async -> INBooleanResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with your response. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object whose value contains the original Boolean value.

<a id="Discussion"></a>

## Discussion

If you don’t allow the specified profile to become the default, return an unsupported resolution result.

## See Also

### Resolving the Intent Parameters

- [resolveProfileNumber(for:with:)](resolveprofilenumber%28for_with_%29.md): Deprecated. Resolves the profile index from which to restore any settings.
- [resolveProfileName(for:with:)](resolveprofilename%28for_with_%29.md): Deprecated. Resolves the profile name from which to retrieve settings.
- [resolveCarName(for:with:)](resolvecarname%28for_with_%29.md): Deprecated. Resolves the car name.

# resolveDefaultProfileForSetProfileInCar:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Resolves whether the profile can become the default profile.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveDefaultProfileForSetProfileInCar:(INSetProfileInCarIntent *) intent withCompletion:(void (^)(INBooleanResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with your response. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object whose value contains the original Boolean value.

<a id="Discussion"></a>

## Discussion

If you don’t allow the specified profile to become the default, return an unsupported resolution result.

## See Also

### Resolving the Intent Parameters

- [resolveProfileNumberForSetProfileInCar:withCompletion:](resolveprofilenumber%28for_with_%29.md): Deprecated. Resolves the profile index from which to restore any settings.
- [resolveProfileNameForSetProfileInCar:withCompletion:](resolveprofilename%28for_with_%29.md): Deprecated. Resolves the profile name from which to retrieve settings.
- [resolveCarNameForSetProfileInCar:withCompletion:](resolvecarname%28for_with_%29.md): Deprecated. Resolves the car name.
