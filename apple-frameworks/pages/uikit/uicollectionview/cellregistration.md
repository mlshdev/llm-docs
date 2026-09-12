> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/cellregistration](https://developer.apple.com/documentation/uikit/uicollectionview/cellregistration)

# UICollectionView.CellRegistration

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

A registration for the collection view’s cells.

## Declaration

```swift
struct CellRegistration<Cell, Item> where Cell : UICollectionViewCell
```

<a id="overview"></a>

## Overview

Use a cell registration to register cells with your collection view and configure each cell for display. You create a cell registration with your cell type and data item type as the registration’s generic parameters, passing in a registration handler to configure the cell. In the registration handler, you specify how to configure the content and appearance of that type of cell.

The following example creates a cell registration for cells of type [UICollectionViewListCell](../uicollectionviewlistcell.md). It creates a content configuration with a system default style, customizes the content and appearance of the configuration, and then assigns the configuration to the cell.

```swift
let cellRegistration = UICollectionView.CellRegistration<UICollectionViewListCell, Int> { cell, indexPath, item in
    
    var contentConfiguration = cell.defaultContentConfiguration()
    
    contentConfiguration.text = "\(item)"
    contentConfiguration.textProperties.color = .lightGray
    
    cell.contentConfiguration = contentConfiguration
}
```

After you create a cell registration, you pass it in to [dequeueConfiguredReusableCell(using:for:item:)](dequeueconfiguredreusablecell%28using_for_item_%29.md), which you call from your data source’s cell provider.

```swift
dataSource = UICollectionViewDiffableDataSource<Section, Int>(collectionView: collectionView) {
    (collectionView: UICollectionView, indexPath: IndexPath, itemIdentifier: Int) -> UICollectionViewCell? in
    
    return collectionView.dequeueConfiguredReusableCell(using: cellRegistration,
                                                        for: indexPath,
                                                        item: itemIdentifier)
}
```

You don’t need to call [register(\_:forCellWithReuseIdentifier:)](register%28__forcellwithreuseidentifier_%29-6z6t4.md) or [register(\_:forCellWithReuseIdentifier:)](register%28__forcellwithreuseidentifier_%29-3vaho.md). The collection view registers your cell automatically when you pass the cell registration to [dequeueConfiguredReusableCell(using:for:item:)](dequeueconfiguredreusablecell%28using_for_item_%29.md).

> **Important**

>  Don’t create your cell registration inside a [UICollectionViewDiffableDataSource.CellProvider](../uicollectionviewdiffabledatasource-9tqpa/cellprovider.md) closure; doing so prevents cell reuse, and generates an exception in iOS 15 and higher.

## Topics

### Creating a cell registration

- [init(handler:)](cellregistration/init%28handler_%29.md): Creates a cell registration with the specified registration handler.
- [init(cellNib:handler:)](cellregistration/init%28cellnib_handler_%29.md): Deprecated. Creates a cell registration with the specified registration handler and nib file.
- [UICollectionView.CellRegistration.Handler](cellregistration/handler.md): A closure that handles the cell registration and configuration.

## See Also

### Creating cells

- [dequeueConfiguredReusableCell(using:for:item:)](dequeueconfiguredreusablecell%28using_for_item_%29.md): Dequeues a configured reusable cell object.
- [register(\_:forCellWithReuseIdentifier:)](register%28__forcellwithreuseidentifier_%29-3vaho.md): Registers a class for use in creating new collection view cells.
- [register(\_:forCellWithReuseIdentifier:)](register%28__forcellwithreuseidentifier_%29-6z6t4.md): Deprecated. Registers a nib file for use in creating new collection view cells.
- [dequeueReusableCell(withReuseIdentifier:for:)](dequeuereusablecell%28withreuseidentifier_for_%29.md): Dequeues a reusable cell object located by its identifier.
