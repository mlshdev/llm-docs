> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkquadtreenode/quad](https://developer.apple.com/documentation/gameplaykit/gkquadtreenode/quad)

# quad (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The axis-aligned bounding rectangle represented by the node.

## Declaration

```swift
var quad: GKQuad { get }
```

<a id="Discussion"></a>

## Discussion

You can use this rectangle to find elements in the tree with the [elements(in:)](../gkquadtree/elements%28in_%29.md) method.

# quad (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The axis-aligned bounding rectangle represented by the node.

## Declaration

```objectivec
@property (nonatomic, readonly) GKQuad quad;
```

<a id="Discussion"></a>

## Discussion

You can use this rectangle to find elements in the tree with the [elementsInQuad:](../gkquadtree/elements%28in_%29.md) method.
