> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/numberofitems(insection:)](https://developer.apple.com/documentation/uikit/uicollectionview/numberofitems(insection:))

# numberOfItems(inSection:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Fetches the count of items in the specified section.

## Declaration

```swift
func numberOfItems(inSection section: Int) -> Int
```

## Parameters

- `section`: The index of the section for which you want a count of the items.

<a id="return-value"></a>

## Return Value

The number of items in the specified section.

## See Also

### Getting the state of the collection view

- [numberOfSections](numberofsections.md): The number of sections displayed by the collection view.
- [visibleCells](visiblecells.md): An array of visible cells currently displayed by the collection view.

# numberOfItemsInSection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Fetches the count of items in the specified section.

## Declaration

```objectivec
- (NSInteger) numberOfItemsInSection:(NSInteger) section;
```

## Parameters

- `section`: The index of the section for which you want a count of the items.

<a id="return-value"></a>

## Return Value

The number of items in the specified section.

## See Also

### Getting the state of the collection view

- [numberOfSections](numberofsections.md): The number of sections displayed by the collection view.
- [visibleCells](visiblecells.md): An array of visible cells currently displayed by the collection view.
