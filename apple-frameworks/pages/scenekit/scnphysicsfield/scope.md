> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsfield/scope](https://developer.apple.com/documentation/scenekit/scnphysicsfield/scope)

# scope (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The area affected by the field, either inside or outside its region.

## Declaration

```swift
var scope: SCNPhysicsFieldScope { get set }
```

<a id="Discussion"></a>

## Discussion

First, define a field’s region using its [halfExtent](halfextent.md) property and the [position](../scnnode/position.md) property of the node containing the field. Then, use the [scope](scope.md) property to choose whether the field’s area of effect is the interior of the region (the default) or all space outside the region.

## See Also

### Specifying a Field’s Area of Effect

- [halfExtent](halfextent.md): A location marking the end of the field’s area of effect.
- [usesEllipsoidalExtent](usesellipsoidalextent.md): A Boolean value that determines whether the field’s area of effect is shaped like a box or ellipsoid.
- [offset](offset.md): The offset of the field’s center within its area of effect.
- [direction](direction.md): The field’s directional axis.

# scope (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The area affected by the field, either inside or outside its region.

## Declaration

```objectivec
@property (nonatomic) SCNPhysicsFieldScope scope;
```

<a id="Discussion"></a>

## Discussion

First, define a field’s region using its [halfExtent](halfextent.md) property and the [position](../scnnode/position.md) property of the node containing the field. Then, use the [scope](scope.md) property to choose whether the field’s area of effect is the interior of the region (the default) or all space outside the region.

## See Also

### Specifying a Field’s Area of Effect

- [halfExtent](halfextent.md): A location marking the end of the field’s area of effect.
- [usesEllipsoidalExtent](usesellipsoidalextent.md): A Boolean value that determines whether the field’s area of effect is shaped like a box or ellipsoid.
- [offset](offset.md): The offset of the field’s center within its area of effect.
- [direction](direction.md): The field’s directional axis.
