> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesnapshot-swift.struct/itemidentifiers(insection:)

# itemIdentifiers(inSection:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS

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

### Identifying items and sections

- [itemIdentifiers](itemidentifiers.md): The identifiers of all of the items in the snapshot.
- [sectionIdentifiers](sectionidentifiers.md): The identifiers of all of the sections in the snapshot.
- [indexOfItem(\_:)](indexofitem%28__%29.md): Returns the index of the item in the snapshot with the specified identifier.
- [indexOfSection(\_:)](indexofsection%28__%29.md): Returns the index of the section of the snapshot with the specified identifier.
- [sectionIdentifier(containingItem:)](sectionidentifier%28containingitem_%29.md): Returns the identifier of the section containing the specified item in the snapshot.
