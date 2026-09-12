> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/windowresizeanchor(_:)](https://developer.apple.com/documentation/swiftui/view/windowresizeanchor(_:))

# windowResizeAnchor(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Sets the window anchor point used when the size of the view changes such that the window must resize.

## Declaration

```swift
nonisolated func windowResizeAnchor(_ anchor: UnitPoint?) -> some View

```

## Parameters

- `anchor`: The window point fixed under programmatic size changes caused by the content size of the window changing. Defaults to a system defined value when `nil`.

<a id="return-value"></a>

## Return Value

A view whose scene resizes on `anchor`.

<a id="discussion"></a>

## Discussion

In SwiftUI life cycle apps, this modifier can be used to control how a window anchors when animating: drive window animations by changing the size of a view in a way that causes the window size to change. Note that if the window size is decreasing and an animation is desired, it is often necessary to (temporarily, if desired) set the [windowResizability(\_:)](../scene/windowresizability%28__%29.md) to [contentSize](../windowresizability/contentsize.md).

```swift
struct Scratchpad: App {
    var body: some Scene {
        WindowGroup {
            HeightResizingExample()
        }
        .windowResizability(.contentSize)
    }
}

struct HeightResizingExample: View {
    @State private var height: CGFloat = 300

    var body: some View {
        ZStack(alignment: .topLeading) {
            Color.red
                .overlay {
                    Text("Tap to toggle")
                        .foregroundStyle(.white)
                }
        }
        .onTapGesture {
            withAnimation(.easeInOut) {
                height = height == 300 ? 700 : 300
            }
        }
        .frame(width: 250, height: height)
        .windowResizeAnchor(.top)
    }
}
```

The default anchor varies by scene type and is used when `anchor` is nil. Generally, it resolves to the `.topLeading` corner.

> **Note**

> Animated window resizes are only supported in SwiftUI app-lifecycle apps. However, the anchor point is respected in all cases.

> **Note**

> When animating windows on macOS, it can be helpful to explicitly specify `.topLeading` to avoid pixel cracking between the hosting view and the hosting window.

## See Also

### Window behaviors

- [windowDismissBehavior(\_:)](windowdismissbehavior%28__%29.md): Configures the dismiss functionality for the window enclosing `self`.
- [windowFullScreenBehavior(\_:)](windowfullscreenbehavior%28__%29.md): Configures the full screen functionality for the window enclosing `self`.
- [windowToolbarFullScreenVisibility(\_:)](windowtoolbarfullscreenvisibility%28__%29.md): Configures the visibility of the window toolbar when the window enters full screen mode.
- [windowMinimizeBehavior(\_:)](windowminimizebehavior%28__%29.md): Configures the minimize functionality for the window enclosing `self`.
- [windowResizeBehavior(\_:)](windowresizebehavior%28__%29.md): Configures the resize functionality for the window enclosing `self`.
- [preferredWindowClippingMargins(\_:\_:)](preferredwindowclippingmargins%28____%29.md): Requests additional margins for drawing beyond the bounds of the window.
