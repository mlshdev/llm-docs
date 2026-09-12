> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/nsdatafromgcextendedgamepadsnapshotdatav100(_:)](https://developer.apple.com/documentation/gamecontroller/nsdatafromgcextendedgamepadsnapshotdatav100(_:))

# NSDataFromGCExtendedGamepadSnapShotDataV100(\_:) (Swift)

**Framework:** Game Controller  
**Kind:** Function  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

Encapsulates the controller data from an extended gamepad structure into a data object.

> Use the [withExtendedGamepad()](gccontroller/withextendedgamepad%28%29.md) method instead.

## Declaration

```swift
func NSDataFromGCExtendedGamepadSnapShotDataV100(_ snapshotData: UnsafeMutablePointer<GCExtendedGamepadSnapShotDataV100>?) -> Data?
```

## Parameters

- `snapshotData`: A pointer to memory that contains a set of extended gamepad control values.

<a id="return-value"></a>

## Return Value

A new [NSData](../foundation/nsdata.md) object that contains the snapshot data, or `nil` if an error occurred.

<a id="Discussion"></a>

## Discussion

If the version and size is not set in the snapshot the data will automatically have a version of `0x100` and a size equal to `sizeof(GCExtendedGamepadSnapShotDataV100)`.

## See Also

### Flattening a Snapshot to Memory

- [GCExtendedGamepadSnapShotDataV100](gcextendedgamepadsnapshotdatav100.md): Deprecated. A structure that holds a snapshot of an extended gamepad controller’s input data.
- [GCExtendedGamepadSnapShotDataV100FromNSData(\_:\_:)](gcextendedgamepadsnapshotdatav100fromnsdata%28____%29.md): Deprecated. Copies the recorded data from an extended gamepad snapshot into a readable structure.

# NSDataFromGCExtendedGamepadSnapShotDataV100 (Objective-C)

**Framework:** Game Controller  
**Kind:** Function  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

Encapsulates the controller data from an extended gamepad structure into a data object.

> Use the [controllerWithExtendedGamepad](gccontroller/withextendedgamepad%28%29.md) method instead.

## Declaration

```objectivec
NSData *NSDataFromGCExtendedGamepadSnapShotDataV100(GCExtendedGamepadSnapShotDataV100 *snapshotData);
```

## Parameters

- `snapshotData`: A pointer to memory that contains a set of extended gamepad control values.

<a id="return-value"></a>

## Return Value

A new [NSData](../foundation/nsdata.md) object that contains the snapshot data, or `nil` if an error occurred.

<a id="Discussion"></a>

## Discussion

If the version and size is not set in the snapshot the data will automatically have a version of `0x100` and a size equal to `sizeof(GCExtendedGamepadSnapShotDataV100)`.

## See Also

### Flattening a Snapshot to Memory

- [GCExtendedGamepadSnapShotDataV100](gcextendedgamepadsnapshotdatav100.md): Deprecated. A structure that holds a snapshot of an extended gamepad controller’s input data.
- [GCExtendedGamepadSnapShotDataV100FromNSData](gcextendedgamepadsnapshotdatav100fromnsdata%28____%29.md): Deprecated. Copies the recorded data from an extended gamepad snapshot into a readable structure.
