> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/reactioneffectsinprogress](https://developer.apple.com/documentation/avfoundation/avcapturedevice/reactioneffectsinprogress)

# reactionEffectsInProgress (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

An array of reaction effects that the device is currently performing, sorted by timestamp.

## Declaration

```swift
var reactionEffectsInProgress: [AVCaptureReactionEffectState] { get }
```

<a id="Discussion"></a>

## Discussion

Key-value observe this property to determine when reaction effects begin and end. If your key-value observing callback provides old and new values, any in-progress reaction effects in the new array have a value of [invalid](../../coremedia/cmtime/invalid.md) for their [endTime](../avcapturereactioneffectstate/endtime.md) property value. Completed reaction effects are only in the old array, and have their [endTime](../avcapturereactioneffectstate/endtime.md) property value set to the presentation time of the first frame where the reaction effect was no longer present.

## See Also

### Performing reaction effects

- [reactionEffectsEnabled](reactioneffectsenabled.md): A Boolean value that indicates whether the app supports performing reaction effects.
- [canPerformReactionEffects](canperformreactioneffects.md): A Boolean value that indicates whether you can perform reaction effects on a capture device.
- [availableReactionTypes](availablereactiontypes.md): A set of reactions types that a device supports performing.
- [reactionEffectGesturesEnabled](reactioneffectgesturesenabled.md): A Boolean value that indicates whether gesture detection triggers reaction effects on the video stream.
- [performEffect(for:)](performeffect%28for_%29.md): Performs the specified reaction type on the video stream.
- [AVCaptureReactionEffectState](../avcapturereactioneffectstate.md): An object that reports the state of a reaction effect performed on a capture device.

# reactionEffectsInProgress (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

An array of reaction effects that the device is currently performing, sorted by timestamp.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVCaptureReactionEffectState *> * reactionEffectsInProgress;
```

<a id="Discussion"></a>

## Discussion

Key-value observe this property to determine when reaction effects begin and end. If your key-value observing callback provides old and new values, any in-progress reaction effects in the new array have a value of [kCMTimeInvalid](../../coremedia/cmtime/invalid.md) for their [endTime](../avcapturereactioneffectstate/endtime.md) property value. Completed reaction effects are only in the old array, and have their [endTime](../avcapturereactioneffectstate/endtime.md) property value set to the presentation time of the first frame where the reaction effect was no longer present.

## See Also

### Performing reaction effects

- [reactionEffectsEnabled](reactioneffectsenabled.md): A Boolean value that indicates whether the app supports performing reaction effects.
- [canPerformReactionEffects](canperformreactioneffects.md): A Boolean value that indicates whether you can perform reaction effects on a capture device.
- [availableReactionTypes](availablereactiontypes.md): A set of reactions types that a device supports performing.
- [reactionEffectGesturesEnabled](reactioneffectgesturesenabled.md): A Boolean value that indicates whether gesture detection triggers reaction effects on the video stream.
- [performEffectForReaction:](performeffect%28for_%29.md): Performs the specified reaction type on the video stream.
- [AVCaptureReactionEffectState](../avcapturereactioneffectstate.md): An object that reports the state of a reaction effect performed on a capture device.
