> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsfield/halfextent](https://developer.apple.com/documentation/scenekit/scnphysicsfield/halfextent)

# halfExtent (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A location marking the end of the field’s area of effect.

## Declaration

```swift
var halfExtent: SCNVector3 { get set }
```

<a id="Discussion"></a>

## Discussion

To define a field’s area of effect, use the [position](../scnnode/position.md) property of the node that contains the field and the field’s [halfExtent](halfextent.md) property. The center of the area of effect is the node’s position. The half-extent, a position vector in the local coordinate space of the node containing the field, marks one corner of a box, and the negative of the half-extent vector marks the opposite corner of the box. For example, if a node’s position is the vector `{2.0, 2.0, 2.0}` and it contains a physics field whose half-extent is the vector `{0.5, 0.5, 0.5}`, the field’s area of effect is the box extending from `1.5` to `2.5` along each axis of the scene’s coordinate system.

By default, a field’s area of effect is the interior of this box shape. Use the [usesEllipsoidalExtent](usesellipsoidalextent.md) property to instead make the area of effect an ellipsoid bounded by this box. Use the [scope](scope.md) property to choose whether the area of effect is the interior or exterior of the box (or ellipsoid).

The default half-extent is the vector `{INFINITY, INFINITY, INFINITY}`, specifying that the field affects bodies located anywhere in the scene.

## See Also

### Specifying a Field’s Area of Effect

- [scope](scope.md): The area affected by the field, either inside or outside its region.
- [usesEllipsoidalExtent](usesellipsoidalextent.md): A Boolean value that determines whether the field’s area of effect is shaped like a box or ellipsoid.
- [offset](offset.md): The offset of the field’s center within its area of effect.
- [direction](direction.md): The field’s directional axis.

# halfExtent (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A location marking the end of the field’s area of effect.

## Declaration

```objectivec
@property (nonatomic) SCNVector3 halfExtent;
```

<a id="Discussion"></a>

## Discussion

To define a field’s area of effect, use the [position](../scnnode/position.md) property of the node that contains the field and the field’s [halfExtent](halfextent.md) property. The center of the area of effect is the node’s position. The half-extent, a position vector in the local coordinate space of the node containing the field, marks one corner of a box, and the negative of the half-extent vector marks the opposite corner of the box. For example, if a node’s position is the vector `{2.0, 2.0, 2.0}` and it contains a physics field whose half-extent is the vector `{0.5, 0.5, 0.5}`, the field’s area of effect is the box extending from `1.5` to `2.5` along each axis of the scene’s coordinate system.

By default, a field’s area of effect is the interior of this box shape. Use the [usesEllipsoidalExtent](usesellipsoidalextent.md) property to instead make the area of effect an ellipsoid bounded by this box. Use the [scope](scope.md) property to choose whether the area of effect is the interior or exterior of the box (or ellipsoid).

The default half-extent is the vector `{INFINITY, INFINITY, INFINITY}`, specifying that the field affects bodies located anywhere in the scene.

## See Also

### Specifying a Field’s Area of Effect

- [scope](scope.md): The area affected by the field, either inside or outside its region.
- [usesEllipsoidalExtent](usesellipsoidalextent.md): A Boolean value that determines whether the field’s area of effect is shaped like a box or ellipsoid.
- [offset](offset.md): The offset of the field’s center within its area of effect.
- [direction](direction.md): The field’s directional axis.
