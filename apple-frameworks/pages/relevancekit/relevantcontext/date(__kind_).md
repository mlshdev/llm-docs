> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/relevancekit/relevantcontext/date(_:kind:)](https://developer.apple.com/documentation/relevancekit/relevantcontext/date(_:kind:))

# date(\_:kind:)

**Framework:** RelevanceKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Tells the system a widget is relevant at a specific date and provides an additional contextual hint.

## Declaration

```swift
static func date(_ exact: Date, kind: RelevantContext.DateKind) -> RelevantContext
```

## Parameters

- `exact`: The moment the widget becomes most relevant to a person.
- `kind`: An additional contextual hint that helps the system determine the widget’s relevance.

<a id="return-value"></a>

## Return Value

A contextual clue that the system uses to determine the relevance of a widget in the Smart Stack on Apple Watch.

<a id="discussion"></a>

## Discussion

Several widgets might be relevant to a person at a specific time. To help the system show a widget when it’s most relevant, provide a `DateKind` as an additional contextual hint to help it determine the widget’s relevance. For example, a widget that’s related to a person’s schedule or requires an action, pass [scheduled](datekind/scheduled.md).

> **Note**

> Smart Stacks are available in iOS, iPadOS, and watchOS. However, functionality provided by RelevanceKit API is only available in watchOS. Calling its API on other platforms doesn’t have any effect. For more information, refer to [Increasing the visibility of widgets in Smart Stacks](../../widgetkit/widget-suggestions-in-smart-stacks.md).

## See Also

### Time clues

- [date(\_:)](date%28__%29.md): Tells the system a widget is relevant at a specific date.
- [date(interval:kind:)](date%28interval_kind_%29.md): Tells the system a widget is relevant for a time interval and provides an additional contextual hint.
- [date(range:kind:)](date%28range_kind_%29.md): Tells the system a widget is relevant for a known date range and provides an additional contextual hint.
- [RelevantContext.DateKind](datekind.md): Values the system uses as additional context for time-based relevance clues.
- [date(from:to:)](date%28from_to_%29.md): Deprecated. Tells the system a widget is relevant between two dates.
