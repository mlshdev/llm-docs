> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontrollerwilllayout(_:)](https://developer.apple.com/documentation/uikit/nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontrollerwilllayout(_:))

# textViewportLayoutControllerWillLayout(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The method the framework calls before the text viewport layout controller starts its layout process.

## Declaration

```swift
optional func textViewportLayoutControllerWillLayout(_ textViewportLayoutController: NSTextViewportLayoutController)
```

## Parameters

- `textViewportLayoutController`: The [NSTextViewportLayoutController](../nstextviewportlayoutcontroller.md).

## See Also

### Responding to changes in the viewport

- [textViewportLayoutController(\_:configureRenderingSurfaceFor:)](textviewportlayoutcontroller%28__configurerenderingsurfacefor_%29.md): The method the framework calls when the layout controller lays out a text layout fragment in the UI.
- [textViewportLayoutControllerDidLayout(\_:)](textviewportlayoutcontrollerdidlayout%28__%29.md): The method the framework calls when the text viewport layout controller finishes its layout process.
- [textViewportLayoutControllerReceivedSetNeedsLayout(\_:)](textviewportlayoutcontrollerreceivedsetneedslayout%28__%29.md): Triggers relayout of the view.
- [viewportBounds(for:)](viewportbounds%28for_%29.md): Returns the current viewport, which is the view visible bounds plus the overdraw area.

# textViewportLayoutControllerWillLayout: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

The method the framework calls before the text viewport layout controller starts its layout process.

## Declaration

```objectivec
- (void) textViewportLayoutControllerWillLayout:(NSTextViewportLayoutController *) textViewportLayoutController;
```

## Parameters

- `textViewportLayoutController`: The [NSTextViewportLayoutController](../nstextviewportlayoutcontroller.md).

## See Also

### Responding to changes in the viewport

- [textViewportLayoutController:configureRenderingSurfaceForTextLayoutFragment:](textviewportlayoutcontroller%28__configurerenderingsurfacefor_%29.md): The method the framework calls when the layout controller lays out a text layout fragment in the UI.
- [textViewportLayoutControllerDidLayout:](textviewportlayoutcontrollerdidlayout%28__%29.md): The method the framework calls when the text viewport layout controller finishes its layout process.
- [textViewportLayoutControllerReceivedSetNeedsLayout:](textviewportlayoutcontrollerreceivedsetneedslayout%28__%29.md): Triggers relayout of the view.
- [viewportBoundsForTextViewportLayoutController:](viewportbounds%28for_%29.md): Returns the current viewport, which is the view visible bounds plus the overdraw area.
