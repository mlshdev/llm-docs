> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/ispaused](https://developer.apple.com/documentation/spritekit/sknode/ispaused)

# isPaused (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that determines whether actions on the node and its descendants are processed.

## Declaration

```swift
var isPaused: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the value is [true](https://developer.apple.com/documentation/swift/true), the node (and all of its descendants) are skipped when a scene processes actions.

## See Also

### Running Actions

- [Getting Started with Actions](../getting-started-with-actions.md): Create, configure, and run actions in SpriteKit.
- [run(\_:)](run%28__%29.md): Adds an action to the list of actions executed by the node.
- [run(\_:completion:)](run%28__completion_%29.md): Adds an action to the list of actions executed by the node and schedules the argument block to be run upon completion of the action.
- [run(\_:withKey:)](run%28__withkey_%29.md): Adds an identifiable action to the list of actions executed by the node.
- [speed](speed.md): A speed modifier applied to all actions executed by a node and its descendants.
- [action(forKey:)](action%28forkey_%29.md): Returns an action associated with a specific key.
- [hasActions()](hasactions%28%29.md): Returns a Boolean value that indicates whether the node is executing actions.
- [removeAllActions()](removeallactions%28%29.md): Ends and removes all actions from the node.
- [removeAction(forKey:)](removeaction%28forkey_%29.md): Removes an action associated with a specific key.

# paused (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that determines whether actions on the node and its descendants are processed.

## Declaration

```objectivec
@property (nonatomic, getter=isPaused) BOOL paused;
```

<a id="Discussion"></a>

## Discussion

If the value is [true](https://developer.apple.com/documentation/swift/true), the node (and all of its descendants) are skipped when a scene processes actions.

## See Also

### Running Actions

- [Getting Started with Actions](../getting-started-with-actions.md): Create, configure, and run actions in SpriteKit.
- [runAction:](run%28__%29.md): Adds an action to the list of actions executed by the node.
- [runAction:completion:](run%28__completion_%29.md): Adds an action to the list of actions executed by the node and schedules the argument block to be run upon completion of the action.
- [runAction:withKey:](run%28__withkey_%29.md): Adds an identifiable action to the list of actions executed by the node.
- [speed](speed.md): A speed modifier applied to all actions executed by a node and its descendants.
- [actionForKey:](action%28forkey_%29.md): Returns an action associated with a specific key.
- [hasActions](hasactions%28%29.md): Returns a Boolean value that indicates whether the node is executing actions.
- [removeAllActions](removeallactions%28%29.md): Ends and removes all actions from the node.
- [removeActionForKey:](removeaction%28forkey_%29.md): Removes an action associated with a specific key.
