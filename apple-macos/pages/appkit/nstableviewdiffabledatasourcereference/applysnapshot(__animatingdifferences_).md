> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdiffabledatasourcereference/applysnapshot(_:animatingdifferences:)](https://developer.apple.com/documentation/appkit/nstableviewdiffabledatasourcereference/applysnapshot(_:animatingdifferences:))

# applySnapshot(\_:animatingDifferences:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Updates the UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes.

## Declaration

```swift
func applySnapshot(_ snapshot: NSDiffableDataSourceSnapshotReference, animatingDifferences: Bool)
```

## Parameters

- `snapshot`: The snapshot that reflects the new state of the data in the table view.
- `animatingDifferences`: If `true`, the diffable data source computes the difference between the table view’s current state and the new state in the snapshot, which is an O(n) operation, where n is the number of items in the snapshot. The system animates the differences in the UI between the current state and new state. If `false`, the system sets the table view UI to the new state without any animations, with no additional overhead for computing a diff. Any ongoing row animations are interrupted and the table view’s content immediately reloads.

## See Also

### Updating Data

- [snapshot()](snapshot%28%29.md): Returns a representation of the current state of the data in the table view.
- [applySnapshot(\_:animatingDifferences:completion:)](applysnapshot%28__animatingdifferences_completion_%29.md): Updates the UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes and executing a completion handler.
- [defaultRowAnimation](defaultrowanimation.md): The default animation the UI uses to show differences between rows.

# applySnapshot:animatingDifferences: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Updates the UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes.

## Declaration

```objectivec
- (void) applySnapshot:(NSDiffableDataSourceSnapshot<id,id> *) snapshot animatingDifferences:(BOOL) animatingDifferences;
```

## Parameters

- `snapshot`: The snapshot that reflects the new state of the data in the table view.
- `animatingDifferences`: If `true`, the diffable data source computes the difference between the table view’s current state and the new state in the snapshot, which is an O(n) operation, where n is the number of items in the snapshot. The system animates the differences in the UI between the current state and new state. If `false`, the system sets the table view UI to the new state without any animations, with no additional overhead for computing a diff. Any ongoing row animations are interrupted and the table view’s content immediately reloads.

## See Also

### Updating Data

- [snapshot](snapshot%28%29.md): Returns a representation of the current state of the data in the table view.
- [applySnapshot:animatingDifferences:completion:](applysnapshot%28__animatingdifferences_completion_%29.md): Updates the UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes and executing a completion handler.
- [defaultRowAnimation](defaultrowanimation.md): The default animation the UI uses to show differences between rows.
