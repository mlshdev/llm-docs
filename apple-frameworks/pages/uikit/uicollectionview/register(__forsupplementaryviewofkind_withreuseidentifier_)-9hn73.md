> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/register(_:forsupplementaryviewofkind:withreuseidentifier:)-9hn73](https://developer.apple.com/documentation/uikit/uicollectionview/register(_:forsupplementaryviewofkind:withreuseidentifier:)-9hn73)

# register(\_:forSupplementaryViewOfKind:withReuseIdentifier:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

Registers a nib file for use in creating supplementary views for the collection view.

## Declaration

```swift
func register(_ nib: UINib?, forSupplementaryViewOfKind kind: String, withReuseIdentifier identifier: String)
```

## Parameters

- `nib`: The nib object containing the view object. The nib file must contain only one top-level object and that object must be of the type [UICollectionReusableView](../uicollectionreusableview.md).
- `kind`: The kind of supplementary view to create. The layout defines the types of supplementary views it supports. The value of this string may correspond to one of the predefined kind strings or to a custom string that the layout added to support a new type of supplementary view. This parameter must not be `nil`.
- `identifier`: The reuse identifier to associate with the specified nib file. This parameter must not be `nil` and must not be an empty string.

<a id="Discussion"></a>

## Discussion

Prior to calling the [dequeueReusableSupplementaryView(ofKind:withReuseIdentifier:for:)](dequeuereusablesupplementaryview%28ofkind_withreuseidentifier_for_%29.md) method of the collection view, you must use this method or the [register(\_:forSupplementaryViewOfKind:withReuseIdentifier:)](register%28__forsupplementaryviewofkind_withreuseidentifier_%29-661io.md) method to tell the collection view how to create a supplementary view of the given type. If a view of the specified type isn’t currently in a reuse queue, the collection view uses the provided information to create a view object automatically.

If you previously registered a class or nib file with the same element kind and reuse identifier, the class you specify in the `viewClass` parameter replaces the old entry. You may specify `nil` for `nib` if you want to unregister the class from the specified element kind and reuse identifier.

## See Also

### Creating headers and footers

- [UICollectionView.SupplementaryRegistration](supplementaryregistration.md): A registration for the collection view’s supplementary views.
- [dequeueConfiguredReusableSupplementary(using:for:)](dequeueconfiguredreusablesupplementary%28using_for_%29.md): Dequeues a configured reusable supplementary view object.
- [register(\_:forSupplementaryViewOfKind:withReuseIdentifier:)](register%28__forsupplementaryviewofkind_withreuseidentifier_%29-661io.md): Registers a class for use in creating supplementary views for the collection view.
- [dequeueReusableSupplementaryView(ofKind:withReuseIdentifier:for:)](dequeuereusablesupplementaryview%28ofkind_withreuseidentifier_for_%29.md): Dequeues a reusable supplementary view located by its identifier and kind.

# registerNib:forSupplementaryViewOfKind:withReuseIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

Registers a nib file for use in creating supplementary views for the collection view.

## Declaration

```objectivec
- (void) registerNib:(UINib *) nib forSupplementaryViewOfKind:(NSString *) kind withReuseIdentifier:(NSString *) identifier;
```

## Parameters

- `nib`: The nib object containing the view object. The nib file must contain only one top-level object and that object must be of the type [UICollectionReusableView](../uicollectionreusableview.md).
- `kind`: The kind of supplementary view to create. The layout defines the types of supplementary views it supports. The value of this string may correspond to one of the predefined kind strings or to a custom string that the layout added to support a new type of supplementary view. This parameter must not be `nil`.
- `identifier`: The reuse identifier to associate with the specified nib file. This parameter must not be `nil` and must not be an empty string.

<a id="Discussion"></a>

## Discussion

Prior to calling the [dequeueReusableSupplementaryViewOfKind:withReuseIdentifier:forIndexPath:](dequeuereusablesupplementaryview%28ofkind_withreuseidentifier_for_%29.md) method of the collection view, you must use this method or the [registerClass:forSupplementaryViewOfKind:withReuseIdentifier:](register%28__forsupplementaryviewofkind_withreuseidentifier_%29-661io.md) method to tell the collection view how to create a supplementary view of the given type. If a view of the specified type isn’t currently in a reuse queue, the collection view uses the provided information to create a view object automatically.

If you previously registered a class or nib file with the same element kind and reuse identifier, the class you specify in the `viewClass` parameter replaces the old entry. You may specify `nil` for `nib` if you want to unregister the class from the specified element kind and reuse identifier.

## See Also

### Creating headers and footers

- [UICollectionViewSupplementaryRegistration](../uicollectionviewsupplementaryregistration.md): A registration for the collection view’s supplementary views.
- [dequeueConfiguredReusableSupplementaryViewWithRegistration:forIndexPath:](dequeueconfiguredreusablesupplementaryviewwithregistration_forindexpath_.md): Dequeues a configured reusable supplementary view object.
- [registerClass:forSupplementaryViewOfKind:withReuseIdentifier:](register%28__forsupplementaryviewofkind_withreuseidentifier_%29-661io.md): Registers a class for use in creating supplementary views for the collection view.
- [dequeueReusableSupplementaryViewOfKind:withReuseIdentifier:forIndexPath:](dequeuereusablesupplementaryview%28ofkind_withreuseidentifier_for_%29.md): Dequeues a reusable supplementary view located by its identifier and kind.
