> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdiffabledatasourcereference/applysnapshot(_:animatingdifferences:completion:)](https://developer.apple.com/documentation/appkit/nstableviewdiffabledatasourcereference/applysnapshot(_:animatingdifferences:completion:))

# applySnapshot(\_:animatingDifferences:completion:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Updates the UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes and executing a completion handler.

## Declaration

```swift
func applySnapshot(_ snapshot: NSDiffableDataSourceSnapshotReference, animatingDifferences: Bool, completion: (@Sendable () -> Void)? = nil)
```

```swift
func applySnapshot(_ snapshot: NSDiffableDataSourceSnapshotReference, animatingDifferences: Bool) async
```

## Parameters

- `snapshot`: The snapshot that reflects the new state of the data in the table view.
- `animatingDifferences`: If `true`, the diffable data source computes the difference between the table view’s current state and the new state in the snapshot, which is an O(n) operation, where n is the number of items in the snapshot. The system animates the differences in the UI between the current state and new state. If `false`, the system sets the table view UI to the new state without any animations, with no additional overhead for computing a diff. Any ongoing row animations are interrupted and the table view’s content immediately reloads.
- `completion`: The closure the system executes when the animations are complete. This closure has no return value and takes no parameters. The system calls this closure from the main queue.

<a id="Discussion"></a>

## Discussion

## See Also

### Updating Data

- [snapshot()](snapshot%28%29.md): Returns a representation of the current state of the data in the table view.
- [applySnapshot(\_:animatingDifferences:)](applysnapshot%28__animatingdifferences_%29.md): Updates the UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes.
- [defaultRowAnimation](defaultrowanimation.md): The default animation the UI uses to show differences between rows.

# applySnapshot:animatingDifferences:completion: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Updates the UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes and executing a completion handler.

## Declaration

```objectivec
- (void) applySnapshot:(NSDiffableDataSourceSnapshot<id,id> *) snapshot animatingDifferences:(BOOL) animatingDifferences completion:(void (^)()) completion;
```

## Parameters

- `snapshot`: The snapshot that reflects the new state of the data in the table view.
- `animatingDifferences`: If `true`, the diffable data source computes the difference between the table view’s current state and the new state in the snapshot, which is an O(n) operation, where n is the number of items in the snapshot. The system animates the differences in the UI between the current state and new state. If `false`, the system sets the table view UI to the new state without any animations, with no additional overhead for computing a diff. Any ongoing row animations are interrupted and the table view’s content immediately reloads.
- `completion`: The closure the system executes when the animations are complete. This closure has no return value and takes no parameters. The system calls this closure from the main queue.

<a id="Discussion"></a>

## Discussion

## See Also

### Updating Data

- [snapshot](snapshot%28%29.md): Returns a representation of the current state of the data in the table view.
- [applySnapshot:animatingDifferences:](applysnapshot%28__animatingdifferences_%29.md): Updates the UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes.
- [defaultRowAnimation](defaultrowanimation.md): The default animation the UI uses to show differences between rows.
