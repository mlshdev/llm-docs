> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesnapshotreference/numberofitems(insection:)](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesnapshotreference/numberofitems(insection:))

# numberOfItems(inSection:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

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

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

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
