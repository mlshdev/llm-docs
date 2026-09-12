> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/addscenerepresentation(_:)](https://developer.apple.com/documentation/appkit/nsapplication/addscenerepresentation(_:))

# addSceneRepresentation(\_:)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 26.0+

Adds the specified SwiftUI scene representation to the current application.

## Declaration

```swift
@MainActor @preconcurrency func addSceneRepresentation<C>(_ representation: NSHostingSceneRepresentation<C>) where C : Scene
```

<a id="discussion"></a>

## Discussion

Scenes defined by the representation can be presented programmatically via the environment actions available on `NSHostingSceneRepresentation`, or when the app receives an external event such as a URL.

For example, you can add a `Settings` scene to your app and present it when the corresponding menu item is selected:

```
import AppKit
import SwiftUI

@main
class ApplicationDelegate: NSApplicationDelegate {
    let scene = NSHostingSceneRepresentation {
        Settings {
            SettingsView()
        }
    }

    func applicationWillFinishLaunching(
        _ notification: Notification
    ) {
        NSApplication.shared.addSceneRepresentation(scene)
    }

    @IBAction func showAppSettings(_ sender: NSMenuItem) {
        scene.environment.openSettings()
    }
}
```
