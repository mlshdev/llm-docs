> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/labeledcontent/init(content:label:)](https://developer.apple.com/documentation/swiftui/labeledcontent/init(content:label:))

# init(content:label:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a standard labeled element, with a view that conveys the value of the element and a label.

## Declaration

```swift
nonisolated init(@ContentBuilder content: () -> Content, @ContentBuilder label: () -> Label)
```

## Parameters

- `content`: The view that conveys the value of the resulting labeled element.
- `label`: The label that describes the purpose of the result.

## See Also

### Creating labeled content

- [init(\_:content:)](init%28__content_%29.md): Conforms when `Label` is `Text` and `Content` conforms to `View`. Creates a labeled view that generates its label from a localized string key.
- [init(\_:value:)](init%28__value_%29.md): Conforms when `Label` is `Text` and `Content` is `Text`. Creates a labeled informational view.
- [init(\_:value:format:)](init%28__value_format_%29.md): Conforms when `Label` is `Text` and `Content` is `Text`. Creates a labeled informational view from a formatted value.
- [init(\_:)](init%28__%29.md): Conforms when `Label` is `LabeledContentStyleConfiguration.Label` and `Content` is `LabeledContentStyleConfiguration.Content`. Creates labeled content based on a labeled content style configuration.
