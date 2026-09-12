> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstextcheckingresult/correctioncheckingresult(range:replacementstring:)](https://developer.apple.com/documentation/foundation/nstextcheckingresult/correctioncheckingresult(range:replacementstring:))

# correctionCheckingResult(range:replacementString:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a text checking result after detecting a possible correction.

## Declaration

```swift
class func correctionCheckingResult(range: NSRange, replacementString: String) -> NSTextCheckingResult
```

## Parameters

- `range`: The range of the detected result.
- `replacementString`: The suggested replacement string.

<a id="return-value"></a>

## Return Value

Returns an `NSTextCheckingResult` with the specified [range](range.md) and a [resultType](resulttype.md) of [spelling](checkingtype/spelling.md).

## See Also

### Related Documentation

- [replacementString](replacementstring.md): A replacement string from one of a number of replacement checking results.

### Text Checking Results for Spelling

- [spellCheckingResult(range:)](spellcheckingresult%28range_%29.md): Creates and returns a text checking result with the range of a misspelled word.

# correctionCheckingResultWithRange:replacementString: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a text checking result after detecting a possible correction.

## Declaration

```objectivec
+ (NSTextCheckingResult *) correctionCheckingResultWithRange:(NSRange) range replacementString:(NSString *) replacementString;
```

## Parameters

- `range`: The range of the detected result.
- `replacementString`: The suggested replacement string.

<a id="return-value"></a>

## Return Value

Returns an `NSTextCheckingResult` with the specified [range](range.md) and a [resultType](resulttype.md) of [NSTextCheckingTypeSpelling](checkingtype/spelling.md).

## See Also

### Related Documentation

- [replacementString](replacementstring.md): A replacement string from one of a number of replacement checking results.

### Text Checking Results for Spelling

- [spellCheckingResultWithRange:](spellcheckingresult%28range_%29.md): Creates and returns a text checking result with the range of a misspelled word.
