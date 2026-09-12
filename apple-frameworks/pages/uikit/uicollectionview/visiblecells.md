> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/visiblecells](https://developer.apple.com/documentation/uikit/uicollectionview/visiblecells)

# visibleCells (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An array of visible cells currently displayed by the collection view.

## Declaration

```swift
var visibleCells: [UICollectionViewCell] { get }
```

<a id="return-value"></a>

## Return Value

An array of [UICollectionViewCell](../uicollectionviewcell.md) objects. If no cells are visible, this method returns an empty array.

<a id="Discussion"></a>

## Discussion

This method returns the complete list of visible cells displayed by the collection view.

## See Also

### Related Documentation

- [indexPathsForVisibleItems](indexpathsforvisibleitems.md): An array of the visible items in the collection view.

### Getting the state of the collection view

- [numberOfSections](numberofsections.md): The number of sections displayed by the collection view.
- [numberOfItems(inSection:)](numberofitems%28insection_%29.md): Fetches the count of items in the specified section.

# visibleCells (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An array of visible cells currently displayed by the collection view.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<__kindof UICollectionViewCell *> * visibleCells;
```

<a id="return-value"></a>

## Return Value

An array of [UICollectionViewCell](../uicollectionviewcell.md) objects. If no cells are visible, this method returns an empty array.

<a id="Discussion"></a>

## Discussion

This method returns the complete list of visible cells displayed by the collection view.

## See Also

### Related Documentation

- [indexPathsForVisibleItems](indexpathsforvisibleitems.md): An array of the visible items in the collection view.

### Getting the state of the collection view

- [numberOfSections](numberofsections.md): The number of sections displayed by the collection view.
- [numberOfItemsInSection:](numberofitems%28insection_%29.md): Fetches the count of items in the specified section.
