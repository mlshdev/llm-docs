> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarray/init(data:shape:strides:)](https://developer.apple.com/documentation/coreml/mlshapedarray/init(data:shape:strides:))

# init(data:shape:strides:)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a shaped array from a block of data, a shape, and strides.

## Declaration

```swift
init(data: Data, shape: [Int], strides: [Int])
```

## Parameters

- `data`: The block of data that holds the contents of the shaped array.
- `shape`: The shape of the array.
- `strides`: The strides of the array.

## See Also

### Creating a shaped array from data

- [init(data:shape:)](init%28data_shape_%29.md): Conforms when `Scalar` conforms to `MLShapedArrayScalar`. Creates a shaped array from a block of data and a shape.
