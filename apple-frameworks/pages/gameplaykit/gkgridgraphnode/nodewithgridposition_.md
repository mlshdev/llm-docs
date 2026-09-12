> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgridgraphnode/nodewithgridposition:](https://developer.apple.com/documentation/gameplaykit/gkgridgraphnode/nodewithgridposition:)

# nodeWithGridPosition:

**Interface language:** Objective-C

**Framework:** GameplayKit  
**Kind:** Type Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a graph node with the specified position on a grid.

## Declaration

```objectivec
+ (instancetype) nodeWithGridPosition:(vector_int2) gridPosition;
```

## Parameters

- `gridPosition`: The position for the node on a discrete integer grid.

<a id="return-value"></a>

## Return Value

A new graph node representing the specified grid position.

## See Also

### Creating a Graph Node

- [initWithGridPosition:](init%28gridposition_%29.md): Initializes a graph node with the specified position on a grid.
