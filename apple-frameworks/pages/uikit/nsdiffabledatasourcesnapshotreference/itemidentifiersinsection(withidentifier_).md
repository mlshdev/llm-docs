> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesnapshotreference/itemidentifiersinsection(withidentifier:)](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesnapshotreference/itemidentifiersinsection(withidentifier:))

# itemIdentifiersInSection(withIdentifier:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Returns the identifiers of all of the items in the specified section of the snapshot.

## Declaration

```swift
func itemIdentifiersInSection(withIdentifier sectionIdentifier: Any) -> [Any]
```

## Parameters

- `sectionIdentifier`: The identifier of the section of the snapshot.

<a id="return-value"></a>

## Return Value

An array of identifiers of the items contained in the section.

## See Also

### Identifying items and sections

- [itemIdentifiers](itemidentifiers.md): The identifiers of all of the items in the snapshot.
- [sectionIdentifiers](sectionidentifiers.md): The identifiers of all of the sections in the snapshot.
- [index(ofItemIdentifier:)](index%28ofitemidentifier_%29.md): Returns the index of the item in the snapshot with the specified identifier.
- [index(ofSectionIdentifier:)](index%28ofsectionidentifier_%29.md): Returns the index of the section of the snapshot with the specified identifier.
- [sectionIdentifier(forSectionContainingItemIdentifier:)](sectionidentifier%28forsectioncontainingitemidentifier_%29.md): Returns the identifier of the section containing the specified item in the snapshot.

# itemIdentifiersInSectionWithIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Returns the identifiers of all of the items in the specified section of the snapshot.

## Declaration

```objectivec
- (NSArray<id> *) itemIdentifiersInSectionWithIdentifier:(SectionIdentifierType) sectionIdentifier;
```

## Parameters

- `sectionIdentifier`: The identifier of the section of the snapshot.

<a id="return-value"></a>

## Return Value

An array of identifiers of the items contained in the section.

## See Also

### Identifying items and sections

- [itemIdentifiers](itemidentifiers.md): The identifiers of all of the items in the snapshot.
- [sectionIdentifiers](sectionidentifiers.md): The identifiers of all of the sections in the snapshot.
- [indexOfItemIdentifier:](index%28ofitemidentifier_%29.md): Returns the index of the item in the snapshot with the specified identifier.
- [indexOfSectionIdentifier:](index%28ofsectionidentifier_%29.md): Returns the index of the section of the snapshot with the specified identifier.
- [sectionIdentifierForSectionContainingItemIdentifier:](sectionidentifier%28forsectioncontainingitemidentifier_%29.md): Returns the identifier of the section containing the specified item in the snapshot.
