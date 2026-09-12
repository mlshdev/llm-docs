> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdiffabledatasource-9tqpa/apply(_:animatingdifferences:)](https://developer.apple.com/documentation/uikit/uicollectionviewdiffabledatasource-9tqpa/apply(_:animatingdifferences:))

# apply(\_:animatingDifferences:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS

Updates the UI to reflect the state of the data in the snapshot, optionally animating the UI changes.

## Declaration

```swift
@MainActor @preconcurrency func apply(_ snapshot: NSDiffableDataSourceSnapshot<SectionIdentifierType, ItemIdentifierType>, animatingDifferences: Bool = true) async
```

## See Also

### Updating data

- [snapshot()](snapshot%28%29.md): Returns a representation of the current state of the data in the collection view.
- [apply(\_:animatingDifferences:completion:)](apply%28__animatingdifferences_completion_%29.md): Updates the UI to reflect the state of the data in the snapshot, optionally animating the UI changes and executing a completion handler.
- [applySnapshotUsingReloadData(\_:)](applysnapshotusingreloaddata%28__%29.md): Resets the UI to reflect the state of the data in the snapshot without computing a diff or animating the changes.
- [applySnapshotUsingReloadData(\_:completion:)](applysnapshotusingreloaddata%28__completion_%29.md): Resets the UI to reflect the state of the data in the snapshot without computing a diff or animating the changes, optionally executing a completion handler.
