> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdiffabledatasourcesnapshotreference/sectionidentifiers](https://developer.apple.com/documentation/appkit/nsdiffabledatasourcesnapshotreference/sectionidentifiers)

# sectionIdentifiers (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The identifiers of all of the sections in the snapshot.

## Declaration

```swift
var sectionIdentifiers: [Any] { get }
```

## See Also

### Identifying items and sections

- [itemIdentifiers](itemidentifiers.md): The identifiers of all of the items in the snapshot.
- [index(ofItemIdentifier:)](index%28ofitemidentifier_%29.md): Returns the index of the item in the snapshot with the specified identifier.
- [index(ofSectionIdentifier:)](index%28ofsectionidentifier_%29.md): Returns the index of the section of the snapshot with the specified identifier.
- [itemIdentifiersInSection(withIdentifier:)](itemidentifiersinsection%28withidentifier_%29.md): Returns the identifiers of all of the items in the specified section of the snapshot.
- [sectionIdentifier(forSectionContainingItemIdentifier:)](sectionidentifier%28forsectioncontainingitemidentifier_%29.md): Returns the identifier of the section containing the specified item in the snapshot.

# sectionIdentifiers (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The identifiers of all of the sections in the snapshot.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<id> * sectionIdentifiers;
```

## See Also

### Identifying items and sections

- [itemIdentifiers](itemidentifiers.md): The identifiers of all of the items in the snapshot.
- [indexOfItemIdentifier:](index%28ofitemidentifier_%29.md): Returns the index of the item in the snapshot with the specified identifier.
- [indexOfSectionIdentifier:](index%28ofsectionidentifier_%29.md): Returns the index of the section of the snapshot with the specified identifier.
- [itemIdentifiersInSectionWithIdentifier:](itemidentifiersinsection%28withidentifier_%29.md): Returns the identifiers of all of the items in the specified section of the snapshot.
- [sectionIdentifierForSectionContainingItemIdentifier:](sectionidentifier%28forsectioncontainingitemidentifier_%29.md): Returns the identifier of the section containing the specified item in the snapshot.
