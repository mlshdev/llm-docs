> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaction/reversed()](https://developer.apple.com/documentation/scenekit/scnaction/reversed())

# reversed() (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates an action that reverses the behavior of another action.

## Declaration

```swift
func reversed() -> SCNAction
```

<a id="return-value"></a>

## Return Value

A new action that reverses the action’s behavior.

<a id="Discussion"></a>

## Discussion

This method always returns an action object; however, not all actions are reversible. When reversed, some actions return an object that either does nothing or performs the same action as the original action. For details on how an action is reversed, see the description of the class method used to create that action.

# reversedAction (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Creates an action that reverses the behavior of another action.

## Declaration

```objectivec
- (SCNAction *) reversedAction;
```

<a id="return-value"></a>

## Return Value

A new action that reverses the action’s behavior.

<a id="Discussion"></a>

## Discussion

This method always returns an action object; however, not all actions are reversible. When reversed, some actions return an object that either does nothing or performs the same action as the original action. For details on how an action is reversed, see the description of the class method used to create that action.
