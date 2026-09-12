> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdiffabledatasourcereference/applysnapshot(_:animatingdifferences:)](https://developer.apple.com/documentation/appkit/nscollectionviewdiffabledatasourcereference/applysnapshot(_:animatingdifferences:))

# applySnapshot(\_:animatingDifferences:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Updates the UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes.

## Declaration

```swift
func applySnapshot(_ snapshot: NSDiffableDataSourceSnapshotReference, animatingDifferences: Bool)
```

## Parameters

- `snapshot`: The snapshot reflecting the new state of the data in the collection view.
- `animatingDifferences`: If [true](https://developer.apple.com/documentation/swift/true), the diffable data source computes the difference between the collection view’s current state and the new state in the snapshot, which is an O(*n*) operation, where *n* is the number of items in the snapshot. The differences in the UI between the current state and new state are animated. If [false](https://developer.apple.com/documentation/swift/false), the collection view UI is set to the new state without any animations, with no additional overhead for computing a diff. Any ongoing item animations are interrupted and the collection view’s content is reloaded immediately.

<a id="Discussion"></a>

## Discussion

It’s safe to call this method from a background queue, but you must do so consistently in your app. Always call this method exclusively from the main queue or from a background queue.

## See Also

### Updating Data

- [snapshot()](snapshot%28%29.md): Returns a representation of the current state of the data in the collection view.

# applySnapshot:animatingDifferences: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Updates the UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes.

## Declaration

```objectivec
- (void) applySnapshot:(NSDiffableDataSourceSnapshot<id,id> *) snapshot animatingDifferences:(BOOL) animatingDifferences;
```

## Parameters

- `snapshot`: The snapshot reflecting the new state of the data in the collection view.
- `animatingDifferences`: If [true](https://developer.apple.com/documentation/swift/true), the diffable data source computes the difference between the collection view’s current state and the new state in the snapshot, which is an O(*n*) operation, where *n* is the number of items in the snapshot. The differences in the UI between the current state and new state are animated. If [false](https://developer.apple.com/documentation/swift/false), the collection view UI is set to the new state without any animations, with no additional overhead for computing a diff. Any ongoing item animations are interrupted and the collection view’s content is reloaded immediately.

<a id="Discussion"></a>

## Discussion

It’s safe to call this method from a background queue, but you must do so consistently in your app. Always call this method exclusively from the main queue or from a background queue.

## See Also

### Updating Data

- [snapshot](snapshot%28%29.md): Returns a representation of the current state of the data in the collection view.
