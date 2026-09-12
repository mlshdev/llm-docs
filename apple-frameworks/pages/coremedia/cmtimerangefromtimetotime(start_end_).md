> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimerangefromtimetotime(start:end:)](https://developer.apple.com/documentation/coremedia/cmtimerangefromtimetotime(start:end:))

# CMTimeRangeFromTimeToTime(start:end:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a valid time range from a start and end time.

## Declaration

```swift
func CMTimeRangeFromTimeToTime(start: CMTime, end: CMTime) -> CMTimeRange
```

## Parameters

- `start`: The start time of the range.
- `end`: The end time of the range.

<a id="return-value"></a>

## Return Value

A valid time range structure.

## See Also

### Creating Time Ranges

- [CMTimeRangeMake(start:duration:)](cmtimerangemake%28start_duration_%29.md): Creates a valid time range with a start time and duration.
- [CMTimeRangeMakeFromDictionary(\_:)](cmtimerangemakefromdictionary%28__%29.md): Creates a time range from a dictionary representation of its fields.

# CMTimeRangeFromTimeToTime (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a valid time range from a start and end time.

## Declaration

```objectivec
extern CMTimeRange CMTimeRangeFromTimeToTime(CMTime start, CMTime end);
```

## Parameters

- `start`: The start time of the range.
- `end`: The end time of the range.

<a id="return-value"></a>

## Return Value

A valid time range structure.

## See Also

### Creating Time Ranges

- [CMTimeRangeMake](cmtimerangemake%28start_duration_%29.md): Creates a valid time range with a start time and duration.
- [CMTimeRangeMakeFromDictionary](cmtimerangemakefromdictionary%28__%29.md): Creates a time range from a dictionary representation of its fields.
