> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/timelinereloadpolicy/after(_:)](https://developer.apple.com/documentation/widgetkit/timelinereloadpolicy/after(_:))

# after(\_:)

**Framework:** WidgetKit  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 26.0+ · watchOS 9.0+

A policy that specifies a future date for WidgetKit to request a new timeline.

## Declaration

```swift
static func after(_ date: Date) -> TimelineReloadPolicy
```

## Mentioned In

- [Keeping a widget up to date](../keeping-a-widget-up-to-date.md)

## See Also

### Reload Policies

- [atEnd](atend.md): A policy that specifies that WidgetKit requests a new timeline after the last date in a timeline passes.
- [never](never.md): A policy that specifies that the app prompts WidgetKit when a new timeline is available.
