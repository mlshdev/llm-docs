> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreml/mlshapedarray/init(data:shape:)

# init(data:shape:)

**Framework:** Core ML  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a shaped array from a block of data and a shape.

## Declaration

```swift
init(data: Data, shape: [Int])
```

## Parameters

- `data`: The block of data that holds the contents of the shaped array.
- `shape`: The shape of the array.

## See Also

### Creating a shaped array from data

- [init(data:shape:strides:)](init%28data_shape_strides_%29.md): Creates a shaped array from a block of data, a shape, and strides.
