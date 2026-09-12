> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/intenttimelineprovider/gettimeline(for:in:completion:)](https://developer.apple.com/documentation/widgetkit/intenttimelineprovider/gettimeline(for:in:completion:))

# getTimeline(for:in:completion:)

**Framework:** WidgetKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 26.0+ · watchOS 9.0+

Provides an array of timeline entries for the current time and, optionally, any future times to update a widget.

## Declaration

```swift
@preconcurrency func getTimeline(for configuration: Self.Intent, in context: Self.Context, completion: @escaping @Sendable (Timeline<Self.Entry>) -> Void)
```

## Parameters

- `configuration`: The intent containing user-customized values.
- `context`: An object describing the context to show the widget in.
- `completion`: The completion handler to call after you create the timeline.

<a id="discussion"></a>

## Discussion

The `configuration` parameter provides user-customized values, as defined in your custom intent definition.

## See Also

### Generating Timelines

- [getSnapshot(for:in:completion:)](getsnapshot%28for_in_completion_%29.md): Provides a timeline entry representing the current time and state of a widget.
- [placeholder(in:)](placeholder%28in_%29.md): Provides a timeline entry representing a placeholder version of the widget.
- [Entry](entry.md): A type that specifies the date to display a widget, and, optionally, indicates the current relevance of the widget’s content.
- [Intent](intent.md): The intent that contains user-customized values.
- [recommendations()](recommendations%28%29.md): Returns a set of intent recommendations you use to offer pre-configured widgets on platforms that don’t offer a dedicated user interface for customizing widget intents.
- [IntentTimelineProvider.Context](context.md): An object that contains details about how a widget is rendered, including its size and whether it appears in the widget gallery.
