> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/toolbar(_:for:)](https://developer.apple.com/documentation/swiftui/view/toolbar(_:for:))

# toolbar(\_:for:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ (deprecated in 27.0) · iPadOS 16.0+ (deprecated in 27.0) · Mac Catalyst 16.0+ (deprecated in 27.0) · macOS 13.0+ (deprecated in 27.0) · tvOS 16.0+ (deprecated in 27.0) · visionOS 1.0+ · watchOS 9.0+ (deprecated in 27.0)

Specifies the visibility of a bar managed by SwiftUI.

## Declaration

```swift
nonisolated func toolbar(_ visibility: Visibility, for bars: ToolbarPlacement...) -> some View

```

## Parameters

- `visibility`: The preferred visibility of the bar.
- `bars`: The bars to update the visibility of or [automatic](../toolbarplacement/automatic.md) if empty.

<a id="discussion"></a>

## Discussion

The preferred visibility flows up to the nearest container that renders a bar. This could be a [NavigationView](../navigationview.md) or [TabView](../tabview.md) in iOS, or the root view of a [WindowGroup](../windowgroup.md) in macOS.

This examples shows a view that hides the navigation bar on iOS, or the window toolbar items on macOS.

```swift
NavigationView {
    ContentView()
        .toolbar(.hidden)
}
```

To hide the entire titlebar on macOS, use this modifier with [windowToolbar](../toolbarplacement/windowtoolbar.md) placement.

```swift
NavigationView {
    ContentView()
        .toolbar(.hidden, for: .windowToolbar)
}
```

You can provide multiple [ToolbarPlacement](../toolbarplacement.md) instances to hide multiple bars at once.

```swift
TabView {
    NavigationView {
        ContentView()
            .toolbar(
                .hidden, for: .navigationBar, .tabBar)
    }
}
```

> **Note**

> In macOS, if you provide [ToolbarCommands](../toolbarcommands.md) to the scene of your app, this modifier disables the toolbar visibility command while the value of the modifier is not [automatic](../toolbarplacement/automatic.md).

Depending on the specified bars, the requested visibility may not be able to be fulfilled.

## See Also

### Setting toolbar visibility

- [toolbarVisibility(\_:for:)](toolbarvisibility%28__for_%29.md): Specifies the visibility of a bar managed by SwiftUI.
- [toolbarBackgroundVisibility(\_:for:)](toolbarbackgroundvisibility%28__for_%29.md): Specifies the preferred visibility of backgrounds on a bar managed by SwiftUI.
- [ToolbarPlacement](../toolbarplacement.md): The placement of a toolbar.
- [ContentToolbarPlacement](../contenttoolbarplacement.md)
