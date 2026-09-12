> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/previewmodifier/body(content:context:)](https://developer.apple.com/documentation/swiftui/previewmodifier/body(content:context:))

# body(content:context:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Modify a preview by applying the shared context.

## Declaration

```swift
@ContentBuilder @MainActor func body(content: Self.Content, context: Self.Context) -> Self.Body
```

## Parameters

- `content`: A proxy for the preview being modified.
- `context`: The shared context to apply.
