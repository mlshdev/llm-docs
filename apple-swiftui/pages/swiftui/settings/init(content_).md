> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/settings/init(content:)](https://developer.apple.com/documentation/swiftui/settings/init(content:))

# init(content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** macOS 11.0+

Creates a scene that presents an interface for viewing and modifying an app’s preferences.

## Declaration

```swift
nonisolated init(@ContentBuilder content: () -> Content)
```

## Parameters

- `content`: A view that represents the content of the scene.

<a id="discussion"></a>

## Discussion

Use `Settings(content:)` to add a preferences scene when you declare your app using the [App](../app.md) protocol.

The example below shows the view content for the settings scene added to the SwiftUI app delegate:

```swift
@main
struct MacSwiftUISnippets: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
        #if os(macOS)
        Settings {
            SettingsView()
        }
        #endif
    }
}
```

When you use an [App](../app.md) declaration for multiple platforms, compile the settings scene only in macOS, as shown in the example above.
