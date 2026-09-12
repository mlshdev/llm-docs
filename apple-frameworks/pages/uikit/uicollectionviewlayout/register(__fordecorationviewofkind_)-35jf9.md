> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollectionviewlayout/register(_:fordecorationviewofkind:)-35jf9](https://developer.apple.com/documentation/uikit/uicollectionviewlayout/register(_:fordecorationviewofkind:)-35jf9)

# register(\_:forDecorationViewOfKind:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

Registers a nib file for use in creating decoration views for a collection view.

## Declaration

```swift
func register(_ nib: UINib?, forDecorationViewOfKind elementKind: String)
```

## Parameters

- `nib`: The nib object containing the cell definition. The nib file must contain only one top-level object and that object must be of the type [UICollectionReusableView](../uicollectionreusableview.md).
- `elementKind`: The element kind of the decoration view. You can use this string to distinguish between decoration views with different purposes in the layout. This parameter must not be `nil` and must not be an empty string.

<a id="Discussion"></a>

## Discussion

This method gives the layout object a chance to register a decoration view for use in the collection view. Decoration views provide visual adornments to a section or to the entire collection view but are not otherwise tied to the data provided by the collection view’s data source.

You do not need to create decoration views explicitly. After registering one, it is up to the layout object to decide when a decoration view is needed and return the corresponding layout attributes from its [layoutAttributesForElements(in:)](layoutattributesforelements%28in_%29.md) method. For layout attributes that specify a decoration view, the collection view creates (or reuses) a view and displays it automatically based on the registered information.

If you previously registered a class or nib file with the same kind string, the class you specify in the `viewClass` parameter replaces the old entry. You may specify `nil` for `viewClass` if you want to unregister the decoration view.

## See Also

### Registering decoration views

- [register(\_:forDecorationViewOfKind:)](register%28__fordecorationviewofkind_%29-361k6.md): Registers a class for use in creating decoration views for a collection view.

# registerNib:forDecorationViewOfKind: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

Registers a nib file for use in creating decoration views for a collection view.

## Declaration

```objectivec
- (void) registerNib:(UINib *) nib forDecorationViewOfKind:(NSString *) elementKind;
```

## Parameters

- `nib`: The nib object containing the cell definition. The nib file must contain only one top-level object and that object must be of the type [UICollectionReusableView](../uicollectionreusableview.md).
- `elementKind`: The element kind of the decoration view. You can use this string to distinguish between decoration views with different purposes in the layout. This parameter must not be `nil` and must not be an empty string.

<a id="Discussion"></a>

## Discussion

This method gives the layout object a chance to register a decoration view for use in the collection view. Decoration views provide visual adornments to a section or to the entire collection view but are not otherwise tied to the data provided by the collection view’s data source.

You do not need to create decoration views explicitly. After registering one, it is up to the layout object to decide when a decoration view is needed and return the corresponding layout attributes from its [layoutAttributesForElementsInRect:](layoutattributesforelements%28in_%29.md) method. For layout attributes that specify a decoration view, the collection view creates (or reuses) a view and displays it automatically based on the registered information.

If you previously registered a class or nib file with the same kind string, the class you specify in the `viewClass` parameter replaces the old entry. You may specify `nil` for `viewClass` if you want to unregister the decoration view.

## See Also

### Registering decoration views

- [registerClass:forDecorationViewOfKind:](register%28__fordecorationviewofkind_%29-361k6.md): Registers a class for use in creating decoration views for a collection view.
