> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstextcheckingresult/replacementcheckingresult(range:replacementstring:)](https://developer.apple.com/documentation/foundation/nstextcheckingresult/replacementcheckingresult(range:replacementstring:))

# replacementCheckingResult(range:replacementString:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a text checking result with the specified replacement string.

## Declaration

```swift
class func replacementCheckingResult(range: NSRange, replacementString: String) -> NSTextCheckingResult
```

## Parameters

- `range`: The range of the detected result.
- `replacementString`: The replacement string.

<a id="return-value"></a>

## Return Value

Returns an `NSTextCheckingResult` with the specified [range](range.md) and a [resultType](resulttype.md) of [replacement](checkingtype/replacement.md).

## See Also

### Text Checking Results for Text Replacement

- [replacementString](replacementstring.md): A replacement string from one of a number of replacement checking results.

# replacementCheckingResultWithRange:replacementString: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a text checking result with the specified replacement string.

## Declaration

```objectivec
+ (NSTextCheckingResult *) replacementCheckingResultWithRange:(NSRange) range replacementString:(NSString *) replacementString;
```

## Parameters

- `range`: The range of the detected result.
- `replacementString`: The replacement string.

<a id="return-value"></a>

## Return Value

Returns an `NSTextCheckingResult` with the specified [range](range.md) and a [resultType](resulttype.md) of [NSTextCheckingTypeReplacement](checkingtype/replacement.md).

## See Also

### Text Checking Results for Text Replacement

- [replacementString](replacementstring.md): A replacement string from one of a number of replacement checking results.
