> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstextcheckingresult/dashcheckingresult(range:replacementstring:)](https://developer.apple.com/documentation/foundation/nstextcheckingresult/dashcheckingresult(range:replacementstring:))

# dashCheckingResult(range:replacementString:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a text checking result with the specified dash corrected replacement string.

## Declaration

```swift
class func dashCheckingResult(range: NSRange, replacementString: String) -> NSTextCheckingResult
```

## Parameters

- `range`: The range of the detected result.
- `replacementString`: The replacement string.

<a id="return-value"></a>

## Return Value

Returns an `NSTextCheckingResult` with the specified [range](range.md) and a [resultType](resulttype.md) of [dash](checkingtype/dash.md).

## See Also

### Text Checking Results for Typography

- [quoteCheckingResult(range:replacementString:)](quotecheckingresult%28range_replacementstring_%29.md): Creates and returns a text checking result with the specified quote-balanced replacement string.

# dashCheckingResultWithRange:replacementString: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a text checking result with the specified dash corrected replacement string.

## Declaration

```objectivec
+ (NSTextCheckingResult *) dashCheckingResultWithRange:(NSRange) range replacementString:(NSString *) replacementString;
```

## Parameters

- `range`: The range of the detected result.
- `replacementString`: The replacement string.

<a id="return-value"></a>

## Return Value

Returns an `NSTextCheckingResult` with the specified [range](range.md) and a [resultType](resulttype.md) of [NSTextCheckingTypeDash](checkingtype/dash.md).

## See Also

### Text Checking Results for Typography

- [quoteCheckingResultWithRange:replacementString:](quotecheckingresult%28range_replacementstring_%29.md): Creates and returns a text checking result with the specified quote-balanced replacement string.
