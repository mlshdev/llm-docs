> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturereactioneffectstate](https://developer.apple.com/documentation/avfoundation/avcapturereactioneffectstate)

# AVCaptureReactionEffectState (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

An object that reports the state of a reaction effect performed on a capture device.

## Declaration

```swift
class AVCaptureReactionEffectState
```

<a id="overview"></a>

## Overview

Obtain an instance of this class by querying a capture device’s [reactionEffectsInProgress](avcapturedevice/reactioneffectsinprogress.md) property. The system adds new entries to this array when you call [performEffect(for:)](avcapturedevice/performeffect%28for_%29.md) or by gesture detection in the capture stream when the value of [reactionEffectGesturesEnabled](avcapturedevice/reactioneffectgesturesenabled.md) is [true](https://developer.apple.com/documentation/swift/true).

The system renders the effect before providing frames to your app, and these status objects let you know when it performs the effect.

## Topics

### Configuring the effect state

- [reactionType](avcapturereactioneffectstate/reactiontype.md): The type of reaction.
- [AVCaptureReactionType](avcapturereactiontype.md): Constants that indicate the type of reaction that an effect can perform.
- [startTime](avcapturereactioneffectstate/starttime.md): The presentation time of the first frame where the system renders the effect.
- [endTime](avcapturereactioneffectstate/endtime.md): The presentation time of the first frame following the end of a reaction effect.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Performing reaction effects

- [reactionEffectsEnabled](avcapturedevice/reactioneffectsenabled.md): A Boolean value that indicates whether the app supports performing reaction effects.
- [canPerformReactionEffects](avcapturedevice/canperformreactioneffects.md): A Boolean value that indicates whether you can perform reaction effects on a capture device.
- [availableReactionTypes](avcapturedevice/availablereactiontypes.md): A set of reactions types that a device supports performing.
- [reactionEffectGesturesEnabled](avcapturedevice/reactioneffectgesturesenabled.md): A Boolean value that indicates whether gesture detection triggers reaction effects on the video stream.
- [performEffect(for:)](avcapturedevice/performeffect%28for_%29.md): Performs the specified reaction type on the video stream.
- [reactionEffectsInProgress](avcapturedevice/reactioneffectsinprogress.md): An array of reaction effects that the device is currently performing, sorted by timestamp.

# AVCaptureReactionEffectState (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

An object that reports the state of a reaction effect performed on a capture device.

## Declaration

```objectivec
@interface AVCaptureReactionEffectState : NSObject
```

<a id="overview"></a>

## Overview

Obtain an instance of this class by querying a capture device’s [reactionEffectsInProgress](avcapturedevice/reactioneffectsinprogress.md) property. The system adds new entries to this array when you call [performEffectForReaction:](avcapturedevice/performeffect%28for_%29.md) or by gesture detection in the capture stream when the value of [reactionEffectGesturesEnabled](avcapturedevice/reactioneffectgesturesenabled.md) is [true](https://developer.apple.com/documentation/swift/true).

The system renders the effect before providing frames to your app, and these status objects let you know when it performs the effect.

## Topics

### Configuring the effect state

- [reactionType](avcapturereactioneffectstate/reactiontype.md): The type of reaction.
- [AVCaptureReactionType](avcapturereactiontype.md): Constants that indicate the type of reaction that an effect can perform.
- [startTime](avcapturereactioneffectstate/starttime.md): The presentation time of the first frame where the system renders the effect.
- [endTime](avcapturereactioneffectstate/endtime.md): The presentation time of the first frame following the end of a reaction effect.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Performing reaction effects

- [reactionEffectsEnabled](avcapturedevice/reactioneffectsenabled.md): A Boolean value that indicates whether the app supports performing reaction effects.
- [canPerformReactionEffects](avcapturedevice/canperformreactioneffects.md): A Boolean value that indicates whether you can perform reaction effects on a capture device.
- [availableReactionTypes](avcapturedevice/availablereactiontypes.md): A set of reactions types that a device supports performing.
- [reactionEffectGesturesEnabled](avcapturedevice/reactioneffectgesturesenabled.md): A Boolean value that indicates whether gesture detection triggers reaction effects on the video stream.
- [performEffectForReaction:](avcapturedevice/performeffect%28for_%29.md): Performs the specified reaction type on the video stream.
- [reactionEffectsInProgress](avcapturedevice/reactioneffectsinprogress.md): An array of reaction effects that the device is currently performing, sorted by timestamp.
