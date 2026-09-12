> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/hasactions()](https://developer.apple.com/documentation/spritekit/sknode/hasactions())

# hasActions() (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether the node is executing actions.

## Declaration

```swift
func hasActions() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the node has any executing actions; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Running Actions

- [Getting Started with Actions](../getting-started-with-actions.md): Create, configure, and run actions in SpriteKit.
- [run(\_:)](run%28__%29.md): Adds an action to the list of actions executed by the node.
- [run(\_:completion:)](run%28__completion_%29.md): Adds an action to the list of actions executed by the node and schedules the argument block to be run upon completion of the action.
- [run(\_:withKey:)](run%28__withkey_%29.md): Adds an identifiable action to the list of actions executed by the node.
- [speed](speed.md): A speed modifier applied to all actions executed by a node and its descendants.
- [isPaused](ispaused.md): A Boolean value that determines whether actions on the node and its descendants are processed.
- [action(forKey:)](action%28forkey_%29.md): Returns an action associated with a specific key.
- [removeAllActions()](removeallactions%28%29.md): Ends and removes all actions from the node.
- [removeAction(forKey:)](removeaction%28forkey_%29.md): Removes an action associated with a specific key.

# hasActions (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether the node is executing actions.

## Declaration

```objectivec
- (BOOL) hasActions;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the node has any executing actions; otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Running Actions

- [Getting Started with Actions](../getting-started-with-actions.md): Create, configure, and run actions in SpriteKit.
- [runAction:](run%28__%29.md): Adds an action to the list of actions executed by the node.
- [runAction:completion:](run%28__completion_%29.md): Adds an action to the list of actions executed by the node and schedules the argument block to be run upon completion of the action.
- [runAction:withKey:](run%28__withkey_%29.md): Adds an identifiable action to the list of actions executed by the node.
- [speed](speed.md): A speed modifier applied to all actions executed by a node and its descendants.
- [paused](ispaused.md): A Boolean value that determines whether actions on the node and its descendants are processed.
- [actionForKey:](action%28forkey_%29.md): Returns an action associated with a specific key.
- [removeAllActions](removeallactions%28%29.md): Ends and removes all actions from the node.
- [removeActionForKey:](removeaction%28forkey_%29.md): Removes an action associated with a specific key.
