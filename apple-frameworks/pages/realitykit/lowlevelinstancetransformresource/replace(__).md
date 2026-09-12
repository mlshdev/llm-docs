> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelinstancetransformresource/replace(_:)](https://developer.apple.com/documentation/realitykit/lowlevelinstancetransformresource/replace(_:))

# replace(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Replaces all transform data synchronously on the CPU.

## Declaration

```swift
final func replace<R, E>(_ body: @_lifetime(0: copy 0) (inout MutableSpan<float4x4>) throws(E) -> R) throws(E) -> R where E : Error, R : ~Copyable
```

## Parameters

- `body`: A closure that receives a mutable span over the transform data and fully populates it.

<a id="discussion"></a>

## Discussion

You pass a closure that receives a mutable span representing the transform data. Upon entry the transform data is undefined; the closure is responsible for populating it with valid data. This span is valid only for the duration of the closure.

> **Throws**

> Any error thrown by `body`.

## See Also

### Replacing transform data

- [replace(commandBuffer:)](replace%28commandbuffer_%29.md): Returns a Metal buffer you populate on the GPU with the new transform data.
