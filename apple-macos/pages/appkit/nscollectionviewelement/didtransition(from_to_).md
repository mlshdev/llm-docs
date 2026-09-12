> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewelement/didtransition(from:to:)](https://developer.apple.com/documentation/appkit/nscollectionviewelement/didtransition(from:to:))

# didTransition(from:to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Tells the element that the layout object of the collection view changed.

## Declaration

```swift
@MainActor optional func didTransition(from oldLayout: NSCollectionViewLayout, to newLayout: NSCollectionViewLayout)
```

## Parameters

- `oldLayout`: The collection view’s previous layout object.
- `newLayout`: The current layout object associated with the collection view.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override it and use it to finalize any behaviors associated with the change in layouts.

<a id="Special-Considerations"></a>

### Special Considerations

In OS X 10.11, this method is never called.

## See Also

### Managing Layout Changes

- [preferredLayoutAttributesFitting(\_:)](preferredlayoutattributesfitting%28__%29.md): Asks your element if it wants to modify any layout attributes before they are applied.
- [apply(\_:)](apply%28__%29.md): Applies the specified layout attributes to the element.
- [willTransition(from:to:)](willtransition%28from_to_%29.md): Tells the element that the layout object of the collection view is about to change.

# didTransitionFromLayout:toLayout: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Tells the element that the layout object of the collection view changed.

## Declaration

```objectivec
- (void) didTransitionFromLayout:(NSCollectionViewLayout *) oldLayout toLayout:(NSCollectionViewLayout *) newLayout;
```

## Parameters

- `oldLayout`: The collection view’s previous layout object.
- `newLayout`: The current layout object associated with the collection view.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override it and use it to finalize any behaviors associated with the change in layouts.

<a id="Special-Considerations"></a>

### Special Considerations

In OS X 10.11, this method is never called.

## See Also

### Managing Layout Changes

- [preferredLayoutAttributesFittingAttributes:](preferredlayoutattributesfitting%28__%29.md): Asks your element if it wants to modify any layout attributes before they are applied.
- [applyLayoutAttributes:](apply%28__%29.md): Applies the specified layout attributes to the element.
- [willTransitionFromLayout:toLayout:](willtransition%28from_to_%29.md): Tells the element that the layout object of the collection view is about to change.
