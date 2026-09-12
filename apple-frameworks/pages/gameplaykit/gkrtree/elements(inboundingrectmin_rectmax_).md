> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkrtree/elements(inboundingrectmin:rectmax:)](https://developer.apple.com/documentation/gameplaykit/gkrtree/elements(inboundingrectmin:rectmax:))

# elements(inBoundingRectMin:rectMax:) (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Searches the tree and returns all elements found within the specified bounding region.

## Declaration

```swift
func elements(inBoundingRectMin rectMin: vector_float2, rectMax: vector_float2) -> [ElementType]
```

## Parameters

- `rectMin`: The corner (with the lowest x- and y-coordinate values) of the bounding region to search.
- `rectMax`: The corner (with the highest x- and y-coordinate values) of the bounding region to search.

<a id="return-value"></a>

## Return Value

An array of objects stored in the tree whose bounding regions overlap the specified region. The array is empty if no such objects are found.

## See Also

### Searching for Elements

- [queryReserve](queryreserve.md): The number of elements to reserve space for when searching.

# elementsInBoundingRectMin:rectMax: (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Searches the tree and returns all elements found within the specified bounding region.

## Declaration

```objectivec
- (NSArray<NSObject *> *) elementsInBoundingRectMin:(vector_float2) rectMin rectMax:(vector_float2) rectMax;
```

## Parameters

- `rectMin`: The corner (with the lowest x- and y-coordinate values) of the bounding region to search.
- `rectMax`: The corner (with the highest x- and y-coordinate values) of the bounding region to search.

<a id="return-value"></a>

## Return Value

An array of objects stored in the tree whose bounding regions overlap the specified region. The array is empty if no such objects are found.

## See Also

### Searching for Elements

- [queryReserve](queryreserve.md): The number of elements to reserve space for when searching.
