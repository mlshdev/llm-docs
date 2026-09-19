> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmtimerange/init(start:end:)

# init(start:end:)

**Framework:** Core Media  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a valid time range from a start and end time.

## Declaration

```swift
init(start: CMTime, end: CMTime)
```

## Parameters

- `start`: The start time of the range.
- `end`: The end time of the range.

## See Also

### Creating Time Ranges

- [init()](init%28%29.md): Creates an empty time range at zero.
- [init(start:duration:)](init%28start_duration_%29.md): Creates a valid time range with a start time and duration.
