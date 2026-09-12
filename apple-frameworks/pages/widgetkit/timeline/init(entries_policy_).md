> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/timeline/init(entries:policy:)](https://developer.apple.com/documentation/widgetkit/timeline/init(entries:policy:))

# init(entries:policy:)

**Framework:** WidgetKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 26.0+ · watchOS 9.0+

Creates a timeline for when you want WidgetKit to update a widget’s view.

## Declaration

```swift
init(entries: [EntryType], policy: TimelineReloadPolicy)
```

## Parameters

- `entries`: An array of timeline entries.
- `policy`: The policy that determines the earliest date and time WidgetKit requests a new timeline from a timeline provider.

<a id="discussion"></a>

## Discussion

Set the date and time of the first entry in a timeline to the current date and time. Add entries for future dates and times when you want WidgetKit to update the widget’s view. Note that the widget’s view might not be updated precisely at a timeline entry’s date and time; the update might occur later.
