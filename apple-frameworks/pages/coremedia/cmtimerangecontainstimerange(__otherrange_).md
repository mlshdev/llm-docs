> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimerangecontainstimerange(_:otherrange:)](https://developer.apple.com/documentation/coremedia/cmtimerangecontainstimerange(_:otherrange:))

# CMTimeRangeContainsTimeRange(\_:otherRange:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether a time range contains another time range.

## Declaration

```swift
func CMTimeRangeContainsTimeRange(_ range: CMTimeRange, otherRange: CMTimeRange) -> Bool
```

## Parameters

- `range`: The first time range to compare.
- `otherRange`: The second time range to test for inclusion.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `range1` contains `range2`; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Comparing Time Ranges

- [CMTimeRangeEqual(\_:\_:)](cmtimerangeequal%28____%29.md): Returns a Boolean value that indicates whether two time ranges are equal.
- [CMTimeRangeContainsTime(\_:time:)](cmtimerangecontainstime%28__time_%29.md): Returns a Boolean value that indicates whether a time range contains a time.

# CMTimeRangeContainsTimeRange (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether a time range contains another time range.

## Declaration

```objectivec
extern Boolean CMTimeRangeContainsTimeRange(CMTimeRange range, CMTimeRange otherRange);
```

## Parameters

- `range`: The first time range to compare.
- `otherRange`: The second time range to test for inclusion.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `range1` contains `range2`; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Comparing Time Ranges

- [CMTimeRangeEqual](cmtimerangeequal%28____%29.md): Returns a Boolean value that indicates whether two time ranges are equal.
- [CMTimeRangeContainsTime](cmtimerangecontainstime%28__time_%29.md): Returns a Boolean value that indicates whether a time range contains a time.
