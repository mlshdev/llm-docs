> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcextendedgamepadsnapshot](https://developer.apple.com/documentation/gamecontroller/gcextendedgamepadsnapshot)

# GCExtendedGamepadSnapshot (Swift)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

A recording of all of the values provided by a [GCExtendedGamepad](gcextendedgamepad.md) object.

> Use the [withExtendedGamepad()](gccontroller/withextendedgamepad%28%29.md) method instead.

## Declaration

```swift
class GCExtendedGamepadSnapshot
```

<a id="overview"></a>

## Overview

To create a gamepad snapshot, call the [saveSnapshot()](gcextendedgamepad/savesnapshot%28%29.md) method on a [GCExtendedGamepad](gcextendedgamepad.md) object. The [GCExtendedGamepadSnapshot](gcextendedgamepadsnapshot.md) class is a subclass of the [GCExtendedGamepad](gcextendedgamepad.md) class, so you use the parent class’s properties to read the individual element values. The snapshot is stored in a device independent format. To get the flattened data representation of the snapshot data, read the [snapshotData](gcextendedgamepadsnapshot/snapshotdata.md) property.

## Topics

### Converting Between Extended Snapshots and Data Objects

- [init(snapshotData:)](gcextendedgamepadsnapshot/init%28snapshotdata_%29.md): Deprecated. Initializes a snapshot object with the flattened data representation obtained from another snapshot.
- [init(controller:snapshotData:)](gcextendedgamepadsnapshot/init%28controller_snapshotdata_%29.md): Deprecated. Initializes a snapshot object associated with a specific controller using a flattened data representation obtained from another snapshot.
- [snapshotData](gcextendedgamepadsnapshot/snapshotdata.md): Deprecated. Flattens a snapshot into an archivable memory representation.

### Flattening a Snapshot to Memory

- [GCExtendedGamepadSnapShotDataV100](gcextendedgamepadsnapshotdatav100.md): Deprecated. A structure that holds a snapshot of an extended gamepad controller’s input data.
- [NSDataFromGCExtendedGamepadSnapShotDataV100(\_:)](nsdatafromgcextendedgamepadsnapshotdatav100%28__%29.md): Deprecated. Encapsulates the controller data from an extended gamepad structure into a data object.
- [GCExtendedGamepadSnapShotDataV100FromNSData(\_:\_:)](gcextendedgamepadsnapshotdatav100fromnsdata%28____%29.md): Deprecated. Copies the recorded data from an extended gamepad snapshot into a readable structure.

## Relationships

### Inherits From

- [GCExtendedGamepad](gcextendedgamepad.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Deprecated symbols

- [GCGamepad](gcgamepad.md): Deprecated. The standard set of gamepad controls.
- [GCGamepadSnapshot](gcgamepadsnapshot.md): Deprecated. A recording of all of the values provided by a [GCGamepad](gcgamepad.md) object.
- [GCMicroGamepadSnapshot](gcmicrogamepadsnapshot.md): Deprecated. A recording of all of the values provided by a [GCMicroGamepad](gcmicrogamepad.md) object.
- [GCExtendedGamepadSnapshotData](gcextendedgamepadsnapshotdata.md): Deprecated.
- [GCMicroGamepadSnapshotData](gcmicrogamepadsnapshotdata.md): Deprecated.
- [GCExtendedGamepadSnapshotDataVersion](gcextendedgamepadsnapshotdataversion.md): Deprecated.
- [GCMicroGamepadSnapshotDataVersion](gcmicrogamepadsnapshotdataversion.md): Deprecated.
- [GCCurrentExtendedGamepadSnapshotDataVersion](gccurrentextendedgamepadsnapshotdataversion.md): Deprecated.
- [GCCurrentMicroGamepadSnapshotDataVersion](gccurrentmicrogamepadsnapshotdataversion.md): Deprecated.
- [GCExtendedGamepadSnapshotDataFromNSData(\_:\_:)](gcextendedgamepadsnapshotdatafromnsdata%28____%29.md): Deprecated.
- [GCMicroGamepadSnapshotDataFromNSData(\_:\_:)](gcmicrogamepadsnapshotdatafromnsdata%28____%29.md): Deprecated.
- [NSDataFromGCExtendedGamepadSnapshotData(\_:)](nsdatafromgcextendedgamepadsnapshotdata%28__%29.md): Deprecated.
- [NSDataFromGCMicroGamepadSnapshotData(\_:)](nsdatafromgcmicrogamepadsnapshotdata%28__%29.md): Deprecated.

# GCExtendedGamepadSnapshot (Objective-C)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

A recording of all of the values provided by a [GCExtendedGamepad](gcextendedgamepad.md) object.

> Use the [controllerWithExtendedGamepad](gccontroller/withextendedgamepad%28%29.md) method instead.

## Declaration

```objectivec
@interface GCExtendedGamepadSnapshot : GCExtendedGamepad
```

<a id="overview"></a>

## Overview

To create a gamepad snapshot, call the [saveSnapshot](gcextendedgamepad/savesnapshot%28%29.md) method on a [GCExtendedGamepad](gcextendedgamepad.md) object. The [GCExtendedGamepadSnapshot](gcextendedgamepadsnapshot.md) class is a subclass of the [GCExtendedGamepad](gcextendedgamepad.md) class, so you use the parent class’s properties to read the individual element values. The snapshot is stored in a device independent format. To get the flattened data representation of the snapshot data, read the [snapshotData](gcextendedgamepadsnapshot/snapshotdata.md) property.

## Topics

### Converting Between Extended Snapshots and Data Objects

- [initWithSnapshotData:](gcextendedgamepadsnapshot/init%28snapshotdata_%29.md): Deprecated. Initializes a snapshot object with the flattened data representation obtained from another snapshot.
- [initWithController:snapshotData:](gcextendedgamepadsnapshot/init%28controller_snapshotdata_%29.md): Deprecated. Initializes a snapshot object associated with a specific controller using a flattened data representation obtained from another snapshot.
- [snapshotData](gcextendedgamepadsnapshot/snapshotdata.md): Deprecated. Flattens a snapshot into an archivable memory representation.

### Flattening a Snapshot to Memory

- [GCExtendedGamepadSnapShotDataV100](gcextendedgamepadsnapshotdatav100.md): Deprecated. A structure that holds a snapshot of an extended gamepad controller’s input data.
- [NSDataFromGCExtendedGamepadSnapShotDataV100](nsdatafromgcextendedgamepadsnapshotdatav100%28__%29.md): Deprecated. Encapsulates the controller data from an extended gamepad structure into a data object.
- [GCExtendedGamepadSnapShotDataV100FromNSData](gcextendedgamepadsnapshotdatav100fromnsdata%28____%29.md): Deprecated. Copies the recorded data from an extended gamepad snapshot into a readable structure.

## Relationships

### Inherits From

- [GCExtendedGamepad](gcextendedgamepad.md)

## See Also

### Deprecated symbols

- [GCGamepad](gcgamepad.md): Deprecated. The standard set of gamepad controls.
- [GCGamepadSnapshot](gcgamepadsnapshot.md): Deprecated. A recording of all of the values provided by a [GCGamepad](gcgamepad.md) object.
- [GCMicroGamepadSnapshot](gcmicrogamepadsnapshot.md): Deprecated. A recording of all of the values provided by a [GCMicroGamepad](gcmicrogamepad.md) object.
- [GCExtendedGamepadSnapshotData](gcextendedgamepadsnapshotdata.md): Deprecated.
- [GCMicroGamepadSnapshotData](gcmicrogamepadsnapshotdata.md): Deprecated.
- [GCExtendedGamepadSnapshotDataVersion](gcextendedgamepadsnapshotdataversion.md): Deprecated.
- [GCMicroGamepadSnapshotDataVersion](gcmicrogamepadsnapshotdataversion.md): Deprecated.
- [GCCurrentExtendedGamepadSnapshotDataVersion](gccurrentextendedgamepadsnapshotdataversion.md): Deprecated.
- [GCCurrentMicroGamepadSnapshotDataVersion](gccurrentmicrogamepadsnapshotdataversion.md): Deprecated.
- [GCExtendedGamepadSnapshotDataFromNSData](gcextendedgamepadsnapshotdatafromnsdata%28____%29.md): Deprecated.
- [GCMicroGamepadSnapshotDataFromNSData](gcmicrogamepadsnapshotdatafromnsdata%28____%29.md): Deprecated.
- [NSDataFromGCExtendedGamepadSnapshotData](nsdatafromgcextendedgamepadsnapshotdata%28__%29.md): Deprecated.
- [NSDataFromGCMicroGamepadSnapshotData](nsdatafromgcmicrogamepadsnapshotdata%28__%29.md): Deprecated.
