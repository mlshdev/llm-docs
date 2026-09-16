> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/remoteimmersivespace/init(content:)

# init(content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** macOS 26.0+

Creates a remote immersive space.

## Declaration

```swift
nonisolated init<C>(@CompositorContentBuilder content: @escaping () -> C) where Content == CompositorContentBuilder.Content<C>, Data == Never, C : CompositorContent
```

## Parameters

- `content`: A compositor content builder that defines the content of the space.

<a id="discussion"></a>

## Discussion

The space uses the specified content builder to form the content.
