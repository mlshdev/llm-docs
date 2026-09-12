> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/dequeuereusablecell(withreuseidentifier:for:)](https://developer.apple.com/documentation/uikit/uicollectionview/dequeuereusablecell(withreuseidentifier:for:))

# dequeueReusableCell(withReuseIdentifier:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Dequeues a reusable cell object located by its identifier.

## Declaration

```swift
func dequeueReusableCell(withReuseIdentifier identifier: String, for indexPath: IndexPath) -> UICollectionViewCell
```

## Parameters

- `identifier`: The reuse identifier for the specified cell. This parameter must not be `nil`.
- `indexPath`: The index path specifying the location of the cell. The data source receives this information when it is asked for the cell and should just pass it along. This method uses the index path to perform additional configuration based on the cell’s position in the collection view.

<a id="return-value"></a>

## Return Value

A valid [UICollectionReusableView](../uicollectionreusableview.md) object.

<a id="Discussion"></a>

## Discussion

Call this method from your data source object when asked to provide a new cell for the collection view. This method dequeues an existing cell if one is available or creates a new one based on the class or nib file you previously registered.

> **Important**

>  You must register a class or nib file using the [register(\_:forCellWithReuseIdentifier:)](register%28__forcellwithreuseidentifier_%29-3vaho.md) or [register(\_:forCellWithReuseIdentifier:)](register%28__forcellwithreuseidentifier_%29-6z6t4.md) method before calling this method.

If you registered a class for the specified `identifier` and a new cell must be created, this method initializes the cell by calling its [init(frame:)](../uiview/init%28frame_%29.md) method. For nib-based cells, this method loads the cell object from the provided nib file. If an existing cell was available for reuse, this method calls the cell’s [prepareForReuse()](../uicollectionreusableview/prepareforreuse%28%29.md) method instead.

## See Also

### Creating cells

- [UICollectionView.CellRegistration](cellregistration.md): A registration for the collection view’s cells.
- [dequeueConfiguredReusableCell(using:for:item:)](dequeueconfiguredreusablecell%28using_for_item_%29.md): Dequeues a configured reusable cell object.
- [register(\_:forCellWithReuseIdentifier:)](register%28__forcellwithreuseidentifier_%29-3vaho.md): Registers a class for use in creating new collection view cells.
- [register(\_:forCellWithReuseIdentifier:)](register%28__forcellwithreuseidentifier_%29-6z6t4.md): Deprecated. Registers a nib file for use in creating new collection view cells.

# dequeueReusableCellWithReuseIdentifier:forIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Dequeues a reusable cell object located by its identifier.

## Declaration

```objectivec
- (UICollectionViewCell *) dequeueReusableCellWithReuseIdentifier:(NSString *) identifier forIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `identifier`: The reuse identifier for the specified cell. This parameter must not be `nil`.
- `indexPath`: The index path specifying the location of the cell. The data source receives this information when it is asked for the cell and should just pass it along. This method uses the index path to perform additional configuration based on the cell’s position in the collection view.

<a id="return-value"></a>

## Return Value

A valid [UICollectionReusableView](../uicollectionreusableview.md) object.

<a id="Discussion"></a>

## Discussion

Call this method from your data source object when asked to provide a new cell for the collection view. This method dequeues an existing cell if one is available or creates a new one based on the class or nib file you previously registered.

> **Important**

>  You must register a class or nib file using the [registerClass:forCellWithReuseIdentifier:](register%28__forcellwithreuseidentifier_%29-3vaho.md) or [registerNib:forCellWithReuseIdentifier:](register%28__forcellwithreuseidentifier_%29-6z6t4.md) method before calling this method.

If you registered a class for the specified `identifier` and a new cell must be created, this method initializes the cell by calling its [initWithFrame:](../uiview/init%28frame_%29.md) method. For nib-based cells, this method loads the cell object from the provided nib file. If an existing cell was available for reuse, this method calls the cell’s [prepareForReuse](../uicollectionreusableview/prepareforreuse%28%29.md) method instead.

## See Also

### Creating cells

- [UICollectionViewCellRegistration](../uicollectionviewcellregistration.md): A registration for the collection view’s cells.
- [dequeueConfiguredReusableCellWithRegistration:forIndexPath:item:](dequeueconfiguredreusablecellwithregistration_forindexpath_item_.md): Dequeues a configured reusable cell object.
- [registerClass:forCellWithReuseIdentifier:](register%28__forcellwithreuseidentifier_%29-3vaho.md): Registers a class for use in creating new collection view cells.
- [registerNib:forCellWithReuseIdentifier:](register%28__forcellwithreuseidentifier_%29-6z6t4.md): Deprecated. Registers a nib file for use in creating new collection view cells.
