> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/insertsections(_:)](https://developer.apple.com/documentation/appkit/nscollectionview/insertsections(_:))

# insertSections(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Inserts new sections at the specified indexes.

## Declaration

```swift
func insertSections(_ sections: IndexSet)
```

## Parameters

- `sections`: An index set containing the indexes at which you want to insert new sections. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

This method tells the collection view to insert the specified sections and update itself. Always update your data source object before calling this method. Calling this method kicks off an update (and possible animations) to add the new sections. Specifically, the collection view asks the layout object for any updated layout attributes related to the new sections or any existing sections. If the layout attributes of any visible items changed, those changes are animated into place.

When inserting or deleting multiple sections and items, you can animate all of your changes at once using the [performBatchUpdates(\_:completionHandler:)](performbatchupdates%28__completionhandler_%29.md) method.

## See Also

### Inserting, Moving, Deleting, and Collapsing Sections

- [moveSection(\_:toSection:)](movesection%28__tosection_%29.md): Moves a section from its current location to a new location.
- [deleteSections(\_:)](deletesections%28__%29.md): Deletes the specified sections and their contained items.
- [toggleSectionCollapse(\_:)](togglesectioncollapse%28__%29.md): Collapses the section in which the sender resides into a single horizontally scrollable row.

# insertSections: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Inserts new sections at the specified indexes.

## Declaration

```objectivec
- (void) insertSections:(NSIndexSet *) sections;
```

## Parameters

- `sections`: An index set containing the indexes at which you want to insert new sections. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

This method tells the collection view to insert the specified sections and update itself. Always update your data source object before calling this method. Calling this method kicks off an update (and possible animations) to add the new sections. Specifically, the collection view asks the layout object for any updated layout attributes related to the new sections or any existing sections. If the layout attributes of any visible items changed, those changes are animated into place.

When inserting or deleting multiple sections and items, you can animate all of your changes at once using the [performBatchUpdates:completionHandler:](performbatchupdates%28__completionhandler_%29.md) method.

## See Also

### Inserting, Moving, Deleting, and Collapsing Sections

- [moveSection:toSection:](movesection%28__tosection_%29.md): Moves a section from its current location to a new location.
- [deleteSections:](deletesections%28__%29.md): Deletes the specified sections and their contained items.
- [toggleSectionCollapse:](togglesectioncollapse%28__%29.md): Collapses the section in which the sender resides into a single horizontally scrollable row.
