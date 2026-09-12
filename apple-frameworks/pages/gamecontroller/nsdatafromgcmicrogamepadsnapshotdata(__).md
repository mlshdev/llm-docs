> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/nsdatafromgcmicrogamepadsnapshotdata(_:)](https://developer.apple.com/documentation/gamecontroller/nsdatafromgcmicrogamepadsnapshotdata(_:))

# NSDataFromGCMicroGamepadSnapshotData(\_:) (Swift)

**Framework:** Game Controller  
**Kind:** Function  
**Availability:** iOS 13.0+ (deprecated in 13.0) · iPadOS 13.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.15+ (deprecated in 10.15) · tvOS 13.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

> Use the [withMicroGamepad()](gccontroller/withmicrogamepad%28%29.md) method instead.

## Declaration

```swift
func NSDataFromGCMicroGamepadSnapshotData(_ snapshotData: UnsafeMutablePointer<GCMicroGamepadSnapshotData>?) -> Data?
```

## See Also

### Deprecated symbols

- [GCGamepad](gcgamepad.md): Deprecated. The standard set of gamepad controls.
- [GCExtendedGamepadSnapshot](gcextendedgamepadsnapshot.md): Deprecated. A recording of all of the values provided by a [GCExtendedGamepad](gcextendedgamepad.md) object.
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

# NSDataFromGCMicroGamepadSnapshotData (Objective-C)

**Framework:** Game Controller  
**Kind:** Function  
**Availability:** iOS 13.0+ (deprecated in 13.0) · iPadOS 13.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.15+ (deprecated in 10.15) · tvOS 13.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

> Use the [controllerWithMicroGamepad](gccontroller/withmicrogamepad%28%29.md) method instead.

## Declaration

```objectivec
NSData *NSDataFromGCMicroGamepadSnapshotData(GCMicroGamepadSnapshotData *snapshotData);
```

## See Also

### Deprecated symbols

- [GCGamepad](gcgamepad.md): Deprecated. The standard set of gamepad controls.
- [GCExtendedGamepadSnapshot](gcextendedgamepadsnapshot.md): Deprecated. A recording of all of the values provided by a [GCExtendedGamepad](gcextendedgamepad.md) object.
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
