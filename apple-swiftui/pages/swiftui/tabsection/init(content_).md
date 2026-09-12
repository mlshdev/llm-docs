> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabsection/init(content:)](https://developer.apple.com/documentation/swiftui/tabsection/init(content:))

# init(content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Creates a section with the provided section content.

## Declaration

```swift
init(@TabContentBuilder<SelectionValue> content: () -> Content) where Header == EmptyView, Footer == EmptyView
```

## Parameters

- `content`: The section’s content.

## See Also

### Creating a tab section

- [init(\_:content:)](init%28__content_%29.md): Conforms when `Content` conforms to `TabContent` and `SelectionValue` conforms to `Hashable`. Creates a section with the provided content.
- [init(content:header:)](init%28content_header_%29.md): Conforms when `Content` conforms to `TabContent` and `SelectionValue` conforms to `Hashable`. Creates a section with a header and the provided section content.
