> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcgamepadsnapshotdatav100fromnsdata(_:_:)](https://developer.apple.com/documentation/gamecontroller/gcgamepadsnapshotdatav100fromnsdata(_:_:))

# GCGamepadSnapShotDataV100FromNSData(\_:\_:) (Swift)

**Framework:** Game Controller  
**Kind:** Function  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

Copies the recorded data from a gamepad snapshot into a readable structure.

> Use GCExtendedGamepad instead

## Declaration

```swift
func GCGamepadSnapShotDataV100FromNSData(_ snapshotData: UnsafeMutablePointer<GCGamepadSnapShotDataV100>?, _ data: Data?) -> Bool
```

## Parameters

- `snapshotData`: A pointer to memory to fill with the shapshot data.
- `data`: An [NSData](../foundation/nsdata.md) object that contains recorded data. Often, this is obtained by calling the [snapshotData](gcgamepadsnapshot/snapshotdata.md) method of a [GCGamepadSnapshot](gcgamepadsnapshot.md) object.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the data could be copied, [false](https://developer.apple.com/documentation/swift/false) if `snapshotData` is `nil`, `data` is `nil`, or if the contents of `data` do not contain a compatible snapshot.

## See Also

### Flattening a Snapshot to Memory

- [GCGamepadSnapShotDataV100](gcgamepadsnapshotdatav100.md): Deprecated. A structure that holds a snapshot of a gamepad controller’s input data.
- [NSDataFromGCGamepadSnapShotDataV100(\_:)](nsdatafromgcgamepadsnapshotdatav100%28__%29.md): Deprecated. Encapsulates the controller data from a gamepad structure into a data object.

# GCGamepadSnapShotDataV100FromNSData (Objective-C)

**Framework:** Game Controller  
**Kind:** Function  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

Copies the recorded data from a gamepad snapshot into a readable structure.

> Use GCExtendedGamepad instead

## Declaration

```objectivec
BOOL GCGamepadSnapShotDataV100FromNSData(GCGamepadSnapShotDataV100 *snapshotData, NSData *data);
```

## Parameters

- `snapshotData`: A pointer to memory to fill with the shapshot data.
- `data`: An [NSData](../foundation/nsdata.md) object that contains recorded data. Often, this is obtained by calling the [snapshotData](gcgamepadsnapshot/snapshotdata.md) method of a [GCGamepadSnapshot](gcgamepadsnapshot.md) object.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the data could be copied, [false](https://developer.apple.com/documentation/swift/false) if `snapshotData` is `nil`, `data` is `nil`, or if the contents of `data` do not contain a compatible snapshot.

## See Also

### Flattening a Snapshot to Memory

- [GCGamepadSnapShotDataV100](gcgamepadsnapshotdatav100.md): Deprecated. A structure that holds a snapshot of a gamepad controller’s input data.
- [NSDataFromGCGamepadSnapShotDataV100](nsdatafromgcgamepadsnapshotdatav100%28__%29.md): Deprecated. Encapsulates the controller data from a gamepad structure into a data object.
