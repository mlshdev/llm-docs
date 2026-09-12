> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/section/collapsible(_:)](https://developer.apple.com/documentation/swiftui/section/collapsible(_:))

# collapsible(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** macOS 10.15+ (deprecated in 27.0)

Sets whether a section can be collapsed by the user.

> To disable collapsibility in macOS 14 and later, use one of the [Section](../section.md) initializers that lacks collapsibility.

## Declaration

```swift
func collapsible(_ collapsible: Bool) -> some View

```

<a id="discussion"></a>

## Discussion

This modifier only applies to sections in [List](../list.md) views that have the [sidebar](../liststyle/sidebar.md) style.

## See Also

### Deprecated symbols

- [init(header:content:)](init%28header_content_%29.md): Deprecated. Conforms when `Parent` conforms to `View`, `Content` conforms to `View`, and `Footer` is `EmptyView`. Creates a section with a header and the provided section content.
- [init(footer:content:)](init%28footer_content_%29.md): Deprecated. Conforms when `Parent` is `EmptyView`, `Content` conforms to `View`, and `Footer` conforms to `View`. Creates a section with a footer and the provided section content.
- [init(header:footer:content:)](init%28header_footer_content_%29.md): Deprecated. Conforms when `Parent` conforms to `View`, `Content` conforms to `View`, and `Footer` conforms to `View`. Creates a section with a header, footer, and the provided section content.
