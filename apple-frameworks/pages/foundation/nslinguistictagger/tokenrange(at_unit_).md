> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslinguistictagger/tokenrange(at:unit:)](https://developer.apple.com/documentation/foundation/nslinguistictagger/tokenrange(at:unit:))

# tokenRange(at:unit:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Returns the range of the linguistic unit containing the specified character index.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```swift
func tokenRange(at charIndex: Int, unit: NSLinguisticTaggerUnit) -> NSRange
```

## Parameters

- `charIndex`: The character index to begin examination.
- `unit`: The linguistic unit. For possible values, see [NSLinguisticTaggerUnit](../nslinguistictaggerunit.md).

<a id="return-value"></a>

## Return Value

The range of the substring for the linguistic unit.

## See Also

### Determining the Range of a Unit Token

- [sentenceRange(for:)](sentencerange%28for_%29.md): Deprecated. Returns the range of a sentence containing the specified range.

# tokenRangeAtIndex:unit: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.13+ (deprecated in 27.0) · tvOS 11.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 4.0+ (deprecated in 27.0)

Returns the range of the linguistic unit containing the specified character index.

> All NSLinguisticTagger API should be replaced with NaturalLanguage.framework API

## Declaration

```objectivec
- (NSRange) tokenRangeAtIndex:(NSUInteger) charIndex unit:(NSLinguisticTaggerUnit) unit;
```

## Parameters

- `charIndex`: The character index to begin examination.
- `unit`: The linguistic unit. For possible values, see [NSLinguisticTaggerUnit](../nslinguistictaggerunit.md).

<a id="return-value"></a>

## Return Value

The range of the substring for the linguistic unit.

## See Also

### Determining the Range of a Unit Token

- [sentenceRangeForRange:](sentencerange%28for_%29.md): Deprecated. Returns the range of a sentence containing the specified range.
