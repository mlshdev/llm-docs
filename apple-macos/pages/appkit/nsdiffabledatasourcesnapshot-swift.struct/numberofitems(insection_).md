> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdiffabledatasourcesnapshot-swift.struct/numberofitems(insection:)](https://developer.apple.com/documentation/appkit/nsdiffabledatasourcesnapshot-swift.struct/numberofitems(insection:))

# numberOfItems(inSection:)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.15.1+

Returns the number of items in the specified section of the snapshot.

## Declaration

```swift
func numberOfItems(inSection identifier: SectionIdentifierType) -> Int
```

## Parameters

- `identifier`: The identifier of the section of the snapshot.

<a id="return-value"></a>

## Return Value

The number of items in the specified section. This method returns `0` if the section is empty.

<a id="Discussion"></a>

## Discussion

If you call this method with the identifier of a section that doesn’t exist in the snapshot, the app throws an error.

## See Also

### Getting Item and Section Metrics

- [numberOfItems](numberofitems.md): The number of items in the snapshot.
- [numberOfSections](numberofsections.md): The number of sections in the snapshot.
