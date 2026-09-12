> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarrayslice/init(data:shape:strides:)](https://developer.apple.com/documentation/coreml/mlshapedarrayslice/init(data:shape:strides:))

# init(data:shape:strides:)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a shaped array with defined data, shape, and strides.

## Declaration

```swift
init(data: Data, shape: [Int], strides: [Int])
```

## Parameters

- `data`: A block of data that initializes the array.
- `shape`: The shape of the array.
- `strides`: The strides of the array.

## See Also

### Creating a shaped array slice with data

- [init(data:shape:)](init%28data_shape_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Creates a shaped array with a defined data and shape.
