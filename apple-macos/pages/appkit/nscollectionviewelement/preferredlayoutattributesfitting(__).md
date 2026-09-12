> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewelement/preferredlayoutattributesfitting(_:)](https://developer.apple.com/documentation/appkit/nscollectionviewelement/preferredlayoutattributesfitting(_:))

# preferredLayoutAttributesFitting(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Asks your element if it wants to modify any layout attributes before they are applied.

## Declaration

```swift
@MainActor optional func preferredLayoutAttributesFitting(_ layoutAttributes: NSCollectionViewLayoutAttributes) -> NSCollectionViewLayoutAttributes
```

## Parameters

- `layoutAttributes`: The attributes provided by the layout object. These attributes represent the values that the layout object intends to apply to the element.

<a id="return-value"></a>

## Return Value

The final attributes to apply to the element.

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns the same attributes that are in the `layoutAttributes` parameter. You can override this method in subclasses and use it to return a different set of attributes. If you override this method, call `super` first to give the system the opportunity to make changes, then modify the returned attributes.

<a id="Special-Considerations"></a>

### Special Considerations

In OS X 10.11, this method is never called.

## See Also

### Managing Layout Changes

- [apply(\_:)](apply%28__%29.md): Applies the specified layout attributes to the element.
- [willTransition(from:to:)](willtransition%28from_to_%29.md): Tells the element that the layout object of the collection view is about to change.
- [didTransition(from:to:)](didtransition%28from_to_%29.md): Tells the element that the layout object of the collection view changed.

# preferredLayoutAttributesFittingAttributes: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Asks your element if it wants to modify any layout attributes before they are applied.

## Declaration

```objectivec
- (NSCollectionViewLayoutAttributes *) preferredLayoutAttributesFittingAttributes:(NSCollectionViewLayoutAttributes *) layoutAttributes;
```

## Parameters

- `layoutAttributes`: The attributes provided by the layout object. These attributes represent the values that the layout object intends to apply to the element.

<a id="return-value"></a>

## Return Value

The final attributes to apply to the element.

<a id="Discussion"></a>

## Discussion

The default implementation of this method returns the same attributes that are in the `layoutAttributes` parameter. You can override this method in subclasses and use it to return a different set of attributes. If you override this method, call `super` first to give the system the opportunity to make changes, then modify the returned attributes.

<a id="Special-Considerations"></a>

### Special Considerations

In OS X 10.11, this method is never called.

## See Also

### Managing Layout Changes

- [applyLayoutAttributes:](apply%28__%29.md): Applies the specified layout attributes to the element.
- [willTransitionFromLayout:toLayout:](willtransition%28from_to_%29.md): Tells the element that the layout object of the collection view is about to change.
- [didTransitionFromLayout:toLayout:](didtransition%28from_to_%29.md): Tells the element that the layout object of the collection view changed.
