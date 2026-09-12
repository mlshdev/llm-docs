> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcextendedgamepadsnapshotdatav100fromnsdata(_:_:)](https://developer.apple.com/documentation/gamecontroller/gcextendedgamepadsnapshotdatav100fromnsdata(_:_:))

# GCExtendedGamepadSnapShotDataV100FromNSData(\_:\_:) (Swift)

**Framework:** Game Controller  
**Kind:** Function  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

Copies the recorded data from an extended gamepad snapshot into a readable structure.

> Use the [GCExtendedGamepad](gcextendedgamepad.md) class instead.

## Declaration

```swift
func GCExtendedGamepadSnapShotDataV100FromNSData(_ snapshotData: UnsafeMutablePointer<GCExtendedGamepadSnapShotDataV100>?, _ data: Data?) -> Bool
```

## Parameters

- `snapshotData`: A pointer to memory to fill with the shapshot data.
- `data`: An [NSData](../foundation/nsdata.md) object that contains recorded data. Often, this is obtained by calling the [snapshotData](gcextendedgamepadsnapshot/snapshotdata.md) method of a [GCExtendedGamepadSnapshot](gcextendedgamepadsnapshot.md) object.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the data could be copied, [false](https://developer.apple.com/documentation/swift/false) if `snapshotData` is `nil`, `data` is `nil`, or if the contents of `data` do not contain a compatible snapshot.

## See Also

### Flattening a Snapshot to Memory

- [GCExtendedGamepadSnapShotDataV100](gcextendedgamepadsnapshotdatav100.md): Deprecated. A structure that holds a snapshot of an extended gamepad controller’s input data.
- [NSDataFromGCExtendedGamepadSnapShotDataV100(\_:)](nsdatafromgcextendedgamepadsnapshotdatav100%28__%29.md): Deprecated. Encapsulates the controller data from an extended gamepad structure into a data object.

# GCExtendedGamepadSnapShotDataV100FromNSData (Objective-C)

**Framework:** Game Controller  
**Kind:** Function  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

Copies the recorded data from an extended gamepad snapshot into a readable structure.

> Use the [GCExtendedGamepad](gcextendedgamepad.md) class instead.

## Declaration

```objectivec
BOOL GCExtendedGamepadSnapShotDataV100FromNSData(GCExtendedGamepadSnapShotDataV100 *snapshotData, NSData *data);
```

## Parameters

- `snapshotData`: A pointer to memory to fill with the shapshot data.
- `data`: An [NSData](../foundation/nsdata.md) object that contains recorded data. Often, this is obtained by calling the [snapshotData](gcextendedgamepadsnapshot/snapshotdata.md) method of a [GCExtendedGamepadSnapshot](gcextendedgamepadsnapshot.md) object.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the data could be copied, [false](https://developer.apple.com/documentation/swift/false) if `snapshotData` is `nil`, `data` is `nil`, or if the contents of `data` do not contain a compatible snapshot.

## See Also

### Flattening a Snapshot to Memory

- [GCExtendedGamepadSnapShotDataV100](gcextendedgamepadsnapshotdatav100.md): Deprecated. A structure that holds a snapshot of an extended gamepad controller’s input data.
- [NSDataFromGCExtendedGamepadSnapShotDataV100](nsdatafromgcextendedgamepadsnapshotdatav100%28__%29.md): Deprecated. Encapsulates the controller data from an extended gamepad structure into a data object.
