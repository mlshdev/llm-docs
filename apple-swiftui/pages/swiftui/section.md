> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/section](https://developer.apple.com/documentation/swiftui/section)

# Section

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A container view that you can use to add hierarchy within certain views.

## Declaration

```swift
struct Section<Parent, Content, Footer>
```

## Mentioned In

- [Grouping data with lazy stack views](grouping-data-with-lazy-stack-views.md)
- [Displaying data in lists](displaying-data-in-lists.md)
- [Populating SwiftUI menus with adaptive controls](populating-swiftui-menus-with-adaptive-controls.md)
- [Suggesting search terms](suggesting-search-terms.md)

<a id="overview"></a>

## Overview

Use `Section` instances in views like [List](list.md), [Picker](picker.md), and [Form](form.md) to organize content into separate sections. Each section has custom content that you provide on a per-instance basis. You can also provide headers and footers for each section.

<a id="Collapsible-sections"></a>

### Collapsible sections

Create sections that expand and collapse by using an initializer that accepts an `isExpanded` binding. A collapsible section in a [List](list.md) that uses the [sidebar](liststyle/sidebar.md) style shows a disclosure indicator next to the section’s header. Tapping on the disclosure indicator toggles the appearance of the section’s content.

> **Note**

> Not all contexts provide a default control to trigger collapse or expansion.

## Topics

### Creating a section

- [init(content:)](section/init%28content_%29.md): Conforms when `Parent` is `EmptyView` and `Footer` is `EmptyView`. Creates a section with the provided section content.
- [init(\_:content:)](section/init%28__content_%29.md): Conforms when `Parent` is `Text` and `Footer` is `EmptyView`. Creates a section with the provided section content.

### Adding headers and footers

- [init(content:header:)](section/init%28content_header_%29.md): Conforms when `Footer` is `EmptyView`. Creates a section with a header and the provided section content.
- [init(content:footer:)](section/init%28content_footer_%29.md): Conforms when `Parent` is `EmptyView`. Creates a section with a footer and the provided section content.
- [init(content:header:footer:)](section/init%28content_header_footer_%29.md): Creates a section with a header, footer, and the provided section content.

### Controlling collapsibility

- [init(\_:isExpanded:content:)](section/init%28__isexpanded_content_%29.md): Conforms when `Parent` is `Text` and `Footer` is `EmptyView`. Creates a section with the provided section content.
- [init(isExpanded:content:header:)](section/init%28isexpanded_content_header_%29.md): Conforms when `Footer` is `EmptyView`. Creates a section with the provided section content.

### Deprecated symbols

- [init(header:content:)](section/init%28header_content_%29.md): Deprecated. Conforms when `Parent` conforms to `View`, `Content` conforms to `View`, and `Footer` is `EmptyView`. Creates a section with a header and the provided section content.
- [init(footer:content:)](section/init%28footer_content_%29.md): Deprecated. Conforms when `Parent` is `EmptyView`, `Content` conforms to `View`, and `Footer` conforms to `View`. Creates a section with a footer and the provided section content.
- [init(header:footer:content:)](section/init%28header_footer_content_%29.md): Deprecated. Conforms when `Parent` conforms to `View`, `Content` conforms to `View`, and `Footer` conforms to `View`. Creates a section with a header, footer, and the provided section content.
- [collapsible(\_:)](section/collapsible%28__%29.md): Deprecated. Conforms when `Parent` conforms to `View`, `Content` conforms to `View`, and `Footer` conforms to `View`. Sets whether a section can be collapsed by the user.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [TableRowContent](tablerowcontent.md)
- [View](view.md)

## See Also

### Organizing views into sections

- [SectionCollection](sectioncollection.md): An opaque collection representing the sections of view.
- [SectionConfiguration](sectionconfiguration.md): Specifies the contents of a section.
