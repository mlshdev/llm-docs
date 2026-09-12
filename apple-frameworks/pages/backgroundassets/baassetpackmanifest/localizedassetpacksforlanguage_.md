> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/baassetpackmanifest/localizedassetpacksforlanguage:](https://developer.apple.com/documentation/backgroundassets/baassetpackmanifest/localizedassetpacksforlanguage:)

# localizedAssetPacksForLanguage:

**Interface language:** Objective-C

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the subset of asset packs in this manifest that are available to download and that best match the specified language.

## Declaration

```objectivec
- (NSSet<BAAssetPack *> *) localizedAssetPacksForLanguage:(NSString *) languageIdentifier;
```

## Parameters

- `languageIdentifier`: The language’s BCP-47 identifier.

<a id="return-value"></a>

## Return Value

The localized asset packs.

<a id="discussion"></a>

## Discussion

Depending on which languages are available, the returned asset packs’ respective languages may not exactly match the specified language.

## See Also

### Getting localized asset packs

- [localizedAssetPacks](localizedassetpacks.md): The subset of asset packs in this manifest that best match the current preferred languages.
