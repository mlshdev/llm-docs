> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/insertsections(_:)](https://developer.apple.com/documentation/uikit/uicollectionview/insertsections(_:))

# insertSections(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Inserts new sections at the specified indexes.

## Declaration

```swift
func insertSections(_ sections: IndexSet)
```

## Parameters

- `sections`: An index set containing the indexes of the sections you want to insert. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to insert one or more sections into the collection view. This method adds the sections, and it is up to your data source to report the number of items in each section when asked for the information. The collection view then uses that information to get updated layout attributes for the newly inserted sections and items. If the insertions cause a change in the collection view’s visible content, those changes are animated into place.

You can also call this method from a block passed to the [performBatchUpdates(\_:completion:)](performbatchupdates%28__completion_%29.md) method when you want to animate multiple separate changes into place at the same time. See the description of that method for more information.

## See Also

### Inserting, moving, and deleting sections

- [moveSection(\_:toSection:)](movesection%28__tosection_%29.md): Moves a section from one location to another in the collection view.
- [deleteSections(\_:)](deletesections%28__%29.md): Deletes the sections at the specified indexes.

# insertSections: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Inserts new sections at the specified indexes.

## Declaration

```objectivec
- (void) insertSections:(NSIndexSet *) sections;
```

## Parameters

- `sections`: An index set containing the indexes of the sections you want to insert. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to insert one or more sections into the collection view. This method adds the sections, and it is up to your data source to report the number of items in each section when asked for the information. The collection view then uses that information to get updated layout attributes for the newly inserted sections and items. If the insertions cause a change in the collection view’s visible content, those changes are animated into place.

You can also call this method from a block passed to the [performBatchUpdates:completion:](performbatchupdates%28__completion_%29.md) method when you want to animate multiple separate changes into place at the same time. See the description of that method for more information.

## See Also

### Inserting, moving, and deleting sections

- [moveSection:toSection:](movesection%28__tosection_%29.md): Moves a section from one location to another in the collection view.
- [deleteSections:](deletesections%28__%29.md): Deletes the sections at the specified indexes.
