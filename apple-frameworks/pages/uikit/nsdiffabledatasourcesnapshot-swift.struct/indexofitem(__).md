> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesnapshot-swift.struct/indexofitem(_:)](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesnapshot-swift.struct/indexofitem(_:))

# indexOfItem(\_:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS

Returns the index of the item in the snapshot with the specified identifier.

## Declaration

```swift
func indexOfItem(_ identifier: ItemIdentifierType) -> Int?
```

## Parameters

- `identifier`: The identifier of the item in the snapshot.

<a id="return-value"></a>

## Return Value

The index of the item in the snapshot, or `nil` if the item with the specified identifier doesn’t exist in the snapshot. This index value is 0-based.

## See Also

### Identifying items and sections

- [itemIdentifiers](itemidentifiers.md): The identifiers of all of the items in the snapshot.
- [sectionIdentifiers](sectionidentifiers.md): The identifiers of all of the sections in the snapshot.
- [indexOfSection(\_:)](indexofsection%28__%29.md): Returns the index of the section of the snapshot with the specified identifier.
- [itemIdentifiers(inSection:)](itemidentifiers%28insection_%29.md): Returns the identifiers of all of the items in the specified section of the snapshot.
- [sectionIdentifier(containingItem:)](sectionidentifier%28containingitem_%29.md): Returns the identifier of the section containing the specified item in the snapshot.
