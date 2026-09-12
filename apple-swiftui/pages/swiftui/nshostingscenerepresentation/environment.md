> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nshostingscenerepresentation/environment](https://developer.apple.com/documentation/swiftui/nshostingscenerepresentation/environment)

# environment

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The environment for any scene(s) being represented by `self`.

## Declaration

```swift
@MainActor var environment: EnvironmentValues { get }
```

<a id="discussion"></a>

## Discussion

Use the environment values to programmatically present a scene’s window.

For example, you can present the window for a `Settings` scene using `OpenSettingsAction` when a menu item is selected:

```swift
let settingsScene = NSHostingSceneRepresentation {
    Settings {
        SettingsView()
    }
}

@IBAction func showAppSettings(_ sender: NSMenuItem) {
    settingsScene.environment.openSettings()
}
```
