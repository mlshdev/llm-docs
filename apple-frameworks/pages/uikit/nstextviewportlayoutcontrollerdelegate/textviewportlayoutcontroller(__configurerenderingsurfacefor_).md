> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontroller(_:configurerenderingsurfacefor:)](https://developer.apple.com/documentation/uikit/nstextviewportlayoutcontrollerdelegate/textviewportlayoutcontroller(_:configurerenderingsurfacefor:))

# textViewportLayoutController(\_:configureRenderingSurfaceFor:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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
- [textViewportLayoutControllerReceivedSetNeedsLayout(\_:)](textviewportlayoutcontrollerreceivedsetneedslayout%28__%29.md): Triggers relayout of the view.
- [viewportBounds(for:)](viewportbounds%28for_%29.md): Returns the current viewport, which is the view visible bounds plus the overdraw area.

# textViewportLayoutController:configureRenderingSurfaceForTextLayoutFragment: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

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
- [textViewportLayoutControllerReceivedSetNeedsLayout:](textviewportlayoutcontrollerreceivedsetneedslayout%28__%29.md): Triggers relayout of the view.
- [viewportBoundsForTextViewportLayoutController:](viewportbounds%28for_%29.md): Returns the current viewport, which is the view visible bounds plus the overdraw area.
