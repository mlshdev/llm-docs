> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsdiffabledatasourcesnapshot-swift.struct/numberofitems(insection:)](https://developer.apple.com/documentation/uikit/nsdiffabledatasourcesnapshot-swift.struct/numberofitems(insection:))

# numberOfItems(inSection:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS

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

### Getting item and section metrics

- [numberOfItems](numberofitems.md): The number of items in the snapshot.
- [numberOfSections](numberofsections.md): The number of sections in the snapshot.
