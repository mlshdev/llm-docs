> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslinguistictagger/tagschemes](https://developer.apple.com/documentation/foundation/nslinguistictagger/tagschemes)

# tagSchemes (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Returns the tag schemes configured for this linguistic tagger. For possible values, see [NSLinguisticTagScheme](../nslinguistictagscheme.md).

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```swift
var tagSchemes: [NSLinguisticTagScheme] { get }
```

## See Also

### Getting the Tag Schemes

- [availableTagSchemes(for:language:)](availabletagschemes%28for_language_%29.md): Deprecated. Returns the tag schemes available for a particular unit and language on the current device.
- [availableTagSchemes(forLanguage:)](availabletagschemes%28forlanguage_%29.md): Deprecated. Returns the tag schemes available for a particular language on the current device.

# tagSchemes (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Returns the tag schemes configured for this linguistic tagger. For possible values, see [NSLinguisticTagScheme](../nslinguistictagscheme.md).

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * tagSchemes;
```

## See Also

### Getting the Tag Schemes

- [availableTagSchemesForUnit:language:](availabletagschemes%28for_language_%29.md): Deprecated. Returns the tag schemes available for a particular unit and language on the current device.
- [availableTagSchemesForLanguage:](availabletagschemes%28forlanguage_%29.md): Deprecated. Returns the tag schemes available for a particular language on the current device.
