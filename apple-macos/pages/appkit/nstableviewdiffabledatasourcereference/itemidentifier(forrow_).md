> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdiffabledatasourcereference/itemidentifier(forrow:)](https://developer.apple.com/documentation/appkit/nstableviewdiffabledatasourcereference/itemidentifier(forrow:))

# itemIdentifier(forRow:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Returns an identifier for the item at the specified row in the table view.

## Declaration

```swift
func itemIdentifier(forRow row: Int) -> ItemIdentifierType?
```

## Parameters

- `row`: The row of the item in the table view.

<a id="return-value"></a>

## Return Value

The item’s identifier, or `nil` if the method doesn’t find an item at the provided row.

## See Also

### Identifying Items and Sections

- [row(forItemIdentifier:)](row%28foritemidentifier_%29.md): Returns a row for the item with the specified identifier in the table view.
- [sectionIdentifier(forRow:)](sectionidentifier%28forrow_%29.md): Returns the identifier of the section containing the specified row in the snapshot.
- [row(forSectionIdentifier:)](row%28forsectionidentifier_%29.md): Returns a row for the section with the specified identifier in the table view.

# itemIdentifierForRow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Returns an identifier for the item at the specified row in the table view.

## Declaration

```objectivec
- (ItemIdentifierType) itemIdentifierForRow:(NSInteger) row;
```

## Parameters

- `row`: The row of the item in the table view.

<a id="return-value"></a>

## Return Value

The item’s identifier, or `nil` if the method doesn’t find an item at the provided row.

## See Also

### Identifying Items and Sections

- [rowForItemIdentifier:](row%28foritemidentifier_%29.md): Returns a row for the item with the specified identifier in the table view.
- [sectionIdentifierForRow:](sectionidentifier%28forrow_%29.md): Returns the identifier of the section containing the specified row in the snapshot.
- [rowForSectionIdentifier:](row%28forsectionidentifier_%29.md): Returns a row for the section with the specified identifier in the table view.
