> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstextcheckingresult/regularexpressioncheckingresult(ranges:count:regularexpression:)](https://developer.apple.com/documentation/foundation/nstextcheckingresult/regularexpressioncheckingresult(ranges:count:regularexpression:))

# regularExpressionCheckingResult(ranges:count:regularExpression:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a type checking result with the specified regular expression data.

## Declaration

```swift
class func regularExpressionCheckingResult(ranges: NSRangePointer, count: Int, regularExpression: NSRegularExpression) -> NSTextCheckingResult
```

## Parameters

- `ranges`: A C array of ranges, which must have at least one element, and the first element represents the overall range.
- `count`: The number of items in the `ranges` array.
- `regularExpression`: The regular expression.

<a id="return-value"></a>

## Return Value

Returns an `NSTextCheckingResult` with the specified [range](range.md) and a [resultType](resulttype.md) of [regularExpression](checkingtype/regularexpression.md).

## See Also

### Text Checking Results for Regular Expressions

- [regularExpression](regularexpression.md): The regular expression of a type checking result.

# regularExpressionCheckingResultWithRanges:count:regularExpression: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a type checking result with the specified regular expression data.

## Declaration

```objectivec
+ (NSTextCheckingResult *) regularExpressionCheckingResultWithRanges:(NSRangePointer) ranges count:(NSUInteger) count regularExpression:(NSRegularExpression *) regularExpression;
```

## Parameters

- `ranges`: A C array of ranges, which must have at least one element, and the first element represents the overall range.
- `count`: The number of items in the `ranges` array.
- `regularExpression`: The regular expression.

<a id="return-value"></a>

## Return Value

Returns an `NSTextCheckingResult` with the specified [range](range.md) and a [resultType](resulttype.md) of [NSTextCheckingTypeRegularExpression](checkingtype/regularexpression.md).

## See Also

### Text Checking Results for Regular Expressions

- [regularExpression](regularexpression.md): The regular expression of a type checking result.
