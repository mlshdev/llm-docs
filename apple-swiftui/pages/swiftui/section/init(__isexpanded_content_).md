> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/section/init(_:isexpanded:content:)](https://developer.apple.com/documentation/swiftui/section/init(_:isexpanded:content:))

# init(\_:isExpanded:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a section with the provided section content.

## Declaration

```swift
@export(implementation) init(_ titleKey: LocalizedStringKey, isExpanded: Binding<Bool>, @ContentBuilder content: () -> Content)
```

## Parameters

- `titleKey`: The key for the section’s localized title, which describes the contents of the section.
- `isExpanded`: A binding to a Boolean value that determines the section’s expansion state (expanded or collapsed).
- `content`: The section’s content.

## See Also

### Controlling collapsibility

- [init(isExpanded:content:header:)](init%28isexpanded_content_header_%29.md): Conforms when `Footer` is `EmptyView`. Creates a section with the provided section content.
