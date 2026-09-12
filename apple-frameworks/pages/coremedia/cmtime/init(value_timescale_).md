> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtime/init(value:timescale:)](https://developer.apple.com/documentation/coremedia/cmtime/init(value:timescale:))

# init(value:timescale:)

**Framework:** Core Media  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a time with a value and timescale.

## Declaration

```swift
init(value: CMTimeValue, timescale: CMTimeScale)
```

## Parameters

- `value`: An integer time value.
- `timescale`: An integer timescale value.

## See Also

### Creating a Time

- [init(value:timescale:flags:epoch:)](init%28value_timescale_flags_epoch_%29.md): Creates a time with a value, timescale, flags, and epoch.
- [init(seconds:preferredTimescale:)](init%28seconds_preferredtimescale_%29.md): Creates a time that represents number of seconds in a preferred timescale.
- [init()](init%28%29.md): Creates a time with an invalid value.
