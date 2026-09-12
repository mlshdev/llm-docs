> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewdatasource/numberofsections(in:)](https://developer.apple.com/documentation/appkit/nscollectionviewdatasource/numberofsections(in:))

# numberOfSections(in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Asks your data source object to provide the total number of sections.

## Declaration

```swift
@MainActor optional func numberOfSections(in collectionView: NSCollectionView) -> Int
```

## Parameters

- `collectionView`: The collection view requesting the information.

<a id="return-value"></a>

## Return Value

The number of sections in the specified collection view.

<a id="Discussion"></a>

## Discussion

Implement this method when the organization of your data requires more than one section. If you do not implement this method, the collection view creates only one section.

## See Also

### Getting the Number of Sections and Items

- [collectionView(\_:numberOfItemsInSection:)](collectionview%28__numberofitemsinsection_%29.md): Asks your data source object to provide the number of items in the specified section.

# numberOfSectionsInCollectionView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Asks your data source object to provide the total number of sections.

## Declaration

```objectivec
- (NSInteger) numberOfSectionsInCollectionView:(NSCollectionView *) collectionView;
```

## Parameters

- `collectionView`: The collection view requesting the information.

<a id="return-value"></a>

## Return Value

The number of sections in the specified collection view.

<a id="Discussion"></a>

## Discussion

Implement this method when the organization of your data requires more than one section. If you do not implement this method, the collection view creates only one section.

## See Also

### Getting the Number of Sections and Items

- [collectionView:numberOfItemsInSection:](collectionview%28__numberofitemsinsection_%29.md): Asks your data source object to provide the number of items in the specified section.
