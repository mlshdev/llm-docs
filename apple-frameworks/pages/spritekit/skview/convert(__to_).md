> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skview/convert(_:to:)](https://developer.apple.com/documentation/spritekit/skview/convert(_:to:))

# convert(\_:to:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Converts a point from view coordinates to scene coordinates.

## Declaration

```swift
func convert(_ point: CGPoint, to scene: SKScene) -> CGPoint
```

## Parameters

- `point`: A point in view coordinates.
- `scene`: A scene.

<a id="return-value"></a>

## Return Value

The same point in the scene’s coordinate system.

<a id="Discussion"></a>

## Discussion

This method performs the coordinate conversion as if the scene is presented inside the view.

## See Also

### Converting Between View and Scene Coordinates

- [convert(\_:from:)](convert%28__from_%29.md): Converts a point from scene coordinates to view coordinates.

# convertPoint:toScene: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Converts a point from view coordinates to scene coordinates.

## Declaration

```objectivec
- (CGPoint) convertPoint:(CGPoint) point toScene:(SKScene *) scene;
```

## Parameters

- `point`: A point in view coordinates.
- `scene`: A scene.

<a id="return-value"></a>

## Return Value

The same point in the scene’s coordinate system.

<a id="Discussion"></a>

## Discussion

This method performs the coordinate conversion as if the scene is presented inside the view.

## See Also

### Converting Between View and Scene Coordinates

- [convertPoint:fromScene:](convert%28__from_%29.md): Converts a point from scene coordinates to view coordinates.
