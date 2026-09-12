> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/immersivespace/init(id:makecontent:)](https://developer.apple.com/documentation/swiftui/immersivespace/init(id:makecontent:))

# init(id:makeContent:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** visionOS 1.0+

Creates the immersive space associated with the specified identifier.

## Declaration

```swift
@export(implementation) nonisolated init(id: String, @ImmersiveSpaceContentBuilder makeContent: @escaping () -> Content) where Data == Never
```

## Parameters

- `id`: A string that uniquely identifies the immersive space. Ensure that identifiers are unique among the immersive spaces in your app.

<a id="discussion"></a>

## Discussion

The space uses the specified content builder to form the content.
