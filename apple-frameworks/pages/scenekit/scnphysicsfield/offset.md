> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsfield/offset](https://developer.apple.com/documentation/scenekit/scnphysicsfield/offset)

# offset (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The offset of the field’s center within its area of effect.

## Declaration

```swift
var offset: SCNVector3 { get set }
```

<a id="Discussion"></a>

## Discussion

Some types of fields apply forces whose magnitude is relative to the distance between an object and the field’s center. (For details on each type of field, see the methods listed in Creating Physics Fields.) Changing the offset changes the effects of these field types.

With the default offset vector `{0, 0, 0}`, the center of a field is the center of its area of effect.

## See Also

### Specifying a Field’s Area of Effect

- [halfExtent](halfextent.md): A location marking the end of the field’s area of effect.
- [scope](scope.md): The area affected by the field, either inside or outside its region.
- [usesEllipsoidalExtent](usesellipsoidalextent.md): A Boolean value that determines whether the field’s area of effect is shaped like a box or ellipsoid.
- [direction](direction.md): The field’s directional axis.

# offset (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The offset of the field’s center within its area of effect.

## Declaration

```objectivec
@property (nonatomic) SCNVector3 offset;
```

<a id="Discussion"></a>

## Discussion

Some types of fields apply forces whose magnitude is relative to the distance between an object and the field’s center. (For details on each type of field, see the methods listed in Creating Physics Fields.) Changing the offset changes the effects of these field types.

With the default offset vector `{0, 0, 0}`, the center of a field is the center of its area of effect.

## See Also

### Specifying a Field’s Area of Effect

- [halfExtent](halfextent.md): A location marking the end of the field’s area of effect.
- [scope](scope.md): The area affected by the field, either inside or outside its region.
- [usesEllipsoidalExtent](usesellipsoidalextent.md): A Boolean value that determines whether the field’s area of effect is shaped like a box or ellipsoid.
- [direction](direction.md): The field’s directional axis.
