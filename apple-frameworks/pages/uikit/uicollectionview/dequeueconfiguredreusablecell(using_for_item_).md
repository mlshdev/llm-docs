> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/dequeueconfiguredreusablecell(using:for:item:)](https://developer.apple.com/documentation/uikit/uicollectionview/dequeueconfiguredreusablecell(using:for:item:))

# dequeueConfiguredReusableCell(using:for:item:)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

Dequeues a configured reusable cell object.

## Declaration

```swift
@MainActor @preconcurrency func dequeueConfiguredReusableCell<Cell, Item>(using registration: UICollectionView.CellRegistration<Cell, Item>, for indexPath: IndexPath, item: Item?) -> Cell where Cell : UICollectionViewCell
```

## Parameters

- `registration`: The cell registration for configuring the cell object. See [UICollectionView.CellRegistration](cellregistration.md).
- `indexPath`: The index path that specifies the location of the cell in the collection view.
- `item`: The item that provides data for the cell.

<a id="return-value"></a>

## Return Value

A configured reusable cell object.

## See Also

### Creating cells

- [UICollectionView.CellRegistration](cellregistration.md): A registration for the collection view’s cells.
- [register(\_:forCellWithReuseIdentifier:)](register%28__forcellwithreuseidentifier_%29-3vaho.md): Registers a class for use in creating new collection view cells.
- [register(\_:forCellWithReuseIdentifier:)](register%28__forcellwithreuseidentifier_%29-6z6t4.md): Deprecated. Registers a nib file for use in creating new collection view cells.
- [dequeueReusableCell(withReuseIdentifier:for:)](dequeuereusablecell%28withreuseidentifier_for_%29.md): Dequeues a reusable cell object located by its identifier.
