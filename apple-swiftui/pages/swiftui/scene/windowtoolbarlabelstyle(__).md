> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scene/windowtoolbarlabelstyle(_:)](https://developer.apple.com/documentation/swiftui/scene/windowtoolbarlabelstyle(_:))

# windowToolbarLabelStyle(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Sets the label style of items in a toolbar and enables user customization.

## Declaration

```swift
nonisolated func windowToolbarLabelStyle(_ toolbarLabelStyle: Binding<ToolbarLabelStyle>) -> some Scene

```

## Parameters

- `toolbarLabelStyle`: The label style to apply.

<a id="discussion"></a>

## Discussion

Use this modifier to bind a [ToolbarLabelStyle](../toolbarlabelstyle.md) to [AppStorage](../appstorage.md). The toolbar will default to the label style specified but will also be user configurable.

```swift
    @main
    struct MyApp: App {
        @AppStorage("ToolbarLabelStyle")
        private var labelStyle: ToolbarLabelStyle = .iconOnly

        var body: some Scene {
            WindowGroup {
                ContentView()
                    .toolbar(id: "browserToolbar") {
                        ...
                    }
            }
            .windowToolbarLabelStyle($labelStyle)
        }
    }
```

## See Also

### Styling the associated toolbar

- [windowToolbarStyle(\_:)](windowtoolbarstyle%28__%29.md): Sets the style for the toolbar defined within this scene.
- [windowToolbarLabelStyle(fixed:)](windowtoolbarlabelstyle%28fixed_%29.md): Sets the label style of items in a toolbar.
- [WindowToolbarStyle](../windowtoolbarstyle.md): A specification for the appearance and behavior of a window’s toolbar.
