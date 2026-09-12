> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkrtree/removeelement(_:boundingrectmin:boundingrectmax:)](https://developer.apple.com/documentation/gameplaykit/gkrtree/removeelement(_:boundingrectmin:boundingrectmax:))

# removeElement(\_:boundingRectMin:boundingRectMax:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Removes the specified object from the tree.

## Declaration

```swift
func removeElement(_ element: ElementType, boundingRectMin: vector_float2, boundingRectMax: vector_float2)
```

## Parameters

- `element`: The object to be removed from the tree.
- `boundingRectMin`: The corner (with the lowest x- and y-coordinate values) of the bounding region to search for the object to remove.
- `boundingRectMax`: The corner (with the highest x- and y-coordinate values) of the bounding region to search for the object to remove.

<a id="Discussion"></a>

## Discussion

Removing an object from the tree requires first finding that object within the tree’s internal structure. Because the tree organizes itself spatially, you must search for the node to be removed based on the region it occupies. The `boundingRectMin` and `boundingRectMax` parameters identify this region—to remove an element from the tree, those parameters must identify a region which entirely contains (or is the same as) the region you specified when adding that node to the tree with the [addElement(\_:boundingRectMin:boundingRectMax:splitStrategy:)](addelement%28__boundingrectmin_boundingrectmax_splitstrategy_%29.md) method.

## See Also

### Adding and Removing Elements

- [addElement(\_:boundingRectMin:boundingRectMax:splitStrategy:)](addelement%28__boundingrectmin_boundingrectmax_splitstrategy_%29.md): Adds the specified object to the tree.

# removeElement:boundingRectMin:boundingRectMax: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Removes the specified object from the tree.

## Declaration

```objectivec
- (void) removeElement:(ElementType) element boundingRectMin:(vector_float2) boundingRectMin boundingRectMax:(vector_float2) boundingRectMax;
```

## Parameters

- `element`: The object to be removed from the tree.
- `boundingRectMin`: The corner (with the lowest x- and y-coordinate values) of the bounding region to search for the object to remove.
- `boundingRectMax`: The corner (with the highest x- and y-coordinate values) of the bounding region to search for the object to remove.

<a id="Discussion"></a>

## Discussion

Removing an object from the tree requires first finding that object within the tree’s internal structure. Because the tree organizes itself spatially, you must search for the node to be removed based on the region it occupies. The `boundingRectMin` and `boundingRectMax` parameters identify this region—to remove an element from the tree, those parameters must identify a region which entirely contains (or is the same as) the region you specified when adding that node to the tree with the [addElement:boundingRectMin:boundingRectMax:splitStrategy:](addelement%28__boundingrectmin_boundingrectmax_splitstrategy_%29.md) method.

## See Also

### Adding and Removing Elements

- [addElement:boundingRectMin:boundingRectMax:splitStrategy:](addelement%28__boundingrectmin_boundingrectmax_splitstrategy_%29.md): Adds the specified object to the tree.
