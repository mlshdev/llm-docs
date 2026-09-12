> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnactionable/runaction(_:forkey:)](https://developer.apple.com/documentation/scenekit/scnactionable/runaction(_:forkey:))

# runAction(\_:forKey:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Adds an identifiable action to the list of actions executed by the node.

## Declaration

```swift
func runAction(_ action: SCNAction, forKey key: String?)
```

## Parameters

- `action`: The action to be performed.
- `key`: A unique key used to identify the action.

<a id="Discussion"></a>

## Discussion

This method is identical to [runAction(\_:)](runaction%28__%29.md), but the action is stored and identified so that you can retrieve or cancel it later. If an action using the same key is already running, SceneKit removes it before adding the new action.

## See Also

### Related Documentation

- [action(forKey:)](action%28forkey_%29.md): Returns an action associated with a specific key.
- [removeAction(forKey:)](removeaction%28forkey_%29.md): Removes an action associated with a specific key.

### Running Actions

- [runAction(\_:)](runaction%28__%29.md): Adds an action to the list of actions executed by the node.
- [runAction(\_:completionHandler:)](runaction%28__completionhandler_%29.md): Adds an action to the list of actions executed by the node. SceneKit calls the specified block when the action completes.
- [runAction(\_:forKey:completionHandler:)](runaction%28__forkey_completionhandler_%29.md): Adds an identifiable action to the list of actions executed by the node. SceneKit calls the specified block when the action completes.

# runAction:forKey: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Adds an identifiable action to the list of actions executed by the node.

## Declaration

```objectivec
- (void) runAction:(SCNAction *) action forKey:(NSString *) key;
```

## Parameters

- `action`: The action to be performed.
- `key`: A unique key used to identify the action.

<a id="Discussion"></a>

## Discussion

This method is identical to [runAction:](runaction%28__%29.md), but the action is stored and identified so that you can retrieve or cancel it later. If an action using the same key is already running, SceneKit removes it before adding the new action.

## See Also

### Related Documentation

- [actionForKey:](action%28forkey_%29.md): Returns an action associated with a specific key.
- [removeActionForKey:](removeaction%28forkey_%29.md): Removes an action associated with a specific key.

### Running Actions

- [runAction:](runaction%28__%29.md): Adds an action to the list of actions executed by the node.
- [runAction:completionHandler:](runaction%28__completionhandler_%29.md): Adds an action to the list of actions executed by the node. SceneKit calls the specified block when the action completes.
- [runAction:forKey:completionHandler:](runaction%28__forkey_completionhandler_%29.md): Adds an identifiable action to the list of actions executed by the node. SceneKit calls the specified block when the action completes.
