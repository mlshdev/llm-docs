> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/developertoolssupport/preview/init(_:as:using:widget:timelineprovider:)-5335n](https://developer.apple.com/documentation/developertoolssupport/preview/init(_:as:using:widget:timelineprovider:)-5335n)

# init(\_:as:using:widget:timelineProvider:)

**Framework:** DeveloperToolsSupport  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 26.0+ · watchOS 10.0+

Creates a preview of a widget with an `INIntent` configuration.

## Declaration

```swift
@MainActor init<Provider>(_ name: String? = nil, as family: WidgetFamily, using intent: Provider.Intent, widget: @escaping () -> some Widget, timelineProvider: @escaping () -> Provider) where Provider : IntentTimelineProvider
```

<a id="discussion"></a>

## Discussion

The `#Preview` macro expands into a declaration that calls this initializer. To create a preview that appears in the canvas, you must use the macro, not instantiate a Preview directly.

## See Also

### Creating a preview of a widget

- [init(\_:as:using:widget:contentStates:)](init%28__as_using_widget_contentstates_%29.md): Creates a preview of a live activity widget.
- [init(\_:as:using:widget:timelineProvider:)](init%28__as_using_widget_timelineprovider_%29-1if5u.md): Creates a preview of a widget with an `AppIntent` configuration.
- [init(\_:as:widget:timeline:)](init%28__as_widget_timeline_%29.md): Creates a preview of a timeline-style widget.
- [init(\_:as:widget:timelineProvider:)](init%28__as_widget_timelineprovider_%29.md): Creates a preview of a widget with a static configuration.
