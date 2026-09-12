> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/relevancekit/relevantcontext/datekind](https://developer.apple.com/documentation/relevancekit/relevantcontext/datekind)

# RelevantContext.DateKind

**Framework:** RelevanceKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Values the system uses as additional context for time-based relevance clues.

## Declaration

```swift
struct DateKind
```

## Topics

### Date types

- [default](datekind/default.md): A hint that tells the system to treat a widget with default priority.
- [informational](datekind/informational.md): A hint that tells the system to treat a widget with slightly lower priority because it displays content and doesn’t require an action.
- [scheduled](datekind/scheduled.md): A hint that tells the system to treat a widget with increased priority because it displays important content or requires action.

## See Also

### Time clues

- [date(\_:)](date%28__%29.md): Tells the system a widget is relevant at a specific date.
- [date(\_:kind:)](date%28__kind_%29.md): Tells the system a widget is relevant at a specific date and provides an additional contextual hint.
- [date(interval:kind:)](date%28interval_kind_%29.md): Tells the system a widget is relevant for a time interval and provides an additional contextual hint.
- [date(range:kind:)](date%28range_kind_%29.md): Tells the system a widget is relevant for a known date range and provides an additional contextual hint.
- [date(from:to:)](date%28from_to_%29.md): Deprecated. Tells the system a widget is relevant between two dates.
