> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/opensettingsaction](https://developer.apple.com/documentation/swiftui/opensettingsaction)

# OpenSettingsAction

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 14.0+

An action that presents the settings scene for an app.

## Declaration

```swift
@MainActor @preconcurrency struct OpenSettingsAction
```

<a id="overview"></a>

## Overview

Use the [openSettings](environmentvalues/opensettings.md) environment value to get the instance of this structure for a given [Environment](environment.md). Then call the instance to open a window. You call the instance directly because it defines a [callAsFunction()](opensettingsaction/callasfunction%28%29.md) method that Swift calls when you call the instance.

For example, you can define a button that opens the settings window to a particular tab:

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

struct SettingsView: View {
    @AppStorage("selectedSettingsTab")
    private var selectedSettingsTab = SettingsTab.general

    var body: some View {
        TabView(selection: $selectedSettingsTab) {
            GeneralSettings()
            AdvancedSettings()
        }
    }
}

struct AdvancedSettingsButton: View {
    @AppStorage("selectedSettingsTab")
    private var selectedSettingsTab = SettingsTab.general

    @Environment(\.openSettings) private var openSettings

    var body: some View {
        Button("Open Advanced Settings…") {
            selectedSettingsTab = .advanced
            openSettings()
        }
    }
}

enum SettingsTab: Int {
    case general
    case advanced
}
```

## Topics

### Instance Methods

- [callAsFunction()](opensettingsaction/callasfunction%28%29.md): Opens the window associated to the [Settings](settings.md) scene defined by this app, if one exists.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing a settings window

- [Settings](settings.md): A scene that presents an interface for viewing and modifying an app’s settings.
- [SettingsLink](settingslink.md): A view that opens the Settings scene defined by an app.
- [openSettings](environmentvalues/opensettings.md): A Settings presentation action stored in a view’s environment.
