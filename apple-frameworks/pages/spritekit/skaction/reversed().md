> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/reversed()](https://developer.apple.com/documentation/spritekit/skaction/reversed())

# reversed() (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that reverses the behavior of another action.

## Declaration

```swift
func reversed() -> SKAction
```

<a id="return-value"></a>

## Return Value

A new action that reverses an action’s behavior.

## Mentioned In

- [Getting Started with Actions](../getting-started-with-actions.md)

<a id="Discussion"></a>

## Discussion

This method always returns an action object; however, not all actions are reversible. When reversed, some actions return an object that either does nothing or that performs the same action as the original action. For details on how an action is reversed, see the description of the class method used to create that action.

# reversedAction (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates an action that reverses the behavior of another action.

## Declaration

```objectivec
- (SKAction *) reversedAction;
```

<a id="return-value"></a>

## Return Value

A new action that reverses an action’s behavior.

## Mentioned In

- [Getting Started with Actions](../getting-started-with-actions.md)

<a id="Discussion"></a>

## Discussion

This method always returns an action object; however, not all actions are reversible. When reversed, some actions return an object that either does nothing or that performs the same action as the original action. For details on how an action is reversed, see the description of the class method used to create that action.
