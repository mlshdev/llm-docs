> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/action(forkey:)](https://developer.apple.com/documentation/spritekit/sknode/action(forkey:))

# action(forKey:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an action associated with a specific key.

## Declaration

```swift
func action(forKey key: String) -> SKAction?
```

## Parameters

- `key`: A string that uniquely identifies an action.

<a id="return-value"></a>

## Return Value

If an action exists that matches the key, the action object is returned. Otherwise, `nil` is returned.

## Mentioned In

- [Controlling Actions Precisely by Using Names](../controlling-actions-precisely-by-using-names.md)

## See Also

### Running Actions

- [Getting Started with Actions](../getting-started-with-actions.md): Create, configure, and run actions in SpriteKit.
- [run(\_:)](run%28__%29.md): Adds an action to the list of actions executed by the node.
- [run(\_:completion:)](run%28__completion_%29.md): Adds an action to the list of actions executed by the node and schedules the argument block to be run upon completion of the action.
- [run(\_:withKey:)](run%28__withkey_%29.md): Adds an identifiable action to the list of actions executed by the node.
- [speed](speed.md): A speed modifier applied to all actions executed by a node and its descendants.
- [isPaused](ispaused.md): A Boolean value that determines whether actions on the node and its descendants are processed.
- [hasActions()](hasactions%28%29.md): Returns a Boolean value that indicates whether the node is executing actions.
- [removeAllActions()](removeallactions%28%29.md): Ends and removes all actions from the node.
- [removeAction(forKey:)](removeaction%28forkey_%29.md): Removes an action associated with a specific key.

# actionForKey: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an action associated with a specific key.

## Declaration

```objectivec
- (SKAction *) actionForKey:(NSString *) key;
```

## Parameters

- `key`: A string that uniquely identifies an action.

<a id="return-value"></a>

## Return Value

If an action exists that matches the key, the action object is returned. Otherwise, `nil` is returned.

## Mentioned In

- [Controlling Actions Precisely by Using Names](../controlling-actions-precisely-by-using-names.md)

## See Also

### Running Actions

- [Getting Started with Actions](../getting-started-with-actions.md): Create, configure, and run actions in SpriteKit.
- [runAction:](run%28__%29.md): Adds an action to the list of actions executed by the node.
- [runAction:completion:](run%28__completion_%29.md): Adds an action to the list of actions executed by the node and schedules the argument block to be run upon completion of the action.
- [runAction:withKey:](run%28__withkey_%29.md): Adds an identifiable action to the list of actions executed by the node.
- [speed](speed.md): A speed modifier applied to all actions executed by a node and its descendants.
- [paused](ispaused.md): A Boolean value that determines whether actions on the node and its descendants are processed.
- [hasActions](hasactions%28%29.md): Returns a Boolean value that indicates whether the node is executing actions.
- [removeAllActions](removeallactions%28%29.md): Ends and removes all actions from the node.
- [removeActionForKey:](removeaction%28forkey_%29.md): Removes an action associated with a specific key.
