> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/widgetkit/appintenttimelineprovider/timeline(for:in:)](https://developer.apple.com/documentation/widgetkit/appintenttimelineprovider/timeline(for:in:))

# timeline(for:in:)

**Framework:** WidgetKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 26.0+ · watchOS 10.0+

Provides an array of timeline entries for the current time and, optionally, any future times to update a widget.

## Declaration

```swift
func timeline(for configuration: Self.Intent, in context: Self.Context) async -> Timeline<Self.Entry>
```

## Parameters

- `configuration`: The intent containing user-customized values.
- `context`: An object describing the context to show the widget in.

<a id="return-value"></a>

## Return Value

An array of timeline entries for the current time and, optionally, any future times to update a widget.

<a id="discussion"></a>

## Discussion

The `configuration` parameter provides user-customized values, as defined in your custom intent.

## See Also

### Generating timelines

- [placeholder(in:)](placeholder%28in_%29.md): Provides a timeline entry representing a placeholder version of the widget.
- [recommendations()](recommendations%28%29.md): Returns a set of intent recommendations you use to offer pre-configured widgets on platforms that don’t offer a dedicated user interface for customizing widget intents.
- [relevance()](relevance%28%29.md): Provides an object containing attributes that describe when a specific widget is relevant.
- [snapshot(for:in:)](snapshot%28for_in_%29.md): Provides a timeline entry representing the current time and state of a widget.
- [AppIntentTimelineProvider.Context](context.md): An object that contains details about how a widget is rendered, including its size and whether it appears in the widget gallery.
- [Entry](entry.md): A type that specifies the date to display a widget, and, optionally, indicates the current relevance of the widget’s content.
- [Intent](intent.md): The intent that contains user-customized values.
