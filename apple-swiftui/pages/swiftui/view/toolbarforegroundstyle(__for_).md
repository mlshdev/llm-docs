> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/toolbarforegroundstyle(_:for:)](https://developer.apple.com/documentation/swiftui/view/toolbarforegroundstyle(_:for:))

# toolbarForegroundStyle(\_:for:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** watchOS 9.0+

Specifies the preferred foreground style of bars managed by SwiftUI.

## Declaration

```swift
nonisolated func toolbarForegroundStyle<S>(_ style: S, for bars: ToolbarPlacement...) -> some View where S : ShapeStyle

```

<a id="discussion"></a>

## Discussion

This examples shows a view that renders the navigation bar with a blue foreground color.

```swift
NavigationStack {
    ContentView()
        .navigationTitle("Blue")
        .toolbarForegroundStyle(
            .blue, for: .navigationBar)
}
```

## See Also

### Styling a toolbar

- [toolbarBackground(\_:for:)](toolbarbackground%28__for_%29.md): Specifies the preferred shape style of the background of a bar managed by SwiftUI.
- [toolbarColorScheme(\_:for:)](toolbarcolorscheme%28__for_%29.md): Specifies the preferred color scheme of a bar managed by SwiftUI.
- [windowToolbarStyle(\_:)](../scene/windowtoolbarstyle%28__%29.md): Sets the style for the toolbar defined within this scene.
- [WindowToolbarStyle](../windowtoolbarstyle.md): A specification for the appearance and behavior of a window’s toolbar.
- [toolbarLabelStyle](../environmentvalues/toolbarlabelstyle.md): The label style to apply to controls within a toolbar.
- [ToolbarLabelStyle](../toolbarlabelstyle.md): The label style of a toolbar.
- [SpacerSizing](../spacersizing.md): A type which defines how spacers should size themselves.
