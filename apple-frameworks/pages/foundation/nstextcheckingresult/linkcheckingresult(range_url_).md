> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstextcheckingresult/linkcheckingresult(range:url:)](https://developer.apple.com/documentation/foundation/nstextcheckingresult/linkcheckingresult(range:url:))

# linkCheckingResult(range:url:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a text checking result with the specified URL.

## Declaration

```swift
class func linkCheckingResult(range: NSRange, url: URL) -> NSTextCheckingResult
```

## Parameters

- `range`: The range of the detected result.
- `url`: The URL.

<a id="return-value"></a>

## Return Value

Returns an `NSTextCheckingResult` with the specified [range](range.md) and a [resultType](resulttype.md) of [link](checkingtype/link.md).

## See Also

### Text Checking Results for URLs

- [url](url.md): The URL of a type checking result.

# linkCheckingResultWithRange:URL: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a text checking result with the specified URL.

## Declaration

```objectivec
+ (NSTextCheckingResult *) linkCheckingResultWithRange:(NSRange) range URL:(NSURL *) url;
```

## Parameters

- `range`: The range of the detected result.
- `url`: The URL.

<a id="return-value"></a>

## Return Value

Returns an `NSTextCheckingResult` with the specified [range](range.md) and a [resultType](resulttype.md) of [NSTextCheckingTypeLink](checkingtype/link.md).

## See Also

### Text Checking Results for URLs

- [URL](url.md): The URL of a type checking result.
