> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpackmanager/locallyavailablelanguages](https://developer.apple.com/documentation/backgroundassets/assetpackmanager/locallyavailablelanguages)

# locallyAvailableLanguages

**Framework:** Background Assets  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The languages used by asset packs that are localized and are available locally.

## Declaration

```swift
var locallyAvailableLanguages: [Locale.Language] { get async }
```

## See Also

### Inspecting language support

- [resolvedLanguage](resolvedlanguage.md): The language that best matches current preferences and for which the system automatically makes localized asset packs available locally.
- [reconcilePreferredLanguages()](reconcilepreferredlanguages%28%29.md): Reconciles the set of locally available asset packs with the current preferred languages.
