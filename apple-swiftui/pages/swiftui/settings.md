> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/settings](https://developer.apple.com/documentation/swiftui/settings)

# Settings

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 11.0+

A scene that presents an interface for viewing and modifying an app’s settings.

## Declaration

```swift
nonisolated struct Settings<Content> where Content : View
```

## Mentioned In

- [Building and customizing the menu bar with SwiftUI](building-and-customizing-the-menu-bar-with-swiftui.md)
- [Declaring a custom view](declaring-a-custom-view.md)

<a id="overview"></a>

## Overview

Use a settings scene to have SwiftUI manage views with controls for your app’s settings when you declare your app using the [App](app.md) protocol. When you use an [App](app.md) declaration for multiple platforms, compile the settings scene only in macOS:

```swift
@main
struct MyApp: App {
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

Passing a view as the argument to a settings scene in the [App](app.md) declaration causes SwiftUI to enable the app’s Settings menu item. SwiftUI manages displaying and removing the settings view when the user selects the Settings item from the application menu or the equivalent keyboard shortcut:

![A screenshot of the MyApp application menu, showing the active](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-AppBehavior-Settings-AppMenu@2x.png)

The contents of your settings view are controls that modify bindings to [UserDefaults](https://developer.apple.com/documentation/foundation/userdefaults) values that SwiftUI manages using the [AppStorage](appstorage.md) property wrapper:

```swift
struct GeneralSettingsView: View {
    @AppStorage("showPreview") private var showPreview = true
    @AppStorage("fontSize") private var fontSize = 12.0

    var body: some View {
        Form {
            Toggle("Show Previews", isOn: $showPreview)
            Slider(value: $fontSize, in: 9...96) {
                Text("Font Size (\(fontSize, specifier: "%.0f") pts)")
            }
        }
    }
}
```

You can define your settings in a single view, or you can use a [TabView](tabview.md) to group settings into different collections:

```swift
struct SettingsView: View {
    var body: some View {
        TabView {
            Tab("General", systemImage: "gear") {
                GeneralSettingsView()
            }
            Tab("Advanced", systemImage: "star") {
                AdvancedSettingsView()
            }
        }
        .scenePadding()
        .frame(maxWidth: 350, minHeight: 100)
    }
}
```

![A screenshot showing a tabbed application settings view containing a](https://developer.apple.com/images/com.apple.SwiftUI/SwiftUI-AppBehavior-Settings@2x.png)

## Topics

### Creating a settings scene

- [init(content:)](settings/init%28content_%29.md): Creates a scene that presents an interface for viewing and modifying an app’s preferences.

## Relationships

### Conforms To

- [Scene](scene.md)

## See Also

### Managing a settings window

- [SettingsLink](settingslink.md): A view that opens the Settings scene defined by an app.
- [OpenSettingsAction](opensettingsaction.md): An action that presents the settings scene for an app.
- [openSettings](environmentvalues/opensettings.md): A Settings presentation action stored in a view’s environment.
