> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetprofileincarintenthandling/resolveprofilename(for:with:)](https://developer.apple.com/documentation/intents/insetprofileincarintenthandling/resolveprofilename(for:with:))

# resolveProfileName(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.2+ (deprecated in 15.0) · iPadOS 10.2+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Resolves the profile name from which to retrieve settings.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveProfileName(for intent: INSetProfileInCarIntent, with completion: @escaping @Sendable (INStringResolutionResult) -> Void)
```

```swift
optional func resolveProfileName(for intent: INSetProfileInCarIntent) async -> INStringResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object whose value contains the name of the profile you intend to use. If the name doesn’t correspond to a valid profile name, you might suggest a valid name and ask the user for confirmation.

<a id="Discussion"></a>

## Discussion

Implement this method to validate the profile name supplied by the user. If you don’t implement this method, SiriKit assumes that you’re able to set the profile using the specified name.

## See Also

### Resolving the Intent Parameters

- [resolveProfileNumber(for:with:)](resolveprofilenumber%28for_with_%29.md): Deprecated. Resolves the profile index from which to restore any settings.
- [resolveCarName(for:with:)](resolvecarname%28for_with_%29.md): Deprecated. Resolves the car name.
- [resolveDefaultProfile(forSetProfileInCar:with:)](resolvedefaultprofile%28forsetprofileincar_with_%29.md): Deprecated. Resolves whether the profile can become the default profile.

# resolveProfileNameForSetProfileInCar:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.2+ (deprecated in 15.0) · iPadOS 10.2+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Resolves the profile name from which to retrieve settings.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveProfileNameForSetProfileInCar:(INSetProfileInCarIntent *) intent withCompletion:(void (^)(INStringResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object whose value contains the name of the profile you intend to use. If the name doesn’t correspond to a valid profile name, you might suggest a valid name and ask the user for confirmation.

<a id="Discussion"></a>

## Discussion

Implement this method to validate the profile name supplied by the user. If you don’t implement this method, SiriKit assumes that you’re able to set the profile using the specified name.

## See Also

### Resolving the Intent Parameters

- [resolveProfileNumberForSetProfileInCar:withCompletion:](resolveprofilenumber%28for_with_%29.md): Deprecated. Resolves the profile index from which to restore any settings.
- [resolveCarNameForSetProfileInCar:withCompletion:](resolvecarname%28for_with_%29.md): Deprecated. Resolves the car name.
- [resolveDefaultProfileForSetProfileInCar:withCompletion:](resolvedefaultprofile%28forsetprofileincar_with_%29.md): Deprecated. Resolves whether the profile can become the default profile.
