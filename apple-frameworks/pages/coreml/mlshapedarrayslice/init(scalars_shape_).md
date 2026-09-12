> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarrayslice/init(scalars:shape:)](https://developer.apple.com/documentation/coreml/mlshapedarrayslice/init(scalars:shape:))

# init(scalars:shape:)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 1.0+ · watchOS 11.0+

Initialize with a sequence and the shape.

## Declaration

```swift
init<S>(scalars: S, shape: [Int]) where Scalar == S.Element, S : Sequence
```

## Parameters

- `scalars`: The initializing sequence.
- `shape`: The shape

<a id="discussion"></a>

## Discussion

The length of the sequence must not be less than the number of scalars in the shaped array.

## See Also

### Creating a shaped array slice

- [init(scalar:)](init%28scalar_%29.md): Creates a shaped array slice with exactly one value and zero dimensions.
- [init(mutating:shape:)](init%28mutating_shape_%29.md): Creates a new `MLShapedArraySlice` using a pixel buffer as the backing storage.
