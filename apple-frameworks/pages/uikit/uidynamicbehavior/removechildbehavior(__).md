> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicbehavior/removechildbehavior(_:)](https://developer.apple.com/documentation/uikit/uidynamicbehavior/removechildbehavior(_:))

# removeChildBehavior(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Removes a child dynamic behavior from a custom dynamic behavior.

## Declaration

```swift
func removeChildBehavior(_ behavior: UIDynamicBehavior)
```

## Parameters

- `behavior`: The child dynamic behavior you want to remove.

  The parent behavior ignores your use of this method if you:

  - Provide a `nil` value
  - Provide a behavior instance that is not a child of the parent behavior

<a id="Discussion"></a>

## Discussion

This method applies only to custom subclasses of the [UIDynamicBehavior](../uidynamicbehavior.md) class. UIKit concrete dynamic behaviors (such as an instance of [UICollisionBehavior](../uicollisionbehavior.md)) cannot have child behaviors.

## See Also

### Configuring a dynamic behavior

- [action](action.md): The block you want to execute during dynamic animation.
- [addChildBehavior(\_:)](addchildbehavior%28__%29.md): Adds a dynamic behavior, as a child, to a custom dynamic behavior.
- [childBehaviors](childbehaviors.md): Returns the array of dynamic behaviors that are children of a custom dynamic behavior.

# removeChildBehavior: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Removes a child dynamic behavior from a custom dynamic behavior.

## Declaration

```objectivec
- (void) removeChildBehavior:(UIDynamicBehavior *) behavior;
```

## Parameters

- `behavior`: The child dynamic behavior you want to remove.

  The parent behavior ignores your use of this method if you:

  - Provide a `nil` value
  - Provide a behavior instance that is not a child of the parent behavior

<a id="Discussion"></a>

## Discussion

This method applies only to custom subclasses of the [UIDynamicBehavior](../uidynamicbehavior.md) class. UIKit concrete dynamic behaviors (such as an instance of [UICollisionBehavior](../uicollisionbehavior.md)) cannot have child behaviors.

## See Also

### Configuring a dynamic behavior

- [action](action.md): The block you want to execute during dynamic animation.
- [addChildBehavior:](addchildbehavior%28__%29.md): Adds a dynamic behavior, as a child, to a custom dynamic behavior.
- [childBehaviors](childbehaviors.md): Returns the array of dynamic behaviors that are children of a custom dynamic behavior.
