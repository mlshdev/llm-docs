> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmtime/init()

# init()

**Framework:** Core Media  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a time with an invalid value.

## Declaration

```swift
init()
```

<a id="Discussion"></a>

## Discussion

Using this initializer creates a time equal to [invalid](invalid.md).

## See Also

### Creating a Time

- [init(value:timescale:)](init%28value_timescale_%29.md): Creates a time with a value and timescale.
- [init(value:timescale:flags:epoch:)](init%28value_timescale_flags_epoch_%29.md): Creates a time with a value, timescale, flags, and epoch.
- [init(seconds:preferredTimescale:)](init%28seconds_preferredtimescale_%29.md): Creates a time that represents number of seconds in a preferred timescale.
