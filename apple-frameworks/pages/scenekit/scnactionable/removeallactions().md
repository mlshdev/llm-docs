> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnactionable/removeallactions()](https://developer.apple.com/documentation/scenekit/scnactionable/removeallactions())

# removeAllActions() (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Ends and removes all actions from the node.

## Declaration

```swift
func removeAllActions()
```

<a id="Discussion"></a>

## Discussion

When SceneKit removes an action from a node, it skips any remaining animation the action would perform. However, any changes the action has already made to the node’s state remain in effect.

## See Also

### Canceling a Node’s Running Actions

- [removeAction(forKey:)](removeaction%28forkey_%29.md): Removes an action associated with a specific key.

# removeAllActions (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Ends and removes all actions from the node.

## Declaration

```objectivec
- (void) removeAllActions;
```

<a id="Discussion"></a>

## Discussion

When SceneKit removes an action from a node, it skips any remaining animation the action would perform. However, any changes the action has already made to the node’s state remain in effect.

## See Also

### Canceling a Node’s Running Actions

- [removeActionForKey:](removeaction%28forkey_%29.md): Removes an action associated with a specific key.
