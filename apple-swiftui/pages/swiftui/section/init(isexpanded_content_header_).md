> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/section/init(isexpanded:content:header:)](https://developer.apple.com/documentation/swiftui/section/init(isexpanded:content:header:))

# init(isExpanded:content:header:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a section with the provided section content.

## Declaration

```swift
@export(implementation) init(isExpanded: Binding<Bool>, @ContentBuilder content: () -> Content, @ContentBuilder header: () -> Parent)
```

## Parameters

- `isExpanded`: A binding to a Boolean value that determines the section’s expansion state (expanded or collapsed).
- `content`: The section’s content.

## See Also

### Controlling collapsibility

- [init(\_:isExpanded:content:)](init%28__isexpanded_content_%29.md): Conforms when `Parent` is `Text` and `Footer` is `EmptyView`. Creates a section with the provided section content.
