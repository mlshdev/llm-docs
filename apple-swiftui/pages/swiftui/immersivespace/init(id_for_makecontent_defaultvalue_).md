> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/immersivespace/init(id:for:makecontent:defaultvalue:)

# init(id:for:makeContent:defaultValue:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** visionOS 26.0+

## Declaration

```swift
nonisolated init<C>(id: String, for type: Data.Type = Data.self, @CompositorContentBuilder makeContent: @escaping (Binding<Data>) -> C, defaultValue: @escaping () -> Data) where Content == CompositorContentBuilder.Content<C>, C : CompositorContent
```
