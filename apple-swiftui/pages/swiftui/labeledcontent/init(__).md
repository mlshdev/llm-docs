> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/labeledcontent/init(_:)](https://developer.apple.com/documentation/swiftui/labeledcontent/init(_:))

# init(\_:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates labeled content based on a labeled content style configuration.

## Declaration

```swift
init(_ configuration: LabeledContentStyleConfiguration)
```

## Parameters

- `configuration`: The properties of the labeled content

<a id="discussion"></a>

## Discussion

You can use this initializer within the [makeBody(configuration:)](../labeledcontentstyle/makebody%28configuration_%29.md) method of a [LabeledContentStyle](../labeledcontentstyle.md) to create a labeled content instance. This is useful for custom styles that only modify the current style, as opposed to implementing a brand new style.

For example, the following style adds a red border around the labeled content, but otherwise preserves the current style:

```swift
struct RedBorderLabeledContentStyle: LabeledContentStyle {
    func makeBody(configuration: Configuration) -> some View {
        LabeledContent(configuration)
            .border(.red)
    }
}
```

## See Also

### Creating labeled content

- [init(\_:content:)](init%28__content_%29.md): Conforms when `Label` is `Text` and `Content` conforms to `View`. Creates a labeled view that generates its label from a localized string key.
- [init(content:label:)](init%28content_label_%29.md): Conforms when `Label` conforms to `View` and `Content` conforms to `View`. Creates a standard labeled element, with a view that conveys the value of the element and a label.
- [init(\_:value:)](init%28__value_%29.md): Conforms when `Label` is `Text` and `Content` is `Text`. Creates a labeled informational view.
- [init(\_:value:format:)](init%28__value_format_%29.md): Conforms when `Label` is `Text` and `Content` is `Text`. Creates a labeled informational view from a formatted value.
