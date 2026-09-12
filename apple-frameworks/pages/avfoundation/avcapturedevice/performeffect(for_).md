> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/performeffect(for:)](https://developer.apple.com/documentation/avfoundation/avcapturedevice/performeffect(for:))

# performEffect(for:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Performs the specified reaction type on the video stream.

## Declaration

```swift
func performEffect(for reactionType: AVCaptureReactionType)
```

## Parameters

- `reactionType`: A reaction type to perform. Specifying a type that doesn’t exists within the set of [availableReactionTypes](availablereactiontypes.md) for the device results in an exception.

<a id="Discussion"></a>

## Discussion

The entries in the [reactionEffectsInProgress](reactioneffectsinprogress.md) property may not reflect one-to-one with calls to this method. Depending on reaction style or resource limits, the system may coalesce overlapping reactions of the same type by extending an existing reaction rather than overlaying a new one.

> **Note**

>  Calling this method has no effect when the value of [canPerformReactionEffects](canperformreactioneffects.md) is [false](https://developer.apple.com/documentation/swift/false). In this case, VoIP apps should transmit and display reactions outside of the video feed.

## See Also

### Performing reaction effects

- [reactionEffectsEnabled](reactioneffectsenabled.md): A Boolean value that indicates whether the app supports performing reaction effects.
- [canPerformReactionEffects](canperformreactioneffects.md): A Boolean value that indicates whether you can perform reaction effects on a capture device.
- [availableReactionTypes](availablereactiontypes.md): A set of reactions types that a device supports performing.
- [reactionEffectGesturesEnabled](reactioneffectgesturesenabled.md): A Boolean value that indicates whether gesture detection triggers reaction effects on the video stream.
- [reactionEffectsInProgress](reactioneffectsinprogress.md): An array of reaction effects that the device is currently performing, sorted by timestamp.
- [AVCaptureReactionEffectState](../avcapturereactioneffectstate.md): An object that reports the state of a reaction effect performed on a capture device.

# performEffectForReaction: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Performs the specified reaction type on the video stream.

## Declaration

```objectivec
- (void) performEffectForReaction:(AVCaptureReactionType) reactionType;
```

## Parameters

- `reactionType`: A reaction type to perform. Specifying a type that doesn’t exists within the set of [availableReactionTypes](availablereactiontypes.md) for the device results in an exception.

<a id="Discussion"></a>

## Discussion

The entries in the [reactionEffectsInProgress](reactioneffectsinprogress.md) property may not reflect one-to-one with calls to this method. Depending on reaction style or resource limits, the system may coalesce overlapping reactions of the same type by extending an existing reaction rather than overlaying a new one.

> **Note**

>  Calling this method has no effect when the value of [canPerformReactionEffects](canperformreactioneffects.md) is [false](https://developer.apple.com/documentation/swift/false). In this case, VoIP apps should transmit and display reactions outside of the video feed.

## See Also

### Performing reaction effects

- [reactionEffectsEnabled](reactioneffectsenabled.md): A Boolean value that indicates whether the app supports performing reaction effects.
- [canPerformReactionEffects](canperformreactioneffects.md): A Boolean value that indicates whether you can perform reaction effects on a capture device.
- [availableReactionTypes](availablereactiontypes.md): A set of reactions types that a device supports performing.
- [reactionEffectGesturesEnabled](reactioneffectgesturesenabled.md): A Boolean value that indicates whether gesture detection triggers reaction effects on the video stream.
- [reactionEffectsInProgress](reactioneffectsinprogress.md): An array of reaction effects that the device is currently performing, sorted by timestamp.
- [AVCaptureReactionEffectState](../avcapturereactioneffectstate.md): An object that reports the state of a reaction effect performed on a capture device.
