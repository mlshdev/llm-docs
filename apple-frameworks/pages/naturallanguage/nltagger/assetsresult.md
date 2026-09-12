> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/naturallanguage/nltagger/assetsresult](https://developer.apple.com/documentation/naturallanguage/nltagger/assetsresult)

# NLTagger.AssetsResult (Swift)

**Framework:** Natural Language  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The response to an asset request.

## Declaration

```swift
enum AssetsResult
```

## Topics

### Asset request responses

- [NLTagger.AssetsResult.available](assetsresult/available.md): The asset is now available and loaded onto the device.
- [NLTagger.AssetsResult.notAvailable](assetsresult/notavailable.md): The asset is unavailable on the device.
- [NLTagger.AssetsResult.error](assetsresult/error.md): The framework couldn’t load the asset due to an error.

### Initializers

- [init(rawValue:)](assetsresult/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the tag schemes

- [availableTagSchemes(for:language:)](availabletagschemes%28for_language_%29.md): Retrieves the tag schemes available for a particular unit (like word or sentence) and language on the current device.
- [requestAssets(for:tagScheme:completionHandler:)](requestassets%28for_tagscheme_completionhandler_%29.md): Asks the Natural Language framework to load any missing assets for a tag scheme onto the device for the given language.
- [tagSchemes](tagschemes.md): The tag schemes configured for this linguistic tagger.
- [NLTagScheme](../nltagscheme.md): Constants for the tag schemes specified when initializing a linguistic tagger.

# NLTaggerAssetsResult (Objective-C)

**Framework:** Natural Language  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The response to an asset request.

## Declaration

```objectivec
enum NLTaggerAssetsResult : NSInteger;
```

## Topics

### Asset request responses

- [NLTaggerAssetsResultAvailable](assetsresult/available.md): The asset is now available and loaded onto the device.
- [NLTaggerAssetsResultNotAvailable](assetsresult/notavailable.md): The asset is unavailable on the device.
- [NLTaggerAssetsResultError](assetsresult/error.md): The framework couldn’t load the asset due to an error.

## See Also

### Getting the tag schemes

- [availableTagSchemesForUnit:language:](availabletagschemes%28for_language_%29.md): Retrieves the tag schemes available for a particular unit (like word or sentence) and language on the current device.
- [requestAssetsForLanguage:tagScheme:completionHandler:](requestassets%28for_tagscheme_completionhandler_%29.md): Asks the Natural Language framework to load any missing assets for a tag scheme onto the device for the given language.
- [tagSchemes](tagschemes.md): The tag schemes configured for this linguistic tagger.
- [NLTagScheme](../nltagscheme.md): Constants for the tag schemes specified when initializing a linguistic tagger.
