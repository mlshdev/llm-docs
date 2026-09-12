> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/canperformreactioneffects](https://developer.apple.com/documentation/avfoundation/avcapturedevice/canperformreactioneffects)

# canPerformReactionEffects (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

A Boolean value that indicates whether you can perform reaction effects on a capture device.

## Declaration

```swift
var canPerformReactionEffects: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This value is [true](https://developer.apple.com/documentation/swift/true) when a device’s [reactionEffectsEnabled](reactioneffectsenabled.md) and its active format’s [reactionEffectsSupported](format/reactioneffectssupported.md) property values are [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Performing reaction effects

- [reactionEffectsEnabled](reactioneffectsenabled.md): A Boolean value that indicates whether the app supports performing reaction effects.
- [availableReactionTypes](availablereactiontypes.md): A set of reactions types that a device supports performing.
- [reactionEffectGesturesEnabled](reactioneffectgesturesenabled.md): A Boolean value that indicates whether gesture detection triggers reaction effects on the video stream.
- [performEffect(for:)](performeffect%28for_%29.md): Performs the specified reaction type on the video stream.
- [reactionEffectsInProgress](reactioneffectsinprogress.md): An array of reaction effects that the device is currently performing, sorted by timestamp.
- [AVCaptureReactionEffectState](../avcapturereactioneffectstate.md): An object that reports the state of a reaction effect performed on a capture device.

# canPerformReactionEffects (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

A Boolean value that indicates whether you can perform reaction effects on a capture device.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL canPerformReactionEffects;
```

<a id="Discussion"></a>

## Discussion

This value is [true](https://developer.apple.com/documentation/swift/true) when a device’s [reactionEffectsEnabled](reactioneffectsenabled.md) and its active format’s [reactionEffectsSupported](format/reactioneffectssupported.md) property values are [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Performing reaction effects

- [reactionEffectsEnabled](reactioneffectsenabled.md): A Boolean value that indicates whether the app supports performing reaction effects.
- [availableReactionTypes](availablereactiontypes.md): A set of reactions types that a device supports performing.
- [reactionEffectGesturesEnabled](reactioneffectgesturesenabled.md): A Boolean value that indicates whether gesture detection triggers reaction effects on the video stream.
- [performEffectForReaction:](performeffect%28for_%29.md): Performs the specified reaction type on the video stream.
- [reactionEffectsInProgress](reactioneffectsinprogress.md): An array of reaction effects that the device is currently performing, sorted by timestamp.
- [AVCaptureReactionEffectState](../avcapturereactioneffectstate.md): An object that reports the state of a reaction effect performed on a capture device.
