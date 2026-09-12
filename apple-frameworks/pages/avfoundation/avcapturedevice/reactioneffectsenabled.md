> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/reactioneffectsenabled](https://developer.apple.com/documentation/avfoundation/avcapturedevice/reactioneffectsenabled)

# reactionEffectsEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the app supports performing reaction effects.

## Declaration

```swift
class var reactionEffectsEnabled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The system only renders reaction effects when the device’s active format supports the feature, which you determine by querying the value of its [reactionEffectsSupported](format/reactioneffectssupported.md) property.

In macOS, the system enables reaction effects for all apps by default. In iOS, it enables them by default only for video conferencing apps (apps that enable the Voice over IP option in their [UIBackgroundModes](../../bundleresources/information-property-list/uibackgroundmodes.md) configuration). Apps that don’t use this background mode may opt in to this feature by adding the following key to the `Info.plist` file.

```swift
<key>NSCameraReactionEffectsEnabled</key>
<true/>
```

## See Also

### Performing reaction effects

- [canPerformReactionEffects](canperformreactioneffects.md): A Boolean value that indicates whether you can perform reaction effects on a capture device.
- [availableReactionTypes](availablereactiontypes.md): A set of reactions types that a device supports performing.
- [reactionEffectGesturesEnabled](reactioneffectgesturesenabled.md): A Boolean value that indicates whether gesture detection triggers reaction effects on the video stream.
- [performEffect(for:)](performeffect%28for_%29.md): Performs the specified reaction type on the video stream.
- [reactionEffectsInProgress](reactioneffectsinprogress.md): An array of reaction effects that the device is currently performing, sorted by timestamp.
- [AVCaptureReactionEffectState](../avcapturereactioneffectstate.md): An object that reports the state of a reaction effect performed on a capture device.

# reactionEffectsEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the app supports performing reaction effects.

## Declaration

```objectivec
@property (class, readonly) BOOL reactionEffectsEnabled;
```

<a id="Discussion"></a>

## Discussion

The system only renders reaction effects when the device’s active format supports the feature, which you determine by querying the value of its [reactionEffectsSupported](format/reactioneffectssupported.md) property.

In macOS, the system enables reaction effects for all apps by default. In iOS, it enables them by default only for video conferencing apps (apps that enable the Voice over IP option in their [UIBackgroundModes](../../bundleresources/information-property-list/uibackgroundmodes.md) configuration). Apps that don’t use this background mode may opt in to this feature by adding the following key to the `Info.plist` file.

```swift
<key>NSCameraReactionEffectsEnabled</key>
<true/>
```

## See Also

### Performing reaction effects

- [canPerformReactionEffects](canperformreactioneffects.md): A Boolean value that indicates whether you can perform reaction effects on a capture device.
- [availableReactionTypes](availablereactiontypes.md): A set of reactions types that a device supports performing.
- [reactionEffectGesturesEnabled](reactioneffectgesturesenabled.md): A Boolean value that indicates whether gesture detection triggers reaction effects on the video stream.
- [performEffectForReaction:](performeffect%28for_%29.md): Performs the specified reaction type on the video stream.
- [reactionEffectsInProgress](reactioneffectsinprogress.md): An array of reaction effects that the device is currently performing, sorted by timestamp.
- [AVCaptureReactionEffectState](../avcapturereactioneffectstate.md): An object that reports the state of a reaction effect performed on a capture device.
