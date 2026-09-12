> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/shortcuttilecolor](https://developer.apple.com/documentation/appintents/shortcuttilecolor)

# ShortcutTileColor

**Framework:** App Intents  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Describes the colors a shortcut tile in the Shortcuts app.

## Declaration

```swift
enum ShortcutTileColor
```

## Topics

### Getting the tile colors

- [ShortcutTileColor.blue](shortcuttilecolor/blue.md): A blue color.
- [ShortcutTileColor.grape](shortcuttilecolor/grape.md): A grape color.
- [ShortcutTileColor.grayBlue](shortcuttilecolor/grayblue.md): A grayish-blue color.
- [ShortcutTileColor.grayBrown](shortcuttilecolor/graybrown.md): A grayish-brown color.
- [ShortcutTileColor.grayGreen](shortcuttilecolor/graygreen.md): A grayish-green color.
- [ShortcutTileColor.lightBlue](shortcuttilecolor/lightblue.md): A light blue color.
- [ShortcutTileColor.lime](shortcuttilecolor/lime.md): A lime color.
- [ShortcutTileColor.navy](shortcuttilecolor/navy.md): A navy blue color.
- [ShortcutTileColor.orange](shortcuttilecolor/orange.md): An orange color.
- [ShortcutTileColor.pink](shortcuttilecolor/pink.md): A pink color.
- [ShortcutTileColor.purple](shortcuttilecolor/purple.md): A purple color.
- [ShortcutTileColor.red](shortcuttilecolor/red.md): A red color.
- [ShortcutTileColor.tangerine](shortcuttilecolor/tangerine.md): A tangerine color.
- [ShortcutTileColor.teal](shortcuttilecolor/teal.md): A teal color.
- [ShortcutTileColor.yellow](shortcuttilecolor/yellow.md): A yellow color.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### App Shortcut definition

- [AppShortcut](appshortcut.md): A type that defines a preconfigured shortcut for a specific app intent.
- [AppShortcutPhrase](appshortcutphrase.md): A spoken phrase that causes the system to run the corresponding App Shortcut.
- [AppShortcutPhraseToken](appshortcutphrasetoken.md): Dynamic values you can include in the spoken phrases that run your shortcut.
- [NegativeAppShortcutPhrase](negativeappshortcutphrase.md): An object that represents a negative phrase.
- [NegativeAppShortcutPhrases](negativeappshortcutphrases.md): This is a set of negative phrases, which will all be added to the app-level negative training set. All the training data specified here, will be used to completely bypass your app
- [NSAppIconActionTintColorName](../bundleresources/information-property-list/cfbundleicons/cfbundleprimaryicon/nsappiconactiontintcolorname.md): The tint color to apply to text and symbols in the App Shortcuts platter.
- [NSAppIconComplementingColorNames](../bundleresources/information-property-list/cfbundleicons/cfbundleprimaryicon/nsappiconcomplementingcolornames.md): The names of the colors to use for the background of the App Shortcuts platter.
- [AppShortcutsBuilder](appshortcutsbuilder.md): A result builder that allows you to declaratively describe the App Shortcuts that your app provides.
- [AppShortcutsContent](appshortcutscontent.md)
