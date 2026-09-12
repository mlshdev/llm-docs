> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpackmanifest/primarylanguage](https://developer.apple.com/documentation/backgroundassets/assetpackmanifest/primarylanguage)

# primaryLanguage

**Framework:** Background Assets  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The app’s primary language as configured in App Store Connect.

## Declaration

```swift
var primaryLanguage: Locale.Language? { get }
```

<a id="discussion"></a>

## Discussion

If no available localized asset packs match the current preferred languages, then the system falls back on the app’s primary language.

## See Also

### Inspecting asset pack localization

- [availableLanguages](availablelanguages.md): The languages for which asset packs in this manifest are localized.
- [resolvedLanguage](resolvedlanguage.md): The language that best matches current preferences and for which a localized asset pack is available locally.
