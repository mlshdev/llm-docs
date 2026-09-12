> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/timelineprovider/entry](https://developer.apple.com/documentation/widgetkit/timelineprovider/entry)

# Entry

**Framework:** WidgetKit  
**Kind:** Associated Type  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 26.0+ · watchOS 9.0+

A type that specifies the date to display a widget, and, optionally, indicates the current relevance of the widget’s content.

## Declaration

```swift
associatedtype Entry : TimelineEntry
```

## See Also

### Generating Timelines

- [getSnapshot(in:completion:)](getsnapshot%28in_completion_%29.md): Provides a timeline entry that represents the current time and state of a widget.
- [getTimeline(in:completion:)](gettimeline%28in_completion_%29.md): Provides an array of timeline entries for the current time and, optionally, any future times to update a widget.
- [placeholder(in:)](placeholder%28in_%29.md): Provides a timeline entry representing a placeholder version of the widget.
- [TimelineProvider.Context](context.md): An object that contains details about how a widget is rendered, including its size and whether it appears in the widget gallery.
