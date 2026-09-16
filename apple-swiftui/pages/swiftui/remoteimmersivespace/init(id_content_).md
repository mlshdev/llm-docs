> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/remoteimmersivespace/init(id:content:)

# init(id:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** macOS 26.0+

Creates the remote immersive space associated with the specified identifier.

## Declaration

```swift
nonisolated init<C>(id: String, @CompositorContentBuilder content: @escaping () -> C) where Content == CompositorContentBuilder.Content<C>, Data == Never, C : CompositorContent
```

## Parameters

- `id`: A string that uniquely identifies the immersive space. Ensure that identifiers are unique among the immersive spaces in your app.
- `content`: An compositor content builder that defines the content of the space.

<a id="discussion"></a>

## Discussion

The space uses the specified content builder to form the content.
