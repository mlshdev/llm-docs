> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdatasource/collectionview(_:numberofitemsinsection:)](https://developer.apple.com/documentation/appkit/nscollectionviewdatasource/collectionview(_:numberofitemsinsection:))

# collectionView(\_:numberOfItemsInSection:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Asks your data source object to provide the number of items in the specified section.

## Declaration

```swift
@MainActor func collectionView(_ collectionView: NSCollectionView, numberOfItemsInSection section: Int) -> Int
```

## Parameters

- `collectionView`: The collection view requesting the information.
- `section`: The index number of the section. Section indexes are zero based.

<a id="return-value"></a>

## Return Value

The number of items in the specified section.

<a id="Discussion"></a>

## Discussion

All data source objects must implement this method. Your implementation should quickly return the number of items in the specified section.

Make sure the number of items you return is accurate. The [collectionView(\_:itemForRepresentedObjectAt:)](collectionview%28__itemforrepresentedobjectat_%29.md) method of your data source object must be able to provide a visual representation for each item in the section.

## See Also

### Getting the Number of Sections and Items

- [numberOfSections(in:)](numberofsections%28in_%29.md): Asks your data source object to provide the total number of sections.

# collectionView:numberOfItemsInSection: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Asks your data source object to provide the number of items in the specified section.

## Declaration

```objectivec
- (NSInteger) collectionView:(NSCollectionView *) collectionView numberOfItemsInSection:(NSInteger) section;
```

## Parameters

- `collectionView`: The collection view requesting the information.
- `section`: The index number of the section. Section indexes are zero based.

<a id="return-value"></a>

## Return Value

The number of items in the specified section.

<a id="Discussion"></a>

## Discussion

All data source objects must implement this method. Your implementation should quickly return the number of items in the specified section.

Make sure the number of items you return is accurate. The [collectionView:itemForRepresentedObjectAtIndexPath:](collectionview%28__itemforrepresentedobjectat_%29.md) method of your data source object must be able to provide a visual representation for each item in the section.

## See Also

### Getting the Number of Sections and Items

- [numberOfSectionsInCollectionView:](numberofsections%28in_%29.md): Asks your data source object to provide the total number of sections.
