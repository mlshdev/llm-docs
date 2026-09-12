> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/levelofdetailcomponent/selectionstrategy/screenarea(_:)](https://developer.apple.com/documentation/realitykit/levelofdetailcomponent/selectionstrategy/screenarea(_:))

# screenArea(\_:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Switch levels based on projected screen area (0.0 = invisible, 1.0 = fills screen).

## Declaration

```swift
static func screenArea(_ thresholds: [Float]) -> LevelOfDetailComponent.SelectionStrategy
```

<a id="discussion"></a>

## Discussion

Each threshold specifies the minimum screen area for a level, in descending order.

## See Also

### Creating a strategy

- [cameraDistance(\_:)](cameradistance%28__%29.md): Switch levels based on distance from the camera.
