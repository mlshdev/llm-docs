> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/developertoolssupport/preview/init(_:as:using:widget:contentstates:)](https://developer.apple.com/documentation/developertoolssupport/preview/init(_:as:using:widget:contentstates:))

# init(\_:as:using:widget:contentStates:)

**Framework:** DeveloperToolsSupport  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+

Creates a preview of a live activity widget.

## Declaration

```swift
@MainActor init<Attributes>(_ name: String? = nil, as viewKind: ActivityPreviewViewKind, using attributes: Attributes, widget: @escaping () -> some Widget, @PreviewActivityBuilder<Attributes> contentStates: @escaping @MainActor () async -> [Attributes.ContentState]) where Attributes : ActivityAttributes
```

<a id="discussion"></a>

## Discussion

The `#Preview` macro expands into a declaration that calls this initializer. To create a preview that appears in the canvas, you must use the macro, not instantiate a Preview directly.

## See Also

### Creating a preview of a widget

- [init(\_:as:using:widget:timelineProvider:)](init%28__as_using_widget_timelineprovider_%29-1if5u.md): Creates a preview of a widget with an `AppIntent` configuration.
- [init(\_:as:using:widget:timelineProvider:)](init%28__as_using_widget_timelineprovider_%29-5335n.md): Creates a preview of a widget with an `INIntent` configuration.
- [init(\_:as:widget:timeline:)](init%28__as_widget_timeline_%29.md): Creates a preview of a timeline-style widget.
- [init(\_:as:widget:timelineProvider:)](init%28__as_widget_timelineprovider_%29.md): Creates a preview of a widget with a static configuration.
