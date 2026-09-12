> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/builder/slicerange](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/slicerange)

# BNNSGraph.Builder.SliceRange

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A structure that represents a range.

## Declaration

```swift
struct SliceRange
```

<a id="overview"></a>

## Overview

You can use standard Swift range operators to specify the range in slice operation. However, the `BNNSGraph.Builder.SliceRange` structure provides additional functionality:

- You can specify a `stop` that’s less that the `start` value.
- You can supply negative `startIndex` and `endIndex` values to indicate the index is relative to the end of sequence
- You can specify the stride.
- You can specify an `UnboundedRange` with the `fillAll` constant.

For example, the following code shows a slice operation that selects dimensions using a `SliceRange`, a Swift range, and an integer.

```
    let slice = src[BNNSGraph.Builder.SliceRange(startIndex: 1,
                                                 endIndex: -1),
                    5 ... 20,
                    3]
```

## Topics

### Initializers

- [init(startIndex:endIndex:)](slicerange/init%28startindex_endindex_%29.md): Returns a new slice range structure.

### Instance Properties

- [endIndex](slicerange/endindex.md)
- [startIndex](slicerange/startindex.md)

### Type Properties

- [fillAll](slicerange/fillall.md): The same as the ellipsis literal `...` used to indicate unspecified dimensions of the tensor.

## Relationships

### Conforms To

- [BNNSGraph.Builder.SliceIndex](sliceindex.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
