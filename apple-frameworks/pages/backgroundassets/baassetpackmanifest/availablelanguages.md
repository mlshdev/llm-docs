> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/baassetpackmanifest/availablelanguages](https://developer.apple.com/documentation/backgroundassets/baassetpackmanifest/availablelanguages)

# availableLanguages

**Interface language:** Objective-C

**Framework:** Background Assets  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The languages, represented as their respective BCP-47 identifiers, for which asset packs in this manifest are localized.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * availableLanguages;
```

## See Also

### Inspecting asset pack localization

- [primaryLanguage](primarylanguage.md): The application’s primary language, represented as a BCP-47 identifier, as configured in App Store Connect.
- [resolvedLanguage](resolvedlanguage.md): The language, represented as a BCP-47 identifier, asset packs in this manifest that are localized for which the system automatically makes available locally.
