> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nslinguistictagger/availabletagschemes(for:language:)

# availableTagSchemes(for:language:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 27.2) · iPadOS 11.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 10.13+ (deprecated in 27.2) · tvOS 11.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 4.0+ (deprecated in 27.2)

Returns the tag schemes available for a particular unit and language on the current device.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```swift
class func availableTagSchemes(for unit: NSLinguisticTaggerUnit, language: String) -> [NSLinguisticTagScheme]
```

## Parameters

- `unit`: The linguistic unit. For possible values, see [NSLinguisticTaggerUnit](../nslinguistictaggerunit.md).
- `language`: A BCP-47 tag identifying the language. For example, “en” for English or  “zh-Hans” for Chinese written using the Simplified Chinese script.

<a id="return-value"></a>

## Return Value

The supported tag schemes. For possible values, see [NSLinguisticTagScheme](../nslinguistictagscheme.md).

## See Also

### Getting the Tag Schemes

- [availableTagSchemes(forLanguage:)](availabletagschemes%28forlanguage_%29.md): Deprecated. Returns the tag schemes available for a particular language on the current device.
- [tagSchemes](tagschemes.md): Deprecated. Returns the tag schemes configured for this linguistic tagger. For possible values, see [NSLinguisticTagScheme](../nslinguistictagscheme.md).

# availableTagSchemesForUnit:language: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 11.0+ (deprecated in 27.2) · iPadOS 11.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 10.13+ (deprecated in 27.2) · tvOS 11.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 4.0+ (deprecated in 27.2)

Returns the tag schemes available for a particular unit and language on the current device.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```objectivec
+ (NSArray<NSString *> *) availableTagSchemesForUnit:(NSLinguisticTaggerUnit) unit language:(NSString *) language;
```

## Parameters

- `unit`: The linguistic unit. For possible values, see [NSLinguisticTaggerUnit](../nslinguistictaggerunit.md).
- `language`: A BCP-47 tag identifying the language. For example, “en” for English or  “zh-Hans” for Chinese written using the Simplified Chinese script.

<a id="return-value"></a>

## Return Value

The supported tag schemes. For possible values, see [NSLinguisticTagScheme](../nslinguistictagscheme.md).

## See Also

### Getting the Tag Schemes

- [availableTagSchemesForLanguage:](availabletagschemes%28forlanguage_%29.md): Deprecated. Returns the tag schemes available for a particular language on the current device.
- [tagSchemes](tagschemes.md): Deprecated. Returns the tag schemes configured for this linguistic tagger. For possible values, see [NSLinguisticTagScheme](../nslinguistictagscheme.md).
