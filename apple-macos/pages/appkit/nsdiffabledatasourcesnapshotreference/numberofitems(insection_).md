> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdiffabledatasourcesnapshotreference/numberofitems(insection:)](https://developer.apple.com/documentation/appkit/nsdiffabledatasourcesnapshotreference/numberofitems(insection:))

# numberOfItems(inSection:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Returns the number of items in the specified section of the snapshot.

## Declaration

```swift
func numberOfItems(inSection sectionIdentifier: Any) -> Int
```

## Parameters

- `sectionIdentifier`: The identifier of the section of the snapshot.

<a id="return-value"></a>

## Return Value

The number of items in the specified section. This method returns `0` if the section is empty.

<a id="Discussion"></a>

## Discussion

If you call this method with the identifier of a section that doesn’t exist in the snapshot, the app throws an error.

## See Also

### Getting item and section metrics

- [numberOfItems](numberofitems.md): The number of items in the snapshot.
- [numberOfSections](numberofsections.md): The number of sections in the snapshot.

# numberOfItemsInSection: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Returns the number of items in the specified section of the snapshot.

## Declaration

```objectivec
- (NSInteger) numberOfItemsInSection:(SectionIdentifierType) sectionIdentifier;
```

## Parameters

- `sectionIdentifier`: The identifier of the section of the snapshot.

<a id="return-value"></a>

## Return Value

The number of items in the specified section. This method returns `0` if the section is empty.

<a id="Discussion"></a>

## Discussion

If you call this method with the identifier of a section that doesn’t exist in the snapshot, the app throws an error.

## See Also

### Getting item and section metrics

- [numberOfItems](numberofitems.md): The number of items in the snapshot.
- [numberOfSections](numberofsections.md): The number of sections in the snapshot.
