> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimerangemake(start:duration:)](https://developer.apple.com/documentation/coremedia/cmtimerangemake(start:duration:))

# CMTimeRangeMake(start:duration:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a valid time range with a start time and duration.

## Declaration

```swift
func CMTimeRangeMake(start: CMTime, duration: CMTime) -> CMTimeRange
```

## Parameters

- `start`: The start of the time range.
- `duration`: The duration of the time range.

<a id="return-value"></a>

## Return Value

A valid time range structure, or an invalid time range if the duration’s epoch isn’t `0`.

## See Also

### Creating Time Ranges

- [CMTimeRangeMakeFromDictionary(\_:)](cmtimerangemakefromdictionary%28__%29.md): Creates a time range from a dictionary representation of its fields.
- [CMTimeRangeFromTimeToTime(start:end:)](cmtimerangefromtimetotime%28start_end_%29.md): Creates a valid time range from a start and end time.

# CMTimeRangeMake (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a valid time range with a start time and duration.

## Declaration

```objectivec
extern CMTimeRange CMTimeRangeMake(CMTime start, CMTime duration);
```

## Parameters

- `start`: The start of the time range.
- `duration`: The duration of the time range.

<a id="return-value"></a>

## Return Value

A valid time range structure, or an invalid time range if the duration’s epoch isn’t `0`.

## See Also

### Creating Time Ranges

- [CMTimeRangeMakeFromDictionary](cmtimerangemakefromdictionary%28__%29.md): Creates a time range from a dictionary representation of its fields.
- [CMTimeRangeFromTimeToTime](cmtimerangefromtimetotime%28start_end_%29.md): Creates a valid time range from a start and end time.
