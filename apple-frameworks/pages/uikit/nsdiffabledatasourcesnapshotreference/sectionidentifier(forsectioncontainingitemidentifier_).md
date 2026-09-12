> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesnapshotreference/sectionidentifier(forsectioncontainingitemidentifier:)](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesnapshotreference/sectionidentifier(forsectioncontainingitemidentifier:))

# sectionIdentifier(forSectionContainingItemIdentifier:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Returns the identifier of the section containing the specified item in the snapshot.

## Declaration

```swift
func sectionIdentifier(forSectionContainingItemIdentifier itemIdentifier: Any) -> Any?
```

## Parameters

- `itemIdentifier`: The identifier of the item contained in the section of the snapshot.

<a id="return-value"></a>

## Return Value

The identifier of the section containing the specified item, or `nil` if the specified item doesn’t exist in any section of the snapshot.

## See Also

### Identifying items and sections

- [itemIdentifiers](itemidentifiers.md): The identifiers of all of the items in the snapshot.
- [sectionIdentifiers](sectionidentifiers.md): The identifiers of all of the sections in the snapshot.
- [index(ofItemIdentifier:)](index%28ofitemidentifier_%29.md): Returns the index of the item in the snapshot with the specified identifier.
- [index(ofSectionIdentifier:)](index%28ofsectionidentifier_%29.md): Returns the index of the section of the snapshot with the specified identifier.
- [itemIdentifiersInSection(withIdentifier:)](itemidentifiersinsection%28withidentifier_%29.md): Returns the identifiers of all of the items in the specified section of the snapshot.

# sectionIdentifierForSectionContainingItemIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Returns the identifier of the section containing the specified item in the snapshot.

## Declaration

```objectivec
- (SectionIdentifierType) sectionIdentifierForSectionContainingItemIdentifier:(ItemIdentifierType) itemIdentifier;
```

## Parameters

- `itemIdentifier`: The identifier of the item contained in the section of the snapshot.

<a id="return-value"></a>

## Return Value

The identifier of the section containing the specified item, or `nil` if the specified item doesn’t exist in any section of the snapshot.

## See Also

### Identifying items and sections

- [itemIdentifiers](itemidentifiers.md): The identifiers of all of the items in the snapshot.
- [sectionIdentifiers](sectionidentifiers.md): The identifiers of all of the sections in the snapshot.
- [indexOfItemIdentifier:](index%28ofitemidentifier_%29.md): Returns the index of the item in the snapshot with the specified identifier.
- [indexOfSectionIdentifier:](index%28ofsectionidentifier_%29.md): Returns the index of the section of the snapshot with the specified identifier.
- [itemIdentifiersInSectionWithIdentifier:](itemidentifiersinsection%28withidentifier_%29.md): Returns the identifiers of all of the items in the specified section of the snapshot.
