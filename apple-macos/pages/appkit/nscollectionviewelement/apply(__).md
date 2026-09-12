> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewelement/apply(_:)](https://developer.apple.com/documentation/appkit/nscollectionviewelement/apply(_:))

# apply(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Applies the specified layout attributes to the element.

## Declaration

```swift
@MainActor optional func apply(_ layoutAttributes: NSCollectionViewLayoutAttributes)
```

## Parameters

- `layoutAttributes`: The layout attributes to apply.

<a id="Discussion"></a>

## Discussion

In your custom elements, you can use this method to apply the specified attributes to your content. For example, if your element object is a view controller, you would override this method and use it to apply the attributes to the root view object. When using your element with a layout object that supports custom attributes, you would also use this method to apply those custom attributes.

## See Also

### Managing Layout Changes

- [preferredLayoutAttributesFitting(\_:)](preferredlayoutattributesfitting%28__%29.md): Asks your element if it wants to modify any layout attributes before they are applied.
- [willTransition(from:to:)](willtransition%28from_to_%29.md): Tells the element that the layout object of the collection view is about to change.
- [didTransition(from:to:)](didtransition%28from_to_%29.md): Tells the element that the layout object of the collection view changed.

# applyLayoutAttributes: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Applies the specified layout attributes to the element.

## Declaration

```objectivec
- (void) applyLayoutAttributes:(NSCollectionViewLayoutAttributes *) layoutAttributes;
```

## Parameters

- `layoutAttributes`: The layout attributes to apply.

<a id="Discussion"></a>

## Discussion

In your custom elements, you can use this method to apply the specified attributes to your content. For example, if your element object is a view controller, you would override this method and use it to apply the attributes to the root view object. When using your element with a layout object that supports custom attributes, you would also use this method to apply those custom attributes.

## See Also

### Managing Layout Changes

- [preferredLayoutAttributesFittingAttributes:](preferredlayoutattributesfitting%28__%29.md): Asks your element if it wants to modify any layout attributes before they are applied.
- [willTransitionFromLayout:toLayout:](willtransition%28from_to_%29.md): Tells the element that the layout object of the collection view is about to change.
- [didTransitionFromLayout:toLayout:](didtransition%28from_to_%29.md): Tells the element that the layout object of the collection view changed.
