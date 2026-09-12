> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslinguistictagger/init(tagschemes:options:)](https://developer.apple.com/documentation/foundation/nslinguistictagger/init(tagschemes:options:))

# init(tagSchemes:options:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Creates a linguistic tagger instance using the specified tag schemes and options.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```swift
init(tagSchemes: [NSLinguisticTagScheme], options opts: Int)
```

## Parameters

- `tagSchemes`: An array of tag schemes to be used. See [NSLinguisticTagScheme](../nslinguistictagscheme.md) for the possible values.
- `opts`: Reserved for future use. Specify `0` for this parameter.

<a id="return-value"></a>

## Return Value

An initialized linguistic tagger.

<a id="Discussion"></a>

## Discussion

Pass any tag schemes to `tagSchemes` that you intend to use with the methods described in Enumerating Linguistic Tags and Getting Linguistic Tags.

> **Tip**

>  Avoid specifying tag schemes that you won’t use to ensure optimal performance.

## See Also

### Related Documentation

- [NSLinguisticTagScheme](../nslinguistictagscheme.md): Constants for the tag schemes specified when initializing a linguistic tagger.

### First Steps

- [Tokenizing Natural Language Text](../tokenizing-natural-language-text.md): Enumerate the words in a string.
- [string](string.md): Deprecated. The string being analyzed by the linguistic tagger.

# initWithTagSchemes:options: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Creates a linguistic tagger instance using the specified tag schemes and options.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```objectivec
- (instancetype) initWithTagSchemes:(NSArray<NSString *> *) tagSchemes options:(NSUInteger) opts;
```

## Parameters

- `tagSchemes`: An array of tag schemes to be used. See [NSLinguisticTagScheme](../nslinguistictagscheme.md) for the possible values.
- `opts`: Reserved for future use. Specify `0` for this parameter.

<a id="return-value"></a>

## Return Value

An initialized linguistic tagger.

<a id="Discussion"></a>

## Discussion

Pass any tag schemes to `tagSchemes` that you intend to use with the methods described in Enumerating Linguistic Tags and Getting Linguistic Tags.

> **Tip**

>  Avoid specifying tag schemes that you won’t use to ensure optimal performance.

## See Also

### Related Documentation

- [NSLinguisticTagScheme](../nslinguistictagscheme.md): Constants for the tag schemes specified when initializing a linguistic tagger.

### First Steps

- [Tokenizing Natural Language Text](../tokenizing-natural-language-text.md): Enumerate the words in a string.
- [string](string.md): Deprecated. The string being analyzed by the linguistic tagger.
