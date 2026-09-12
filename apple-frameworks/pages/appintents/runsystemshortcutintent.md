> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/runsystemshortcutintent](https://developer.apple.com/documentation/appintents/runsystemshortcutintent)

# RunSystemShortcutIntent

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

An app intent you use in widgets to open another app or perform an App Shortcut, custom shortcut, or system action.

## Declaration

```swift
struct RunSystemShortcutIntent
```

<a id="Overview"></a>

## Overview

Only use `RunSystemShortcutIntent` to initialize a [Button](https://developer.apple.com/documentation/swiftui/button) with the [init(\_:intent:)](https://developer.apple.com/documentation/swiftui/button/init%28_:intent:%29) initializer and place the button in a widget. The run system shortcut intent doesn’t provide functionality in other contexts.

When a person configures the widget, they choose the button’s action. It can:

- Open another installed app.
- Perform an App Shortcut.
- Perform a custom shortcut a person creates in Shortcuts.
- Perform a system action.

The following example shows how an app offers a widget that allows people to launch another app from a button:

```swift
import SwiftUI
import WidgetKit
import AppIntents

struct LauncherWidgetConfigurationIntent: WidgetConfigurationIntent {
    static var title: LocalizedStringResource { "Launcher Widget" }
    static var description: IntentDescription { "Widget that runs a shortcut or opens an app" }

    @Parameter(title: "Action")
    var shortcut: SystemShortcut
}

struct LauncherWidget: Widget {
    let kind: String = "LauncherWidget"

    var body: some WidgetConfiguration {
        AppIntentConfiguration(
            kind: kind,
            intent: LauncherWidgetConfigurationIntent.self,
            provider: Provider()
        ) { entry in
            Button(
                intent: RunSystemShortcutIntent(shortcut: entry.configuration.shortcut)
            ) {
                VStack {
                    Image(systemName: "play.fill")
                        .font(.largeTitle)
                    Text(entry.configuration.shortcut.displayRepresentation.title)
                        .font(.caption)
                }
            }
        }
    }
}
```

The `RunSystemShortcutIntent` represents a person’s chosen action when they configure your widget and it provides metadata the system needs for the widget’s configuration UI. It doesn’t provide your widget or app with access to a shortcut’s actions, parameters, or implementation details. If a custom shortcut or App Shortcut requires an interaction, for example, if it prompts a person for input, the system may open the Shortcuts app to perform the intent.

## Topics

### Creating the intent

- [init(shortcut:)](runsystemshortcutintent/init%28shortcut_%29.md): Creates an intent that performs a person’s configured action.
- [SystemShortcut](systemshortcut.md): An opaque reference to a user-configured action for use in a widget button.

### Initializers

- [init()](runsystemshortcutintent/init%28%29.md): Creates an intent that performs a person’s configured action.

### Instance Methods

- [perform()](runsystemshortcutintent/perform%28%29.md): Performs a widget’s configured action, like opening another app or performing an App Shortcut, custom shortcut, or system action.

### Type Properties

- [persistentIdentifier](runsystemshortcutintent/persistentidentifier.md): The string that identifies the intent.
- [title](runsystemshortcutintent/title.md): The localized string that describes the intent’s functionality.

## Relationships

### Conforms To

- [AppIntent](appintent.md)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SystemIntent](systemintent.md)

## See Also

### Controls, widgets, and Live Activities

- [ControlConfigurationIntent](controlconfigurationintent.md): An interface for configuring a Control Center module.
- [LiveActivityIntent](liveactivityintent.md): An intent that starts, pauses, or otherwise modifies a Live Activity when it runs.
- [WidgetConfigurationIntent](widgetconfigurationintent.md): An interface for configuring a WidgetKit widget.
