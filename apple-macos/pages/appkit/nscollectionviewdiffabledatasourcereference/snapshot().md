> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdiffabledatasourcereference/snapshot()](https://developer.apple.com/documentation/appkit/nscollectionviewdiffabledatasourcereference/snapshot())

# snapshot() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Returns a representation of the current state of the data in the collection view.

## Declaration

```swift
func snapshot() -> NSDiffableDataSourceSnapshotReference
```

<a id="return-value"></a>

## Return Value

A snapshot containing section and item identifiers in the order that they appear in the UI.

## See Also

### Updating Data

- [applySnapshot(\_:animatingDifferences:)](applysnapshot%28__animatingdifferences_%29.md): Updates the UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes.

# snapshot (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Returns a representation of the current state of the data in the collection view.

## Declaration

```objectivec
- (NSDiffableDataSourceSnapshot<id,id> *) snapshot;
```

<a id="return-value"></a>

## Return Value

A snapshot containing section and item identifiers in the order that they appear in the UI.

## See Also

### Updating Data

- [applySnapshot:animatingDifferences:](applysnapshot%28__animatingdifferences_%29.md): Updates the UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes.
