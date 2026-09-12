> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/assetpackmanifest/resolvedlanguage](https://developer.apple.com/documentation/backgroundassets/assetpackmanifest/resolvedlanguage)

# resolvedLanguage

**Framework:** Background Assets  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The language that best matches current preferences and for which a localized asset pack is available locally.

## Declaration

```swift
var resolvedLanguage: Locale.Language? { get }
```

## Mentioned In

- [Reducing download and storage demands with localized asset packs](../reducing-download-and-storage-demands-with-localized-asset-packs.md)

<a id="discussion"></a>

## Discussion

The preferred languages set in Settings or System Settings inform the choice of resolved language, respecting any language that your app sets manually by setting [resolvedLanguage](../assetpackmanager/resolvedlanguage.md). This property may be `nil` if no localized asset packs are available. If a person using the device recently changed their preferred language or if this manifest is outdated, then this property’s value may be out of sync with the set of asset packs that are available locally.

## See Also

### Inspecting asset pack localization

- [primaryLanguage](primarylanguage.md): The app’s primary language as configured in App Store Connect.
- [availableLanguages](availablelanguages.md): The languages for which asset packs in this manifest are localized.
