> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/dequeueconfiguredreusablecellwithregistration:forindexpath:item:](https://developer.apple.com/documentation/uikit/uicollectionview/dequeueconfiguredreusablecellwithregistration:forindexpath:item:)

# dequeueConfiguredReusableCellWithRegistration:forIndexPath:item:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Dequeues a configured reusable cell object.

## Declaration

```objectivec
- (UICollectionViewCell *) dequeueConfiguredReusableCellWithRegistration:(UICollectionViewCellRegistration *) registration forIndexPath:(NSIndexPath *) indexPath item:(id) item;
```

## Parameters

- `registration`: The cell registration for configuring the cell object. See [UICollectionViewCellRegistration](../uicollectionviewcellregistration.md).
- `indexPath`: The index path that specifies the location of the cell in the collection view.
- `item`: The item that provides data for the cell.

<a id="return-value"></a>

## Return Value

A configured reusable cell object.

## See Also

### Creating cells

- [UICollectionViewCellRegistration](../uicollectionviewcellregistration.md): A registration for the collection view’s cells.
- [registerClass:forCellWithReuseIdentifier:](register%28__forcellwithreuseidentifier_%29-3vaho.md): Registers a class for use in creating new collection view cells.
- [registerNib:forCellWithReuseIdentifier:](register%28__forcellwithreuseidentifier_%29-6z6t4.md): Deprecated. Registers a nib file for use in creating new collection view cells.
- [dequeueReusableCellWithReuseIdentifier:forIndexPath:](dequeuereusablecell%28withreuseidentifier_for_%29.md): Dequeues a reusable cell object located by its identifier.
