> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/preferredwindowclippingmargins(_:_:)](https://developer.apple.com/documentation/swiftui/view/preferredwindowclippingmargins(_:_:))

# preferredWindowClippingMargins(\_:\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Requests additional margins for drawing beyond the bounds of the window.

## Declaration

```swift
@MainActor @preconcurrency func preferredWindowClippingMargins(_ edges: Edge3D.Set = .all, _ length: CGFloat?) -> some View

```

## Parameters

- `edges`: The edges that should receive margins.
- `length`: The amount of margin requested on each specified edge.

<a id="discussion"></a>

## Discussion

This modifier will only have an effect on windows with a `.volumetric` window style.

A window’s bounds are based on its content, and resizable by dragging the corners. By default, the system clips any content that draws beyond the bounds. This modifier requests additional space for drawing outside the window’s bounds. Use this space to render extra visual effects that enhance the impact of your app. This content does not receive events, and may be clipped by the system at any time.

The additional margins granted by this modifier are not guaranteed, and the system may update or reduce them. Any time the system updates the current margins, it will update the `windowClippingMargins` value in the environment.

If multiple views request margins, the scene’s preferred margins will be the maximum preferred value for each face. For example, if one view wants a leading margin of `400` and another view a trailing margin of `400`, the scene will request both a leading and trailing margin of `400`. If one view requests a leading margin of `200` and another view a leading margin of `300`, the scene will request `300`.

## See Also

### Window behaviors

- [windowDismissBehavior(\_:)](windowdismissbehavior%28__%29.md): Configures the dismiss functionality for the window enclosing `self`.
- [windowFullScreenBehavior(\_:)](windowfullscreenbehavior%28__%29.md): Configures the full screen functionality for the window enclosing `self`.
- [windowToolbarFullScreenVisibility(\_:)](windowtoolbarfullscreenvisibility%28__%29.md): Configures the visibility of the window toolbar when the window enters full screen mode.
- [windowMinimizeBehavior(\_:)](windowminimizebehavior%28__%29.md): Configures the minimize functionality for the window enclosing `self`.
- [windowResizeAnchor(\_:)](windowresizeanchor%28__%29.md): Sets the window anchor point used when the size of the view changes such that the window must resize.
- [windowResizeBehavior(\_:)](windowresizebehavior%28__%29.md): Configures the resize functionality for the window enclosing `self`.
