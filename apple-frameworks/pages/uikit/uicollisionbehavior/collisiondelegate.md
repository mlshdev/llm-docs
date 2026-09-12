> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicollisionbehavior/collisiondelegate](https://developer.apple.com/documentation/uikit/uicollisionbehavior/collisiondelegate)

# collisionDelegate (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The delegate object that you want to respond to collisions for the collision behavior.

## Declaration

```swift
weak var collisionDelegate: (any UICollisionBehaviorDelegate)? { get set }
```

## See Also

### Customizing the collision behavior

- [UICollisionBehaviorDelegate](../uicollisionbehaviordelegate.md): To respond to UIKit dynamic item collisions, configure a custom class to adopt the [UICollisionBehaviorDelegate](../uicollisionbehaviordelegate.md) protocol. Then, in a collision behavior (an instance of the [UICollisionBehavior](../uicollisionbehavior.md) class), set the delegate to be an instance of your custom class.

# collisionDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The delegate object that you want to respond to collisions for the collision behavior.

## Declaration

```objectivec
@property (nonatomic, weak, readwrite, nullable) id<UICollisionBehaviorDelegate> collisionDelegate;
```

## See Also

### Customizing the collision behavior

- [UICollisionBehaviorDelegate](../uicollisionbehaviordelegate.md): To respond to UIKit dynamic item collisions, configure a custom class to adopt the [UICollisionBehaviorDelegate](../uicollisionbehaviordelegate.md) protocol. Then, in a collision behavior (an instance of the [UICollisionBehavior](../uicollisionbehavior.md) class), set the delegate to be an instance of your custom class.
