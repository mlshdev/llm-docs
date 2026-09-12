> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdiffabledatasourcereference/snapshot(forsection:)](https://developer.apple.com/documentation/uikit/uicollectionviewdiffabledatasourcereference/snapshot(forsection:))

# snapshot(forSection:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Returns a representation of the current state of the data in the specified section of the collection view.

## Declaration

```swift
func snapshot(forSection section: Any) -> NSDiffableDataSourceSectionSnapshotReference
```

## See Also

### Updating section data

- [applySnapshot(\_:toSection:animatingDifferences:completion:)](applysnapshot%28__tosection_animatingdifferences_completion_%29.md): Updates the section UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes and executing a completion handler.
- [applySnapshot(\_:toSection:animatingDifferences:)](applysnapshot%28__tosection_animatingdifferences_%29.md): Updates the section UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes.

# snapshotForSection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Returns a representation of the current state of the data in the specified section of the collection view.

## Declaration

```objectivec
- (NSDiffableDataSourceSectionSnapshot<id> *) snapshotForSection:(SectionIdentifierType) section;
```

## See Also

### Updating section data

- [applySnapshot:toSection:animatingDifferences:completion:](applysnapshot%28__tosection_animatingdifferences_completion_%29.md): Updates the section UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes and executing a completion handler.
- [applySnapshot:toSection:animatingDifferences:](applysnapshot%28__tosection_animatingdifferences_%29.md): Updates the section UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes.
