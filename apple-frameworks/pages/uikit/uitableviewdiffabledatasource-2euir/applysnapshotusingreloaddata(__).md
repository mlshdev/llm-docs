> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewdiffabledatasource-2euir/applysnapshotusingreloaddata(_:)](https://developer.apple.com/documentation/uikit/uitableviewdiffabledatasource-2euir/applysnapshotusingreloaddata(_:))

# applySnapshotUsingReloadData(\_:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS

Resets the UI to reflect the state of the data in the snapshot without computing a diff or animating the changes.

## Declaration

```swift
@MainActor @preconcurrency func applySnapshotUsingReloadData(_ snapshot: NSDiffableDataSourceSnapshot<SectionIdentifierType, ItemIdentifierType>) async
```

## Parameters

- `snapshot`: The snapshot that reflects the new state of the data in the table view.

<a id="Discussion"></a>

## Discussion

The system interrupts any ongoing item animations and immediately reloads the table view’s content.

You can safely call this method from a background queue, but you must do so consistently in your app. Always call this method exclusively from the main queue or from a background queue.

## See Also

### Updating data

- [snapshot()](snapshot%28%29.md): Returns a representation of the current state of the data in the table view.
- [apply(\_:animatingDifferences:)](apply%28__animatingdifferences_%29.md): Updates the UI to reflect the state of the data in the snapshot, optionally animating the UI changes.
- [apply(\_:animatingDifferences:completion:)](apply%28__animatingdifferences_completion_%29.md): Updates the UI to reflect the state of the data in the snapshot, optionally animating the UI changes and executing a completion handler.
- [applySnapshotUsingReloadData(\_:completion:)](applysnapshotusingreloaddata%28__completion_%29.md): Resets the UI to reflect the state of the data in the snapshot without computing a diff or animating the changes, optionally executing a completion handler.
- [defaultRowAnimation](defaultrowanimation.md): The default type of animation to use when inserting or deleting rows.
