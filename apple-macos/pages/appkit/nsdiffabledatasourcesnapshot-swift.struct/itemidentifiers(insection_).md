> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdiffabledatasourcesnapshot-swift.struct/itemidentifiers(insection:)](https://developer.apple.com/documentation/appkit/nsdiffabledatasourcesnapshot-swift.struct/itemidentifiers(insection:))

# itemIdentifiers(inSection:)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15.1+

Returns the identifiers of all of the items in the specified section of the snapshot.

## Declaration

```swift
func itemIdentifiers(inSection identifier: SectionIdentifierType) -> [ItemIdentifierType]
```

## Parameters

- `identifier`: The identifier of the section of the snapshot.

<a id="return-value"></a>

## Return Value

An array of identifiers of the items contained in the section.

## See Also

### Identifying Items and Sections

- [itemIdentifiers](itemidentifiers.md): The identifiers of all of the items in the snapshot.
- [sectionIdentifiers](sectionidentifiers.md): The identifiers of all of the sections in the snapshot.
- [indexOfItem(\_:)](indexofitem%28__%29.md): Returns the index of the item in the snapshot with the specified identifier.
- [indexOfSection(\_:)](indexofsection%28__%29.md): Returns the index of the section of the snapshot with the specified identifier.
- [sectionIdentifier(containingItem:)](sectionidentifier%28containingitem_%29.md): Returns the identifier of the section containing the specified item in the snapshot.
