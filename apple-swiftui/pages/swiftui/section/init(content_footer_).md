> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/section/init(content:footer:)

# init(content:footer:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a section with a footer and the provided section content.

## Declaration

```swift
@export(implementation) init(@ContentBuilder content: () -> Content, @ContentBuilder footer: () -> Footer)
```

## Parameters

- `content`: The section’s content.
- `footer`: A view to use as the section’s footer.

## See Also

### Adding headers and footers

- [init(content:header:)](init%28content_header_%29.md): Conforms when `Footer` is `EmptyView`. Creates a section with a header and the provided section content.
- [init(content:header:footer:)](init%28content_header_footer_%29.md): Creates a section with a header, footer, and the provided section content.
