> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/scene/addanchor(_:)](https://developer.apple.com/documentation/realitykit/scene/addanchor(_:))

# addAnchor(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+

Adds an anchor to the scene’s list of anchors.

## Declaration

```swift
@MainActor @preconcurrency func addAnchor(_ anchor: any HasAnchoring)
```

## Parameters

- `anchor`: The anchor to add.

## See Also

### Adding and removing anchors

- [anchors](anchors.md): The collection of anchors contained in the scene.
- [removeAnchor(\_:)](removeanchor%28__%29.md): Removes the specified anchor from the scene.
