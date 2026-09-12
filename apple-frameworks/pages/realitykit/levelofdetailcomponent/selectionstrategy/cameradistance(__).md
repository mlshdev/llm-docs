> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/levelofdetailcomponent/selectionstrategy/cameradistance(_:)](https://developer.apple.com/documentation/realitykit/levelofdetailcomponent/selectionstrategy/cameradistance(_:))

# cameraDistance(\_:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Switch levels based on distance from the camera.

## Declaration

```swift
static func cameraDistance(_ thresholds: [Float]) -> LevelOfDetailComponent.SelectionStrategy
```

<a id="discussion"></a>

## Discussion

Each threshold specifies the maximum camera distance for a level. The last threshold is typically `.infinity` to catch all remaining distances.

## See Also

### Creating a strategy

- [screenArea(\_:)](screenarea%28__%29.md): Switch levels based on projected screen area (0.0 = invisible, 1.0 = fills screen).
