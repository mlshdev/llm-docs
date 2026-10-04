> Snapshot-pinned source payload for Apple SwiftUI snapshot-8247613c923d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/immersivespace/init(content:)

# init(content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** visionOS 1.0+

Creates an immersive space.

## Declaration

```swift
nonisolated init(@ImmersiveSpaceContentBuilder content: @escaping () -> Content) where Data == Never
```

## Parameters

- `content`: An immersive space content builder that defines the content of the space.

<a id="discussion"></a>

## Discussion

The space uses the specified content builder to form the content.
