> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnactionable/runaction(_:completionhandler:)](https://developer.apple.com/documentation/scenekit/scnactionable/runaction(_:completionhandler:))

# runAction(\_:completionHandler:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Adds an action to the list of actions executed by the node. SceneKit calls the specified block when the action completes.

## Declaration

```swift
func runAction(_ action: SCNAction, completionHandler block: (@Sendable () -> Void)? = nil)
```

```swift
func runAction(_ action: SCNAction) async
```

## Parameters

- `action`: The action to be performed.
- `block`: A completion block that SceneKit calls when the action completes.

<a id="Discussion"></a>

## Discussion

The new action is processed the next time SceneKit prepares to render a frame.

SceneKit calls your block after the action’s duration is complete. For example, in a game you could use this method to show a Game Over message after performing a fade-out action on a node that displays a player character.

## See Also

### Running Actions

- [runAction(\_:)](runaction%28__%29.md): Adds an action to the list of actions executed by the node.
- [runAction(\_:forKey:)](runaction%28__forkey_%29.md): Adds an identifiable action to the list of actions executed by the node.
- [runAction(\_:forKey:completionHandler:)](runaction%28__forkey_completionhandler_%29.md): Adds an identifiable action to the list of actions executed by the node. SceneKit calls the specified block when the action completes.

# runAction:completionHandler: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Adds an action to the list of actions executed by the node. SceneKit calls the specified block when the action completes.

## Declaration

```objectivec
- (void) runAction:(SCNAction *) action completionHandler:(void (^)()) block;
```

## Parameters

- `action`: The action to be performed.
- `block`: A completion block that SceneKit calls when the action completes.

<a id="Discussion"></a>

## Discussion

The new action is processed the next time SceneKit prepares to render a frame.

SceneKit calls your block after the action’s duration is complete. For example, in a game you could use this method to show a Game Over message after performing a fade-out action on a node that displays a player character.

## See Also

### Running Actions

- [runAction:](runaction%28__%29.md): Adds an action to the list of actions executed by the node.
- [runAction:forKey:](runaction%28__forkey_%29.md): Adds an identifiable action to the list of actions executed by the node.
- [runAction:forKey:completionHandler:](runaction%28__forkey_completionhandler_%29.md): Adds an identifiable action to the list of actions executed by the node. SceneKit calls the specified block when the action completes.
