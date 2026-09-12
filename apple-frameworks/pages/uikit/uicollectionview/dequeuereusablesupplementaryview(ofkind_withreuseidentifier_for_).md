> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/dequeuereusablesupplementaryview(ofkind:withreuseidentifier:for:)](https://developer.apple.com/documentation/uikit/uicollectionview/dequeuereusablesupplementaryview(ofkind:withreuseidentifier:for:))

# dequeueReusableSupplementaryView(ofKind:withReuseIdentifier:for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Dequeues a reusable supplementary view located by its identifier and kind.

## Declaration

```swift
func dequeueReusableSupplementaryView(ofKind elementKind: String, withReuseIdentifier identifier: String, for indexPath: IndexPath) -> UICollectionReusableView
```

## Parameters

- `elementKind`: The kind of supplementary view to retrieve. This value is defined by the layout object. This parameter must not be `nil`.
- `identifier`: The reuse identifier for the specified view. This parameter must not be `nil`.
- `indexPath`: The index path specifying the location of the supplementary view in the collection view. The data source receives this information when it’s asked for the view and should just pass it along. This method uses the information to perform additional configuration based on the view’s position in the collection view.

<a id="return-value"></a>

## Return Value

A valid [UICollectionReusableView](../uicollectionreusableview.md) object.

<a id="Discussion"></a>

## Discussion

Call this method from your data source object when asked to provide a new supplementary view for the collection view. This method dequeues an existing view if one is available or creates a new one based on the class or nib file you previously registered.

> **Important**

>  You must register a class or nib file using the [register(\_:forSupplementaryViewOfKind:withReuseIdentifier:)](register%28__forsupplementaryviewofkind_withreuseidentifier_%29-661io.md) or [register(\_:forSupplementaryViewOfKind:withReuseIdentifier:)](register%28__forsupplementaryviewofkind_withreuseidentifier_%29-9hn73.md) method before calling this method. You can also register a set of default supplementary views with the layout object using the [register(\_:forDecorationViewOfKind:)](../uicollectionviewlayout/register%28__fordecorationviewofkind_%29-361k6.md) or [register(\_:forDecorationViewOfKind:)](../uicollectionviewlayout/register%28__fordecorationviewofkind_%29-35jf9.md) method.

If you registered a class for the specified `identifier` and a new cell must be created, this method initializes the cell by calling its [init(frame:)](../uiview/init%28frame_%29.md) method. For nib-based cells, this method loads the cell object from the provided nib file. If an existing cell was available for reuse, this method calls the cell’s [prepareForReuse()](../uicollectionreusableview/prepareforreuse%28%29.md) method instead.

## See Also

### Creating headers and footers

- [UICollectionView.SupplementaryRegistration](supplementaryregistration.md): A registration for the collection view’s supplementary views.
- [dequeueConfiguredReusableSupplementary(using:for:)](dequeueconfiguredreusablesupplementary%28using_for_%29.md): Dequeues a configured reusable supplementary view object.
- [register(\_:forSupplementaryViewOfKind:withReuseIdentifier:)](register%28__forsupplementaryviewofkind_withreuseidentifier_%29-661io.md): Registers a class for use in creating supplementary views for the collection view.
- [register(\_:forSupplementaryViewOfKind:withReuseIdentifier:)](register%28__forsupplementaryviewofkind_withreuseidentifier_%29-9hn73.md): Deprecated. Registers a nib file for use in creating supplementary views for the collection view.

# dequeueReusableSupplementaryViewOfKind:withReuseIdentifier:forIndexPath: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Dequeues a reusable supplementary view located by its identifier and kind.

## Declaration

```objectivec
- (UICollectionReusableView *) dequeueReusableSupplementaryViewOfKind:(NSString *) elementKind withReuseIdentifier:(NSString *) identifier forIndexPath:(NSIndexPath *) indexPath;
```

## Parameters

- `elementKind`: The kind of supplementary view to retrieve. This value is defined by the layout object. This parameter must not be `nil`.
- `identifier`: The reuse identifier for the specified view. This parameter must not be `nil`.
- `indexPath`: The index path specifying the location of the supplementary view in the collection view. The data source receives this information when it’s asked for the view and should just pass it along. This method uses the information to perform additional configuration based on the view’s position in the collection view.

<a id="return-value"></a>

## Return Value

A valid [UICollectionReusableView](../uicollectionreusableview.md) object.

<a id="Discussion"></a>

## Discussion

Call this method from your data source object when asked to provide a new supplementary view for the collection view. This method dequeues an existing view if one is available or creates a new one based on the class or nib file you previously registered.

> **Important**

>  You must register a class or nib file using the [registerClass:forSupplementaryViewOfKind:withReuseIdentifier:](register%28__forsupplementaryviewofkind_withreuseidentifier_%29-661io.md) or [registerNib:forSupplementaryViewOfKind:withReuseIdentifier:](register%28__forsupplementaryviewofkind_withreuseidentifier_%29-9hn73.md) method before calling this method. You can also register a set of default supplementary views with the layout object using the [registerClass:forDecorationViewOfKind:](../uicollectionviewlayout/register%28__fordecorationviewofkind_%29-361k6.md) or [registerNib:forDecorationViewOfKind:](../uicollectionviewlayout/register%28__fordecorationviewofkind_%29-35jf9.md) method.

If you registered a class for the specified `identifier` and a new cell must be created, this method initializes the cell by calling its [initWithFrame:](../uiview/init%28frame_%29.md) method. For nib-based cells, this method loads the cell object from the provided nib file. If an existing cell was available for reuse, this method calls the cell’s [prepareForReuse](../uicollectionreusableview/prepareforreuse%28%29.md) method instead.

## See Also

### Creating headers and footers

- [UICollectionViewSupplementaryRegistration](../uicollectionviewsupplementaryregistration.md): A registration for the collection view’s supplementary views.
- [dequeueConfiguredReusableSupplementaryViewWithRegistration:forIndexPath:](dequeueconfiguredreusablesupplementaryviewwithregistration_forindexpath_.md): Dequeues a configured reusable supplementary view object.
- [registerClass:forSupplementaryViewOfKind:withReuseIdentifier:](register%28__forsupplementaryviewofkind_withreuseidentifier_%29-661io.md): Registers a class for use in creating supplementary views for the collection view.
- [registerNib:forSupplementaryViewOfKind:withReuseIdentifier:](register%28__forsupplementaryviewofkind_withreuseidentifier_%29-9hn73.md): Deprecated. Registers a nib file for use in creating supplementary views for the collection view.
