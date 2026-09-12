> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/disclosuregroup/init(content:label:)](https://developer.apple.com/documentation/swiftui/disclosuregroup/init(content:label:))

# init(content:label:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Creates a disclosure group with the given label and content views.

## Declaration

```swift
nonisolated init(@ContentBuilder content: @escaping () -> Content, @ContentBuilder label: () -> Label)
```

## Parameters

- `content`: The content shown when the disclosure group expands.
- `label`: A view that describes the content of the disclosure group.

## See Also

### Creating a disclosure group

- [init(\_:content:)](init%28__content_%29.md): Conforms when `Label` is `Text` and `Content` conforms to `View`. Creates a disclosure group, using a provided localized string resource to create a text view for the label.
- [init(\_:isExpanded:content:)](init%28__isexpanded_content_%29.md): Conforms when `Label` is `Text` and `Content` conforms to `View`. Creates a disclosure group, using a provided localized string resource to create a text view for the label, and a binding to the expansion state (expanded or collapsed).
- [init(isExpanded:content:label:)](init%28isexpanded_content_label_%29.md): Creates a disclosure group with the given label and content views, and a binding to the expansion state (expanded or collapsed).
