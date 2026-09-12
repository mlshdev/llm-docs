> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/ndarray/mutableview/copyelements(fromcontentsof:)](https://developer.apple.com/documentation/coreai/ndarray/mutableview/copyelements(fromcontentsof:))

# copyElements(fromContentsOf:)

**Framework:** Core AI  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Copies the elements from `collection` into this view in row-major order.

## Declaration

```swift
@export(implementation) mutating func copyElements(fromContentsOf collection: some Collection<Element>)
```

## Parameters

- `collection`: The collection to be copied from.

<a id="discussion"></a>

## Discussion

The number of elements in `collection` must be less than or equal to `layout.scalarCount`.

## See Also

### Writing data

- [copyElements(from:)](copyelements%28from_%29.md): Conforms when `Element` conforms to `BitwiseCopyable`. Copies the elements from `sequence` into this view in row-major order.
