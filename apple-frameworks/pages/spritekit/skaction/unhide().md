> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skaction/unhide()](https://developer.apple.com/documentation/spritekit/skaction/unhide())

# unhide() (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates an action that makes a node visible.

## Declaration

```swift
class func unhide() -> SKAction
```

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

This action has an instantaneous duration. When the action executes, the node’s [isHidden](../sknode/ishidden.md) property is set to [false](https://developer.apple.com/documentation/swift/false).

This action is reversible; the reversed action hides the node.

## See Also

### Controlling Node Visibility

- [hide()](hide%28%29.md): Creates an action that hides a node.

# unhide (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates an action that makes a node visible.

## Declaration

```objectivec
+ (SKAction *) unhide;
```

<a id="return-value"></a>

## Return Value

A new action object.

<a id="Discussion"></a>

## Discussion

This action has an instantaneous duration. When the action executes, the node’s [hidden](../sknode/ishidden.md) property is set to [false](https://developer.apple.com/documentation/swift/false).

This action is reversible; the reversed action hides the node.

## See Also

### Controlling Node Visibility

- [hide](hide%28%29.md): Creates an action that hides a node.
