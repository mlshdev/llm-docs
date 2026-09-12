> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsfield/usesellipsoidalextent](https://developer.apple.com/documentation/scenekit/scnphysicsfield/usesellipsoidalextent)

# usesEllipsoidalExtent (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that determines whether the field’s area of effect is shaped like a box or ellipsoid.

## Declaration

```swift
var usesEllipsoidalExtent: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If this value is [false](https://developer.apple.com/documentation/swift/false) (the default), the field’s area of effect is the box-shaped region of space defined by its [halfExtent](halfextent.md) property and the [position](../scnnode/position.md) property of the node containing the field.

If this value is [true](https://developer.apple.com/documentation/swift/true), the field’s area of effect is the ellipsoid bounded by this box-shaped region. That is, if all components of the half-extent vector are equal, the field has a spherical area of effect.

## See Also

### Specifying a Field’s Area of Effect

- [halfExtent](halfextent.md): A location marking the end of the field’s area of effect.
- [scope](scope.md): The area affected by the field, either inside or outside its region.
- [offset](offset.md): The offset of the field’s center within its area of effect.
- [direction](direction.md): The field’s directional axis.

# usesEllipsoidalExtent (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A Boolean value that determines whether the field’s area of effect is shaped like a box or ellipsoid.

## Declaration

```objectivec
@property (nonatomic) BOOL usesEllipsoidalExtent;
```

<a id="Discussion"></a>

## Discussion

If this value is [false](https://developer.apple.com/documentation/swift/false) (the default), the field’s area of effect is the box-shaped region of space defined by its [halfExtent](halfextent.md) property and the [position](../scnnode/position.md) property of the node containing the field.

If this value is [true](https://developer.apple.com/documentation/swift/true), the field’s area of effect is the ellipsoid bounded by this box-shaped region. That is, if all components of the half-extent vector are equal, the field has a spherical area of effect.

## See Also

### Specifying a Field’s Area of Effect

- [halfExtent](halfextent.md): A location marking the end of the field’s area of effect.
- [scope](scope.md): The area affected by the field, either inside or outside its region.
- [offset](offset.md): The offset of the field’s center within its area of effect.
- [direction](direction.md): The field’s directional axis.
