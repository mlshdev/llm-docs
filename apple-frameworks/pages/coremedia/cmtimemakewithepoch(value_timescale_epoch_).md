> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimemakewithepoch(value:timescale:epoch:)](https://developer.apple.com/documentation/coremedia/cmtimemakewithepoch(value:timescale:epoch:))

# CMTimeMakeWithEpoch(value:timescale:epoch:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a time with a value, timescale, and epoch.

## Declaration

```swift
func CMTimeMakeWithEpoch(value: Int64, timescale: Int32, epoch: Int64) -> CMTime
```

## Parameters

- `value`: An integer time value.
- `timescale`: An integer timescale value.
- `epoch`: An integer epoch value.

<a id="return-value"></a>

## Return Value

A time structure.

## See Also

### Creating a Time

- [CMTimeMake(value:timescale:)](cmtimemake%28value_timescale_%29.md): Creates a time with a value and timescale.
- [CMTimeMakeWithSeconds(\_:preferredTimescale:)](cmtimemakewithseconds%28__preferredtimescale_%29.md): Creates a time that represents a number of seconds in a preferred timescale.
- [CMTimeMakeFromDictionary(\_:)](cmtimemakefromdictionary%28__%29.md): Creates a time from a dictionary representation of its fields.

# CMTimeMakeWithEpoch (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a time with a value, timescale, and epoch.

## Declaration

```objectivec
extern CMTime CMTimeMakeWithEpoch(int64_t value, int32_t timescale, int64_t epoch);
```

## Parameters

- `value`: An integer time value.
- `timescale`: An integer timescale value.
- `epoch`: An integer epoch value.

<a id="return-value"></a>

## Return Value

A time structure.

## See Also

### Creating a Time

- [CMTimeMake](cmtimemake%28value_timescale_%29.md): Creates a time with a value and timescale.
- [CMTimeMakeWithSeconds](cmtimemakewithseconds%28__preferredtimescale_%29.md): Creates a time that represents a number of seconds in a preferred timescale.
- [CMTimeMakeFromDictionary](cmtimemakefromdictionary%28__%29.md): Creates a time from a dictionary representation of its fields.
