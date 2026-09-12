> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcgamepadsnapshot](https://developer.apple.com/documentation/gamecontroller/gcgamepadsnapshot)

# GCGamepadSnapshot (Swift)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

A recording of all of the values provided by a [GCGamepad](gcgamepad.md) object.

> Use the [GCExtendedGamepad](gcextendedgamepad.md) class instead.

## Declaration

```swift
class GCGamepadSnapshot
```

<a id="overview"></a>

## Overview

To create a gamepad snapshot, call the [saveSnapshot()](gcgamepad/savesnapshot%28%29.md) method on a [GCGamepad](gcgamepad.md) object. The [GCGamepadSnapshot](gcgamepadsnapshot.md) class is a subclass of the [GCGamepad](gcgamepad.md) class, so you use the parent class’s properties to read the individual element values. The snapshot is stored in a device independent format. To get the flattened data representation of the snapshot data, read the [snapshotData](gcgamepadsnapshot/snapshotdata.md) property.

## Topics

### Converting Between Snapshots and Data Objects

- [init(snapshotData:)](gcgamepadsnapshot/init%28snapshotdata_%29.md): Deprecated. Initializes a snapshot object with the flattened data representation obtained from another snapshot.
- [init(controller:snapshotData:)](gcgamepadsnapshot/init%28controller_snapshotdata_%29.md): Deprecated. Initializes a snapshot object associated with a specific controller using a flattened data representation obtained from another snapshot.
- [snapshotData](gcgamepadsnapshot/snapshotdata.md): Deprecated. The flattened control input values for the snapshot.

### Flattening a Snapshot to Memory

- [GCGamepadSnapShotDataV100](gcgamepadsnapshotdatav100.md): Deprecated. A structure that holds a snapshot of a gamepad controller’s input data.
- [NSDataFromGCGamepadSnapShotDataV100(\_:)](nsdatafromgcgamepadsnapshotdatav100%28__%29.md): Deprecated. Encapsulates the controller data from a gamepad structure into a data object.
- [GCGamepadSnapShotDataV100FromNSData(\_:\_:)](gcgamepadsnapshotdatav100fromnsdata%28____%29.md): Deprecated. Copies the recorded data from a gamepad snapshot into a readable structure.

## Relationships

### Inherits From

- [GCGamepad](gcgamepad.md)

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
- [GCExtendedGamepadSnapshot](gcextendedgamepadsnapshot.md): Deprecated. A recording of all of the values provided by a [GCExtendedGamepad](gcextendedgamepad.md) object.
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

# GCGamepadSnapshot (Objective-C)

**Framework:** Game Controller  
**Kind:** Class  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

A recording of all of the values provided by a [GCGamepad](gcgamepad.md) object.

> Use the [GCExtendedGamepad](gcextendedgamepad.md) class instead.

## Declaration

```objectivec
@interface GCGamepadSnapshot : GCGamepad
```

<a id="overview"></a>

## Overview

To create a gamepad snapshot, call the [saveSnapshot](gcgamepad/savesnapshot%28%29.md) method on a [GCGamepad](gcgamepad.md) object. The [GCGamepadSnapshot](gcgamepadsnapshot.md) class is a subclass of the [GCGamepad](gcgamepad.md) class, so you use the parent class’s properties to read the individual element values. The snapshot is stored in a device independent format. To get the flattened data representation of the snapshot data, read the [snapshotData](gcgamepadsnapshot/snapshotdata.md) property.

## Topics

### Converting Between Snapshots and Data Objects

- [initWithSnapshotData:](gcgamepadsnapshot/init%28snapshotdata_%29.md): Deprecated. Initializes a snapshot object with the flattened data representation obtained from another snapshot.
- [initWithController:snapshotData:](gcgamepadsnapshot/init%28controller_snapshotdata_%29.md): Deprecated. Initializes a snapshot object associated with a specific controller using a flattened data representation obtained from another snapshot.
- [snapshotData](gcgamepadsnapshot/snapshotdata.md): Deprecated. The flattened control input values for the snapshot.

### Flattening a Snapshot to Memory

- [GCGamepadSnapShotDataV100](gcgamepadsnapshotdatav100.md): Deprecated. A structure that holds a snapshot of a gamepad controller’s input data.
- [NSDataFromGCGamepadSnapShotDataV100](nsdatafromgcgamepadsnapshotdatav100%28__%29.md): Deprecated. Encapsulates the controller data from a gamepad structure into a data object.
- [GCGamepadSnapShotDataV100FromNSData](gcgamepadsnapshotdatav100fromnsdata%28____%29.md): Deprecated. Copies the recorded data from a gamepad snapshot into a readable structure.

## Relationships

### Inherits From

- [GCGamepad](gcgamepad.md)

## See Also

### Deprecated symbols

- [GCGamepad](gcgamepad.md): Deprecated. The standard set of gamepad controls.
- [GCExtendedGamepadSnapshot](gcextendedgamepadsnapshot.md): Deprecated. A recording of all of the values provided by a [GCExtendedGamepad](gcextendedgamepad.md) object.
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
