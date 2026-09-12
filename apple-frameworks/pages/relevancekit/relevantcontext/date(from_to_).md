> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/relevancekit/relevantcontext/date(from:to:)](https://developer.apple.com/documentation/relevancekit/relevantcontext/date(from:to:))

# date(from:to:)

**Framework:** RelevanceKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ (deprecated in 26.0) · iPadOS 17.0+ (deprecated in 26.0) · Mac Catalyst 17.0+ (deprecated in 26.0) · macOS 14.0+ (deprecated in 26.0) · tvOS 17.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 10.0+ (deprecated in 26.0)

Tells the system a widget is relevant between two dates.

> Please use date(interval:) or date(range:).

## Declaration

```swift
static func date(from: Date, to: Date) -> RelevantContext
```

## Parameters

- `from`: The moment the widget becomes most relevant to a person.
- `to`: The moment the widget is no longer relevant to a person.

<a id="return-value"></a>

## Return Value

A contextual clue that the system uses to determine the relevance of a widget in the Smart Stack on Apple Watch.

<a id="discussion"></a>

## Discussion

> **Note**

> Smart Stacks are available in iOS, iPadOS, and watchOS. However, functionality provided by RelevanceKit API is only available in watchOS. Calling its API on other platforms doesn’t have any effect. For more information, refer to [Increasing the visibility of widgets in Smart Stacks](../../widgetkit/widget-suggestions-in-smart-stacks.md).

## See Also

### Time clues

- [date(\_:)](date%28__%29.md): Tells the system a widget is relevant at a specific date.
- [date(\_:kind:)](date%28__kind_%29.md): Tells the system a widget is relevant at a specific date and provides an additional contextual hint.
- [date(interval:kind:)](date%28interval_kind_%29.md): Tells the system a widget is relevant for a time interval and provides an additional contextual hint.
- [date(range:kind:)](date%28range_kind_%29.md): Tells the system a widget is relevant for a known date range and provides an additional contextual hint.
- [RelevantContext.DateKind](datekind.md): Values the system uses as additional context for time-based relevance clues.
