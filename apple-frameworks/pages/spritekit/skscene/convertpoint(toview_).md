> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skscene/convertpoint(toview:)](https://developer.apple.com/documentation/spritekit/skscene/convertpoint(toview:))

# convertPoint(toView:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Converts a point from scene coordinates to view coordinates.

## Declaration

```swift
func convertPoint(toView point: CGPoint) -> CGPoint
```

## Parameters

- `point`: A point in scene coordinates.

<a id="return-value"></a>

## Return Value

The same point in the view’s coordinate system.

<a id="Discussion"></a>

## Discussion

The scene must be presented in a view before calling this method.

## See Also

### Converting Between Coordinate Systems

- [convertPoint(fromView:)](convertpoint%28fromview_%29.md): Converts a point from view coordinates to scene coordinates.

# convertPointToView: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Converts a point from scene coordinates to view coordinates.

## Declaration

```objectivec
- (CGPoint) convertPointToView:(CGPoint) point;
```

## Parameters

- `point`: A point in scene coordinates.

<a id="return-value"></a>

## Return Value

The same point in the view’s coordinate system.

<a id="Discussion"></a>

## Discussion

The scene must be presented in a view before calling this method.

## See Also

### Converting Between Coordinate Systems

- [convertPointFromView:](convertpoint%28fromview_%29.md): Converts a point from view coordinates to scene coordinates.
