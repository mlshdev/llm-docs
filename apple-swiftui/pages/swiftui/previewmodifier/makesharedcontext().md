> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/previewmodifier/makesharedcontext()](https://developer.apple.com/documentation/swiftui/previewmodifier/makesharedcontext())

# makeSharedContext()

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Create shared context to apply to previews. The context returned here will be cached and passed into the `body` method for every preview that applies a modifier of this type.

## Declaration

```swift
@MainActor static func makeSharedContext() async throws -> Self.Context
```

## Default Implementations

### PreviewModifier Implementations

- [makeSharedContext()](makesharedcontext%28%29-4zi8r.md): Conforms when `Context` is `()`. Create shared context to apply to previews. The context returned here will be cached and passed into the `body` method for every preview that applies a modifier of this type.
