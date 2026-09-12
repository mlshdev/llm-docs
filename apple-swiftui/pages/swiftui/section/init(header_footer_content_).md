> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/section/init(header:footer:content:)](https://developer.apple.com/documentation/swiftui/section/init(header:footer:content:))

# init(header:footer:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Creates a section with a header, footer, and the provided section content.

> Use [init(content:header:footer:)](init%28content_header_footer_%29.md) instead.

## Declaration

```swift
init(header: Parent, footer: Footer, @ContentBuilder content: () -> Content)
```

## Parameters

- `header`: A view to use as the section’s header.
- `footer`: A view to use as the section’s footer.
- `content`: The section’s content.

## See Also

### Deprecated symbols

- [init(header:content:)](init%28header_content_%29.md): Deprecated. Conforms when `Parent` conforms to `View`, `Content` conforms to `View`, and `Footer` is `EmptyView`. Creates a section with a header and the provided section content.
- [init(footer:content:)](init%28footer_content_%29.md): Deprecated. Conforms when `Parent` is `EmptyView`, `Content` conforms to `View`, and `Footer` conforms to `View`. Creates a section with a footer and the provided section content.
- [collapsible(\_:)](collapsible%28__%29.md): Deprecated. Conforms when `Parent` conforms to `View`, `Content` conforms to `View`, and `Footer` conforms to `View`. Sets whether a section can be collapsed by the user.
