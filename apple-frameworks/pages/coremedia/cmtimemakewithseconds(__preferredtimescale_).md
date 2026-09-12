> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimemakewithseconds(_:preferredtimescale:)](https://developer.apple.com/documentation/coremedia/cmtimemakewithseconds(_:preferredtimescale:))

# CMTimeMakeWithSeconds(\_:preferredTimescale:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a time that represents a number of seconds in a preferred timescale.

## Declaration

```swift
func CMTimeMakeWithSeconds(_ seconds: Float64, preferredTimescale: Int32) -> CMTime
```

## Parameters

- `seconds`: The number of seconds to represent.
- `preferredTimescale`: The preferred timescale of the time.

<a id="return-value"></a>

## Return Value

A time structure.

<a id="Discussion"></a>

## Discussion

Specify a positive preferred timescale value, or the resulting time is [invalid](cmtime/invalid.md).

If you specify a value that causes an overflow, the system repeatedly halves the value until the overflow goes away or the timescale equals `1`. If the value still overflows at that point, the system sets the value to positive or negative infinity.

Query the [hasBeenRounded](cmtimeflags/hasbeenrounded.md) property value to determine whether the value, when converted back to seconds, precisely matches the original seconds value.

## See Also

### Creating a Time

- [CMTimeMake(value:timescale:)](cmtimemake%28value_timescale_%29.md): Creates a time with a value and timescale.
- [CMTimeMakeWithEpoch(value:timescale:epoch:)](cmtimemakewithepoch%28value_timescale_epoch_%29.md): Creates a time with a value, timescale, and epoch.
- [CMTimeMakeFromDictionary(\_:)](cmtimemakefromdictionary%28__%29.md): Creates a time from a dictionary representation of its fields.

# CMTimeMakeWithSeconds (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a time that represents a number of seconds in a preferred timescale.

## Declaration

```objectivec
extern CMTime CMTimeMakeWithSeconds(Float64 seconds, int32_t preferredTimescale);
```

## Parameters

- `seconds`: The number of seconds to represent.
- `preferredTimescale`: The preferred timescale of the time.

<a id="return-value"></a>

## Return Value

A time structure.

<a id="Discussion"></a>

## Discussion

Specify a positive preferred timescale value, or the resulting time is [kCMTimeInvalid](cmtime/invalid.md).

If you specify a value that causes an overflow, the system repeatedly halves the value until the overflow goes away or the timescale equals `1`. If the value still overflows at that point, the system sets the value to positive or negative infinity.

Query the [kCMTimeFlags_HasBeenRounded](cmtimeflags/hasbeenrounded.md) property value to determine whether the value, when converted back to seconds, precisely matches the original seconds value.

## See Also

### Creating a Time

- [CMTimeMake](cmtimemake%28value_timescale_%29.md): Creates a time with a value and timescale.
- [CMTimeMakeWithEpoch](cmtimemakewithepoch%28value_timescale_epoch_%29.md): Creates a time with a value, timescale, and epoch.
- [CMTimeMakeFromDictionary](cmtimemakefromdictionary%28__%29.md): Creates a time from a dictionary representation of its fields.
