> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamecontroller/gcgamepadsnapshot/init(controller:snapshotdata:)

# init(controller:snapshotData:) (Swift)

**Framework:** Game Controller  
**Kind:** Initializer  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

Initializes a snapshot object associated with a specific controller using a flattened data representation obtained from another snapshot.

> Use GCExtendedGamepad instead

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
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

Initializes a snapshot object associated with a specific controller using a flattened data representation obtained from another snapshot.

> Use GCExtendedGamepad instead

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
