> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreml/mlshapedarrayprotocol/fill(with:)](https://developer.apple.com/documentation/coreml/mlshapedarrayprotocol/fill(with:))

# fill(with:)

**Framework:** Core ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Fills the array with a value.

## Declaration

```swift
mutating func fill(with value: Self.Scalar)
```

## Parameters

- `value`: The filling value

## See Also

### Modifying a shaped array type

- [withUnsafeMutableShapedBufferPointer(\_:)](withunsafemutableshapedbufferpointer%28__%29.md): Provides read-write access of the shaped array’s underlying memory to a closure.
