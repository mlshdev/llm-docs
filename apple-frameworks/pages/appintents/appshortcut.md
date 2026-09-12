> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appshortcut](https://developer.apple.com/documentation/appintents/appshortcut)

# AppShortcut

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A type that defines a preconfigured shortcut for a specific app intent.

## Declaration

```swift
struct AppShortcut
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

### Creating an app shortcut

- [init(intent:phrases:shortTitle:systemImageName:)](appshortcut/init%28intent_phrases_shorttitle_systemimagename_%29-8yntq.md): Initializes an App Shortcut with phrases that run the app intent, a title, and an image.
- [init(intent:phrases:shortTitle:systemImageName:parameterPresentation:)](appshortcut/init%28intent_phrases_shorttitle_systemimagename_parameterpresentation_%29.md): Initializes an App Shortcut with phrases that run the app intent, a title, an image, and specified parameters.
- [init(intent:phrases:shortTitle:systemImageName:)](appshortcut/init%28intent_phrases_shorttitle_systemimagename_%29-2hk1x.md): Deprecated. Initializes an App Shortcut with phrases that run the app intent, a title, and an image.

## See Also

### App Shortcut definition

- [AppShortcutPhrase](appshortcutphrase.md): A spoken phrase that causes the system to run the corresponding App Shortcut.
- [AppShortcutPhraseToken](appshortcutphrasetoken.md): Dynamic values you can include in the spoken phrases that run your shortcut.
- [NegativeAppShortcutPhrase](negativeappshortcutphrase.md): An object that represents a negative phrase.
- [NegativeAppShortcutPhrases](negativeappshortcutphrases.md): This is a set of negative phrases, which will all be added to the app-level negative training set. All the training data specified here, will be used to completely bypass your app
- [NSAppIconActionTintColorName](../bundleresources/information-property-list/cfbundleicons/cfbundleprimaryicon/nsappiconactiontintcolorname.md): The tint color to apply to text and symbols in the App Shortcuts platter.
- [NSAppIconComplementingColorNames](../bundleresources/information-property-list/cfbundleicons/cfbundleprimaryicon/nsappiconcomplementingcolornames.md): The names of the colors to use for the background of the App Shortcuts platter.
- [AppShortcutsBuilder](appshortcutsbuilder.md): A result builder that allows you to declaratively describe the App Shortcuts that your app provides.
- [ShortcutTileColor](shortcuttilecolor.md): Describes the colors a shortcut tile in the Shortcuts app.
- [AppShortcutsContent](appshortcutscontent.md)
