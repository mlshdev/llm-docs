> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit/gkrtree/queryreserve](https://developer.apple.com/documentation/gameplaykit/gkrtree/queryreserve)

# queryReserve (Swift)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The number of elements to reserve space for when searching.

## Declaration

```swift
var queryReserve: Int { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to optimize for search speed at the cost of memory usage during a search. With the default value of `1`, when you use the [elements(inBoundingRectMin:rectMax:)](elements%28inboundingrectmin_rectmax_%29.md) method, the tree examines potential search results one at a time. If you specify a larger number, the tree allocates additional memory to process several elements together when searching.

## See Also

### Searching for Elements

- [elements(inBoundingRectMin:rectMax:)](elements%28inboundingrectmin_rectmax_%29.md): Searches the tree and returns all elements found within the specified bounding region.

# queryReserve (Objective-C)

**Framework:** GameplayKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The number of elements to reserve space for when searching.

## Declaration

```objectivec
@property NSUInteger queryReserve;
```

<a id="Discussion"></a>

## Discussion

Use this property to optimize for search speed at the cost of memory usage during a search. With the default value of `1`, when you use the [elementsInBoundingRectMin:rectMax:](elements%28inboundingrectmin_rectmax_%29.md) method, the tree examines potential search results one at a time. If you specify a larger number, the tree allocates additional memory to process several elements together when searching.

## See Also

### Searching for Elements

- [elementsInBoundingRectMin:rectMax:](elements%28inboundingrectmin_rectmax_%29.md): Searches the tree and returns all elements found within the specified bounding region.
