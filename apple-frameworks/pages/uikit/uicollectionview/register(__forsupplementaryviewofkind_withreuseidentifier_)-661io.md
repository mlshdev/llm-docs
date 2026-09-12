> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionview/register(_:forsupplementaryviewofkind:withreuseidentifier:)-661io](https://developer.apple.com/documentation/uikit/uicollectionview/register(_:forsupplementaryviewofkind:withreuseidentifier:)-661io)

# register(\_:forSupplementaryViewOfKind:withReuseIdentifier:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Registers a class for use in creating supplementary views for the collection view.

## Declaration

```swift
func register(_ viewClass: AnyClass?, forSupplementaryViewOfKind elementKind: String, withReuseIdentifier identifier: String)
```

## Parameters

- `viewClass`: The class to use for the supplementary view.
- `elementKind`: The kind of supplementary view to create. This value is defined by the layout object. This parameter must not be `nil`.
- `identifier`: The reuse identifier to associate with the specified class. This parameter must not be `nil` and must not be an empty string.

<a id="Discussion"></a>

## Discussion

Prior to calling the [dequeueReusableSupplementaryView(ofKind:withReuseIdentifier:for:)](dequeuereusablesupplementaryview%28ofkind_withreuseidentifier_for_%29.md) method of the collection view, you must use this method or the [register(\_:forSupplementaryViewOfKind:withReuseIdentifier:)](register%28__forsupplementaryviewofkind_withreuseidentifier_%29-9hn73.md) method to tell the collection view how to create a supplementary view of the given type. If a view of the specified type isn’t currently in a reuse queue, the collection view uses the provided information to create a view object automatically.

If you previously registered a class or nib file with the same element kind and reuse identifier, the class you specify in the `viewClass` parameter replaces the old entry. You may specify `nil` for `viewClass` if you want to unregister the class from the specified element kind and reuse identifier.

## See Also

### Creating headers and footers

- [UICollectionView.SupplementaryRegistration](supplementaryregistration.md): A registration for the collection view’s supplementary views.
- [dequeueConfiguredReusableSupplementary(using:for:)](dequeueconfiguredreusablesupplementary%28using_for_%29.md): Dequeues a configured reusable supplementary view object.
- [register(\_:forSupplementaryViewOfKind:withReuseIdentifier:)](register%28__forsupplementaryviewofkind_withreuseidentifier_%29-9hn73.md): Deprecated. Registers a nib file for use in creating supplementary views for the collection view.
- [dequeueReusableSupplementaryView(ofKind:withReuseIdentifier:for:)](dequeuereusablesupplementaryview%28ofkind_withreuseidentifier_for_%29.md): Dequeues a reusable supplementary view located by its identifier and kind.

# registerClass:forSupplementaryViewOfKind:withReuseIdentifier: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Registers a class for use in creating supplementary views for the collection view.

## Declaration

```objectivec
- (void) registerClass:(Class) viewClass forSupplementaryViewOfKind:(NSString *) elementKind withReuseIdentifier:(NSString *) identifier;
```

## Parameters

- `viewClass`: The class to use for the supplementary view.
- `elementKind`: The kind of supplementary view to create. This value is defined by the layout object. This parameter must not be `nil`.
- `identifier`: The reuse identifier to associate with the specified class. This parameter must not be `nil` and must not be an empty string.

<a id="Discussion"></a>

## Discussion

Prior to calling the [dequeueReusableSupplementaryViewOfKind:withReuseIdentifier:forIndexPath:](dequeuereusablesupplementaryview%28ofkind_withreuseidentifier_for_%29.md) method of the collection view, you must use this method or the [registerNib:forSupplementaryViewOfKind:withReuseIdentifier:](register%28__forsupplementaryviewofkind_withreuseidentifier_%29-9hn73.md) method to tell the collection view how to create a supplementary view of the given type. If a view of the specified type isn’t currently in a reuse queue, the collection view uses the provided information to create a view object automatically.

If you previously registered a class or nib file with the same element kind and reuse identifier, the class you specify in the `viewClass` parameter replaces the old entry. You may specify `nil` for `viewClass` if you want to unregister the class from the specified element kind and reuse identifier.

## See Also

### Creating headers and footers

- [UICollectionViewSupplementaryRegistration](../uicollectionviewsupplementaryregistration.md): A registration for the collection view’s supplementary views.
- [dequeueConfiguredReusableSupplementaryViewWithRegistration:forIndexPath:](dequeueconfiguredreusablesupplementaryviewwithregistration_forindexpath_.md): Dequeues a configured reusable supplementary view object.
- [registerNib:forSupplementaryViewOfKind:withReuseIdentifier:](register%28__forsupplementaryviewofkind_withreuseidentifier_%29-9hn73.md): Deprecated. Registers a nib file for use in creating supplementary views for the collection view.
- [dequeueReusableSupplementaryViewOfKind:withReuseIdentifier:forIndexPath:](dequeuereusablesupplementaryview%28ofkind_withreuseidentifier_for_%29.md): Dequeues a reusable supplementary view located by its identifier and kind.
