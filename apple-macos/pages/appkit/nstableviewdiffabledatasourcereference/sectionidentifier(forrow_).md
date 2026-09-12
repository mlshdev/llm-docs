> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdiffabledatasourcereference/sectionidentifier(forrow:)](https://developer.apple.com/documentation/appkit/nstableviewdiffabledatasourcereference/sectionidentifier(forrow:))

# sectionIdentifier(forRow:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Returns the identifier of the section containing the specified row in the snapshot.

## Declaration

```swift
func sectionIdentifier(forRow row: Int) -> SectionIdentifierType?
```

## Parameters

- `row`: The row of the section in the table view.

<a id="return-value"></a>

## Return Value

The section’s identifier, or `nil` if the method doesn’t find an item with the provided item identifier.

## See Also

### Identifying Items and Sections

- [itemIdentifier(forRow:)](itemidentifier%28forrow_%29.md): Returns an identifier for the item at the specified row in the table view.
- [row(forItemIdentifier:)](row%28foritemidentifier_%29.md): Returns a row for the item with the specified identifier in the table view.
- [row(forSectionIdentifier:)](row%28forsectionidentifier_%29.md): Returns a row for the section with the specified identifier in the table view.

# sectionIdentifierForRow: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Returns the identifier of the section containing the specified row in the snapshot.

## Declaration

```objectivec
- (SectionIdentifierType) sectionIdentifierForRow:(NSInteger) row;
```

## Parameters

- `row`: The row of the section in the table view.

<a id="return-value"></a>

## Return Value

The section’s identifier, or `nil` if the method doesn’t find an item with the provided item identifier.

## See Also

### Identifying Items and Sections

- [itemIdentifierForRow:](itemidentifier%28forrow_%29.md): Returns an identifier for the item at the specified row in the table view.
- [rowForItemIdentifier:](row%28foritemidentifier_%29.md): Returns a row for the item with the specified identifier in the table view.
- [rowForSectionIdentifier:](row%28forsectionidentifier_%29.md): Returns a row for the section with the specified identifier in the table view.
