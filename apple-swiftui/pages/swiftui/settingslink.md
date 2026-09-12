> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/settingslink](https://developer.apple.com/documentation/swiftui/settingslink)

# SettingsLink

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** macOS 14.0+

A view that opens the Settings scene defined by an app.

## Declaration

```swift
nonisolated struct SettingsLink<Label> where Label : View
```

<a id="overview"></a>

## Overview

On macOS, clicking on the link opens the window for the scene or orders it to the front if it is already open.

## Topics

### Creating a settings link

- [init()](settingslink/init%28%29.md): Creates a settings link with the default system label.
- [init(label:)](settingslink/init%28label_%29.md): Creates a settings link with a custom label.

### Supporting types

- [DefaultSettingsLinkLabel](defaultsettingslinklabel.md): The default label to use for a settings link.

## Relationships

### Conforms To

- [View](view.md)

## See Also

### Managing a settings window

- [Settings](settings.md): A scene that presents an interface for viewing and modifying an app’s settings.
- [OpenSettingsAction](opensettingsaction.md): An action that presents the settings scene for an app.
- [openSettings](environmentvalues/opensettings.md): A Settings presentation action stored in a view’s environment.
