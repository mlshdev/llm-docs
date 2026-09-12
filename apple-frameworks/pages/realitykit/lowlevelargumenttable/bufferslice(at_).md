> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelargumenttable/bufferslice(at:)](https://developer.apple.com/documentation/realitykit/lowlevelargumenttable/bufferslice(at:))

# bufferSlice(at:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the buffer slice bound at the given index, or `nil` if the slot is unset.

## Declaration

```swift
final func bufferSlice(at index: Int) -> LowLevelBufferSlice?
```

## Parameters

- `index`: The slot index within the argument table’s buffer array.

<a id="return-value"></a>

## Return Value

The buffer slice at `index`, or `nil` if the slot is unoccupied.

## See Also

### Accessing buffer slices

- [setBufferSlice(\_:at:)](setbufferslice%28__at_%29.md): Binds a buffer slice to the slot at the given index.
