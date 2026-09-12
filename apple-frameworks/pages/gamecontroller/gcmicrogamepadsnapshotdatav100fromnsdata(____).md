> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcmicrogamepadsnapshotdatav100fromnsdata(_:_:)](https://developer.apple.com/documentation/gamecontroller/gcmicrogamepadsnapshotdatav100fromnsdata(_:_:))

# GCMicroGamepadSnapShotDataV100FromNSData(\_:\_:) (Swift)

**Framework:** Game Controller  
**Kind:** Function  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.11+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

Copies the recorded data from a micro gamepad snapshot into a readable structure.

> Use the [withMicroGamepad()](gccontroller/withmicrogamepad%28%29.md) method instead.

## Declaration

```swift
func GCMicroGamepadSnapShotDataV100FromNSData(_ snapshotData: UnsafeMutablePointer<GCMicroGamepadSnapShotDataV100>?, _ data: Data?) -> Bool
```

## Parameters

- `snapshotData`: A pointer to memory to fill with the shapshot data.
- `data`: An [NSData](../foundation/nsdata.md) object that contains recorded data. Often, this is obtained by calling the [snapshotData](gcgamepadsnapshot/snapshotdata.md) method of a  `GCMicroGamepadSnapshot`object.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the data could be copied, [false](https://developer.apple.com/documentation/swift/false) if `snapshotData` is `nil`, `data` is `nil`, or if the contents of `data` do not contain a compatible snapshot.

## See Also

### Flattening a Snapshot to Memory

- [GCMicroGamepadSnapShotDataV100](gcmicrogamepadsnapshotdatav100.md): Deprecated. A structure that holds a snapshot of a micro gamepad controller’s input data.
- [NSDataFromGCMicroGamepadSnapShotDataV100(\_:)](nsdatafromgcmicrogamepadsnapshotdatav100%28__%29.md): Deprecated. Encapsulates the controller data from a micro gamepad structure into a data object.

# GCMicroGamepadSnapShotDataV100FromNSData (Objective-C)

**Framework:** Game Controller  
**Kind:** Function  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.11+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

Copies the recorded data from a micro gamepad snapshot into a readable structure.

> Use the [controllerWithMicroGamepad](gccontroller/withmicrogamepad%28%29.md) method instead.

## Declaration

```objectivec
BOOL GCMicroGamepadSnapShotDataV100FromNSData(GCMicroGamepadSnapShotDataV100 *snapshotData, NSData *data);
```

## Parameters

- `snapshotData`: A pointer to memory to fill with the shapshot data.
- `data`: An [NSData](../foundation/nsdata.md) object that contains recorded data. Often, this is obtained by calling the [snapshotData](gcgamepadsnapshot/snapshotdata.md) method of a  `GCMicroGamepadSnapshot`object.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the data could be copied, [false](https://developer.apple.com/documentation/swift/false) if `snapshotData` is `nil`, `data` is `nil`, or if the contents of `data` do not contain a compatible snapshot.

## See Also

### Flattening a Snapshot to Memory

- [GCMicroGamepadSnapShotDataV100](gcmicrogamepadsnapshotdatav100.md): Deprecated. A structure that holds a snapshot of a micro gamepad controller’s input data.
- [NSDataFromGCMicroGamepadSnapShotDataV100](nsdatafromgcmicrogamepadsnapshotdatav100%28__%29.md): Deprecated. Encapsulates the controller data from a micro gamepad structure into a data object.
