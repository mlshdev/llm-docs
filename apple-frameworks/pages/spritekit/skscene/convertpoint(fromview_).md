> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skscene/convertpoint(fromview:)](https://developer.apple.com/documentation/spritekit/skscene/convertpoint(fromview:))

# convertPoint(fromView:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Converts a point from view coordinates to scene coordinates.

## Declaration

```swift
func convertPoint(fromView point: CGPoint) -> CGPoint
```

## Parameters

- `point`: A point in view coordinates.

<a id="return-value"></a>

## Return Value

The same point in the scene’s coordinate system.

<a id="Discussion"></a>

## Discussion

The scene must be presented in a view before calling this method.

## See Also

### Converting Between Coordinate Systems

- [convertPoint(toView:)](convertpoint%28toview_%29.md): Converts a point from scene coordinates to view coordinates.

# convertPointFromView: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Converts a point from view coordinates to scene coordinates.

## Declaration

```objectivec
- (CGPoint) convertPointFromView:(CGPoint) point;
```

## Parameters

- `point`: A point in view coordinates.

<a id="return-value"></a>

## Return Value

The same point in the scene’s coordinate system.

<a id="Discussion"></a>

## Discussion

The scene must be presented in a view before calling this method.

## See Also

### Converting Between Coordinate Systems

- [convertPointToView:](convertpoint%28toview_%29.md): Converts a point from scene coordinates to view coordinates.
