> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltagger/tagschemes](https://developer.apple.com/documentation/naturallanguage/nltagger/tagschemes)

# tagSchemes (Swift)

**Framework:** Natural Language  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The tag schemes configured for this linguistic tagger.

## Declaration

```swift
var tagSchemes: [NLTagScheme] { get }
```

## See Also

### Getting the tag schemes

- [availableTagSchemes(for:language:)](availabletagschemes%28for_language_%29.md): Retrieves the tag schemes available for a particular unit (like word or sentence) and language on the current device.
- [requestAssets(for:tagScheme:completionHandler:)](requestassets%28for_tagscheme_completionhandler_%29.md): Asks the Natural Language framework to load any missing assets for a tag scheme onto the device for the given language.
- [NLTagger.AssetsResult](assetsresult.md): The response to an asset request.
- [NLTagScheme](../nltagscheme.md): Constants for the tag schemes specified when initializing a linguistic tagger.

# tagSchemes (Objective-C)

**Framework:** Natural Language  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The tag schemes configured for this linguistic tagger.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<NSString *> * tagSchemes;
```

## See Also

### Getting the tag schemes

- [availableTagSchemesForUnit:language:](availabletagschemes%28for_language_%29.md): Retrieves the tag schemes available for a particular unit (like word or sentence) and language on the current device.
- [requestAssetsForLanguage:tagScheme:completionHandler:](requestassets%28for_tagscheme_completionhandler_%29.md): Asks the Natural Language framework to load any missing assets for a tag scheme onto the device for the given language.
- [NLTaggerAssetsResult](assetsresult.md): The response to an asset request.
- [NLTagScheme](../nltagscheme.md): Constants for the tag schemes specified when initializing a linguistic tagger.
