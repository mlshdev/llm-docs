> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarrayprotocol/subscript(scalarat:)](https://developer.apple.com/documentation/coreml/mlshapedarrayprotocol/subscript(scalarat:))

# subscript(scalarAt:)

**Framework:** Core ML  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Accesses an element and a multidimensional location.

## Declaration

```swift
subscript<C>(scalarAt indices: C) -> Self.Scalar where C : Collection, C.Element == Int { get set }
```

## Parameters

- `indices`: An integer collection that represents a position in the shaped array in which each integer is an index in the corresponding dimension.

## Default Implementations

### MLShapedArrayProtocol Implementations

- [subscript(scalarAt:)](subscript%28scalarat_%29-6yvwm.md): The scalar value at the indices.

## See Also

### Accessing elements

- [subscript(\_:)](subscript%28__%29.md): A slice of the shaped array for the selected leading axes.
