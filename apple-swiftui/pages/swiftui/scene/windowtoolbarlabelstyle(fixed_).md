> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scene/windowtoolbarlabelstyle(fixed:)](https://developer.apple.com/documentation/swiftui/scene/windowtoolbarlabelstyle(fixed:))

# windowToolbarLabelStyle(fixed:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Sets the label style of items in a toolbar.

## Declaration

```swift
nonisolated func windowToolbarLabelStyle(fixed: ToolbarLabelStyle) -> some Scene

```

## Parameters

- `fixed`: The toolbar label style to apply.

<a id="discussion"></a>

## Discussion

Use this modifier to set a static [ToolbarLabelStyle](../toolbarlabelstyle.md) the toolbar should use. The style will not be configurable by the user.

```swift
    @main
    struct MyApp: App {
        var body: some Scene {
            WindowGroup {
                ContentView()
                    .toolbar(id: "browserToolbar") {
                        ...
                    }
            }
            .windowToolbarLabelStyle(fixed: .iconOnly)
        }
    }
```

## See Also

### Styling the associated toolbar

- [windowToolbarStyle(\_:)](windowtoolbarstyle%28__%29.md): Sets the style for the toolbar defined within this scene.
- [windowToolbarLabelStyle(\_:)](windowtoolbarlabelstyle%28__%29.md): Sets the label style of items in a toolbar and enables user customization.
- [WindowToolbarStyle](../windowtoolbarstyle.md): A specification for the appearance and behavior of a window’s toolbar.
