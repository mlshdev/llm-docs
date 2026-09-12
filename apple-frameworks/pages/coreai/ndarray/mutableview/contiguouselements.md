> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/mutableview/contiguouselements](https://developer.apple.com/documentation/coreai/ndarray/mutableview/contiguouselements)

# contiguousElements

**Framework:** Core AI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns a `MutableSpan` over the backing memory of this view if the memory is in a contiguous layout, otherwise returns `nil`.

## Declaration

```swift
@export(implementation) var contiguousElements: MutableSpan<Element>? { get }
```

<a id="discussion"></a>

## Discussion

> **Note**

> `contiguous` here refers to elements in row-major order with zero padding.

## See Also

### Accessing elements

- [subscript(scalarAt:)](subscript%28scalarat_%29.md): Conforms when `Element` conforms to `BitwiseCopyable`. Access the element at a multi-dimensional `index`.
