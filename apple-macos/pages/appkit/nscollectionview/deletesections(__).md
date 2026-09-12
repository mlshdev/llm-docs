> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/deletesections(_:)](https://developer.apple.com/documentation/appkit/nscollectionview/deletesections(_:))

# deleteSections(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Deletes the specified sections and their contained items.

## Declaration

```swift
func deleteSections(_ sections: IndexSet)
```

## Parameters

- `sections`: An index set containing the indexes of the sections that you want to delete. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to delete entire sections and their contained items. Always update your data source object before calling this method. Calling this method kicks off an update (and possible animations) to delete the specified sections. Specifically, the collection view asks the layout object for the final layout attributes for any deleted sections and may also ask for updated layout attributes for any remaining sections. If the layout attributes of any visible items changed, those changes are animated into place.

When inserting or deleting multiple sections and items, you can animate all of your changes at once using the [performBatchUpdates(\_:completionHandler:)](performbatchupdates%28__completionhandler_%29.md) method.

## See Also

### Inserting, Moving, Deleting, and Collapsing Sections

- [insertSections(\_:)](insertsections%28__%29.md): Inserts new sections at the specified indexes.
- [moveSection(\_:toSection:)](movesection%28__tosection_%29.md): Moves a section from its current location to a new location.
- [toggleSectionCollapse(\_:)](togglesectioncollapse%28__%29.md): Collapses the section in which the sender resides into a single horizontally scrollable row.

# deleteSections: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Deletes the specified sections and their contained items.

## Declaration

```objectivec
- (void) deleteSections:(NSIndexSet *) sections;
```

## Parameters

- `sections`: An index set containing the indexes of the sections that you want to delete. This parameter must not be `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to delete entire sections and their contained items. Always update your data source object before calling this method. Calling this method kicks off an update (and possible animations) to delete the specified sections. Specifically, the collection view asks the layout object for the final layout attributes for any deleted sections and may also ask for updated layout attributes for any remaining sections. If the layout attributes of any visible items changed, those changes are animated into place.

When inserting or deleting multiple sections and items, you can animate all of your changes at once using the [performBatchUpdates:completionHandler:](performbatchupdates%28__completionhandler_%29.md) method.

## See Also

### Inserting, Moving, Deleting, and Collapsing Sections

- [insertSections:](insertsections%28__%29.md): Inserts new sections at the specified indexes.
- [moveSection:toSection:](movesection%28__tosection_%29.md): Moves a section from its current location to a new location.
- [toggleSectionCollapse:](togglesectioncollapse%28__%29.md): Collapses the section in which the sender resides into a single horizontally scrollable row.
