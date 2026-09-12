> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/movesection(_:tosection:)](https://developer.apple.com/documentation/appkit/nscollectionview/movesection(_:tosection:))

# moveSection(\_:toSection:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Moves a section from its current location to a new location.

## Declaration

```swift
func moveSection(_ section: Int, toSection newSection: Int)
```

## Parameters

- `section`: The index of the section that you want to move.
- `newSection`: The new index at which to insert the section.

<a id="Discussion"></a>

## Discussion

Use this method to reorganize sections and their contained items. Always update your data source object before calling this method. Calling this method kicks off an update (and possible animations) to move the specified section to its new location. Specifically, the collection view asks the layout object for any updated layout attributes related to the new sections or any existing sections. If the layout attributes of any visible items changed, those changes are animated into place.

When inserting or deleting multiple sections and items, you can animate all of your changes at once using the [performBatchUpdates(\_:completionHandler:)](performbatchupdates%28__completionhandler_%29.md) method.

## See Also

### Inserting, Moving, Deleting, and Collapsing Sections

- [insertSections(\_:)](insertsections%28__%29.md): Inserts new sections at the specified indexes.
- [deleteSections(\_:)](deletesections%28__%29.md): Deletes the specified sections and their contained items.
- [toggleSectionCollapse(\_:)](togglesectioncollapse%28__%29.md): Collapses the section in which the sender resides into a single horizontally scrollable row.

# moveSection:toSection: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Moves a section from its current location to a new location.

## Declaration

```objectivec
- (void) moveSection:(NSInteger) section toSection:(NSInteger) newSection;
```

## Parameters

- `section`: The index of the section that you want to move.
- `newSection`: The new index at which to insert the section.

<a id="Discussion"></a>

## Discussion

Use this method to reorganize sections and their contained items. Always update your data source object before calling this method. Calling this method kicks off an update (and possible animations) to move the specified section to its new location. Specifically, the collection view asks the layout object for any updated layout attributes related to the new sections or any existing sections. If the layout attributes of any visible items changed, those changes are animated into place.

When inserting or deleting multiple sections and items, you can animate all of your changes at once using the [performBatchUpdates:completionHandler:](performbatchupdates%28__completionhandler_%29.md) method.

## See Also

### Inserting, Moving, Deleting, and Collapsing Sections

- [insertSections:](insertsections%28__%29.md): Inserts new sections at the specified indexes.
- [deleteSections:](deletesections%28__%29.md): Deletes the specified sections and their contained items.
- [toggleSectionCollapse:](togglesectioncollapse%28__%29.md): Collapses the section in which the sender resides into a single horizontally scrollable row.
