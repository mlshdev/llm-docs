> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/reactioneffectgesturesenabled](https://developer.apple.com/documentation/avfoundation/avcapturedevice/reactioneffectgesturesenabled)

# reactionEffectGesturesEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

A Boolean value that indicates whether gesture detection triggers reaction effects on the video stream.

## Declaration

```swift
class var reactionEffectGesturesEnabled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property reflects the enabled state of Gestures in Control Center.

Gesture detection runs only when the device’s active format supports reaction effects, which you determine by querying the value of the format’s [reactionEffectsSupported](format/reactioneffectssupported.md) property.

This property is key-value observable.

> **Note**

>  Your app can call [performEffect(for:)](performeffect%28for_%29.md)independently the value of this property. The system intermixes reaction effects from either source.

## See Also

### Performing reaction effects

- [reactionEffectsEnabled](reactioneffectsenabled.md): A Boolean value that indicates whether the app supports performing reaction effects.
- [canPerformReactionEffects](canperformreactioneffects.md): A Boolean value that indicates whether you can perform reaction effects on a capture device.
- [availableReactionTypes](availablereactiontypes.md): A set of reactions types that a device supports performing.
- [performEffect(for:)](performeffect%28for_%29.md): Performs the specified reaction type on the video stream.
- [reactionEffectsInProgress](reactioneffectsinprogress.md): An array of reaction effects that the device is currently performing, sorted by timestamp.
- [AVCaptureReactionEffectState](../avcapturereactioneffectstate.md): An object that reports the state of a reaction effect performed on a capture device.

# reactionEffectGesturesEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

A Boolean value that indicates whether gesture detection triggers reaction effects on the video stream.

## Declaration

```objectivec
@property (class, readonly) BOOL reactionEffectGesturesEnabled;
```

<a id="Discussion"></a>

## Discussion

This property reflects the enabled state of Gestures in Control Center.

Gesture detection runs only when the device’s active format supports reaction effects, which you determine by querying the value of the format’s [reactionEffectsSupported](format/reactioneffectssupported.md) property.

This property is key-value observable.

> **Note**

>  Your app can call [performEffectForReaction:](performeffect%28for_%29.md)independently the value of this property. The system intermixes reaction effects from either source.

## See Also

### Performing reaction effects

- [reactionEffectsEnabled](reactioneffectsenabled.md): A Boolean value that indicates whether the app supports performing reaction effects.
- [canPerformReactionEffects](canperformreactioneffects.md): A Boolean value that indicates whether you can perform reaction effects on a capture device.
- [availableReactionTypes](availablereactiontypes.md): A set of reactions types that a device supports performing.
- [performEffectForReaction:](performeffect%28for_%29.md): Performs the specified reaction type on the video stream.
- [reactionEffectsInProgress](reactioneffectsinprogress.md): An array of reaction effects that the device is currently performing, sorted by timestamp.
- [AVCaptureReactionEffectState](../avcapturereactioneffectstate.md): An object that reports the state of a reaction effect performed on a capture device.
