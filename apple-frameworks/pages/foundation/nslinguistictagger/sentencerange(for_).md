> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslinguistictagger/sentencerange(for:)](https://developer.apple.com/documentation/foundation/nslinguistictagger/sentencerange(for:))

# sentenceRange(for:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Returns the range of a sentence containing the specified range.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```swift
func sentenceRange(for range: NSRange) -> NSRange
```

## Parameters

- `range`: The character range.

<a id="return-value"></a>

## Return Value

Returns the range of the sentence.

<a id="Discussion"></a>

## Discussion

This is a convenience method for calling [tokenRange(at:unit:)](tokenrange%28at_unit_%29.md), passing the [NSLinguisticTaggerUnit.sentence](../nslinguistictaggerunit/sentence.md) unit and the first position of the provided range.

## See Also

### Determining the Range of a Unit Token

- [tokenRange(at:unit:)](tokenrange%28at_unit_%29.md): Deprecated. Returns the range of the linguistic unit containing the specified character index.

# sentenceRangeForRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 27.0) · iPadOS 5.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Returns the range of a sentence containing the specified range.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```objectivec
- (NSRange) sentenceRangeForRange:(NSRange) range;
```

## Parameters

- `range`: The character range.

<a id="return-value"></a>

## Return Value

Returns the range of the sentence.

<a id="Discussion"></a>

## Discussion

This is a convenience method for calling [tokenRangeAtIndex:unit:](tokenrange%28at_unit_%29.md), passing the [NSLinguisticTaggerUnitSentence](../nslinguistictaggerunit/sentence.md) unit and the first position of the provided range.

## See Also

### Determining the Range of a Unit Token

- [tokenRangeAtIndex:unit:](tokenrange%28at_unit_%29.md): Deprecated. Returns the range of the linguistic unit containing the specified character index.
