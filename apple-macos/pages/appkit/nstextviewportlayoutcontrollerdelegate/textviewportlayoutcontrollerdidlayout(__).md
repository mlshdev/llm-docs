> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontrollerdidlayout(_:)](https://developer.apple.com/documentation/appkit/nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontrollerdidlayout(_:))

# textViewportLayoutControllerDidLayout(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

The method the framework calls when the text viewport layout controller finishes its layout process.

## Declaration

```swift
optional func textViewportLayoutControllerDidLayout(_ textViewportLayoutController: NSTextViewportLayoutController)
```

## Parameters

- `textViewportLayoutController`: The [NSTextViewportLayoutController](../nstextviewportlayoutcontroller.md).

<a id="Discussion"></a>

## Discussion

Layout information on `textViewportLayoutController` is up-to-date at the point of this call.

## See Also

### Responding to changes in the viewport

- [textViewportLayoutController(\_:configureRenderingSurfaceFor:)](textviewportlayoutcontroller%28__configurerenderingsurfacefor_%29.md): The method the framework calls when the layout controller lays out a text layout fragment in the UI.
- [textViewportLayoutControllerWillLayout(\_:)](textviewportlayoutcontrollerwilllayout%28__%29.md): The method the framework calls before the text viewport layout controller starts its layout process.
- [viewportBounds(for:)](viewportbounds%28for_%29.md): Returns the current viewport, which is the view visible bounds plus the overdraw area.

# textViewportLayoutControllerDidLayout: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

The method the framework calls when the text viewport layout controller finishes its layout process.

## Declaration

```objectivec
- (void) textViewportLayoutControllerDidLayout:(NSTextViewportLayoutController *) textViewportLayoutController;
```

## Parameters

- `textViewportLayoutController`: The [NSTextViewportLayoutController](../nstextviewportlayoutcontroller.md).

<a id="Discussion"></a>

## Discussion

Layout information on `textViewportLayoutController` is up-to-date at the point of this call.

## See Also

### Responding to changes in the viewport

- [textViewportLayoutController:configureRenderingSurfaceForTextLayoutFragment:](textviewportlayoutcontroller%28__configurerenderingsurfacefor_%29.md): The method the framework calls when the layout controller lays out a text layout fragment in the UI.
- [textViewportLayoutControllerWillLayout:](textviewportlayoutcontrollerwilllayout%28__%29.md): The method the framework calls before the text viewport layout controller starts its layout process.
- [viewportBoundsForTextViewportLayoutController:](viewportbounds%28for_%29.md): Returns the current viewport, which is the view visible bounds plus the overdraw area.
