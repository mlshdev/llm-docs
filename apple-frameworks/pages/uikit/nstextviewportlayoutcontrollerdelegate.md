> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextviewportlayoutcontrollerdelegate](https://developer.apple.com/documentation/uikit/nstextviewportlayoutcontrollerdelegate)

# NSTextViewportLayoutControllerDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Optional methods that delegates implement to respond to viewport layout changes.

## Declaration

```swift
protocol NSTextViewportLayoutControllerDelegate : NSObjectProtocol
```

## Mentioned In

- [Managing viewport layout and attachment reuse in text views](managing-viewport-layout-and-attachment-reuse-in-a-text-view-subclass.md)

## Topics

### Responding to changes in the viewport

- [textViewportLayoutController(\_:configureRenderingSurfaceFor:)](nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontroller%28__configurerenderingsurfacefor_%29.md): The method the framework calls when the layout controller lays out a text layout fragment in the UI.
- [textViewportLayoutControllerDidLayout(\_:)](nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontrollerdidlayout%28__%29.md): The method the framework calls when the text viewport layout controller finishes its layout process.
- [textViewportLayoutControllerWillLayout(\_:)](nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontrollerwilllayout%28__%29.md): The method the framework calls before the text viewport layout controller starts its layout process.
- [textViewportLayoutControllerReceivedSetNeedsLayout(\_:)](nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontrollerreceivedsetneedslayout%28__%29.md): Triggers relayout of the view.
- [viewportBounds(for:)](nstextviewportlayoutcontrollerdelegate/viewportbounds%28for_%29.md): Returns the current viewport, which is the view visible bounds plus the overdraw area.

### Storing rendering surfaces

- [textViewportLayoutController(\_:cacheRenderingSurface:for:)](nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontroller%28__cacherenderingsurface_for_%29.md): Asks the delegate to cache a rendering surface for later retrieval.
- [textViewportLayoutController(\_:retrieveCachedRenderingSurfaceFor:)](nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontroller%28__retrievecachedrenderingsurfacefor_%29.md): Asks the delegate to return a previously cached rendering surface.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UITextView](uitextview.md)

## See Also

### Responding to changes in viewport layout

- [delegate](nstextviewportlayoutcontroller/delegate.md): The delegate for the text layout manager object.

# NSTextViewportLayoutControllerDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Optional methods that delegates implement to respond to viewport layout changes.

## Declaration

```objectivec
@protocol NSTextViewportLayoutControllerDelegate <NSObject>
```

## Mentioned In

- [Managing viewport layout and attachment reuse in text views](managing-viewport-layout-and-attachment-reuse-in-a-text-view-subclass.md)

## Topics

### Responding to changes in the viewport

- [textViewportLayoutController:configureRenderingSurfaceForTextLayoutFragment:](nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontroller%28__configurerenderingsurfacefor_%29.md): The method the framework calls when the layout controller lays out a text layout fragment in the UI.
- [textViewportLayoutControllerDidLayout:](nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontrollerdidlayout%28__%29.md): The method the framework calls when the text viewport layout controller finishes its layout process.
- [textViewportLayoutControllerWillLayout:](nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontrollerwilllayout%28__%29.md): The method the framework calls before the text viewport layout controller starts its layout process.
- [textViewportLayoutControllerReceivedSetNeedsLayout:](nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontrollerreceivedsetneedslayout%28__%29.md): Triggers relayout of the view.
- [viewportBoundsForTextViewportLayoutController:](nstextviewportlayoutcontrollerdelegate/viewportbounds%28for_%29.md): Returns the current viewport, which is the view visible bounds plus the overdraw area.

### Storing rendering surfaces

- [textViewportLayoutController:cacheRenderingSurface:forKey:](nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontroller%28__cacherenderingsurface_for_%29.md): Asks the delegate to cache a rendering surface for later retrieval.
- [textViewportLayoutController:retrieveCachedRenderingSurfaceForKey:](nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontroller%28__retrievecachedrenderingsurfacefor_%29.md): Asks the delegate to return a previously cached rendering surface.

### Instance Methods

- [textViewportLayoutController:renderingSurfaceForTextLayoutFragment:](nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontroller_renderingsurfacefortextlayoutfragment_.md): Returns a rendering surface for the specified text layout fragment.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [UITextView](uitextview.md)

## See Also

### Responding to changes in viewport layout

- [delegate](nstextviewportlayoutcontroller/delegate.md): The delegate for the text layout manager object.
