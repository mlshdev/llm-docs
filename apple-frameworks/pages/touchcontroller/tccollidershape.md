> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tccollidershape](https://developer.apple.com/documentation/touchcontroller/tccollidershape)

# TCColliderShape (Swift)

**Framework:** Touch Controller  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Defines the shape of a control collider.

## Declaration

```swift
enum TCColliderShape
```

## Topics

### Shapes

- [TCColliderShape.circle](tccollidershape/circle.md): A circular collider.
- [TCColliderShape.leftSide](tccollidershape/leftside.md): A collider representing the left side of the view the touch controller is embedded in. Useful for thumbsticks and delta controls, so the user can easily hit the control without looking closely.
- [TCColliderShape.rect](tccollidershape/rect.md): A rectangular collider.
- [TCColliderShape.rightSide](tccollidershape/rightside.md): A collider representing the right side of the view the touch controller is embedded in. Useful for thumbsticks and delta controls, so the user can easily hit the control without looking closely.

### Creating a collider shape

- [init(rawValue:)](tccollidershape/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the collider shape

- [colliderShape](tcbutton/collidershape.md): The collider shape for the button.

# TCColliderShape (Objective-C)

**Framework:** Touch Controller  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Defines the shape of a control collider.

## Declaration

```objectivec
enum TCColliderShape : NSInteger;
```

## Topics

### Shapes

- [TCColliderShapeCircle](tccollidershape/circle.md): A circular collider.
- [TCColliderShapeLeftSide](tccollidershape/leftside.md): A collider representing the left side of the view the touch controller is embedded in. Useful for thumbsticks and delta controls, so the user can easily hit the control without looking closely.
- [TCColliderShapeRect](tccollidershape/rect.md): A rectangular collider.
- [TCColliderShapeRightSide](tccollidershape/rightside.md): A collider representing the right side of the view the touch controller is embedded in. Useful for thumbsticks and delta controls, so the user can easily hit the control without looking closely.

## See Also

### Getting the collider shape

- [colliderShape](tcbutton/collidershape.md): The collider shape for the button.
