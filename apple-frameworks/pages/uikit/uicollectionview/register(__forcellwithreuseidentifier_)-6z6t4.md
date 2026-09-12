> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/register(_:forcellwithreuseidentifier:)-6z6t4](https://developer.apple.com/documentation/uikit/uicollectionview/register(_:forcellwithreuseidentifier:)-6z6t4)

# register(\_:forCellWithReuseIdentifier:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

Registers a nib file for use in creating new collection view cells.

## Declaration

```swift
func register(_ nib: UINib?, forCellWithReuseIdentifier identifier: String)
```

## Parameters

- `nib`: The nib object containing the cell object. The nib file must contain only one top-level object and that object must be of the type [UICollectionViewCell](../uicollectionviewcell.md).
- `identifier`: The reuse identifier to associate with the specified nib file. This parameter must not be `nil` and must not be an empty string.

<a id="Discussion"></a>

## Discussion

Prior to calling the [dequeueReusableCell(withReuseIdentifier:for:)](dequeuereusablecell%28withreuseidentifier_for_%29.md) method of the collection view, you must use this method or the [register(\_:forCellWithReuseIdentifier:)](register%28__forcellwithreuseidentifier_%29-3vaho.md) method to tell the collection view how to create a new cell of the given type. If a cell of the specified type is not currently in a reuse queue, the collection view uses the provided information to create a new cell object automatically.

If you previously registered a class or nib file with the same reuse identifier, the object you specify in the `nib` parameter replaces the old entry. You may specify `nil` for `nib` if you want to unregister the nib file from the specified reuse identifier.

## See Also

### Creating cells

- [UICollectionView.CellRegistration](cellregistration.md): A registration for the collection view’s cells.
- [dequeueConfiguredReusableCell(using:for:item:)](dequeueconfiguredreusablecell%28using_for_item_%29.md): Dequeues a configured reusable cell object.
- [register(\_:forCellWithReuseIdentifier:)](register%28__forcellwithreuseidentifier_%29-3vaho.md): Registers a class for use in creating new collection view cells.
- [dequeueReusableCell(withReuseIdentifier:for:)](dequeuereusablecell%28withreuseidentifier_for_%29.md): Dequeues a reusable cell object located by its identifier.

# registerNib:forCellWithReuseIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

Registers a nib file for use in creating new collection view cells.

## Declaration

```objectivec
- (void) registerNib:(UINib *) nib forCellWithReuseIdentifier:(NSString *) identifier;
```

## Parameters

- `nib`: The nib object containing the cell object. The nib file must contain only one top-level object and that object must be of the type [UICollectionViewCell](../uicollectionviewcell.md).
- `identifier`: The reuse identifier to associate with the specified nib file. This parameter must not be `nil` and must not be an empty string.

<a id="Discussion"></a>

## Discussion

Prior to calling the [dequeueReusableCellWithReuseIdentifier:forIndexPath:](dequeuereusablecell%28withreuseidentifier_for_%29.md) method of the collection view, you must use this method or the [registerClass:forCellWithReuseIdentifier:](register%28__forcellwithreuseidentifier_%29-3vaho.md) method to tell the collection view how to create a new cell of the given type. If a cell of the specified type is not currently in a reuse queue, the collection view uses the provided information to create a new cell object automatically.

If you previously registered a class or nib file with the same reuse identifier, the object you specify in the `nib` parameter replaces the old entry. You may specify `nil` for `nib` if you want to unregister the nib file from the specified reuse identifier.

## See Also

### Creating cells

- [UICollectionViewCellRegistration](../uicollectionviewcellregistration.md): A registration for the collection view’s cells.
- [dequeueConfiguredReusableCellWithRegistration:forIndexPath:item:](dequeueconfiguredreusablecellwithregistration_forindexpath_item_.md): Dequeues a configured reusable cell object.
- [registerClass:forCellWithReuseIdentifier:](register%28__forcellwithreuseidentifier_%29-3vaho.md): Registers a class for use in creating new collection view cells.
- [dequeueReusableCellWithReuseIdentifier:forIndexPath:](dequeuereusablecell%28withreuseidentifier_for_%29.md): Dequeues a reusable cell object located by its identifier.
