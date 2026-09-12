> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionview/backgroundview](https://developer.apple.com/documentation/appkit/nscollectionview/backgroundview)

# backgroundView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The background view placed behind all items and supplementary views.

## Declaration

```swift
var backgroundView: NSView? { get set }
```

<a id="Discussion"></a>

## Discussion

The view you assign to this property is positioned underneath all other content and sized automatically to match the enclosing clip view’s frame. The view itself does not scroll with the rest of the collection view content. The view’s layer redraw policy is also changed to [NSView.LayerContentsRedrawPolicy.never](../nsview/layercontentsredrawpolicy-swift.enum/never.md).

In macOS 10.12 and later, a collection view that sets both [backgroundView](backgroundview.md) and [backgroundColors](backgroundcolors.md) shows `backgroundColors[0]` through all areas that are not opaquely covered by the [backgroundView](backgroundview.md).

## See Also

### Configuring the Collection View

- [delegate](delegate.md): The collection view’s delegate object.
- [NSCollectionViewDelegate](../nscollectionviewdelegate.md): A set of methods that you use to manage the behavior of a collection view.
- [content](content.md): An array that provides data for the collection view.
- [backgroundColors](backgroundcolors.md): An array containing the collection view’s background colors.
- [backgroundViewScrollsWithContent](backgroundviewscrollswithcontent.md): A Boolean value that indicates whether the collection view’s background view scrolls with the items and other content.

# backgroundView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.11+

The background view placed behind all items and supplementary views.

## Declaration

```objectivec
@property (strong, nullable) NSView * backgroundView;
```

<a id="Discussion"></a>

## Discussion

The view you assign to this property is positioned underneath all other content and sized automatically to match the enclosing clip view’s frame. The view itself does not scroll with the rest of the collection view content. The view’s layer redraw policy is also changed to [NSViewLayerContentsRedrawNever](../nsview/layercontentsredrawpolicy-swift.enum/never.md).

In macOS 10.12 and later, a collection view that sets both [backgroundView](backgroundview.md) and [backgroundColors](backgroundcolors.md) shows `backgroundColors[0]` through all areas that are not opaquely covered by the [backgroundView](backgroundview.md).

## See Also

### Configuring the Collection View

- [delegate](delegate.md): The collection view’s delegate object.
- [NSCollectionViewDelegate](../nscollectionviewdelegate.md): A set of methods that you use to manage the behavior of a collection view.
- [content](content.md): An array that provides data for the collection view.
- [backgroundColors](backgroundcolors.md): An array containing the collection view’s background colors.
- [backgroundViewScrollsWithContent](backgroundviewscrollswithcontent.md): A Boolean value that indicates whether the collection view’s background view scrolls with the items and other content.
