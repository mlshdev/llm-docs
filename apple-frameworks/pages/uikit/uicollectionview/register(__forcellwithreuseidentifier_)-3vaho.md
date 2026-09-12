> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/register(_:forcellwithreuseidentifier:)-3vaho](https://developer.apple.com/documentation/uikit/uicollectionview/register(_:forcellwithreuseidentifier:)-3vaho)

# register(\_:forCellWithReuseIdentifier:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Registers a class for use in creating new collection view cells.

## Declaration

```swift
func register(_ cellClass: AnyClass?, forCellWithReuseIdentifier identifier: String)
```

## Parameters

- `cellClass`: The class of a cell that you want to use in the collection view.
- `identifier`: The reuse identifier to associate with the specified class. This parameter must not be `nil` and must not be an empty string.

<a id="Discussion"></a>

## Discussion

Prior to calling the [dequeueReusableCell(withReuseIdentifier:for:)](dequeuereusablecell%28withreuseidentifier_for_%29.md) method of the collection view, you must use this method or the [register(\_:forCellWithReuseIdentifier:)](register%28__forcellwithreuseidentifier_%29-6z6t4.md) method to tell the collection view how to create a new cell of the given type. If a cell of the specified type is not currently in a reuse queue, the collection view uses the provided information to create a new cell object automatically.

If you previously registered a class or nib file with the same reuse identifier, the class you specify in the `cellClass` parameter replaces the old entry. You may specify `nil` for `cellClass` if you want to unregister the class from the specified reuse identifier.

## See Also

### Creating cells

- [UICollectionView.CellRegistration](cellregistration.md): A registration for the collection view’s cells.
- [dequeueConfiguredReusableCell(using:for:item:)](dequeueconfiguredreusablecell%28using_for_item_%29.md): Dequeues a configured reusable cell object.
- [register(\_:forCellWithReuseIdentifier:)](register%28__forcellwithreuseidentifier_%29-6z6t4.md): Deprecated. Registers a nib file for use in creating new collection view cells.
- [dequeueReusableCell(withReuseIdentifier:for:)](dequeuereusablecell%28withreuseidentifier_for_%29.md): Dequeues a reusable cell object located by its identifier.

# registerClass:forCellWithReuseIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Registers a class for use in creating new collection view cells.

## Declaration

```objectivec
- (void) registerClass:(Class) cellClass forCellWithReuseIdentifier:(NSString *) identifier;
```

## Parameters

- `cellClass`: The class of a cell that you want to use in the collection view.
- `identifier`: The reuse identifier to associate with the specified class. This parameter must not be `nil` and must not be an empty string.

<a id="Discussion"></a>

## Discussion

Prior to calling the [dequeueReusableCellWithReuseIdentifier:forIndexPath:](dequeuereusablecell%28withreuseidentifier_for_%29.md) method of the collection view, you must use this method or the [registerNib:forCellWithReuseIdentifier:](register%28__forcellwithreuseidentifier_%29-6z6t4.md) method to tell the collection view how to create a new cell of the given type. If a cell of the specified type is not currently in a reuse queue, the collection view uses the provided information to create a new cell object automatically.

If you previously registered a class or nib file with the same reuse identifier, the class you specify in the `cellClass` parameter replaces the old entry. You may specify `nil` for `cellClass` if you want to unregister the class from the specified reuse identifier.

## See Also

### Creating cells

- [UICollectionViewCellRegistration](../uicollectionviewcellregistration.md): A registration for the collection view’s cells.
- [dequeueConfiguredReusableCellWithRegistration:forIndexPath:item:](dequeueconfiguredreusablecellwithregistration_forindexpath_item_.md): Dequeues a configured reusable cell object.
- [registerNib:forCellWithReuseIdentifier:](register%28__forcellwithreuseidentifier_%29-6z6t4.md): Deprecated. Registers a nib file for use in creating new collection view cells.
- [dequeueReusableCellWithReuseIdentifier:forIndexPath:](dequeuereusablecell%28withreuseidentifier_for_%29.md): Dequeues a reusable cell object located by its identifier.
