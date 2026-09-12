> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scene/windowidealplacement(_:)](https://developer.apple.com/documentation/swiftui/scene/windowidealplacement(_:))

# windowIdealPlacement(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Provides a function which determines a placement to use when windows of a scene zoom.

## Declaration

```swift
nonisolated func windowIdealPlacement(_ makePlacement: @escaping (WindowLayoutRoot, WindowPlacementContext) -> WindowPlacement) -> some Scene

```

## Parameters

- `makePlacement`: A closure which returns the ideal placement for a window derived from this scene.

  - **content**: A proxy for the contents of the window.
  - **context**: An instance of a [WindowPlacementContext](../windowplacementcontext.md) that provides contextual information used to size and position windows.

<a id="discussion"></a>

## Discussion

The default behavior will size the window to its maximum size, or the bounds of the display, whichever is smaller. By overriding this behavior, you can provide a size that is appropriate for the contents of your window.

This modifier’s closure takes two parameters. `content` provides a proxy for the root content of the window. `context` is an instance of a [WindowPlacementContext](../windowplacementcontext.md) that provides contextual information used to size and position windows.

For example, you can provide a placement with a height equal to the display bounds, and a width based on your content’s ideal width:

```swift
struct MyApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
        .windowIdealPlacement { content, context in
            let displayBounds = context.defaultDisplay.visibleRect
            let proposal = ProposedViewSize(
                width: nil, height: displayBounds.height)
            let contentSize = content.sizeThatFits(proposal)
            return .init(
                width: contentSize.width,
                height: contentSize.height)
        }
    }
}
```

## See Also

### Positioning a window

- [defaultPosition(\_:)](defaultposition%28__%29.md): Sets a default position for a window.
- [WindowLevel](../windowlevel.md): The level of a window.
- [windowLevel(\_:)](windowlevel%28__%29.md): Sets the window level of this scene.
- [WindowLayoutRoot](../windowlayoutroot.md): A proxy which represents the root contents of a window.
- [WindowPlacement](../windowplacement.md): A type which represents a preferred size and position for a window.
- [defaultWindowPlacement(\_:)](defaultwindowplacement%28__%29.md): Defines a function used for determining the default placement of windows.
- [WindowPlacementContext](../windowplacementcontext.md): A type which represents contextual information used for sizing and positioning windows.
- [WindowProxy](../windowproxy.md): The proxy for an open window in the app.
- [DisplayProxy](../displayproxy.md): A type which provides information about display hardware.
