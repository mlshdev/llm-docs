> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/timelineprovider/gettimeline(in:completion:)](https://developer.apple.com/documentation/widgetkit/timelineprovider/gettimeline(in:completion:))

# getTimeline(in:completion:)

**Framework:** WidgetKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 26.0+ · watchOS 9.0+

Provides an array of timeline entries for the current time and, optionally, any future times to update a widget.

## Declaration

```swift
@preconcurrency func getTimeline(in context: Self.Context, completion: @escaping @Sendable (Timeline<Self.Entry>) -> Void)
```

## Parameters

- `context`: An object describing the context to show the widget in.
- `completion`: The completion handler to call after you create the timeline.

## Mentioned In

- [Migrating ClockKit complications to WidgetKit](../converting-a-clockkit-app.md)
- [Making network requests in a widget extension](../making-network-requests-in-a-widget-extension.md)

## See Also

### Generating Timelines

- [getSnapshot(in:completion:)](getsnapshot%28in_completion_%29.md): Provides a timeline entry that represents the current time and state of a widget.
- [placeholder(in:)](placeholder%28in_%29.md): Provides a timeline entry representing a placeholder version of the widget.
- [Entry](entry.md): A type that specifies the date to display a widget, and, optionally, indicates the current relevance of the widget’s content.
- [TimelineProvider.Context](context.md): An object that contains details about how a widget is rendered, including its size and whether it appears in the widget gallery.
