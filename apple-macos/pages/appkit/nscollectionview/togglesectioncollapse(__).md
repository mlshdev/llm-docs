> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/togglesectioncollapse(_:)](https://developer.apple.com/documentation/appkit/nscollectionview/togglesectioncollapse(_:))

# toggleSectionCollapse(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Collapses the section in which the sender resides into a single horizontally scrollable row.

## Declaration

```swift
@IBAction func toggleSectionCollapse(_ sender: Any)
```

## Parameters

- `sender`: The object that requested the action.

<a id="Discussion"></a>

## Discussion

The icon view in Finder offers this type of collapsible section behavior when users choose the Show Less and Show More buttons. To enable this behavior, your header view must conform to the `NSCollectionViewSectionHeaderView` protocol, because the collection view uses the `sectionCollapseButton` property to identify the button that controls the collapse action.

## See Also

### Inserting, Moving, Deleting, and Collapsing Sections

- [insertSections(\_:)](insertsections%28__%29.md): Inserts new sections at the specified indexes.
- [moveSection(\_:toSection:)](movesection%28__tosection_%29.md): Moves a section from its current location to a new location.
- [deleteSections(\_:)](deletesections%28__%29.md): Deletes the specified sections and their contained items.

# toggleSectionCollapse: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.12+

Collapses the section in which the sender resides into a single horizontally scrollable row.

## Declaration

```objectivec
- (void) toggleSectionCollapse:(id) sender;
```

## Parameters

- `sender`: The object that requested the action.

<a id="Discussion"></a>

## Discussion

The icon view in Finder offers this type of collapsible section behavior when users choose the Show Less and Show More buttons. To enable this behavior, your header view must conform to the `NSCollectionViewSectionHeaderView` protocol, because the collection view uses the `sectionCollapseButton` property to identify the button that controls the collapse action.

## See Also

### Inserting, Moving, Deleting, and Collapsing Sections

- [insertSections:](insertsections%28__%29.md): Inserts new sections at the specified indexes.
- [moveSection:toSection:](movesection%28__tosection_%29.md): Moves a section from its current location to a new location.
- [deleteSections:](deletesections%28__%29.md): Deletes the specified sections and their contained items.
