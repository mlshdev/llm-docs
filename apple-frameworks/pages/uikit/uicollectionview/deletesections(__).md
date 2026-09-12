> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/deletesections(_:)](https://developer.apple.com/documentation/uikit/uicollectionview/deletesections(_:))

# deleteSections(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Deletes the sections at the specified indexes.

## Declaration

```swift
func deleteSections(_ sections: IndexSet)
```

## Parameters

- `sections`: The indexes of the sections you want to delete. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to remove the sections and their items from the collection view. You might do this when you remove the sections from your data source object or in response to user interactions with the collection view. The collection view updates the layout of the remaining sections and items to account for the deletions, animating the remaining items into position as needed.

You can also call this method from a block passed to the [performBatchUpdates(\_:completion:)](performbatchupdates%28__completion_%29.md) method when you want to animate multiple separate changes into place at the same time. See the description of that method for more information.

## See Also

### Inserting, moving, and deleting sections

- [insertSections(\_:)](insertsections%28__%29.md): Inserts new sections at the specified indexes.
- [moveSection(\_:toSection:)](movesection%28__tosection_%29.md): Moves a section from one location to another in the collection view.

# deleteSections: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Deletes the sections at the specified indexes.

## Declaration

```objectivec
- (void) deleteSections:(NSIndexSet *) sections;
```

## Parameters

- `sections`: The indexes of the sections you want to delete. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to remove the sections and their items from the collection view. You might do this when you remove the sections from your data source object or in response to user interactions with the collection view. The collection view updates the layout of the remaining sections and items to account for the deletions, animating the remaining items into position as needed.

You can also call this method from a block passed to the [performBatchUpdates:completion:](performbatchupdates%28__completion_%29.md) method when you want to animate multiple separate changes into place at the same time. See the description of that method for more information.

## See Also

### Inserting, moving, and deleting sections

- [insertSections:](insertsections%28__%29.md): Inserts new sections at the specified indexes.
- [moveSection:toSection:](movesection%28__tosection_%29.md): Moves a section from one location to another in the collection view.
