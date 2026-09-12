> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewportlayoutcontrollerdelegate](https://developer.apple.com/documentation/appkit/nstextviewportlayoutcontrollerdelegate)

# NSTextViewportLayoutControllerDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 12.0+

Optional methods that delegates implement to respond to viewport layout changes.

## Declaration

```swift
protocol NSTextViewportLayoutControllerDelegate : NSObjectProtocol
```

## Topics

### Responding to changes in the viewport

- [textViewportLayoutController(\_:configureRenderingSurfaceFor:)](nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontroller%28__configurerenderingsurfacefor_%29.md): The method the framework calls when the layout controller lays out a text layout fragment in the UI.
- [textViewportLayoutControllerDidLayout(\_:)](nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontrollerdidlayout%28__%29.md): The method the framework calls when the text viewport layout controller finishes its layout process.
- [textViewportLayoutControllerWillLayout(\_:)](nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontrollerwilllayout%28__%29.md): The method the framework calls before the text viewport layout controller starts its layout process.
- [viewportBounds(for:)](nstextviewportlayoutcontrollerdelegate/viewportbounds%28for_%29.md): Returns the current viewport, which is the view visible bounds plus the overdraw area.

### Instance Methods

- [textViewportLayoutController(\_:cacheRenderingSurface:for:)](nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontroller%28__cacherenderingsurface_for_%29.md): Asks the delegate to cache a rendering surface for later retrieval.
- [textViewportLayoutController(\_:retrieveCachedRenderingSurfaceFor:)](nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontroller%28__retrievecachedrenderingsurfacefor_%29.md): Asks the delegate to return a previously cached rendering surface.
- [textViewportLayoutControllerReceivedSetNeedsLayout(\_:)](nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontrollerreceivedsetneedslayout%28__%29.md): Triggers relayout of the view.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSTextView](nstextview.md)

## See Also

### Responding to changes in viewport layout

- [delegate](nstextviewportlayoutcontroller/delegate.md): The delegate for the text layout manager object.

# NSTextViewportLayoutControllerDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 12.0+

Optional methods that delegates implement to respond to viewport layout changes.

## Declaration

```objectivec
@protocol NSTextViewportLayoutControllerDelegate <NSObject>
```

## Topics

### Responding to changes in the viewport

- [textViewportLayoutController:configureRenderingSurfaceForTextLayoutFragment:](nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontroller%28__configurerenderingsurfacefor_%29.md): The method the framework calls when the layout controller lays out a text layout fragment in the UI.
- [textViewportLayoutControllerDidLayout:](nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontrollerdidlayout%28__%29.md): The method the framework calls when the text viewport layout controller finishes its layout process.
- [textViewportLayoutControllerWillLayout:](nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontrollerwilllayout%28__%29.md): The method the framework calls before the text viewport layout controller starts its layout process.
- [viewportBoundsForTextViewportLayoutController:](nstextviewportlayoutcontrollerdelegate/viewportbounds%28for_%29.md): Returns the current viewport, which is the view visible bounds plus the overdraw area.

### Instance Methods

- [textViewportLayoutController:cacheRenderingSurface:forKey:](nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontroller%28__cacherenderingsurface_for_%29.md): Asks the delegate to cache a rendering surface for later retrieval.
- [textViewportLayoutController:retrieveCachedRenderingSurfaceForKey:](nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontroller%28__retrievecachedrenderingsurfacefor_%29.md): Asks the delegate to return a previously cached rendering surface.
- [textViewportLayoutController:renderingSurfaceForTextLayoutFragment:](nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontroller_renderingsurfacefortextlayoutfragment_.md): Returns a rendering surface for the specified text layout fragment.
- [textViewportLayoutControllerReceivedSetNeedsLayout:](nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontrollerreceivedsetneedslayout%28__%29.md): Triggers relayout of the view.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

### Conforming Types

- [NSTextView](nstextview.md)

## See Also

### Responding to changes in viewport layout

- [delegate](nstextviewportlayoutcontroller/delegate.md): The delegate for the text layout manager object.
