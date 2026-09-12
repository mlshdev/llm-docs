> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimerangeequal(_:_:)](https://developer.apple.com/documentation/coremedia/cmtimerangeequal(_:_:))

# CMTimeRangeEqual(\_:\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether two time ranges are equal.

## Declaration

```swift
func CMTimeRangeEqual(_ range1: CMTimeRange, _ range2: CMTimeRange) -> Bool
```

## Parameters

- `range1`: The first time range to compare.
- `range2`: The second time range to compare.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the two time ranges are equal; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Comparing Time Ranges

- [CMTimeRangeContainsTime(\_:time:)](cmtimerangecontainstime%28__time_%29.md): Returns a Boolean value that indicates whether a time range contains a time.
- [CMTimeRangeContainsTimeRange(\_:otherRange:)](cmtimerangecontainstimerange%28__otherrange_%29.md): Returns a Boolean value that indicates whether a time range contains another time range.

# CMTimeRangeEqual (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether two time ranges are equal.

## Declaration

```objectivec
extern Boolean CMTimeRangeEqual(CMTimeRange range1, CMTimeRange range2);
```

## Parameters

- `range1`: The first time range to compare.
- `range2`: The second time range to compare.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the two time ranges are equal; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Comparing Time Ranges

- [CMTimeRangeContainsTime](cmtimerangecontainstime%28__time_%29.md): Returns a Boolean value that indicates whether a time range contains a time.
- [CMTimeRangeContainsTimeRange](cmtimerangecontainstimerange%28__otherrange_%29.md): Returns a Boolean value that indicates whether a time range contains another time range.
