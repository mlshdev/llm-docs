> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skconstraint/referencenode](https://developer.apple.com/documentation/spritekit/skconstraint/referencenode)

# referenceNode (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The node whose coordinate system should be used to apply the constraint.

## Declaration

```swift
var referenceNode: SKNode? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`, meaning that the coordinate system of the node’s parent is used to apply the constraint. If another node is specified, all positions are converted into this node’s coordinate system before the constraint is applied.

# referenceNode (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The node whose coordinate system should be used to apply the constraint.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SKNode * referenceNode;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`, meaning that the coordinate system of the node’s parent is used to apply the constraint. If another node is specified, all positions are converted into this node’s coordinate system before the constraint is applied.
