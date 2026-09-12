> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesnapshotreference/index(ofsectionidentifier:)](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesnapshotreference/index(ofsectionidentifier:))

# index(ofSectionIdentifier:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Returns the index of the section of the snapshot with the specified identifier.

## Declaration

```swift
func index(ofSectionIdentifier sectionIdentifier: Any) -> Int
```

## Parameters

- `sectionIdentifier`: The identifier of the section of the snapshot.

<a id="return-value"></a>

## Return Value

The index of the section of the snapshot, or `NSNotFound` if the section with the specified identifier doesn’t exist in the snapshot. This index value is 0-based.

## See Also

### Identifying items and sections

- [itemIdentifiers](itemidentifiers.md): The identifiers of all of the items in the snapshot.
- [sectionIdentifiers](sectionidentifiers.md): The identifiers of all of the sections in the snapshot.
- [index(ofItemIdentifier:)](index%28ofitemidentifier_%29.md): Returns the index of the item in the snapshot with the specified identifier.
- [itemIdentifiersInSection(withIdentifier:)](itemidentifiersinsection%28withidentifier_%29.md): Returns the identifiers of all of the items in the specified section of the snapshot.
- [sectionIdentifier(forSectionContainingItemIdentifier:)](sectionidentifier%28forsectioncontainingitemidentifier_%29.md): Returns the identifier of the section containing the specified item in the snapshot.

# indexOfSectionIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Returns the index of the section of the snapshot with the specified identifier.

## Declaration

```objectivec
- (NSInteger) indexOfSectionIdentifier:(SectionIdentifierType) sectionIdentifier;
```

## Parameters

- `sectionIdentifier`: The identifier of the section of the snapshot.

<a id="return-value"></a>

## Return Value

The index of the section of the snapshot, or `NSNotFound` if the section with the specified identifier doesn’t exist in the snapshot. This index value is 0-based.

## See Also

### Identifying items and sections

- [itemIdentifiers](itemidentifiers.md): The identifiers of all of the items in the snapshot.
- [sectionIdentifiers](sectionidentifiers.md): The identifiers of all of the sections in the snapshot.
- [indexOfItemIdentifier:](index%28ofitemidentifier_%29.md): Returns the index of the item in the snapshot with the specified identifier.
- [itemIdentifiersInSectionWithIdentifier:](itemidentifiersinsection%28withidentifier_%29.md): Returns the identifiers of all of the items in the specified section of the snapshot.
- [sectionIdentifierForSectionContainingItemIdentifier:](sectionidentifier%28forsectioncontainingitemidentifier_%29.md): Returns the identifier of the section containing the specified item in the snapshot.
