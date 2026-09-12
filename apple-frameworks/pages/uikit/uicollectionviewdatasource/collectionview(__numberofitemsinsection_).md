> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewdatasource/collectionview(_:numberofitemsinsection:)](https://developer.apple.com/documentation/uikit/uicollectionviewdatasource/collectionview(_:numberofitemsinsection:))

# collectionView(\_:numberOfItemsInSection:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Asks your data source object for the number of items in the specified section.

## Declaration

```swift
func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int
```

## Parameters

- `collectionView`: The collection view requesting this information.
- `section`: An index number identifying a section in `collectionView`. This index value is 0-based.

<a id="return-value"></a>

## Return Value

The number of items in `section`.

## See Also

### Getting item and section metrics

- [numberOfSections(in:)](numberofsections%28in_%29.md): Asks your data source object for the number of sections in the collection view.

# collectionView:numberOfItemsInSection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Asks your data source object for the number of items in the specified section.

## Declaration

```objectivec
- (NSInteger) collectionView:(UICollectionView *) collectionView numberOfItemsInSection:(NSInteger) section;
```

## Parameters

- `collectionView`: The collection view requesting this information.
- `section`: An index number identifying a section in `collectionView`. This index value is 0-based.

<a id="return-value"></a>

## Return Value

The number of items in `section`.

## See Also

### Getting item and section metrics

- [numberOfSectionsInCollectionView:](numberofsections%28in_%29.md): Asks your data source object for the number of sections in the collection view.
