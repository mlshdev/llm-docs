> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextviewportlayoutcontrollerdelegate/viewportbounds(for:)](https://developer.apple.com/documentation/uikit/nstextviewportlayoutcontrollerdelegate/viewportbounds(for:))

# viewportBounds(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the current viewport, which is the view visible bounds plus the overdraw area.

## Declaration

```swift
func viewportBounds(for textViewportLayoutController: NSTextViewportLayoutController) -> CGRect
```

## Parameters

- `textViewportLayoutController`: The [NSTextViewportLayoutController](../nstextviewportlayoutcontroller.md).

<a id="return-value"></a>

## Return Value

A [CGRect](../../corefoundation/cgrect.md).

## See Also

### Responding to changes in the viewport

- [textViewportLayoutController(\_:configureRenderingSurfaceFor:)](textviewportlayoutcontroller%28__configurerenderingsurfacefor_%29.md): The method the framework calls when the layout controller lays out a text layout fragment in the UI.
- [textViewportLayoutControllerDidLayout(\_:)](textviewportlayoutcontrollerdidlayout%28__%29.md): The method the framework calls when the text viewport layout controller finishes its layout process.
- [textViewportLayoutControllerWillLayout(\_:)](textviewportlayoutcontrollerwilllayout%28__%29.md): The method the framework calls before the text viewport layout controller starts its layout process.
- [textViewportLayoutControllerReceivedSetNeedsLayout(\_:)](textviewportlayoutcontrollerreceivedsetneedslayout%28__%29.md): Triggers relayout of the view.

# viewportBoundsForTextViewportLayoutController: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the current viewport, which is the view visible bounds plus the overdraw area.

## Declaration

```objectivec
- (CGRect) viewportBoundsForTextViewportLayoutController:(NSTextViewportLayoutController *) textViewportLayoutController;
```

## Parameters

- `textViewportLayoutController`: The [NSTextViewportLayoutController](../nstextviewportlayoutcontroller.md).

<a id="return-value"></a>

## Return Value

A [CGRect](../../corefoundation/cgrect.md).

## See Also

### Responding to changes in the viewport

- [textViewportLayoutController:configureRenderingSurfaceForTextLayoutFragment:](textviewportlayoutcontroller%28__configurerenderingsurfacefor_%29.md): The method the framework calls when the layout controller lays out a text layout fragment in the UI.
- [textViewportLayoutControllerDidLayout:](textviewportlayoutcontrollerdidlayout%28__%29.md): The method the framework calls when the text viewport layout controller finishes its layout process.
- [textViewportLayoutControllerWillLayout:](textviewportlayoutcontrollerwilllayout%28__%29.md): The method the framework calls before the text viewport layout controller starts its layout process.
- [textViewportLayoutControllerReceivedSetNeedsLayout:](textviewportlayoutcontrollerreceivedsetneedslayout%28__%29.md): Triggers relayout of the view.
