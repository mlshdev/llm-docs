> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcgamepadsnapshot/snapshotdata](https://developer.apple.com/documentation/gamecontroller/gcgamepadsnapshot/snapshotdata)

# snapshotData (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

The flattened control input values for the snapshot.

> Use the [GCExtendedGamepad](../gcextendedgamepad.md) class instead.

## Declaration

```swift
var snapshotData: Data { get set }
```

<a id="Discussion"></a>

## Discussion

You can assign another [NSData](../../foundation/nsdata.md) object containing snapshot data to this property. The elements of the snapshot are updated to the values stored in the flattened data. This triggers any value handlers attached to those elements.

## See Also

### Converting Between Snapshots and Data Objects

- [init(snapshotData:)](init%28snapshotdata_%29.md): Deprecated. Initializes a snapshot object with the flattened data representation obtained from another snapshot.
- [init(controller:snapshotData:)](init%28controller_snapshotdata_%29.md): Deprecated. Initializes a snapshot object associated with a specific controller using a flattened data representation obtained from another snapshot.

# snapshotData (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0)

The flattened control input values for the snapshot.

> Use the [GCExtendedGamepad](../gcextendedgamepad.md) class instead.

## Declaration

```objectivec
@property (atomic, copy) NSData * snapshotData;
```

<a id="Discussion"></a>

## Discussion

You can assign another [NSData](../../foundation/nsdata.md) object containing snapshot data to this property. The elements of the snapshot are updated to the values stored in the flattened data. This triggers any value handlers attached to those elements.

## See Also

### Converting Between Snapshots and Data Objects

- [initWithSnapshotData:](init%28snapshotdata_%29.md): Deprecated. Initializes a snapshot object with the flattened data representation obtained from another snapshot.
- [initWithController:snapshotData:](init%28controller_snapshotdata_%29.md): Deprecated. Initializes a snapshot object associated with a specific controller using a flattened data representation obtained from another snapshot.
