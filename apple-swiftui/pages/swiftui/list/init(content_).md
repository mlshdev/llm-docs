> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/list/init(content:)

# init(content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a list with the given content.

## Declaration

```swift
nonisolated init(@ContentBuilder content: () -> Content)
```

## Parameters

- `content`: The content of the list.

## See Also

### Creating a list from a set of views

- [init(selection:content:)](init%28selection_content_%29.md): Creates a list with the given content that supports selecting a single row that cannot be deselected.
