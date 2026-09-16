> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/immersivespace/init(makecontent:)

# init(makeContent:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** visionOS 26.0+

## Declaration

```swift
nonisolated init<C>(@CompositorContentBuilder makeContent: @escaping () -> C) where Content == CompositorContentBuilder.Content<C>, Data == Never, C : CompositorContent
```
