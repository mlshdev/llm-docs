> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/managedappdistribution/managedapp/languages](https://developer.apple.com/documentation/managedappdistribution/managedapp/languages)

# languages

**Framework:** ManagedAppDistribution  
**Kind:** Instance Property  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 2.4+

The app’s supported languages.

## Declaration

```swift
let languages: [Locale.Language]
```

<a id="discussion"></a>

## Discussion

> **Tip**

> Use `Locale.localizedString(forLanguageCode:)` to obtain a display name for the language, using [metadataLanguage](metadatalanguage.md)  to create the `Locale`.

## See Also

### Obtaining supported languages

- [metadataLanguage](metadatalanguage.md): The language of the localized properties of this managed app.
