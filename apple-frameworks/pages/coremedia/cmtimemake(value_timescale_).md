> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimemake(value:timescale:)](https://developer.apple.com/documentation/coremedia/cmtimemake(value:timescale:))

# CMTimeMake(value:timescale:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a time with a value and timescale.

## Declaration

```swift
func CMTimeMake(value: Int64, timescale: Int32) -> CMTime
```

## Parameters

- `value`: An integer time value.
- `timescale`: An integer timescale.

<a id="return-value"></a>

## Return Value

A time structure.

## See Also

### Creating a Time

- [CMTimeMakeWithEpoch(value:timescale:epoch:)](cmtimemakewithepoch%28value_timescale_epoch_%29.md): Creates a time with a value, timescale, and epoch.
- [CMTimeMakeWithSeconds(\_:preferredTimescale:)](cmtimemakewithseconds%28__preferredtimescale_%29.md): Creates a time that represents a number of seconds in a preferred timescale.
- [CMTimeMakeFromDictionary(\_:)](cmtimemakefromdictionary%28__%29.md): Creates a time from a dictionary representation of its fields.

# CMTimeMake (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a time with a value and timescale.

## Declaration

```objectivec
extern CMTime CMTimeMake(int64_t value, int32_t timescale);
```

## Parameters

- `value`: An integer time value.
- `timescale`: An integer timescale.

<a id="return-value"></a>

## Return Value

A time structure.

## See Also

### Creating a Time

- [CMTimeMakeWithEpoch](cmtimemakewithepoch%28value_timescale_epoch_%29.md): Creates a time with a value, timescale, and epoch.
- [CMTimeMakeWithSeconds](cmtimemakewithseconds%28__preferredtimescale_%29.md): Creates a time that represents a number of seconds in a preferred timescale.
- [CMTimeMakeFromDictionary](cmtimemakefromdictionary%28__%29.md): Creates a time from a dictionary representation of its fields.
