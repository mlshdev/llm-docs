> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skscenescalemode/resizefill](https://developer.apple.com/documentation/spritekit/skscenescalemode/resizefill)

# SKSceneScaleMode.resizeFill (Swift)

**Framework:** SpriteKit  
**Kind:** Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The scene is not scaled to match the view. Instead, the scene is automatically resized so that its dimensions always match those of the view.

## Declaration

```swift
case resizeFill
```

## Mentioned In

- [Scaling a Scene’s Content to Fit the View](../scaling-a-scene-s-content-to-fit-the-view.md)

## See Also

### Constants

- [SKSceneScaleMode.fill](fill.md): Each axis of the scene is scaled independently so that each axis in the scene exactly maps to the length of that axis in the view.
- [SKSceneScaleMode.aspectFill](aspectfill.md): The scaling factor of each dimension is calculated and the larger of the two is chosen. Each axis of the scene is scaled by the same scaling factor. This guarantees that the entire area of the view is filled but may cause parts of the scene to be cropped.
- [SKSceneScaleMode.aspectFit](aspectfit.md): The scaling factor of each dimension is calculated and the smaller of the two is chosen. Each axis of the scene is scaled by the same scaling factor. This guarantees that the entire scene is visible but may require letterboxing in the view.

# SKSceneScaleModeResizeFill (Objective-C)

**Framework:** SpriteKit  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The scene is not scaled to match the view. Instead, the scene is automatically resized so that its dimensions always match those of the view.

## Declaration

```objectivec
SKSceneScaleModeResizeFill
```

## Mentioned In

- [Scaling a Scene’s Content to Fit the View](../scaling-a-scene-s-content-to-fit-the-view.md)

## See Also

### Constants

- [SKSceneScaleModeFill](fill.md): Each axis of the scene is scaled independently so that each axis in the scene exactly maps to the length of that axis in the view.
- [SKSceneScaleModeAspectFill](aspectfill.md): The scaling factor of each dimension is calculated and the larger of the two is chosen. Each axis of the scene is scaled by the same scaling factor. This guarantees that the entire area of the view is filled but may cause parts of the scene to be cropped.
- [SKSceneScaleModeAspectFit](aspectfit.md): The scaling factor of each dimension is calculated and the smaller of the two is chosen. Each axis of the scene is scaled by the same scaling factor. This guarantees that the entire scene is visible but may require letterboxing in the view.
