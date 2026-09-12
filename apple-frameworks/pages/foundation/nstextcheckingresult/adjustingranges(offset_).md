> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstextcheckingresult/adjustingranges(offset:)](https://developer.apple.com/documentation/foundation/nstextcheckingresult/adjustingranges(offset:))

# adjustingRanges(offset:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new text checking result after adjusting the ranges as specified by the offset.

## Declaration

```swift
func adjustingRanges(offset: Int) -> NSTextCheckingResult
```

## Parameters

- `offset`: The amount the ranges are adjusted.

<a id="return-value"></a>

## Return Value

A new `NSTextCheckingResult` instance with the adjusted range or ranges.

# resultByAdjustingRangesWithOffset: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new text checking result after adjusting the ranges as specified by the offset.

## Declaration

```objectivec
- (NSTextCheckingResult *) resultByAdjustingRangesWithOffset:(NSInteger) offset;
```

## Parameters

- `offset`: The amount the ranges are adjusted.

<a id="return-value"></a>

## Return Value

A new `NSTextCheckingResult` instance with the adjusted range or ranges.
