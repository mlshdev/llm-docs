> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/remoteimmersivespace/init(content:)](https://developer.apple.com/documentation/swiftui/remoteimmersivespace/init(content:))

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
