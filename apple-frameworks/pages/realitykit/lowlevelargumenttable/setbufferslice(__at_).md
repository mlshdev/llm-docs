> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelargumenttable/setbufferslice(_:at:)](https://developer.apple.com/documentation/realitykit/lowlevelargumenttable/setbufferslice(_:at:))

# setBufferSlice(\_:at:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Binds a buffer slice to the slot at the given index.

## Declaration

```swift
final func setBufferSlice(_ bufferSlice: LowLevelBufferSlice, at index: Int) throws(LowLevelRenderContextError)
```

## Parameters

- `bufferSlice`: The buffer slice to bind to the slot. Its size must be no smaller than the slot’s [size](descriptor-swift.struct/buffer/size.md).
- `index`: The slot index within the argument table’s buffer array.

<a id="discussion"></a>

## Discussion

> **Throws**

> [LowLevelRenderContextError](../lowlevelrendercontexterror.md) if `index` is out of range or `bufferSlice` is incompatible with the slot.

## See Also

### Accessing buffer slices

- [bufferSlice(at:)](bufferslice%28at_%29.md): Returns the buffer slice bound at the given index, or `nil` if the slot is unset.
