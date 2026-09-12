> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/nsdatafromgcmicrogamepadsnapshotdatav100(_:)](https://developer.apple.com/documentation/gamecontroller/nsdatafromgcmicrogamepadsnapshotdatav100(_:))

# NSDataFromGCMicroGamepadSnapShotDataV100(\_:) (Swift)

**Framework:** Game Controller  
**Kind:** Function  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.11+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

Encapsulates the controller data from a micro gamepad structure into a data object.

> Use the [withMicroGamepad()](gccontroller/withmicrogamepad%28%29.md) method instead.

## Declaration

```swift
func NSDataFromGCMicroGamepadSnapShotDataV100(_ snapshotData: UnsafeMutablePointer<GCMicroGamepadSnapShotDataV100>?) -> Data?
```

## Parameters

- `snapshotData`: A pointer to memory that contains a set of gamepad control values.

<a id="return-value"></a>

## Return Value

A new [NSData](../foundation/nsdata.md) object that contains the snapshot data, or `nil` if an error occurred.

<a id="Discussion"></a>

## Discussion

If the version and size is not set in the snapshot the data will automatically have a version of `0x100` and a size equal to `sizeof(GCMicroGamepadSnapShotDataV100)`.

## See Also

### Flattening a Snapshot to Memory

- [GCMicroGamepadSnapShotDataV100](gcmicrogamepadsnapshotdatav100.md): Deprecated. A structure that holds a snapshot of a micro gamepad controller’s input data.
- [GCMicroGamepadSnapShotDataV100FromNSData(\_:\_:)](gcmicrogamepadsnapshotdatav100fromnsdata%28____%29.md): Deprecated. Copies the recorded data from a micro gamepad snapshot into a readable structure.

# NSDataFromGCMicroGamepadSnapShotDataV100 (Objective-C)

**Framework:** Game Controller  
**Kind:** Function  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.11+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

Encapsulates the controller data from a micro gamepad structure into a data object.

> Use the [controllerWithMicroGamepad](gccontroller/withmicrogamepad%28%29.md) method instead.

## Declaration

```objectivec
NSData *NSDataFromGCMicroGamepadSnapShotDataV100(GCMicroGamepadSnapShotDataV100 *snapshotData);
```

## Parameters

- `snapshotData`: A pointer to memory that contains a set of gamepad control values.

<a id="return-value"></a>

## Return Value

A new [NSData](../foundation/nsdata.md) object that contains the snapshot data, or `nil` if an error occurred.

<a id="Discussion"></a>

## Discussion

If the version and size is not set in the snapshot the data will automatically have a version of `0x100` and a size equal to `sizeof(GCMicroGamepadSnapShotDataV100)`.

## See Also

### Flattening a Snapshot to Memory

- [GCMicroGamepadSnapShotDataV100](gcmicrogamepadsnapshotdatav100.md): Deprecated. A structure that holds a snapshot of a micro gamepad controller’s input data.
- [GCMicroGamepadSnapShotDataV100FromNSData](gcmicrogamepadsnapshotdatav100fromnsdata%28____%29.md): Deprecated. Copies the recorded data from a micro gamepad snapshot into a readable structure.
