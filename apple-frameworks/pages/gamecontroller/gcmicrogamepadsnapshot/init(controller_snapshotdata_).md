> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcmicrogamepadsnapshot/init(controller:snapshotdata:)](https://developer.apple.com/documentation/gamecontroller/gcmicrogamepadsnapshot/init(controller:snapshotdata:))

# init(controller:snapshotData:) (Swift)

**Framework:** Game Controller  
**Kind:** Initializer  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.11+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

> Use the [withMicroGamepad()](../gccontroller/withmicrogamepad%28%29.md) method instead.

## Declaration

```swift
init(controller: GCController, snapshotData data: Data)
```

## Parameters

- `controller`: The controller to associate the snapshot with.
- `data`: A data object that contains snapshot data.

<a id="return-value"></a>

## Return Value

A new snapshot object.

<a id="Discussion"></a>

## Discussion

The data format for a snapshot is private. Your snapshot object should only be created from flattened data previously obtained from a snapshot.

## See Also

### Converting Between Snapshots and Data Objects

- [init(snapshotData:)](init%28snapshotdata_%29.md): Deprecated. Initializes a snapshot object with the flattened data representation obtained from another snapshot.
- [snapshotData](snapshotdata.md): Deprecated. The flattened control input values for the snapshot.

# initWithController:snapshotData: (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 13.0) · iPadOS 9.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.11+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

> Use the [controllerWithMicroGamepad](../gccontroller/withmicrogamepad%28%29.md) method instead.

## Declaration

```objectivec
- (instancetype) initWithController:(GCController *) controller snapshotData:(NSData *) data;
```

## Parameters

- `controller`: The controller to associate the snapshot with.
- `data`: A data object that contains snapshot data.

<a id="return-value"></a>

## Return Value

A new snapshot object.

<a id="Discussion"></a>

## Discussion

The data format for a snapshot is private. Your snapshot object should only be created from flattened data previously obtained from a snapshot.

## See Also

### Converting Between Snapshots and Data Objects

- [initWithSnapshotData:](init%28snapshotdata_%29.md): Deprecated. Initializes a snapshot object with the flattened data representation obtained from another snapshot.
- [snapshotData](snapshotdata.md): Deprecated. The flattened control input values for the snapshot.
