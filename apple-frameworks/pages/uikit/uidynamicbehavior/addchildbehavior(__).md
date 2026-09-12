> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicbehavior/addchildbehavior(_:)](https://developer.apple.com/documentation/uikit/uidynamicbehavior/addchildbehavior(_:))

# addChildBehavior(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Adds a dynamic behavior, as a child, to a custom dynamic behavior.

## Declaration

```swift
func addChildBehavior(_ behavior: UIDynamicBehavior)
```

## Parameters

- `behavior`: The dynamic behavior you want to add as a child.

  The parent behavior ignores your use of this method if you:

  - Provide a `nil` value
  - Provide a behavior instance that you’ve already added to the behavior

<a id="Discussion"></a>

## Discussion

Call this method only on custom subclasses of the [UIDynamicBehavior](../uidynamicbehavior.md) class.

## See Also

### Configuring a dynamic behavior

- [action](action.md): The block you want to execute during dynamic animation.
- [childBehaviors](childbehaviors.md): Returns the array of dynamic behaviors that are children of a custom dynamic behavior.
- [removeChildBehavior(\_:)](removechildbehavior%28__%29.md): Removes a child dynamic behavior from a custom dynamic behavior.

# addChildBehavior: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Adds a dynamic behavior, as a child, to a custom dynamic behavior.

## Declaration

```objectivec
- (void) addChildBehavior:(UIDynamicBehavior *) behavior;
```

## Parameters

- `behavior`: The dynamic behavior you want to add as a child.

  The parent behavior ignores your use of this method if you:

  - Provide a `nil` value
  - Provide a behavior instance that you’ve already added to the behavior

<a id="Discussion"></a>

## Discussion

Call this method only on custom subclasses of the [UIDynamicBehavior](../uidynamicbehavior.md) class.

## See Also

### Configuring a dynamic behavior

- [action](action.md): The block you want to execute during dynamic animation.
- [childBehaviors](childbehaviors.md): Returns the array of dynamic behaviors that are children of a custom dynamic behavior.
- [removeChildBehavior:](removechildbehavior%28__%29.md): Removes a child dynamic behavior from a custom dynamic behavior.
