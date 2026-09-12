> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/timelinereloadpolicy/atend](https://developer.apple.com/documentation/widgetkit/timelinereloadpolicy/atend)

# atEnd

**Framework:** WidgetKit  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 26.0+ · watchOS 9.0+

A policy that specifies that WidgetKit requests a new timeline after the last date in a timeline passes.

## Declaration

```swift
static let atEnd: TimelineReloadPolicy
```

## See Also

### Reload Policies

- [after(\_:)](after%28__%29.md): A policy that specifies a future date for WidgetKit to request a new timeline.
- [never](never.md): A policy that specifies that the app prompts WidgetKit when a new timeline is available.
