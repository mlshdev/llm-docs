> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkgridgraphnode/init(gridposition:)](https://developer.apple.com/documentation/gameplaykit/gkgridgraphnode/init(gridposition:))

# init(gridPosition:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a graph node with the specified position on a grid.

## Declaration

```swift
init(gridPosition: vector_int2)
```

## Parameters

- `gridPosition`: The position for the node on a discrete integer grid.

<a id="return-value"></a>

## Return Value

A new graph node representing the specified grid position.

<a id="discussion"></a>

## Discussion

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

# initWithGridPosition: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a graph node with the specified position on a grid.

## Declaration

```objectivec
- (instancetype) initWithGridPosition:(vector_int2) gridPosition;
```

## Parameters

- `gridPosition`: The position for the node on a discrete integer grid.

<a id="return-value"></a>

## Return Value

A new graph node representing the specified grid position.

<a id="discussion"></a>

## Discussion

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## See Also

### Creating a Graph Node

- [nodeWithGridPosition:](nodewithgridposition_.md): Creates a graph node with the specified position on a grid.
