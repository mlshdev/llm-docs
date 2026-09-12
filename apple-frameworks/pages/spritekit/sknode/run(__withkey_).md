> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/run(_:withkey:)](https://developer.apple.com/documentation/spritekit/sknode/run(_:withkey:))

# run(\_:withKey:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds an identifiable action to the list of actions executed by the node.

## Declaration

```swift
func run(_ action: SKAction, withKey key: String)
```

## Parameters

- `action`: The action to perform.
- `key`: A unique key used to identify the action.

## Mentioned In

- [Controlling Actions Precisely by Using Names](../controlling-actions-precisely-by-using-names.md)

<a id="Discussion"></a>

## Discussion

This method is identical to [run(\_:)](run%28__%29.md), but the action is stored so that it can be retrieved later. If an action using the same key is already running, it is removed before the new action is added.

## See Also

### Running Actions

- [Getting Started with Actions](../getting-started-with-actions.md): Create, configure, and run actions in SpriteKit.
- [run(\_:)](run%28__%29.md): Adds an action to the list of actions executed by the node.
- [run(\_:completion:)](run%28__completion_%29.md): Adds an action to the list of actions executed by the node and schedules the argument block to be run upon completion of the action.
- [speed](speed.md): A speed modifier applied to all actions executed by a node and its descendants.
- [isPaused](ispaused.md): A Boolean value that determines whether actions on the node and its descendants are processed.
- [action(forKey:)](action%28forkey_%29.md): Returns an action associated with a specific key.
- [hasActions()](hasactions%28%29.md): Returns a Boolean value that indicates whether the node is executing actions.
- [removeAllActions()](removeallactions%28%29.md): Ends and removes all actions from the node.
- [removeAction(forKey:)](removeaction%28forkey_%29.md): Removes an action associated with a specific key.

# runAction:withKey: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds an identifiable action to the list of actions executed by the node.

## Declaration

```objectivec
- (void) runAction:(SKAction *) action withKey:(NSString *) key;
```

## Parameters

- `action`: The action to perform.
- `key`: A unique key used to identify the action.

## Mentioned In

- [Controlling Actions Precisely by Using Names](../controlling-actions-precisely-by-using-names.md)

<a id="Discussion"></a>

## Discussion

This method is identical to [runAction:](run%28__%29.md), but the action is stored so that it can be retrieved later. If an action using the same key is already running, it is removed before the new action is added.

## See Also

### Running Actions

- [Getting Started with Actions](../getting-started-with-actions.md): Create, configure, and run actions in SpriteKit.
- [runAction:](run%28__%29.md): Adds an action to the list of actions executed by the node.
- [runAction:completion:](run%28__completion_%29.md): Adds an action to the list of actions executed by the node and schedules the argument block to be run upon completion of the action.
- [speed](speed.md): A speed modifier applied to all actions executed by a node and its descendants.
- [paused](ispaused.md): A Boolean value that determines whether actions on the node and its descendants are processed.
- [actionForKey:](action%28forkey_%29.md): Returns an action associated with a specific key.
- [hasActions](hasactions%28%29.md): Returns a Boolean value that indicates whether the node is executing actions.
- [removeAllActions](removeallactions%28%29.md): Ends and removes all actions from the node.
- [removeActionForKey:](removeaction%28forkey_%29.md): Removes an action associated with a specific key.
