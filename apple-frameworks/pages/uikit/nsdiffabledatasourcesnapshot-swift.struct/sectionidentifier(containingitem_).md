> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesnapshot-swift.struct/sectionidentifier(containingitem:)](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesnapshot-swift.struct/sectionidentifier(containingitem:))

# sectionIdentifier(containingItem:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS

Returns the identifier of the section containing the specified item in the snapshot.

## Declaration

```swift
func sectionIdentifier(containingItem identifier: ItemIdentifierType) -> SectionIdentifierType?
```

## Parameters

- `identifier`: The identifier of the item contained in the section of the snapshot.

<a id="return-value"></a>

## Return Value

The identifier of the section containing the specified item, or `nil` if the specified item doesn’t exist in any section of the snapshot.

## See Also

### Identifying items and sections

- [itemIdentifiers](itemidentifiers.md): The identifiers of all of the items in the snapshot.
- [sectionIdentifiers](sectionidentifiers.md): The identifiers of all of the sections in the snapshot.
- [indexOfItem(\_:)](indexofitem%28__%29.md): Returns the index of the item in the snapshot with the specified identifier.
- [indexOfSection(\_:)](indexofsection%28__%29.md): Returns the index of the section of the snapshot with the specified identifier.
- [itemIdentifiers(inSection:)](itemidentifiers%28insection_%29.md): Returns the identifiers of all of the items in the specified section of the snapshot.
