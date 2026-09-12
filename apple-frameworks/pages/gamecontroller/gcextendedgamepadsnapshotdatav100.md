> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcextendedgamepadsnapshotdatav100](https://developer.apple.com/documentation/gamecontroller/gcextendedgamepadsnapshotdatav100)

# GCExtendedGamepadSnapShotDataV100 (Swift)

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

A structure that holds a snapshot of an extended gamepad controller’s input data.

> Use the -\[GCController controllerWithExtendedGamepad\] method instead

## Declaration

```swift
struct GCExtendedGamepadSnapShotDataV100
```

## Topics

### Instance Properties

- [buttonA](gcextendedgamepadsnapshotdatav100/buttona.md): Deprecated. The value of the A button.
- [buttonB](gcextendedgamepadsnapshotdatav100/buttonb.md): Deprecated. The value of the B button.
- [buttonX](gcextendedgamepadsnapshotdatav100/buttonx.md): Deprecated. The value of the X button.
- [buttonY](gcextendedgamepadsnapshotdatav100/buttony.md): Deprecated. The value of the Y button.
- [dpadX](gcextendedgamepadsnapshotdatav100/dpadx.md): Deprecated. The value of the horizontal axis of the dpad.
- [dpadY](gcextendedgamepadsnapshotdatav100/dpady.md): Deprecated. The value of the vertical axis of the dpad.
- [leftShoulder](gcextendedgamepadsnapshotdatav100/leftshoulder.md): Deprecated. The value of the left shoulder button.
- [leftThumbstickX](gcextendedgamepadsnapshotdatav100/leftthumbstickx.md): Deprecated. The value of the horizontal axis of the left thumbstick.
- [leftThumbstickY](gcextendedgamepadsnapshotdatav100/leftthumbsticky.md): Deprecated. The value of the vertical axis of the left thumbstick.
- [leftTrigger](gcextendedgamepadsnapshotdatav100/lefttrigger.md): Deprecated. The value of the left trigger.
- [rightShoulder](gcextendedgamepadsnapshotdatav100/rightshoulder.md): Deprecated. The value of the right shoulder button.
- [rightThumbstickX](gcextendedgamepadsnapshotdatav100/rightthumbstickx.md): Deprecated. The value of the horizontal axis of the right thumbstick.
- [rightThumbstickY](gcextendedgamepadsnapshotdatav100/rightthumbsticky.md): Deprecated. The value of the vertical axis of the right thumbstick.
- [rightTrigger](gcextendedgamepadsnapshotdatav100/righttrigger.md): Deprecated. The value of the right trigger.
- [size](gcextendedgamepadsnapshotdatav100/size.md): Deprecated. The size of the recorded structure, in bytes.
- [version](gcextendedgamepadsnapshotdatav100/version.md): Deprecated. A value that indicates the version number of the data structure.

### Initializers

- [init()](gcextendedgamepadsnapshotdatav100/init%28%29.md): Deprecated.
- [init(version:size:dpadX:dpadY:buttonA:buttonB:buttonX:buttonY:leftShoulder:rightShoulder:leftThumbstickX:leftThumbstickY:rightThumbstickX:rightThumbstickY:leftTrigger:rightTrigger:)](gcextendedgamepadsnapshotdatav100/init%28version_size_dpadx_dpady_buttona_buttonb_buttonx_buttony_leftshoulder_rightshoulder_leftthumbstickx_leftthumbsticky_rightthumbstickx_rightthumbsticky_lefttrigger_righttrigger_~8f1b2316.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Flattening a Snapshot to Memory

- [NSDataFromGCExtendedGamepadSnapShotDataV100(\_:)](nsdatafromgcextendedgamepadsnapshotdatav100%28__%29.md): Deprecated. Encapsulates the controller data from an extended gamepad structure into a data object.
- [GCExtendedGamepadSnapShotDataV100FromNSData(\_:\_:)](gcextendedgamepadsnapshotdatav100fromnsdata%28____%29.md): Deprecated. Copies the recorded data from an extended gamepad snapshot into a readable structure.

# GCExtendedGamepadSnapShotDataV100 (Objective-C)

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A structure that holds a snapshot of an extended gamepad controller’s input data.

## Declaration

```objectivec
typedef struct { ... } GCExtendedGamepadSnapShotDataV100;
```

## Topics

### Instance Properties

- [buttonA](gcextendedgamepadsnapshotdatav100/buttona.md): Deprecated. The value of the A button.
- [buttonB](gcextendedgamepadsnapshotdatav100/buttonb.md): Deprecated. The value of the B button.
- [buttonX](gcextendedgamepadsnapshotdatav100/buttonx.md): Deprecated. The value of the X button.
- [buttonY](gcextendedgamepadsnapshotdatav100/buttony.md): Deprecated. The value of the Y button.
- [dpadX](gcextendedgamepadsnapshotdatav100/dpadx.md): Deprecated. The value of the horizontal axis of the dpad.
- [dpadY](gcextendedgamepadsnapshotdatav100/dpady.md): Deprecated. The value of the vertical axis of the dpad.
- [leftShoulder](gcextendedgamepadsnapshotdatav100/leftshoulder.md): Deprecated. The value of the left shoulder button.
- [leftThumbstickX](gcextendedgamepadsnapshotdatav100/leftthumbstickx.md): Deprecated. The value of the horizontal axis of the left thumbstick.
- [leftThumbstickY](gcextendedgamepadsnapshotdatav100/leftthumbsticky.md): Deprecated. The value of the vertical axis of the left thumbstick.
- [leftTrigger](gcextendedgamepadsnapshotdatav100/lefttrigger.md): Deprecated. The value of the left trigger.
- [rightShoulder](gcextendedgamepadsnapshotdatav100/rightshoulder.md): Deprecated. The value of the right shoulder button.
- [rightThumbstickX](gcextendedgamepadsnapshotdatav100/rightthumbstickx.md): Deprecated. The value of the horizontal axis of the right thumbstick.
- [rightThumbstickY](gcextendedgamepadsnapshotdatav100/rightthumbsticky.md): Deprecated. The value of the vertical axis of the right thumbstick.
- [rightTrigger](gcextendedgamepadsnapshotdatav100/righttrigger.md): Deprecated. The value of the right trigger.
- [size](gcextendedgamepadsnapshotdatav100/size.md): Deprecated. The size of the recorded structure, in bytes.
- [version](gcextendedgamepadsnapshotdatav100/version.md): Deprecated. A value that indicates the version number of the data structure.

## See Also

### Flattening a Snapshot to Memory

- [NSDataFromGCExtendedGamepadSnapShotDataV100](nsdatafromgcextendedgamepadsnapshotdatav100%28__%29.md): Deprecated. Encapsulates the controller data from an extended gamepad structure into a data object.
- [GCExtendedGamepadSnapShotDataV100FromNSData](gcextendedgamepadsnapshotdatav100fromnsdata%28____%29.md): Deprecated. Copies the recorded data from an extended gamepad snapshot into a readable structure.
