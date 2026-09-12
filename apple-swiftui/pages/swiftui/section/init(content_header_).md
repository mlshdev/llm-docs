> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/section/init(content:header:)](https://developer.apple.com/documentation/swiftui/section/init(content:header:))

# init(content:header:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a section with a header and the provided section content.

## Declaration

```swift
@export(implementation) init(@ContentBuilder content: () -> Content, @ContentBuilder header: () -> Parent)
```

## Parameters

- `content`: The section’s content.
- `header`: A view to use as the section’s header.

## See Also

### Adding headers and footers

- [init(content:footer:)](init%28content_footer_%29.md): Conforms when `Parent` is `EmptyView`. Creates a section with a footer and the provided section content.
- [init(content:header:footer:)](init%28content_header_footer_%29.md): Creates a section with a header, footer, and the provided section content.
