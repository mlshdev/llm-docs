> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appshortcutsprovider](https://developer.apple.com/documentation/appintents/appshortcutsprovider)

# AppShortcutsProvider

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A type alias for the type that provides an app’s preconfigured shortcuts.

## Declaration

```swift
protocol AppShortcutsProvider : Sendable
```

## Mentioned In

- [Getting started with the App Intents framework](getting-started-with-the-app-intents-framework.md)

<a id="overview"></a>

## Overview

> **Related sessions from WWDC22**

>  Session 10170: [Implement App Shortcuts with App Intents](https://developer.apple.com/videos/play/wwdc2022/10170), and session 10169: [Design App Shortcuts](https://developer.apple.com/videos/play/wwdc2022/10169).

> **Note**

> Apple may extract anonymized App Shortcuts data such as localized phrases, display representation values, and the title and description of related intents. Machine learning models use this data when training to help improve the App Shortcuts experience.

## Topics

### Providing App Shortcuts

- [appShortcuts](appshortcutsprovider/appshortcuts.md)
- [AppShortcutsBuilder](appshortcutsbuilder.md): A result builder that allows you to declaratively describe the App Shortcuts that your app provides.

### Configuring shortcut tiles

- [shortcutTileColor](appshortcutsprovider/shortcuttilecolor.md): The background color of the tile that Shortcuts displays for each of the app’s App Shortcuts.
- [ShortcutTileColor](shortcuttilecolor.md): Describes the colors a shortcut tile in the Shortcuts app.

### Updating stored parameters

- [updateAppShortcutParameters()](appshortcutsprovider/updateappshortcutparameters%28%29.md)

### Type Aliases

- [AppShortcutsProvider.OptionsCollection](appshortcutsprovider/optionscollection.md)
- [AppShortcutsProvider.ParameterPresentation](appshortcutsprovider/parameterpresentation.md)
- [AppShortcutsProvider.Summary](appshortcutsprovider/summary.md)
- [AppShortcutsProvider.Title](appshortcutsprovider/title.md): Deprecated.

### Type Properties

- [negativePhrases](appshortcutsprovider/negativephrases.md)

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
