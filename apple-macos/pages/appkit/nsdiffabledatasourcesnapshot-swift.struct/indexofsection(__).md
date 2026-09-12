> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdiffabledatasourcesnapshot-swift.struct/indexofsection(_:)](https://developer.apple.com/documentation/appkit/nsdiffabledatasourcesnapshot-swift.struct/indexofsection(_:))

# indexOfSection(\_:)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15.1+

Returns the index of the section of the snapshot with the specified identifier.

## Declaration

```swift
func indexOfSection(_ identifier: SectionIdentifierType) -> Int?
```

## Parameters

- `identifier`: The identifier of the section of the snapshot.

<a id="return-value"></a>

## Return Value

The index of the section of the snapshot, or `nil` if the section with the specified identifier doesn’t exist in the snapshot. This index value is 0-based.

## See Also

### Identifying Items and Sections

- [itemIdentifiers](itemidentifiers.md): The identifiers of all of the items in the snapshot.
- [sectionIdentifiers](sectionidentifiers.md): The identifiers of all of the sections in the snapshot.
- [indexOfItem(\_:)](indexofitem%28__%29.md): Returns the index of the item in the snapshot with the specified identifier.
- [itemIdentifiers(inSection:)](itemidentifiers%28insection_%29.md): Returns the identifiers of all of the items in the specified section of the snapshot.
- [sectionIdentifier(containingItem:)](sectionidentifier%28containingitem_%29.md): Returns the identifier of the section containing the specified item in the snapshot.
