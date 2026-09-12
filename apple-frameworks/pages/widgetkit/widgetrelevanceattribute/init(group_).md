> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/widgetrelevanceattribute/init(group:)](https://developer.apple.com/documentation/widgetkit/widgetrelevanceattribute/init(group:))

# init(group:)

**Framework:** WidgetKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 26.0+ · watchOS 11.0+

Associates the widget kind with a group. When multiple widgets are in the same group, the system only suggests one member of the group simultaneously. Widgets in the same group are interpreted to contain redundant information, and therefore should not be presented together.

## Declaration

```swift
init(group: WidgetRelevanceGroup)
```

## Parameters

- `group`: The group to associate the widget with

<a id="discussion"></a>

## Discussion

Multiple groups can be associated with the same widget by providing multiple `WidgetRelevanceAttribute` instances with different groups.
