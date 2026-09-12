> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnactionable/hasactions](https://developer.apple.com/documentation/scenekit/scnactionable/hasactions)

# hasActions (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that indicates whether the node is currently executing any actions.

## Declaration

```swift
var hasActions: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This value is [true](https://developer.apple.com/documentation/swift/true) if the node has any executing actions; otherwise the value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Inspecting a Node’s Running Actions

- [action(forKey:)](action%28forkey_%29.md): Returns an action associated with a specific key.
- [actionKeys](actionkeys.md): The list of keys for which the node has attached actions.

# hasActions (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

A Boolean value that indicates whether the node is currently executing any actions.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasActions;
```

<a id="Discussion"></a>

## Discussion

This value is [true](https://developer.apple.com/documentation/swift/true) if the node has any executing actions; otherwise the value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Inspecting a Node’s Running Actions

- [actionForKey:](action%28forkey_%29.md): Returns an action associated with a specific key.
- [actionKeys](actionkeys.md): The list of keys for which the node has attached actions.
