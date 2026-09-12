> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skview/convert(_:from:)](https://developer.apple.com/documentation/spritekit/skview/convert(_:from:))

# convert(\_:from:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Converts a point from scene coordinates to view coordinates.

## Declaration

```swift
func convert(_ point: CGPoint, from scene: SKScene) -> CGPoint
```

## Parameters

- `point`: A point in scene coordinates.
- `scene`: A scene.

<a id="return-value"></a>

## Return Value

The same point in the view’s coordinate system.

<a id="Discussion"></a>

## Discussion

This method performs the coordinate conversion as if the scene is presented inside the view.

## See Also

### Converting Between View and Scene Coordinates

- [convert(\_:to:)](convert%28__to_%29.md): Converts a point from view coordinates to scene coordinates.

# convertPoint:fromScene: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Converts a point from scene coordinates to view coordinates.

## Declaration

```objectivec
- (CGPoint) convertPoint:(CGPoint) point fromScene:(SKScene *) scene;
```

## Parameters

- `point`: A point in scene coordinates.
- `scene`: A scene.

<a id="return-value"></a>

## Return Value

The same point in the view’s coordinate system.

<a id="Discussion"></a>

## Discussion

This method performs the coordinate conversion as if the scene is presented inside the view.

## See Also

### Converting Between View and Scene Coordinates

- [convertPoint:toScene:](convert%28__to_%29.md): Converts a point from view coordinates to scene coordinates.
