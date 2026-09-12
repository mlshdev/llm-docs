> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/isuserinteractionenabled](https://developer.apple.com/documentation/spritekit/sknode/isuserinteractionenabled)

# isUserInteractionEnabled (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether the node receives touch events.

## Declaration

```swift
var isUserInteractionEnabled: Bool { get set }
```

## Mentioned In

- [Controlling User Interaction on Nodes](../controlling-user-interaction-on-nodes.md)
- [Understanding Hit-Testing](../understanding-hit-testing.md)

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false).

> **Important**

>  In addition to setting `isUserInteractionEnabled` to `true`, you must subclass the node and define event callbacks in order to respond to user input.

## See Also

### Handling User Input

- [Controlling User Interaction on Nodes](../controlling-user-interaction-on-nodes.md): Enable your node to respond to user input, like touches or mouse clicks.
- [focusBehavior](focusbehavior.md): The focus behavior for a node.

# userInteractionEnabled (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that indicates whether the node receives touch events.

## Declaration

```objectivec
@property (nonatomic, getter=isUserInteractionEnabled) BOOL userInteractionEnabled;
```

## Mentioned In

- [Controlling User Interaction on Nodes](../controlling-user-interaction-on-nodes.md)
- [Understanding Hit-Testing](../understanding-hit-testing.md)

<a id="Discussion"></a>

## Discussion

The default value is [false](https://developer.apple.com/documentation/swift/false).

> **Important**

>  In addition to setting `isUserInteractionEnabled` to `true`, you must subclass the node and define event callbacks in order to respond to user input.

## See Also

### Handling User Input

- [Controlling User Interaction on Nodes](../controlling-user-interaction-on-nodes.md): Enable your node to respond to user input, like touches or mouse clicks.
- [focusBehavior](focusbehavior.md): The focus behavior for a node.
