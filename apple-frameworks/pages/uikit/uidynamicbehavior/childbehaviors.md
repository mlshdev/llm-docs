> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidynamicbehavior/childbehaviors](https://developer.apple.com/documentation/uikit/uidynamicbehavior/childbehaviors)

# childBehaviors (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the array of dynamic behaviors that are children of a custom dynamic behavior.

## Declaration

```swift
var childBehaviors: [UIDynamicBehavior] { get }
```

<a id="Discussion"></a>

## Discussion

Only custom subclasses of the class can have child behaviors.

## See Also

### Configuring a dynamic behavior

- [action](action.md): The block you want to execute during dynamic animation.
- [addChildBehavior(\_:)](addchildbehavior%28__%29.md): Adds a dynamic behavior, as a child, to a custom dynamic behavior.
- [removeChildBehavior(\_:)](removechildbehavior%28__%29.md): Removes a child dynamic behavior from a custom dynamic behavior.

# childBehaviors (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the array of dynamic behaviors that are children of a custom dynamic behavior.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<__kindof UIDynamicBehavior *> * childBehaviors;
```

<a id="Discussion"></a>

## Discussion

Only custom subclasses of the class can have child behaviors.

## See Also

### Configuring a dynamic behavior

- [action](action.md): The block you want to execute during dynamic animation.
- [addChildBehavior:](addchildbehavior%28__%29.md): Adds a dynamic behavior, as a child, to a custom dynamic behavior.
- [removeChildBehavior:](removechildbehavior%28__%29.md): Removes a child dynamic behavior from a custom dynamic behavior.
