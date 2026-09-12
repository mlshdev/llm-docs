> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/immersivespace/init(id:content:)](https://developer.apple.com/documentation/swiftui/immersivespace/init(id:content:))

# init(id:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** visionOS 1.0+ (deprecated in 26.0)

Creates the immersive space associated with the specified identifier.

## Declaration

```swift
nonisolated init(id: String, @ImmersiveSpaceContentBuilder content: () -> Content) where Data == Never
```

## Parameters

- `id`: A string that uniquely identifies the immersive space. Ensure that identifiers are unique among the immersive spaces in your app.
- `content`: An immersive space content builder that defines the content of the space.

<a id="discussion"></a>

## Discussion

The space uses the specified content builder to form the content.
