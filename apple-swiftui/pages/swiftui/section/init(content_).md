> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/section/init(content:)

# init(content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a section with the provided section content.

## Declaration

```swift
@export(implementation) init(@ContentBuilder content: () -> Content)
```

## Parameters

- `content`: The section’s content.

## See Also

### Creating a section

- [init(\_:content:)](init%28__content_%29.md): Conforms when `Parent` is `Text` and `Footer` is `EmptyView`. Creates a section with the provided section content.
