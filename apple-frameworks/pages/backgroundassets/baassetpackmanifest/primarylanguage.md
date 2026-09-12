> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/baassetpackmanifest/primarylanguage](https://developer.apple.com/documentation/backgroundassets/baassetpackmanifest/primarylanguage)

# primaryLanguage

**Interface language:** Objective-C

**Framework:** Background Assets  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The application’s primary language, represented as a BCP-47 identifier, as configured in App Store Connect.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * primaryLanguage;
```

<a id="discussion"></a>

## Discussion

If no available localized asset packs match the current preferred languages, the system falls back on the application’s primary language.

## See Also

### Inspecting asset pack localization

- [availableLanguages](availablelanguages.md): The languages, represented as their respective BCP-47 identifiers, for which asset packs in this manifest are localized.
- [resolvedLanguage](resolvedlanguage.md): The language, represented as a BCP-47 identifier, asset packs in this manifest that are localized for which the system automatically makes available locally.
