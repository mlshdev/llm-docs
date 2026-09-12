> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appshortcutphrase](https://developer.apple.com/documentation/appintents/appshortcutphrase)

# AppShortcutPhrase

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A spoken phrase that causes the system to run the corresponding App Shortcut.

## Declaration

```swift
struct AppShortcutPhrase<Intent> where Intent : AppIntent
```

## Topics

### Creating a shortcut phrase

- [init(\_:)](appshortcutphrase/init%28__%29.md)

## Relationships

### Conforms To

- [ExpressibleByExtendedGraphemeClusterLiteral](https://developer.apple.com/documentation/swift/expressiblebyextendedgraphemeclusterliteral)
- [ExpressibleByStringInterpolation](https://developer.apple.com/documentation/swift/expressiblebystringinterpolation)
- [ExpressibleByStringLiteral](https://developer.apple.com/documentation/swift/expressiblebystringliteral)
- [ExpressibleByUnicodeScalarLiteral](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral)

## See Also

### App Shortcut definition

- [AppShortcut](appshortcut.md): A type that defines a preconfigured shortcut for a specific app intent.
- [AppShortcutPhraseToken](appshortcutphrasetoken.md): Dynamic values you can include in the spoken phrases that run your shortcut.
- [NegativeAppShortcutPhrase](negativeappshortcutphrase.md): An object that represents a negative phrase.
- [NegativeAppShortcutPhrases](negativeappshortcutphrases.md): This is a set of negative phrases, which will all be added to the app-level negative training set. All the training data specified here, will be used to completely bypass your app
- [NSAppIconActionTintColorName](../bundleresources/information-property-list/cfbundleicons/cfbundleprimaryicon/nsappiconactiontintcolorname.md): The tint color to apply to text and symbols in the App Shortcuts platter.
- [NSAppIconComplementingColorNames](../bundleresources/information-property-list/cfbundleicons/cfbundleprimaryicon/nsappiconcomplementingcolornames.md): The names of the colors to use for the background of the App Shortcuts platter.
- [AppShortcutsBuilder](appshortcutsbuilder.md): A result builder that allows you to declaratively describe the App Shortcuts that your app provides.
- [ShortcutTileColor](shortcuttilecolor.md): Describes the colors a shortcut tile in the Shortcuts app.
- [AppShortcutsContent](appshortcutscontent.md)
