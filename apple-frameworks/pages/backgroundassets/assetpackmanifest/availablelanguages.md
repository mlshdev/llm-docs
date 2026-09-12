> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpackmanifest/availablelanguages](https://developer.apple.com/documentation/backgroundassets/assetpackmanifest/availablelanguages)

# availableLanguages

**Framework:** Background Assets  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The languages for which asset packs in this manifest are localized.

## Declaration

```swift
var availableLanguages: [Locale.Language] { get }
```

## See Also

### Inspecting asset pack localization

- [primaryLanguage](primarylanguage.md): The app’s primary language as configured in App Store Connect.
- [resolvedLanguage](resolvedlanguage.md): The language that best matches current preferences and for which a localized asset pack is available locally.
