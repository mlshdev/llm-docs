> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/availablereactiontypes](https://developer.apple.com/documentation/avfoundation/avcapturedevice/availablereactiontypes)

# availableReactionTypes (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

A set of reactions types that a device supports performing.

## Declaration

```swift
var availableReactionTypes: Set<AVCaptureReactionType> { get }
```

<a id="Discussion"></a>

## Discussion

The list may differ between devices, and may change for a specific device when it’s active format changes.

This property is key-value observable.

## See Also

### Performing reaction effects

- [reactionEffectsEnabled](reactioneffectsenabled.md): A Boolean value that indicates whether the app supports performing reaction effects.
- [canPerformReactionEffects](canperformreactioneffects.md): A Boolean value that indicates whether you can perform reaction effects on a capture device.
- [reactionEffectGesturesEnabled](reactioneffectgesturesenabled.md): A Boolean value that indicates whether gesture detection triggers reaction effects on the video stream.
- [performEffect(for:)](performeffect%28for_%29.md): Performs the specified reaction type on the video stream.
- [reactionEffectsInProgress](reactioneffectsinprogress.md): An array of reaction effects that the device is currently performing, sorted by timestamp.
- [AVCaptureReactionEffectState](../avcapturereactioneffectstate.md): An object that reports the state of a reaction effect performed on a capture device.

# availableReactionTypes (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

A set of reactions types that a device supports performing.

## Declaration

```objectivec
@property (nonatomic, readonly) NSSet<NSString *> * availableReactionTypes;
```

<a id="Discussion"></a>

## Discussion

The list may differ between devices, and may change for a specific device when it’s active format changes.

This property is key-value observable.

## See Also

### Performing reaction effects

- [reactionEffectsEnabled](reactioneffectsenabled.md): A Boolean value that indicates whether the app supports performing reaction effects.
- [canPerformReactionEffects](canperformreactioneffects.md): A Boolean value that indicates whether you can perform reaction effects on a capture device.
- [reactionEffectGesturesEnabled](reactioneffectgesturesenabled.md): A Boolean value that indicates whether gesture detection triggers reaction effects on the video stream.
- [performEffectForReaction:](performeffect%28for_%29.md): Performs the specified reaction type on the video stream.
- [reactionEffectsInProgress](reactioneffectsinprogress.md): An array of reaction effects that the device is currently performing, sorted by timestamp.
- [AVCaptureReactionEffectState](../avcapturereactioneffectstate.md): An object that reports the state of a reaction effect performed on a capture device.
