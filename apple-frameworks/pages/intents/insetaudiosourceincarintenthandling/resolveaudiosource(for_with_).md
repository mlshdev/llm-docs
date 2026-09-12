> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetaudiosourceincarintenthandling/resolveaudiosource(for:with:)](https://developer.apple.com/documentation/intents/insetaudiosourceincarintenthandling/resolveaudiosource(for:with:))

# resolveAudioSource(for:with:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Resolves an explicitly selected audio source.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
optional func resolveAudioSource(for intent: INSetAudioSourceInCarIntent, with completion: @escaping @Sendable (INCarAudioSourceResolutionResult) -> Void)
```

```swift
optional func resolveAudioSource(for intent: INSetAudioSourceInCarIntent) async -> INCarAudioSourceResolutionResult
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object that contains the specified [INCarAudioSource](../incaraudiosource.md) value. If the vehicle doesn’t support the requested audio source, specify a comparable audio source or specify a different audio source and ask the user to confirm the choice.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the user’s request. The intent object passed to this method contains either an explicit audio source or a relative audio source, but not both. Use this method to determine whether the specified audio source is selectable in the user’s vehicle. Always strive toward a successful resolution.

## See Also

### Resolving the Intent Parameters

- [resolveRelativeAudioSourceReference(for:with:)](resolverelativeaudiosourcereference%28for_with_%29.md): Deprecated. Resolves the audio source using a relative qualifier.

# resolveAudioSourceForSetAudioSourceInCar:withCompletion: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 15.0) · iPadOS 10.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0)

Resolves an explicitly selected audio source.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (void) resolveAudioSourceForSetAudioSourceInCar:(INSetAudioSourceInCarIntent *) intent withCompletion:(void (^)(INCarAudioSourceResolutionResult *resolutionResult)) completion;
```

## Parameters

- `intent`: The intent object containing details about the user’s request. Use this object to get the initial information, if any, provided by the user.
- `completion`: The block to execute with the resolution. You must execute this block at some point during your implementation of this method. This block has no return value and takes the following parameter:

  - **resolutionResult**: The object containing the details of your proposed resolution. For successful resolutions, create a resolution object that contains the specified [INCarAudioSource](../incaraudiosource.md) value. If the vehicle doesn’t support the requested audio source, specify a comparable audio source or specify a different audio source and ask the user to confirm the choice.

<a id="Discussion"></a>

## Discussion

Implement this method to resolve the user’s request. The intent object passed to this method contains either an explicit audio source or a relative audio source, but not both. Use this method to determine whether the specified audio source is selectable in the user’s vehicle. Always strive toward a successful resolution.

## See Also

### Resolving the Intent Parameters

- [resolveRelativeAudioSourceReferenceForSetAudioSourceInCar:withCompletion:](resolverelativeaudiosourcereference%28for_with_%29.md): Deprecated. Resolves the audio source using a relative qualifier.
