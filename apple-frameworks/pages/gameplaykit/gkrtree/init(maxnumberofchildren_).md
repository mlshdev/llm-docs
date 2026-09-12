> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkrtree/init(maxnumberofchildren:)](https://developer.apple.com/documentation/gameplaykit/gkrtree/init(maxnumberofchildren:))

# init(maxNumberOfChildren:) (Swift)

**Framework:** GameplayKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Initializes a new R-tree object.

## Declaration

```swift
init(maxNumberOfChildren: Int)
```

## Parameters

- `maxNumberOfChildren`: The maximum number of children for each tree node.

<a id="return-value"></a>

## Return Value

A new R-tree object.

<a id="Discussion"></a>

## Discussion

An R-tree, like other tree data structures, is a collection of nodes, each of which contains one of the objects stored in the tree. You don’t directly interact with nodes—GameplayKit automatically creates and manages them, so you interact only with the objects the nodes contain. However, the `maxNumberOfChildren` parameter determines when the R-tree automatically reorganizes its internal structure, and thus the performance of the add and search operations.

A larger `maxNumberOfChildren` value means that the tree reorganizes itself less often. Therefore, the performance of the [addElement(\_:boundingRectMin:boundingRectMax:splitStrategy:)](addelement%28__boundingrectmin_boundingrectmax_splitstrategy_%29.md) method is faster (on average, across many calls). But because each node contains a larger number of elements, the performance of the [elements(inBoundingRectMin:rectMax:)](elements%28inboundingrectmin_rectmax_%29.md) method is slower (on average). A smaller `maxNumberOfChildren` value reverses the situation, improving performance for search operations at the cost of performance for add operations.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

# initWithMaxNumberOfChildren: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Initializes a new R-tree object.

## Declaration

```objectivec
- (instancetype) initWithMaxNumberOfChildren:(NSUInteger) maxNumberOfChildren;
```

## Parameters

- `maxNumberOfChildren`: The maximum number of children for each tree node.

<a id="return-value"></a>

## Return Value

A new R-tree object.

<a id="Discussion"></a>

## Discussion

An R-tree, like other tree data structures, is a collection of nodes, each of which contains one of the objects stored in the tree. You don’t directly interact with nodes—GameplayKit automatically creates and manages them, so you interact only with the objects the nodes contain. However, the `maxNumberOfChildren` parameter determines when the R-tree automatically reorganizes its internal structure, and thus the performance of the add and search operations.

A larger `maxNumberOfChildren` value means that the tree reorganizes itself less often. Therefore, the performance of the [addElement:boundingRectMin:boundingRectMax:splitStrategy:](addelement%28__boundingrectmin_boundingrectmax_splitstrategy_%29.md) method is faster (on average, across many calls). But because each node contains a larger number of elements, the performance of the [elementsInBoundingRectMin:rectMax:](elements%28inboundingrectmin_rectmax_%29.md) method is slower (on average). A smaller `maxNumberOfChildren` value reverses the situation, improving performance for search operations at the cost of performance for add operations.

For more information, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

## See Also

### Creating an R-Tree

- [treeWithMaxNumberOfChildren:](treewithmaxnumberofchildren_.md): Creates a new R-tree object.
