> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslinguistictagger/possibletags(at:scheme:tokenrange:sentencerange:scores:)](https://developer.apple.com/documentation/foundation/nslinguistictagger/possibletags(at:scheme:tokenrange:sentencerange:scores:))

# possibleTags(at:scheme:tokenRange:sentenceRange:scores:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Returns an array of possible tags for the given scheme at the specified range, supplying matching scores.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```swift
func possibleTags(at charIndex: Int, scheme tagScheme: String, tokenRange: NSRangePointer?, sentenceRange: NSRangePointer?, scores: AutoreleasingUnsafeMutablePointer<NSArray?>?) -> [String]?
```

## Parameters

- `charIndex`: The position of the initial character.
- `tagScheme`: The tag scheme. See [NSLinguisticTagScheme](../nslinguistictagscheme.md) for possible values.
- `tokenRange`: The token range.
- `sentenceRange`: The range of the sentence.
- `scores`: Returns by reference an array of numeric scores indicating the likelihood that the range matches the tag scheme.

<a id="return-value"></a>

## Return Value

Returns an array of possible tags for the tag scheme at the specified location, starting with the most likely tag scheme.  For some tag schemes only a single tag will be returned, but for others a list of possibilities will be provided.

<a id="Discussion"></a>

## Discussion

Calling this method is not recommended; for most use cases, this information is not as useful as what is provided by the methods described in Enumerating Linguistic Tags and Getting Linguistic Tags.

# possibleTagsAtIndex:scheme:tokenRange:sentenceRange:scores: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Returns an array of possible tags for the given scheme at the specified range, supplying matching scores.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```objectivec
- (NSArray<NSString *> *) possibleTagsAtIndex:(NSUInteger) charIndex scheme:(NSString *) tagScheme tokenRange:(NSRangePointer) tokenRange sentenceRange:(NSRangePointer) sentenceRange scores:(NSArray<NSValue *> **) scores;
```

## Parameters

- `charIndex`: The position of the initial character.
- `tagScheme`: The tag scheme. See [NSLinguisticTagScheme](../nslinguistictagscheme.md) for possible values.
- `tokenRange`: The token range.
- `sentenceRange`: The range of the sentence.
- `scores`: Returns by reference an array of numeric scores indicating the likelihood that the range matches the tag scheme.

<a id="return-value"></a>

## Return Value

Returns an array of possible tags for the tag scheme at the specified location, starting with the most likely tag scheme.  For some tag schemes only a single tag will be returned, but for others a list of possibilities will be provided.

<a id="Discussion"></a>

## Discussion

Calling this method is not recommended; for most use cases, this information is not as useful as what is provided by the methods described in Enumerating Linguistic Tags and Getting Linguistic Tags.
