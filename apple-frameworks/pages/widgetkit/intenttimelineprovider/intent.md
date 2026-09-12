> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/intenttimelineprovider/intent](https://developer.apple.com/documentation/widgetkit/intenttimelineprovider/intent)

# Intent

**Framework:** WidgetKit  
**Kind:** Associated Type  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 26.0+ · watchOS 9.0+

The intent that contains user-customized values.

## Declaration

```swift
associatedtype Intent : INIntent
```

## See Also

### Generating Timelines

- [getSnapshot(for:in:completion:)](getsnapshot%28for_in_completion_%29.md): Provides a timeline entry representing the current time and state of a widget.
- [getTimeline(for:in:completion:)](gettimeline%28for_in_completion_%29.md): Provides an array of timeline entries for the current time and, optionally, any future times to update a widget.
- [placeholder(in:)](placeholder%28in_%29.md): Provides a timeline entry representing a placeholder version of the widget.
- [Entry](entry.md): A type that specifies the date to display a widget, and, optionally, indicates the current relevance of the widget’s content.
- [recommendations()](recommendations%28%29.md): Returns a set of intent recommendations you use to offer pre-configured widgets on platforms that don’t offer a dedicated user interface for customizing widget intents.
- [IntentTimelineProvider.Context](context.md): An object that contains details about how a widget is rendered, including its size and whether it appears in the widget gallery.
