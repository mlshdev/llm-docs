> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstextcheckingresult/spellcheckingresult(range:)](https://developer.apple.com/documentation/foundation/nstextcheckingresult/spellcheckingresult(range:))

# spellCheckingResult(range:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a text checking result with the range of a misspelled word.

## Declaration

```swift
class func spellCheckingResult(range: NSRange) -> NSTextCheckingResult
```

## Parameters

- `range`: The range of the detected result.

<a id="return-value"></a>

## Return Value

Returns an `NSTextCheckingResult` with the specified [range](range.md) and a [resultType](resulttype.md) of [spelling](checkingtype/spelling.md).

## See Also

### Text Checking Results for Spelling

- [correctionCheckingResult(range:replacementString:)](correctioncheckingresult%28range_replacementstring_%29.md): Creates and returns a text checking result after detecting a possible correction.

# spellCheckingResultWithRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a text checking result with the range of a misspelled word.

## Declaration

```objectivec
+ (NSTextCheckingResult *) spellCheckingResultWithRange:(NSRange) range;
```

## Parameters

- `range`: The range of the detected result.

<a id="return-value"></a>

## Return Value

Returns an `NSTextCheckingResult` with the specified [range](range.md) and a [resultType](resulttype.md) of [NSTextCheckingTypeSpelling](checkingtype/spelling.md).

## See Also

### Text Checking Results for Spelling

- [correctionCheckingResultWithRange:replacementString:](correctioncheckingresult%28range_replacementstring_%29.md): Creates and returns a text checking result after detecting a possible correction.
