> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/negativeappshortcutphrases](https://developer.apple.com/documentation/appintents/negativeappshortcutphrases)

# NegativeAppShortcutPhrases

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

This is a set of negative phrases, which will all be added to the app-level negative training set. All the training data specified here, will be used to completely bypass your app

## Declaration

```swift
struct NegativeAppShortcutPhrases
```

## Topics

### Initializers

- [init(phrases:)](negativeappshortcutphrases/init%28phrases_%29.md)

## See Also

### App Shortcut definition

- [AppShortcut](appshortcut.md): A type that defines a preconfigured shortcut for a specific app intent.
- [AppShortcutPhrase](appshortcutphrase.md): A spoken phrase that causes the system to run the corresponding App Shortcut.
- [AppShortcutPhraseToken](appshortcutphrasetoken.md): Dynamic values you can include in the spoken phrases that run your shortcut.
- [NegativeAppShortcutPhrase](negativeappshortcutphrase.md): An object that represents a negative phrase.
- [NSAppIconActionTintColorName](../bundleresources/information-property-list/cfbundleicons/cfbundleprimaryicon/nsappiconactiontintcolorname.md): The tint color to apply to text and symbols in the App Shortcuts platter.
- [NSAppIconComplementingColorNames](../bundleresources/information-property-list/cfbundleicons/cfbundleprimaryicon/nsappiconcomplementingcolornames.md): The names of the colors to use for the background of the App Shortcuts platter.
- [AppShortcutsBuilder](appshortcutsbuilder.md): A result builder that allows you to declaratively describe the App Shortcuts that your app provides.
- [ShortcutTileColor](shortcuttilecolor.md): Describes the colors a shortcut tile in the Shortcuts app.
- [AppShortcutsContent](appshortcutscontent.md)
