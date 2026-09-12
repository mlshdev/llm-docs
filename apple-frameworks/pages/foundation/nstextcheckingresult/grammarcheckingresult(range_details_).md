> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstextcheckingresult/grammarcheckingresult(range:details:)](https://developer.apple.com/documentation/foundation/nstextcheckingresult/grammarcheckingresult(range:details:))

# grammarCheckingResult(range:details:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a text checking result with the specified array of grammatical errors.

## Declaration

```swift
class func grammarCheckingResult(range: NSRange, details: [[String : Any]]) -> NSTextCheckingResult
```

## Parameters

- `range`: The range of the detected result.
- `details`: An array of details regarding the grammatical errors. This array of strings is suitable for presenting to the user.

<a id="return-value"></a>

## Return Value

Returns an `NSTextCheckingResult` with the specified [range](range.md) and a [resultType](resulttype.md) of [grammar](checkingtype/grammar.md).

## See Also

### Text Checking Results for Grammar

- [grammarDetails](grammardetails.md): The details of a located grammatical type checking result.

# grammarCheckingResultWithRange:details: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a text checking result with the specified array of grammatical errors.

## Declaration

```objectivec
+ (NSTextCheckingResult *) grammarCheckingResultWithRange:(NSRange) range details:(NSArray<NSDictionary<NSString *,id> *> *) details;
```

## Parameters

- `range`: The range of the detected result.
- `details`: An array of details regarding the grammatical errors. This array of strings is suitable for presenting to the user.

<a id="return-value"></a>

## Return Value

Returns an `NSTextCheckingResult` with the specified [range](range.md) and a [resultType](resulttype.md) of [NSTextCheckingTypeGrammar](checkingtype/grammar.md).

## See Also

### Text Checking Results for Grammar

- [grammarDetails](grammardetails.md): The details of a located grammatical type checking result.
