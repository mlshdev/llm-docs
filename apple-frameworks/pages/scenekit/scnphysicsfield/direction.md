> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsfield/direction](https://developer.apple.com/documentation/scenekit/scnphysicsfield/direction)

# direction (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The field’s directional axis.

## Declaration

```swift
var direction: SCNVector3 { get set }
```

<a id="Discussion"></a>

## Discussion

Some types of fields apply forces whose direction or magnitude is relative to an axis. (For details on each type of field, see the methods listed in Creating Physics Fields.) Changing the direction changes the effects of these field types.

The default direction is the vector `{0, -1, 0}`. With this direction, for example, linear gravity fields whose strength is positive cause objects to fall in the “down” direction of scene space.

## See Also

### Specifying a Field’s Area of Effect

- [halfExtent](halfextent.md): A location marking the end of the field’s area of effect.
- [scope](scope.md): The area affected by the field, either inside or outside its region.
- [usesEllipsoidalExtent](usesellipsoidalextent.md): A Boolean value that determines whether the field’s area of effect is shaped like a box or ellipsoid.
- [offset](offset.md): The offset of the field’s center within its area of effect.

# direction (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The field’s directional axis.

## Declaration

```objectivec
@property (nonatomic) SCNVector3 direction;
```

<a id="Discussion"></a>

## Discussion

Some types of fields apply forces whose direction or magnitude is relative to an axis. (For details on each type of field, see the methods listed in Creating Physics Fields.) Changing the direction changes the effects of these field types.

The default direction is the vector `{0, -1, 0}`. With this direction, for example, linear gravity fields whose strength is positive cause objects to fall in the “down” direction of scene space.

## See Also

### Specifying a Field’s Area of Effect

- [halfExtent](halfextent.md): A location marking the end of the field’s area of effect.
- [scope](scope.md): The area affected by the field, either inside or outside its region.
- [usesEllipsoidalExtent](usesellipsoidalextent.md): A Boolean value that determines whether the field’s area of effect is shaped like a box or ellipsoid.
- [offset](offset.md): The offset of the field’s center within its area of effect.
