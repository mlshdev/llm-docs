> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/dateinterval/init(start:end:)

# init(start:end:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes an interval with the specified start and end date.

## Declaration

```swift
init(start: Date, end: Date)
```

<a id="Discussion"></a>

## Discussion

Precondition: `end >= start`

## See Also

### Creating a Date Interval

- [init()](init%28%29.md): Initializes an interval with start and end dates set to the current date and the duration set to `0`.
- [init(start:duration:)](init%28start_duration_%29.md): Initializes an interval with the specified start date and duration.
