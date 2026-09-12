> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/section/init(_:content:)](https://developer.apple.com/documentation/swiftui/section/init(_:content:))

# init(\_:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a section with the provided section content.

## Declaration

```swift
@export(implementation) init(_ titleKey: LocalizedStringKey, @ContentBuilder content: () -> Content)
```

## Parameters

- `titleKey`: The key for the section’s localized title, which describes the contents of the section.
- `content`: The section’s content.

## See Also

### Creating a section

- [init(content:)](init%28content_%29.md): Conforms when `Parent` is `EmptyView` and `Footer` is `EmptyView`. Creates a section with the provided section content.
