> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdiffabledatasourcereference/applysnapshot(_:tosection:animatingdifferences:completion:)](https://developer.apple.com/documentation/uikit/uicollectionviewdiffabledatasourcereference/applysnapshot(_:tosection:animatingdifferences:completion:))

# applySnapshot(\_:toSection:animatingDifferences:completion:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Updates the section UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes and executing a completion handler.

## Declaration

```swift
func applySnapshot(_ snapshot: NSDiffableDataSourceSectionSnapshotReference, toSection sectionIdentifier: Any, animatingDifferences: Bool, completion: (() -> Void)? = nil)
```

## See Also

### Updating section data

- [snapshot(forSection:)](snapshot%28forsection_%29.md): Returns a representation of the current state of the data in the specified section of the collection view.
- [applySnapshot(\_:toSection:animatingDifferences:)](applysnapshot%28__tosection_animatingdifferences_%29.md): Updates the section UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes.

# applySnapshot:toSection:animatingDifferences:completion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Updates the section UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes and executing a completion handler.

## Declaration

```objectivec
- (void) applySnapshot:(NSDiffableDataSourceSectionSnapshot<id> *) snapshot toSection:(SectionIdentifierType) sectionIdentifier animatingDifferences:(BOOL) animatingDifferences completion:(void (^)()) completion;
```

## See Also

### Updating section data

- [snapshotForSection:](snapshot%28forsection_%29.md): Returns a representation of the current state of the data in the specified section of the collection view.
- [applySnapshot:toSection:animatingDifferences:](applysnapshot%28__tosection_animatingdifferences_%29.md): Updates the section UI to reflect the state of the data in the specified snapshot, optionally animating the UI changes.
