> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcextendedgamepadsnapshot/init(snapshotdata:)](https://developer.apple.com/documentation/gamecontroller/gcextendedgamepadsnapshot/init(snapshotdata:))

# init(snapshotData:) (Swift)

**Framework:** Game Controller  
**Kind:** Initializer  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

Initializes a snapshot object with the flattened data representation obtained from another snapshot.

> Use the [withExtendedGamepad()](../gccontroller/withextendedgamepad%28%29.md) method instead.

## Declaration

```swift
init(snapshotData data: Data)
```

## Parameters

- `data`: A data object that contains snapshot data.

<a id="return-value"></a>

## Return Value

A new snapshot object.

<a id="Discussion"></a>

## Discussion

The data format for a snapshot is private. Your snapshot object should only be created from flattened data previously obtained from an extended snapshot.

## See Also

### Converting Between Extended Snapshots and Data Objects

- [init(controller:snapshotData:)](init%28controller_snapshotdata_%29.md): Deprecated. Initializes a snapshot object associated with a specific controller using a flattened data representation obtained from another snapshot.
- [snapshotData](snapshotdata.md): Deprecated. Flattens a snapshot into an archivable memory representation.

# initWithSnapshotData: (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

Initializes a snapshot object with the flattened data representation obtained from another snapshot.

> Use the [controllerWithExtendedGamepad](../gccontroller/withextendedgamepad%28%29.md) method instead.

## Declaration

```objectivec
- (instancetype) initWithSnapshotData:(NSData *) data;
```

## Parameters

- `data`: A data object that contains snapshot data.

<a id="return-value"></a>

## Return Value

A new snapshot object.

<a id="Discussion"></a>

## Discussion

The data format for a snapshot is private. Your snapshot object should only be created from flattened data previously obtained from an extended snapshot.

## See Also

### Converting Between Extended Snapshots and Data Objects

- [initWithController:snapshotData:](init%28controller_snapshotdata_%29.md): Deprecated. Initializes a snapshot object associated with a specific controller using a flattened data representation obtained from another snapshot.
- [snapshotData](snapshotdata.md): Deprecated. Flattens a snapshot into an archivable memory representation.
