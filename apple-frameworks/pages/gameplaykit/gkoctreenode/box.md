> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gameplaykit/gkoctreenode/box

# box (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The axis-aligned bounding box represented by the node.

## Declaration

```swift
var box: GKBox { get }
```

<a id="Discussion"></a>

## Discussion

You can use this rectangle to find elements in the tree with the [elements(in:)](../gkoctree/elements%28in_%29.md) method.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

# box (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The axis-aligned bounding box represented by the node.

## Declaration

```objectivec
@property (readonly) struct GKBox box;
```

<a id="Discussion"></a>

## Discussion

You can use this rectangle to find elements in the tree with the [elementsInBox:](../gkoctree/elements%28in_%29.md) method.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).
