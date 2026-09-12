> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtime/init(seconds:preferredtimescale:)](https://developer.apple.com/documentation/coremedia/cmtime/init(seconds:preferredtimescale:))

# init(seconds:preferredTimescale:)

**Framework:** Core Media  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a time that represents number of seconds in a preferred timescale.

## Declaration

```swift
init(seconds: Double, preferredTimescale: CMTimeScale)
```

## Parameters

- `seconds`: The number of seconds to represent.
- `preferredTimescale`: The preferred timescale of the time.

<a id="Discussion"></a>

## Discussion

Specify a positive preferred timescale value, or the resulting time is [invalid](invalid.md).

If you specify a value that causes an overflow, the system repeatedly halves the value until the overflow goes away or the timescale equals `1`. If the value still overflows at that point, the system sets the value to positive or negative infinity.

Query the [hasBeenRounded](../cmtimeflags/hasbeenrounded.md) property value to determine whether the value, when converted back to seconds, precisely matches the original seconds value.

## See Also

### Creating a Time

- [init(value:timescale:)](init%28value_timescale_%29.md): Creates a time with a value and timescale.
- [init(value:timescale:flags:epoch:)](init%28value_timescale_flags_epoch_%29.md): Creates a time with a value, timescale, flags, and epoch.
- [init()](init%28%29.md): Creates a time with an invalid value.
