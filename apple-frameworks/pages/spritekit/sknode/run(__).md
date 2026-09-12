> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/run(_:)](https://developer.apple.com/documentation/spritekit/sknode/run(_:))

# run(\_:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds an action to the list of actions executed by the node.

## Declaration

```swift
func run(_ action: SKAction)
```

## Parameters

- `action`: The action to perform.

## Mentioned In

- [Getting Started with Actions](../getting-started-with-actions.md)

<a id="Discussion"></a>

## Discussion

The new action is processed the next time the scene’s animation loop is processed.

## See Also

### Running Actions

- [Getting Started with Actions](../getting-started-with-actions.md): Create, configure, and run actions in SpriteKit.
- [run(\_:completion:)](run%28__completion_%29.md): Adds an action to the list of actions executed by the node and schedules the argument block to be run upon completion of the action.
- [run(\_:withKey:)](run%28__withkey_%29.md): Adds an identifiable action to the list of actions executed by the node.
- [speed](speed.md): A speed modifier applied to all actions executed by a node and its descendants.
- [isPaused](ispaused.md): A Boolean value that determines whether actions on the node and its descendants are processed.
- [action(forKey:)](action%28forkey_%29.md): Returns an action associated with a specific key.
- [hasActions()](hasactions%28%29.md): Returns a Boolean value that indicates whether the node is executing actions.
- [removeAllActions()](removeallactions%28%29.md): Ends and removes all actions from the node.
- [removeAction(forKey:)](removeaction%28forkey_%29.md): Removes an action associated with a specific key.

# runAction: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds an action to the list of actions executed by the node.

## Declaration

```objectivec
- (void) runAction:(SKAction *) action;
```

## Parameters

- `action`: The action to perform.

## Mentioned In

- [Getting Started with Actions](../getting-started-with-actions.md)

<a id="Discussion"></a>

## Discussion

The new action is processed the next time the scene’s animation loop is processed.

## See Also

### Running Actions

- [Getting Started with Actions](../getting-started-with-actions.md): Create, configure, and run actions in SpriteKit.
- [runAction:completion:](run%28__completion_%29.md): Adds an action to the list of actions executed by the node and schedules the argument block to be run upon completion of the action.
- [runAction:withKey:](run%28__withkey_%29.md): Adds an identifiable action to the list of actions executed by the node.
- [speed](speed.md): A speed modifier applied to all actions executed by a node and its descendants.
- [paused](ispaused.md): A Boolean value that determines whether actions on the node and its descendants are processed.
- [actionForKey:](action%28forkey_%29.md): Returns an action associated with a specific key.
- [hasActions](hasactions%28%29.md): Returns a Boolean value that indicates whether the node is executing actions.
- [removeAllActions](removeallactions%28%29.md): Ends and removes all actions from the node.
- [removeActionForKey:](removeaction%28forkey_%29.md): Removes an action associated with a specific key.
