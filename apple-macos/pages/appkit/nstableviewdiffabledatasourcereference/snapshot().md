> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdiffabledatasourcereference/snapshot()](https://developer.apple.com/documentation/appkit/nstableviewdiffabledatasourcereference/snapshot())

# snapshot() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Returns a representation of the current state of the data in the table view.

## Declaration

```swift
func snapshot() -> NSDiffableDataSourceSnapshotReference
```

<a id="return-value"></a>

## Return Value

A snapshot that contains row and item identifiers in the order they appear in the UI.

## See Also

### Updating Data

- [applySnapshot(\_:animatingDifferences:)](applysnapshot%28__animatingdifferences_%29.md): Updates the UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes.
- [applySnapshot(\_:animatingDifferences:completion:)](applysnapshot%28__animatingdifferences_completion_%29.md): Updates the UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes and executing a completion handler.
- [defaultRowAnimation](defaultrowanimation.md): The default animation the UI uses to show differences between rows.

# snapshot (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Returns a representation of the current state of the data in the table view.

## Declaration

```objectivec
- (NSDiffableDataSourceSnapshot<id,id> *) snapshot;
```

<a id="return-value"></a>

## Return Value

A snapshot that contains row and item identifiers in the order they appear in the UI.

## See Also

### Updating Data

- [applySnapshot:animatingDifferences:](applysnapshot%28__animatingdifferences_%29.md): Updates the UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes.
- [applySnapshot:animatingDifferences:completion:](applysnapshot%28__animatingdifferences_completion_%29.md): Updates the UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes and executing a completion handler.
- [defaultRowAnimation](defaultrowanimation.md): The default animation the UI uses to show differences between rows.
