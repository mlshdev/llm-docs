> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/nshostingscenerepresentation](https://developer.apple.com/documentation/swiftui/nshostingscenerepresentation)

# NSHostingSceneRepresentation

**Framework:** SwiftUI  
**Kind:** Class  
**Availability:** macOS 26.0+

An AppKit type that hosts and can present SwiftUI scenes

## Declaration

```swift
@MainActor class NSHostingSceneRepresentation<Content> where Content : Scene
```

<a id="overview"></a>

## Overview

Use instances of this type with `NSApplication.addSceneRepresentation(_:)` to include SwiftUI scene functionality in an app which uses the AppKit app lifecycle.

For example, you can add a `Settings` scene to your app and present it when the corresponding menu item is selected:

```swift
import AppKit
import SwiftUI

@main
class ApplicationDelegate: NSApplicationDelegate {
    let settingsScene = NSHostingSceneRepresentation {
        Settings {
            SettingsView()
        }
    }

    func applicationWillFinishLaunching(_ notification: Notification) {
        NSApplication.shared.addSceneRepresentation(settingsScene)
    }

    @IBAction func showAppSettings(_ sender: NSMenuItem) {
        settingsScene.environment.openSettings()
    }
}
```

## Topics

### Initializers

- [init(rootScene:)](nshostingscenerepresentation/init%28rootscene_%29.md): Creates a new hosting scene representation for the specified scene(s).

### Instance Properties

- [environment](nshostingscenerepresentation/environment.md): The environment for any scene(s) being represented by `self`.

## See Also

### Displaying SwiftUI views in AppKit

- [Unifying your app’s animations](unifying-your-app-s-animations.md): Create a consistent UI animation experience across SwiftUI, UIKit, and AppKit.
- [NSHostingController](nshostingcontroller.md): An AppKit view controller that hosts SwiftUI view hierarchy.
- [NSHostingView](nshostingview.md): An AppKit view that hosts a SwiftUI view hierarchy.
- [NSHostingMenu](nshostingmenu.md): An AppKit menu with menu items that are defined by a SwiftUI View.
- [NSHostingSizingOptions](nshostingsizingoptions.md): Options for how hosting views and controllers reflect their content’s size into Auto Layout constraints.
- [NSHostingSceneBridgingOptions](nshostingscenebridgingoptions.md): Options for how hosting views and controllers manage aspects of the associated window.
