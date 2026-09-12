> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcmicrogamepadsnapshotdatav100](https://developer.apple.com/documentation/gamecontroller/gcmicrogamepadsnapshotdatav100)

# GCMicroGamepadSnapShotDataV100 (Swift)

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.11+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

A structure that holds a snapshot of a micro gamepad controller’s input data.

> Use the -\[GCController controllerWithMicroGamepad\] method instead

## Declaration

```swift
struct GCMicroGamepadSnapShotDataV100
```

## Topics

### Instance Properties

- [buttonA](gcmicrogamepadsnapshotdatav100/buttona.md): Deprecated. The value of the A button.
- [buttonX](gcmicrogamepadsnapshotdatav100/buttonx.md): Deprecated.
- [dpadX](gcmicrogamepadsnapshotdatav100/dpadx.md): Deprecated. The value of the horizontal axis of the dpad.
- [dpadY](gcmicrogamepadsnapshotdatav100/dpady.md): Deprecated. The value of the vertical axis of the dpad.
- [size](gcmicrogamepadsnapshotdatav100/size.md): Deprecated. The size of the recorded structure, in bytes.
- [version](gcmicrogamepadsnapshotdatav100/version.md): Deprecated. A value that indicates the version number of the data structure.

### Initializers

- [init()](gcmicrogamepadsnapshotdatav100/init%28%29.md): Deprecated.
- [init(version:size:dpadX:dpadY:buttonA:buttonX:)](gcmicrogamepadsnapshotdatav100/init%28version_size_dpadx_dpady_buttona_buttonx_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Flattening a Snapshot to Memory

- [NSDataFromGCMicroGamepadSnapShotDataV100(\_:)](nsdatafromgcmicrogamepadsnapshotdatav100%28__%29.md): Deprecated. Encapsulates the controller data from a micro gamepad structure into a data object.
- [GCMicroGamepadSnapShotDataV100FromNSData(\_:\_:)](gcmicrogamepadsnapshotdatav100fromnsdata%28____%29.md): Deprecated. Copies the recorded data from a micro gamepad snapshot into a readable structure.

# GCMicroGamepadSnapShotDataV100 (Objective-C)

**Framework:** Game Controller  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A structure that holds a snapshot of a micro gamepad controller’s input data.

## Declaration

```objectivec
typedef struct { ... } GCMicroGamepadSnapShotDataV100;
```

## Topics

### Instance Properties

- [buttonA](gcmicrogamepadsnapshotdatav100/buttona.md): Deprecated. The value of the A button.
- [buttonX](gcmicrogamepadsnapshotdatav100/buttonx.md): Deprecated.
- [dpadX](gcmicrogamepadsnapshotdatav100/dpadx.md): Deprecated. The value of the horizontal axis of the dpad.
- [dpadY](gcmicrogamepadsnapshotdatav100/dpady.md): Deprecated. The value of the vertical axis of the dpad.
- [size](gcmicrogamepadsnapshotdatav100/size.md): Deprecated. The size of the recorded structure, in bytes.
- [version](gcmicrogamepadsnapshotdatav100/version.md): Deprecated. A value that indicates the version number of the data structure.

## See Also

### Flattening a Snapshot to Memory

- [NSDataFromGCMicroGamepadSnapShotDataV100](nsdatafromgcmicrogamepadsnapshotdatav100%28__%29.md): Deprecated. Encapsulates the controller data from a micro gamepad structure into a data object.
- [GCMicroGamepadSnapShotDataV100FromNSData](gcmicrogamepadsnapshotdatav100fromnsdata%28____%29.md): Deprecated. Copies the recorded data from a micro gamepad snapshot into a readable structure.
