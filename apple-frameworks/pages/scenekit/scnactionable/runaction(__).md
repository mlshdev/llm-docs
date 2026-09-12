> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnactionable/runaction(_:)](https://developer.apple.com/documentation/scenekit/scnactionable/runaction(_:))

# runAction(\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Adds an action to the list of actions executed by the node.

## Declaration

```swift
func runAction(_ action: SCNAction)
```

## Parameters

- `action`: The action to be performed.

<a id="Discussion"></a>

## Discussion

SceneKit begins running a newly added action when it prepares to render the next frame.

## See Also

### Running Actions

- [runAction(\_:completionHandler:)](runaction%28__completionhandler_%29.md): Adds an action to the list of actions executed by the node. SceneKit calls the specified block when the action completes.
- [runAction(\_:forKey:)](runaction%28__forkey_%29.md): Adds an identifiable action to the list of actions executed by the node.
- [runAction(\_:forKey:completionHandler:)](runaction%28__forkey_completionhandler_%29.md): Adds an identifiable action to the list of actions executed by the node. SceneKit calls the specified block when the action completes.

# runAction: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Adds an action to the list of actions executed by the node.

## Declaration

```objectivec
- (void) runAction:(SCNAction *) action;
```

## Parameters

- `action`: The action to be performed.

<a id="Discussion"></a>

## Discussion

SceneKit begins running a newly added action when it prepares to render the next frame.

## See Also

### Running Actions

- [runAction:completionHandler:](runaction%28__completionhandler_%29.md): Adds an action to the list of actions executed by the node. SceneKit calls the specified block when the action completes.
- [runAction:forKey:](runaction%28__forkey_%29.md): Adds an identifiable action to the list of actions executed by the node.
- [runAction:forKey:completionHandler:](runaction%28__forkey_completionhandler_%29.md): Adds an identifiable action to the list of actions executed by the node. SceneKit calls the specified block when the action completes.
