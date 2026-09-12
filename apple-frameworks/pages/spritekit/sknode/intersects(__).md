> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sknode/intersects(_:)](https://developer.apple.com/documentation/spritekit/sknode/intersects(_:))

# intersects(\_:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether this node intersects the specified node.

## Declaration

```swift
func intersects(_ node: SKNode) -> Bool
```

## Parameters

- `node`: Another node in the same node tree.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the two nodes intersect; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The two nodes are considered to intersect if their frames intersect. The children of both nodes are ignored in this test.

# intersectsNode: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a Boolean value that indicates whether this node intersects the specified node.

## Declaration

```objectivec
- (BOOL) intersectsNode:(SKNode *) node;
```

## Parameters

- `node`: Another node in the same node tree.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the two nodes intersect; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

The two nodes are considered to intersect if their frames intersect. The children of both nodes are ignored in this test.
