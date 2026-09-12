> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtime/init(value:timescale:flags:epoch:)](https://developer.apple.com/documentation/coremedia/cmtime/init(value:timescale:flags:epoch:))

# init(value:timescale:flags:epoch:)

**Framework:** Core Media  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a time with a value, timescale, flags, and epoch.

## Declaration

```swift
init(value: CMTimeValue, timescale: CMTimeScale, flags: CMTimeFlags, epoch: CMTimeEpoch)
```

## Parameters

- `value`: An integer time value.
- `timescale`: An integer timescale value.
- `flags`: Optional flags to specify for the time.
- `epoch`: An epoch for the time, which is typically `0`.

## See Also

### Creating a Time

- [init(value:timescale:)](init%28value_timescale_%29.md): Creates a time with a value and timescale.
- [init(seconds:preferredTimescale:)](init%28seconds_preferredtimescale_%29.md): Creates a time that represents number of seconds in a preferred timescale.
- [init()](init%28%29.md): Creates a time with an invalid value.
