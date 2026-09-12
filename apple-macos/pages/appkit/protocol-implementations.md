> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/protocol-implementations](https://developer.apple.com/documentation/appkit/protocol-implementations)

# Protocol Implementations (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Access the diffable data source’s implementations of protocol methods.

<a id="overview"></a>

## Overview

The diffable data source type conforms to several protocols, including [NSCollectionViewDataSource](nscollectionviewdatasource.md) and [Hashable](https://developer.apple.com/documentation/swift/hashable). This page lists the diffable data source type’s implementations of those protocol requirements.

## Topics

### Getting Item and Section Metrics

- [collectionView(\_:numberOfItemsInSection:)](nscollectionviewdatasource/collectionview%28__numberofitemsinsection_%29.md): Asks your data source object to provide the number of items in the specified section.
- [numberOfSections(in:)](nscollectionviewdatasource/numberofsections%28in_%29.md): Asks your data source object to provide the total number of sections.

### Getting Views for Items

- [collectionView(\_:itemForRepresentedObjectAt:)](nscollectionviewdatasource/collectionview%28__itemforrepresentedobjectat_%29.md): Asks your data source object to provide the item at the specified location in the collection view.
- [collectionView(\_:viewForSupplementaryElementOfKind:at:)](nscollectionviewdatasource/collectionview%28__viewforsupplementaryelementofkind_at_%29.md): Asks your data source object to provide the supplementary view at the specified location in a section of the collection view.

### Debugging a Diffable Data Source

- [description()](nscollectionviewdiffabledatasource-axww/description%28%29.md): Returns a string with a description of the diffable data source.

# Protocol Implementations (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Access the diffable data source’s implementations of protocol methods.

<a id="overview"></a>

## Overview

The diffable data source type conforms to several protocols, including [NSCollectionViewDataSource](nscollectionviewdatasource.md) and [Hashable](https://developer.apple.com/documentation/swift/hashable). This page lists the diffable data source type’s implementations of those protocol requirements.

## Topics

### Getting Item and Section Metrics

- [collectionView:numberOfItemsInSection:](nscollectionviewdatasource/collectionview%28__numberofitemsinsection_%29.md): Asks your data source object to provide the number of items in the specified section.
- [numberOfSectionsInCollectionView:](nscollectionviewdatasource/numberofsections%28in_%29.md): Asks your data source object to provide the total number of sections.

### Getting Views for Items

- [collectionView:itemForRepresentedObjectAtIndexPath:](nscollectionviewdatasource/collectionview%28__itemforrepresentedobjectat_%29.md): Asks your data source object to provide the item at the specified location in the collection view.
- [collectionView:viewForSupplementaryElementOfKind:atIndexPath:](nscollectionviewdatasource/collectionview%28__viewforsupplementaryelementofkind_at_%29.md): Asks your data source object to provide the supplementary view at the specified location in a section of the collection view.
