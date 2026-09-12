> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnactionable/removeaction(forkey:)](https://developer.apple.com/documentation/scenekit/scnactionable/removeaction(forkey:))

# removeAction(forKey:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Removes an action associated with a specific key.

## Declaration

```swift
func removeAction(forKey key: String)
```

## Parameters

- `key`: A string that uniquely identifies a action.

<a id="Discussion"></a>

## Discussion

If the node is currently running an action that matches the key, SceneKit removes that action from the node, skipping any remaining animation it would perform but keeping any changes already made to the node.

Use this method to cancel actions you scheduled using the [runAction(\_:forKey:)](runaction%28__forkey_%29.md) or [runAction(\_:forKey:completionHandler:)](runaction%28__forkey_completionhandler_%29.md) method.

## See Also

### Canceling a Node’s Running Actions

- [removeAllActions()](removeallactions%28%29.md): Ends and removes all actions from the node.

# removeActionForKey: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Removes an action associated with a specific key.

## Declaration

```objectivec
- (void) removeActionForKey:(NSString *) key;
```

## Parameters

- `key`: A string that uniquely identifies a action.

<a id="Discussion"></a>

## Discussion

If the node is currently running an action that matches the key, SceneKit removes that action from the node, skipping any remaining animation it would perform but keeping any changes already made to the node.

Use this method to cancel actions you scheduled using the [runAction:forKey:](runaction%28__forkey_%29.md) or [runAction:forKey:completionHandler:](runaction%28__forkey_completionhandler_%29.md) method.

## See Also

### Canceling a Node’s Running Actions

- [removeAllActions](removeallactions%28%29.md): Ends and removes all actions from the node.
