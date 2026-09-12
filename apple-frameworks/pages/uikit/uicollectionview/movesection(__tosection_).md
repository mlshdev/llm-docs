> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/movesection(_:tosection:)](https://developer.apple.com/documentation/uikit/uicollectionview/movesection(_:tosection:))

# moveSection(\_:toSection:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Moves a section from one location to another in the collection view.

## Declaration

```swift
func moveSection(_ section: Int, toSection newSection: Int)
```

## Parameters

- `section`: The index of the section you want to move.
- `newSection`: The index in the collection view that is the destination of the move for the section. The existing section at that location moves up or down to an adjoining index position to make room for it.

<a id="Discussion"></a>

## Discussion

Use this method to reorganize existing sections and their contained items. You might do this when you rearrange sections within your data source object or in response to user interactions with the collection view. The collection view updates the layout as needed to account for the move, animating new views into position as needed.

You can also call this method from a block passed to the [performBatchUpdates(\_:completion:)](performbatchupdates%28__completion_%29.md) method when you want to animate multiple separate changes into place at the same time. See the description of that method for more information.

## See Also

### Inserting, moving, and deleting sections

- [insertSections(\_:)](insertsections%28__%29.md): Inserts new sections at the specified indexes.
- [deleteSections(\_:)](deletesections%28__%29.md): Deletes the sections at the specified indexes.

# moveSection:toSection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Moves a section from one location to another in the collection view.

## Declaration

```objectivec
- (void) moveSection:(NSInteger) section toSection:(NSInteger) newSection;
```

## Parameters

- `section`: The index of the section you want to move.
- `newSection`: The index in the collection view that is the destination of the move for the section. The existing section at that location moves up or down to an adjoining index position to make room for it.

<a id="Discussion"></a>

## Discussion

Use this method to reorganize existing sections and their contained items. You might do this when you rearrange sections within your data source object or in response to user interactions with the collection view. The collection view updates the layout as needed to account for the move, animating new views into position as needed.

You can also call this method from a block passed to the [performBatchUpdates:completion:](performbatchupdates%28__completion_%29.md) method when you want to animate multiple separate changes into place at the same time. See the description of that method for more information.

## See Also

### Inserting, moving, and deleting sections

- [insertSections:](insertsections%28__%29.md): Inserts new sections at the specified indexes.
- [deleteSections:](deletesections%28__%29.md): Deletes the sections at the specified indexes.
