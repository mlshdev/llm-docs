> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnactionable/action(forkey:)](https://developer.apple.com/documentation/scenekit/scnactionable/action(forkey:))

# action(forKey:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns an action associated with a specific key.

## Declaration

```swift
func action(forKey key: String) -> SCNAction?
```

## Parameters

- `key`: A string that uniquely identifies a action.

<a id="return-value"></a>

## Return Value

The action object matching the specified key, or `nil` if the node does not have an action identified by the key.

<a id="Discussion"></a>

## Discussion

Use this method to retrieve actions you scheduled using the [runAction(\_:forKey:)](runaction%28__forkey_%29.md) or [runAction(\_:forKey:completionHandler:)](runaction%28__forkey_completionhandler_%29.md) method.

## See Also

### Inspecting a Node’s Running Actions

- [hasActions](hasactions.md): A Boolean value that indicates whether the node is currently executing any actions.
- [actionKeys](actionkeys.md): The list of keys for which the node has attached actions.

# actionForKey: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Returns an action associated with a specific key.

## Declaration

```objectivec
- (SCNAction *) actionForKey:(NSString *) key;
```

## Parameters

- `key`: A string that uniquely identifies a action.

<a id="return-value"></a>

## Return Value

The action object matching the specified key, or `nil` if the node does not have an action identified by the key.

<a id="Discussion"></a>

## Discussion

Use this method to retrieve actions you scheduled using the [runAction:forKey:](runaction%28__forkey_%29.md) or [runAction:forKey:completionHandler:](runaction%28__forkey_completionhandler_%29.md) method.

## See Also

### Inspecting a Node’s Running Actions

- [hasActions](hasactions.md): A Boolean value that indicates whether the node is currently executing any actions.
- [actionKeys](actionkeys.md): The list of keys for which the node has attached actions.
