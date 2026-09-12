> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnaction/hide()](https://developer.apple.com/documentation/scenekit/scnaction/hide())

# hide() (Swift)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates an action that hides a node.

## Declaration

```swift
class func hide() -> SCNAction
```

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [isHidden](../scnnode/ishidden.md) property is set to [true](https://developer.apple.com/documentation/swift/true).

This action is reversible; the reverse is equivalent to the [unhide()](unhide%28%29.md) action.

## See Also

### Creating Actions That Change a Node’s Visibility

- [unhide()](unhide%28%29.md): Creates an action that ensures a node is not hidden.

# hide (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an action that hides a node.

## Declaration

```objectivec
+ (SCNAction *) hide;
```

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

When the action executes, the node’s [hidden](../scnnode/ishidden.md) property is set to [true](https://developer.apple.com/documentation/swift/true).

This action is reversible; the reverse is equivalent to the [unhide](unhide%28%29.md) action.

## See Also

### Creating Actions That Change a Node’s Visibility

- [unhide](unhide%28%29.md): Creates an action that ensures a node is not hidden.
