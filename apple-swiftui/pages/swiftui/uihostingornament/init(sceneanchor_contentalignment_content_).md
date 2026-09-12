> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/uihostingornament/init(sceneanchor:contentalignment:content:)](https://developer.apple.com/documentation/swiftui/uihostingornament/init(sceneanchor:contentalignment:content:))

# init(sceneAnchor:contentAlignment:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** visionOS 1.0+

Creates an ornament with the specified alignment and content.

## Declaration

```swift
init(sceneAnchor: UnitPoint, contentAlignment: Alignment = .center, @ContentBuilder content: () -> Content)
```

## Parameters

- `sceneAnchor`: The anchor point for aligning the ornament’s content (based on the `contentAlignment`) with the scene.
- `contentAlignment`: The alignment in the ornament used to position it.
- `content`: The content of the ornament.

## See Also

### Creating a hosting ornament

- [rootView](rootview.md): The root view of the SwiftUI view hierarchy managed by this ornament.
