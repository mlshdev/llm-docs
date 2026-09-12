> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/timelinereloadpolicy](https://developer.apple.com/documentation/widgetkit/timelinereloadpolicy)

# TimelineReloadPolicy

**Framework:** WidgetKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 26.0+ · watchOS 9.0+

A type that indicates the earliest date WidgetKit requests a new timeline from the widget’s provider.

## Declaration

```swift
struct TimelineReloadPolicy
```

## Topics

### Reload Policies

- [atEnd](timelinereloadpolicy/atend.md): A policy that specifies that WidgetKit requests a new timeline after the last date in a timeline passes.
- [after(\_:)](timelinereloadpolicy/after%28__%29.md): A policy that specifies a future date for WidgetKit to request a new timeline.
- [never](timelinereloadpolicy/never.md): A policy that specifies that the app prompts WidgetKit when a new timeline is available.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Getting Timeline Properties

- [entries](timeline/entries.md): An array of timeline entries.
- [policy](timeline/policy.md): The policy that determines the earliest date and time WidgetKit requests a new timeline from a timeline provider.
