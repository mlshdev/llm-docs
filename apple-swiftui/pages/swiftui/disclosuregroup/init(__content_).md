> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/disclosuregroup/init(_:content:)](https://developer.apple.com/documentation/swiftui/disclosuregroup/init(_:content:))

# init(\_:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates a disclosure group, using a provided localized string resource to create a text view for the label.

## Declaration

```swift
@export(implementation) nonisolated init(_ titleResource: LocalizedStringResource, @ContentBuilder content: @escaping () -> Content)
```

## Parameters

- `titleResource`: The localized label of `self` that describes the content of the disclosure group.
- `content`: The content shown when the disclosure group expands.

## See Also

### Creating a disclosure group

- [init(content:label:)](init%28content_label_%29.md): Creates a disclosure group with the given label and content views.
- [init(\_:isExpanded:content:)](init%28__isexpanded_content_%29.md): Conforms when `Label` is `Text` and `Content` conforms to `View`. Creates a disclosure group, using a provided localized string resource to create a text view for the label, and a binding to the expansion state (expanded or collapsed).
- [init(isExpanded:content:label:)](init%28isexpanded_content_label_%29.md): Creates a disclosure group with the given label and content views, and a binding to the expansion state (expanded or collapsed).
