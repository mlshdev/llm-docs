> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/hide()](https://developer.apple.com/documentation/spritekit/skaction/hide())

# hide() (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates an action that hides a node.

## Declaration

```swift
class func hide() -> SKAction
```

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

This action has an instantaneous duration. When the action executes, the node’s [isHidden](../sknode/ishidden.md) property is set to [true](https://developer.apple.com/documentation/swift/true).

This action is reversible; the reversed action shows the node.

## See Also

### Controlling Node Visibility

- [unhide()](unhide%28%29.md): Creates an action that makes a node visible.

# hide (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates an action that hides a node.

## Declaration

```objectivec
+ (SKAction *) hide;
```

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

This action has an instantaneous duration. When the action executes, the node’s [hidden](../sknode/ishidden.md) property is set to [true](https://developer.apple.com/documentation/swift/true).

This action is reversible; the reversed action shows the node.

## See Also

### Controlling Node Visibility

- [unhide](unhide%28%29.md): Creates an action that makes a node visible.
