> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstextcheckingresult/quotecheckingresult(range:replacementstring:)](https://developer.apple.com/documentation/foundation/nstextcheckingresult/quotecheckingresult(range:replacementstring:))

# quoteCheckingResult(range:replacementString:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a text checking result with the specified quote-balanced replacement string.

## Declaration

```swift
class func quoteCheckingResult(range: NSRange, replacementString: String) -> NSTextCheckingResult
```

## Parameters

- `range`: The range of the detected result.
- `replacementString`: The replacement string.

<a id="return-value"></a>

## Return Value

Returns an `NSTextCheckingResult` with the specified [range](range.md) and a [resultType](resulttype.md) of [quote](checkingtype/quote.md).

## See Also

### Text Checking Results for Typography

- [dashCheckingResult(range:replacementString:)](dashcheckingresult%28range_replacementstring_%29.md): Creates and returns a text checking result with the specified dash corrected replacement string.

# quoteCheckingResultWithRange:replacementString: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a text checking result with the specified quote-balanced replacement string.

## Declaration

```objectivec
+ (NSTextCheckingResult *) quoteCheckingResultWithRange:(NSRange) range replacementString:(NSString *) replacementString;
```

## Parameters

- `range`: The range of the detected result.
- `replacementString`: The replacement string.

<a id="return-value"></a>

## Return Value

Returns an `NSTextCheckingResult` with the specified [range](range.md) and a [resultType](resulttype.md) of [NSTextCheckingTypeQuote](checkingtype/quote.md).

## See Also

### Text Checking Results for Typography

- [dashCheckingResultWithRange:replacementString:](dashcheckingresult%28range_replacementstring_%29.md): Creates and returns a text checking result with the specified dash corrected replacement string.
