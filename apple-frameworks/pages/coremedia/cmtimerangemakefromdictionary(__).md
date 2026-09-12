> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimerangemakefromdictionary(_:)](https://developer.apple.com/documentation/coremedia/cmtimerangemakefromdictionary(_:))

# CMTimeRangeMakeFromDictionary(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a time range from a dictionary representation of its fields.

## Declaration

```swift
func CMTimeRangeMakeFromDictionary(_ dictionaryRepresentation: CFDictionary) -> CMTimeRange
```

## Parameters

- `dictionaryRepresentation`: A dictionary from which to create the time range.

<a id="return-value"></a>

## Return Value

A valid time range structure, or an invalid time range if `dict` doesn’t have the necessary values.

<a id="Discussion"></a>

## Discussion

This is useful when getting Core Media time ranges from Core Foundation container types. For keys in the dictionary, see [Dictionary Keys](cmtimerange-dictionary-keys.md).

## See Also

### Creating Time Ranges

- [CMTimeRangeMake(start:duration:)](cmtimerangemake%28start_duration_%29.md): Creates a valid time range with a start time and duration.
- [CMTimeRangeFromTimeToTime(start:end:)](cmtimerangefromtimetotime%28start_end_%29.md): Creates a valid time range from a start and end time.

# CMTimeRangeMakeFromDictionary (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a time range from a dictionary representation of its fields.

## Declaration

```objectivec
extern CMTimeRange CMTimeRangeMakeFromDictionary(CFDictionaryRef dictionaryRepresentation);
```

## Parameters

- `dictionaryRepresentation`: A dictionary from which to create the time range.

<a id="return-value"></a>

## Return Value

A valid time range structure, or an invalid time range if `dict` doesn’t have the necessary values.

<a id="Discussion"></a>

## Discussion

This is useful when getting Core Media time ranges from Core Foundation container types. For keys in the dictionary, see [Dictionary Keys](cmtimerange-dictionary-keys.md).

## See Also

### Creating Time Ranges

- [CMTimeRangeMake](cmtimerangemake%28start_duration_%29.md): Creates a valid time range with a start time and duration.
- [CMTimeRangeFromTimeToTime](cmtimerangefromtimetotime%28start_end_%29.md): Creates a valid time range from a start and end time.
