> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/toolbarcolorscheme(_:for:)](https://developer.apple.com/documentation/swiftui/view/toolbarcolorscheme(_:for:))

# toolbarColorScheme(\_:for:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Specifies the preferred color scheme of a bar managed by SwiftUI.

## Declaration

```swift
nonisolated func toolbarColorScheme(_ colorScheme: ColorScheme?, for bars: ToolbarPlacement...) -> some View

```

## Parameters

- `colorScheme`: The preferred color scheme of the background of the bar.
- `bars`: The bars to update the color scheme of or [automatic](../toolbarplacement/automatic.md) if empty.

<a id="discussion"></a>

## Discussion

The preferred color scheme flows up to the nearest container that renders a bar. This could be a [NavigationView](../navigationview.md) or [TabView](../tabview.md) in iOS, or the root view of a [WindowGroup](../windowgroup.md) in macOS. Pass in a value of nil to match the current system’s color scheme.

This examples shows a view that renders the navigation bar with a blue background and dark color scheme:

```swift
TabView {
    NavigationView {
        ContentView()
            .toolbarBackground(.blue)
            .toolbarColorScheme(.dark)
    }
    // other tabs...
}
```

You can provide multiple [ToolbarPlacement](../toolbarplacement.md) instances to customize multiple bars at once.

```swift
TabView {
    NavigationView {
        ContentView()
            .toolbarBackground(
                .blue, for: .navigationBar, .tabBar)
            .toolbarColorScheme(
                .dark, for: .navigationBar, .tabBar)
    }
}
```

Note that the provided color scheme is only respected while a background is visible in the requested bar. As the background becomes visible, the bar transitions from the color scheme of the app to the requested color scheme. You can ensure that the color scheme is always respected by specifying that the background of the bar always be visible.

```swift
NavigationView {
    ContentView()
        .toolbarBackground(.visible)
        .toolbarColorScheme(.dark)
}
```

Depending on the specified bars, the requested color scheme may not be able to be fullfilled.

## See Also

### Styling a toolbar

- [toolbarBackground(\_:for:)](toolbarbackground%28__for_%29.md): Specifies the preferred shape style of the background of a bar managed by SwiftUI.
- [toolbarForegroundStyle(\_:for:)](toolbarforegroundstyle%28__for_%29.md): Specifies the preferred foreground style of bars managed by SwiftUI.
- [windowToolbarStyle(\_:)](../scene/windowtoolbarstyle%28__%29.md): Sets the style for the toolbar defined within this scene.
- [WindowToolbarStyle](../windowtoolbarstyle.md): A specification for the appearance and behavior of a window’s toolbar.
- [toolbarLabelStyle](../environmentvalues/toolbarlabelstyle.md): The label style to apply to controls within a toolbar.
- [ToolbarLabelStyle](../toolbarlabelstyle.md): The label style of a toolbar.
- [SpacerSizing](../spacersizing.md): A type which defines how spacers should size themselves.
