> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewportlayoutcontrollerdelegate/viewportbounds(for:)](https://developer.apple.com/documentation/appkit/nstextviewportlayoutcontrollerdelegate/viewportbounds(for:))

# viewportBounds(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns the current viewport, which is the view visible bounds plus the overdraw area.

## Declaration

```swift
func viewportBounds(for textViewportLayoutController: NSTextViewportLayoutController) -> CGRect
```

## Parameters

- `textViewportLayoutController`: The [NSTextViewportLayoutController](../nstextviewportlayoutcontroller.md).

<a id="return-value"></a>

## Return Value

A [CGRect](https://developer.apple.com/documentation/corefoundation/cgrect).

## See Also

### Responding to changes in the viewport

- [textViewportLayoutController(\_:configureRenderingSurfaceFor:)](textviewportlayoutcontroller%28__configurerenderingsurfacefor_%29.md): The method the framework calls when the layout controller lays out a text layout fragment in the UI.
- [textViewportLayoutControllerDidLayout(\_:)](textviewportlayoutcontrollerdidlayout%28__%29.md): The method the framework calls when the text viewport layout controller finishes its layout process.
- [textViewportLayoutControllerWillLayout(\_:)](textviewportlayoutcontrollerwilllayout%28__%29.md): The method the framework calls before the text viewport layout controller starts its layout process.

# viewportBoundsForTextViewportLayoutController: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns the current viewport, which is the view visible bounds plus the overdraw area.

## Declaration

```objectivec
- (CGRect) viewportBoundsForTextViewportLayoutController:(NSTextViewportLayoutController *) textViewportLayoutController;
```

## Parameters

- `textViewportLayoutController`: The [NSTextViewportLayoutController](../nstextviewportlayoutcontroller.md).

<a id="return-value"></a>

## Return Value

A [CGRect](https://developer.apple.com/documentation/corefoundation/cgrect).

## See Also

### Responding to changes in the viewport

- [textViewportLayoutController:configureRenderingSurfaceForTextLayoutFragment:](textviewportlayoutcontroller%28__configurerenderingsurfacefor_%29.md): The method the framework calls when the layout controller lays out a text layout fragment in the UI.
- [textViewportLayoutControllerDidLayout:](textviewportlayoutcontrollerdidlayout%28__%29.md): The method the framework calls when the text viewport layout controller finishes its layout process.
- [textViewportLayoutControllerWillLayout:](textviewportlayoutcontrollerwilllayout%28__%29.md): The method the framework calls before the text viewport layout controller starts its layout process.
