> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimerangecontainstime(_:time:)](https://developer.apple.com/documentation/coremedia/cmtimerangecontainstime(_:time:))

# CMTimeRangeContainsTime(\_:time:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether a time range contains a time.

## Declaration

```swift
func CMTimeRangeContainsTime(_ range: CMTimeRange, time: CMTime) -> Bool
```

## Parameters

- `range`: A time range.
- `time`: A time value to test for in the time range.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `range` contains the `time` value; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Comparing Time Ranges

- [CMTimeRangeEqual(\_:\_:)](cmtimerangeequal%28____%29.md): Returns a Boolean value that indicates whether two time ranges are equal.
- [CMTimeRangeContainsTimeRange(\_:otherRange:)](cmtimerangecontainstimerange%28__otherrange_%29.md): Returns a Boolean value that indicates whether a time range contains another time range.

# CMTimeRangeContainsTime (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether a time range contains a time.

## Declaration

```objectivec
extern Boolean CMTimeRangeContainsTime(CMTimeRange range, CMTime time);
```

## Parameters

- `range`: A time range.
- `time`: A time value to test for in the time range.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `range` contains the `time` value; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Comparing Time Ranges

- [CMTimeRangeEqual](cmtimerangeequal%28____%29.md): Returns a Boolean value that indicates whether two time ranges are equal.
- [CMTimeRangeContainsTimeRange](cmtimerangecontainstimerange%28__otherrange_%29.md): Returns a Boolean value that indicates whether a time range contains another time range.
