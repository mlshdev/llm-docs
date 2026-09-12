> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionviewelement/willtransition(from:to:)](https://developer.apple.com/documentation/appkit/nscollectionviewelement/willtransition(from:to:))

# willTransition(from:to:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Tells the element that the layout object of the collection view is about to change.

## Declaration

```swift
@MainActor optional func willTransition(from oldLayout: NSCollectionViewLayout, to newLayout: NSCollectionViewLayout)
```

## Parameters

- `oldLayout`: The current layout object used by the collection view.
- `newLayout`: The new layout object that is about to be used by the collection view.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override it and use it to prepare for the change in layouts.

<a id="Special-Considerations"></a>

### Special Considerations

In OS X 10.11, this method is never called.

## See Also

### Managing Layout Changes

- [preferredLayoutAttributesFitting(\_:)](preferredlayoutattributesfitting%28__%29.md): Asks your element if it wants to modify any layout attributes before they are applied.
- [apply(\_:)](apply%28__%29.md): Applies the specified layout attributes to the element.
- [didTransition(from:to:)](didtransition%28from_to_%29.md): Tells the element that the layout object of the collection view changed.

# willTransitionFromLayout:toLayout: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Tells the element that the layout object of the collection view is about to change.

## Declaration

```objectivec
- (void) willTransitionFromLayout:(NSCollectionViewLayout *) oldLayout toLayout:(NSCollectionViewLayout *) newLayout;
```

## Parameters

- `oldLayout`: The current layout object used by the collection view.
- `newLayout`: The new layout object that is about to be used by the collection view.

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override it and use it to prepare for the change in layouts.

<a id="Special-Considerations"></a>

### Special Considerations

In OS X 10.11, this method is never called.

## See Also

### Managing Layout Changes

- [preferredLayoutAttributesFittingAttributes:](preferredlayoutattributesfitting%28__%29.md): Asks your element if it wants to modify any layout attributes before they are applied.
- [applyLayoutAttributes:](apply%28__%29.md): Applies the specified layout attributes to the element.
- [didTransitionFromLayout:toLayout:](didtransition%28from_to_%29.md): Tells the element that the layout object of the collection view changed.
