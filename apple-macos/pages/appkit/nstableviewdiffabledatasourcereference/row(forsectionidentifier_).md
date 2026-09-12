> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableviewdiffabledatasourcereference/row(forsectionidentifier:)](https://developer.apple.com/documentation/appkit/nstableviewdiffabledatasourcereference/row(forsectionidentifier:))

# row(forSectionIdentifier:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Returns a row for the section with the specified identifier in the table view.

## Declaration

```swift
func row(forSectionIdentifier identifier: SectionIdentifierType) -> Int
```

## Parameters

- `identifier`: The identifier of the section in the table view.

<a id="return-value"></a>

## Return Value

The item’s section, or `nil` if the method doesn’t find an item with the provided item identifier.

## See Also

### Identifying Items and Sections

- [itemIdentifier(forRow:)](itemidentifier%28forrow_%29.md): Returns an identifier for the item at the specified row in the table view.
- [row(forItemIdentifier:)](row%28foritemidentifier_%29.md): Returns a row for the item with the specified identifier in the table view.
- [sectionIdentifier(forRow:)](sectionidentifier%28forrow_%29.md): Returns the identifier of the section containing the specified row in the snapshot.

# rowForSectionIdentifier: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

Returns a row for the section with the specified identifier in the table view.

## Declaration

```objectivec
- (NSInteger) rowForSectionIdentifier:(SectionIdentifierType) identifier;
```

## Parameters

- `identifier`: The identifier of the section in the table view.

<a id="return-value"></a>

## Return Value

The item’s section, or `nil` if the method doesn’t find an item with the provided item identifier.

## See Also

### Identifying Items and Sections

- [itemIdentifierForRow:](itemidentifier%28forrow_%29.md): Returns an identifier for the item at the specified row in the table view.
- [rowForItemIdentifier:](row%28foritemidentifier_%29.md): Returns a row for the item with the specified identifier in the table view.
- [sectionIdentifierForRow:](sectionidentifier%28forrow_%29.md): Returns the identifier of the section containing the specified row in the snapshot.
