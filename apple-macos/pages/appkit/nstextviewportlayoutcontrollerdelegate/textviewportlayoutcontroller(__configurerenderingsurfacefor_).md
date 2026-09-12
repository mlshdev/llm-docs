> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontroller(_:configurerenderingsurfacefor:)](https://developer.apple.com/documentation/appkit/nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontroller(_:configurerenderingsurfacefor:))

# textViewportLayoutController(\_:configureRenderingSurfaceFor:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

The method the framework calls when the layout controller lays out a text layout fragment in the UI.

## Declaration

```swift
func textViewportLayoutController(_ textViewportLayoutController: NSTextViewportLayoutController, configureRenderingSurfaceFor textLayoutFragment: NSTextLayoutFragment)
```

## Parameters

- `textViewportLayoutController`: The `NSTextViewportLayoutController` associated with this text layout fragment.
- `textLayoutFragment`: An `NSTextLayoutFragment`.

<a id="Discussion"></a>

## Discussion

The delegate presents the text layout fragment in the UI, for example, in a sublayer or a subview. Layout information such as `viewportBounds` on `textViewportLayoutController` isn’t up to date at the point of this call.

## See Also

### Responding to changes in the viewport

- [textViewportLayoutControllerDidLayout(\_:)](textviewportlayoutcontrollerdidlayout%28__%29.md): The method the framework calls when the text viewport layout controller finishes its layout process.
- [textViewportLayoutControllerWillLayout(\_:)](textviewportlayoutcontrollerwilllayout%28__%29.md): The method the framework calls before the text viewport layout controller starts its layout process.
- [viewportBounds(for:)](viewportbounds%28for_%29.md): Returns the current viewport, which is the view visible bounds plus the overdraw area.

# textViewportLayoutController:configureRenderingSurfaceForTextLayoutFragment: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

The method the framework calls when the layout controller lays out a text layout fragment in the UI.

## Declaration

```objectivec
- (void) textViewportLayoutController:(NSTextViewportLayoutController *) textViewportLayoutController configureRenderingSurfaceForTextLayoutFragment:(NSTextLayoutFragment *) textLayoutFragment;
```

## Parameters

- `textViewportLayoutController`: The `NSTextViewportLayoutController` associated with this text layout fragment.
- `textLayoutFragment`: An `NSTextLayoutFragment`.

<a id="Discussion"></a>

## Discussion

The delegate presents the text layout fragment in the UI, for example, in a sublayer or a subview. Layout information such as `viewportBounds` on `textViewportLayoutController` isn’t up to date at the point of this call.

## See Also

### Responding to changes in the viewport

- [textViewportLayoutControllerDidLayout:](textviewportlayoutcontrollerdidlayout%28__%29.md): The method the framework calls when the text viewport layout controller finishes its layout process.
- [textViewportLayoutControllerWillLayout:](textviewportlayoutcontrollerwilllayout%28__%29.md): The method the framework calls before the text viewport layout controller starts its layout process.
- [viewportBoundsForTextViewportLayoutController:](viewportbounds%28for_%29.md): Returns the current viewport, which is the view visible bounds plus the overdraw area.
