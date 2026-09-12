> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabsection/init(content:header:)](https://developer.apple.com/documentation/swiftui/tabsection/init(content:header:))

# init(content:header:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates a section with a header and the provided section content.

## Declaration

```swift
init(@TabContentBuilder<SelectionValue> content: () -> Content, @ContentBuilder header: () -> Header) where Header : View, Footer == EmptyView
```

## Parameters

- `content`: The section’s content.
- `header`: A view to use as the section’s header.

## See Also

### Creating a tab section

- [init(content:)](init%28content_%29.md): Conforms when `Content` conforms to `TabContent` and `SelectionValue` conforms to `Hashable`. Creates a section with the provided section content.
- [init(\_:content:)](init%28__content_%29.md): Conforms when `Content` conforms to `TabContent` and `SelectionValue` conforms to `Hashable`. Creates a section with the provided content.
