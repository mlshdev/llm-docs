> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcgamepadsnapshotdatav100](https://developer.apple.com/documentation/gamecontroller/gcgamepadsnapshotdatav100)

# GCGamepadSnapShotDataV100 (Swift)

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

A structure that holds a snapshot of a gamepad controller’s input data.

> Use GCExtendedGamepad instead

## Declaration

```swift
struct GCGamepadSnapShotDataV100
```

## Topics

### Instance Properties

- [buttonA](gcgamepadsnapshotdatav100/buttona.md): Deprecated. The value of the A button.
- [buttonB](gcgamepadsnapshotdatav100/buttonb.md): Deprecated. The value of the B button.
- [buttonX](gcgamepadsnapshotdatav100/buttonx.md): Deprecated. The value of the X button.
- [buttonY](gcgamepadsnapshotdatav100/buttony.md): Deprecated. The value of the Y button.
- [dpadX](gcgamepadsnapshotdatav100/dpadx.md): Deprecated. The value of the horizontal axis of the dpad.
- [dpadY](gcgamepadsnapshotdatav100/dpady.md): Deprecated. The value of the vertical axis of the dpad.
- [leftShoulder](gcgamepadsnapshotdatav100/leftshoulder.md): Deprecated. The value of the left shoulder button.
- [rightShoulder](gcgamepadsnapshotdatav100/rightshoulder.md): Deprecated. The value of the right shoulder button.
- [size](gcgamepadsnapshotdatav100/size.md): Deprecated. The size of the recorded structure, in bytes.
- [version](gcgamepadsnapshotdatav100/version.md): Deprecated. A value that indicates the version number of the data structure.

### Initializers

- [init()](gcgamepadsnapshotdatav100/init%28%29.md): Deprecated.
- [init(version:size:dpadX:dpadY:buttonA:buttonB:buttonX:buttonY:leftShoulder:rightShoulder:)](gcgamepadsnapshotdatav100/init%28version_size_dpadx_dpady_buttona_buttonb_buttonx_buttony_leftshoulder_rightshoulder_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Flattening a Snapshot to Memory

- [NSDataFromGCGamepadSnapShotDataV100(\_:)](nsdatafromgcgamepadsnapshotdatav100%28__%29.md): Deprecated. Encapsulates the controller data from a gamepad structure into a data object.
- [GCGamepadSnapShotDataV100FromNSData(\_:\_:)](gcgamepadsnapshotdatav100fromnsdata%28____%29.md): Deprecated. Copies the recorded data from a gamepad snapshot into a readable structure.

# GCGamepadSnapShotDataV100 (Objective-C)

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A structure that holds a snapshot of a gamepad controller’s input data.

## Declaration

```objectivec
typedef struct { ... } GCGamepadSnapShotDataV100;
```

## Topics

### Instance Properties

- [buttonA](gcgamepadsnapshotdatav100/buttona.md): Deprecated. The value of the A button.
- [buttonB](gcgamepadsnapshotdatav100/buttonb.md): Deprecated. The value of the B button.
- [buttonX](gcgamepadsnapshotdatav100/buttonx.md): Deprecated. The value of the X button.
- [buttonY](gcgamepadsnapshotdatav100/buttony.md): Deprecated. The value of the Y button.
- [dpadX](gcgamepadsnapshotdatav100/dpadx.md): Deprecated. The value of the horizontal axis of the dpad.
- [dpadY](gcgamepadsnapshotdatav100/dpady.md): Deprecated. The value of the vertical axis of the dpad.
- [leftShoulder](gcgamepadsnapshotdatav100/leftshoulder.md): Deprecated. The value of the left shoulder button.
- [rightShoulder](gcgamepadsnapshotdatav100/rightshoulder.md): Deprecated. The value of the right shoulder button.
- [size](gcgamepadsnapshotdatav100/size.md): Deprecated. The size of the recorded structure, in bytes.
- [version](gcgamepadsnapshotdatav100/version.md): Deprecated. A value that indicates the version number of the data structure.

## See Also

### Flattening a Snapshot to Memory

- [NSDataFromGCGamepadSnapShotDataV100](nsdatafromgcgamepadsnapshotdatav100%28__%29.md): Deprecated. Encapsulates the controller data from a gamepad structure into a data object.
- [GCGamepadSnapShotDataV100FromNSData](gcgamepadsnapshotdatav100fromnsdata%28____%29.md): Deprecated. Copies the recorded data from a gamepad snapshot into a readable structure.
