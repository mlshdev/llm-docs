> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltagger/availabletagschemes(for:language:)](https://developer.apple.com/documentation/naturallanguage/nltagger/availabletagschemes(for:language:))

# availableTagSchemes(for:language:) (Swift)

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Retrieves the tag schemes available for a particular unit (like word or sentence) and language on the current device.

## Declaration

```swift
class func availableTagSchemes(for unit: NLTokenUnit, language: NLLanguage) -> [NLTagScheme]
```

## Parameters

- `unit`: The linguistic unit. For possible values, see [NLTokenUnit](../nltokenunit.md).
- `language`: The [NLLanguage](../nllanguage.md) identifying the language.

<a id="return-value"></a>

## Return Value

The supported tag schemes. For possible values, see [NLTagScheme](../nltagscheme.md).

## See Also

### Getting the tag schemes

- [requestAssets(for:tagScheme:completionHandler:)](requestassets%28for_tagscheme_completionhandler_%29.md): Asks the Natural Language framework to load any missing assets for a tag scheme onto the device for the given language.
- [NLTagger.AssetsResult](assetsresult.md): The response to an asset request.
- [tagSchemes](tagschemes.md): The tag schemes configured for this linguistic tagger.
- [NLTagScheme](../nltagscheme.md): Constants for the tag schemes specified when initializing a linguistic tagger.

# availableTagSchemesForUnit:language: (Objective-C)

**Framework:** Natural Language  
**Kind:** Type Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

Retrieves the tag schemes available for a particular unit (like word or sentence) and language on the current device.

## Declaration

```objectivec
+ (NSArray<NSString *> *) availableTagSchemesForUnit:(NLTokenUnit) unit language:(NLLanguage) language;
```

## Parameters

- `unit`: The linguistic unit. For possible values, see [NLTokenUnit](../nltokenunit.md).
- `language`: The [NLLanguage](../nllanguage.md) identifying the language.

<a id="return-value"></a>

## Return Value

The supported tag schemes. For possible values, see [NLTagScheme](../nltagscheme.md).

## See Also

### Getting the tag schemes

- [requestAssetsForLanguage:tagScheme:completionHandler:](requestassets%28for_tagscheme_completionhandler_%29.md): Asks the Natural Language framework to load any missing assets for a tag scheme onto the device for the given language.
- [NLTaggerAssetsResult](assetsresult.md): The response to an asset request.
- [tagSchemes](tagschemes.md): The tag schemes configured for this linguistic tagger.
- [NLTagScheme](../nltagscheme.md): Constants for the tag schemes specified when initializing a linguistic tagger.
