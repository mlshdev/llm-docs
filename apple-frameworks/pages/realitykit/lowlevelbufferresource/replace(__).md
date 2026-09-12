> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelbufferresource/replace(_:)](https://developer.apple.com/documentation/realitykit/lowlevelbufferresource/replace(_:))

# replace(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Replaces the entire contents of the buffer resource synchronously on the CPU.

## Declaration

```swift
final func replace<R, E>(_ body: @_lifetime(0: copy 0) (inout MutableRawSpan) throws(E) -> R) throws(E) -> R where E : Error, R : ~Copyable
```

## Parameters

- `body`: A closure that receives a mutable span over the buffer’s bytes and fully populates it.

<a id="discussion"></a>

## Discussion

You pass a closure that receives a mutable span representing the contents of the buffer resource. Upon entry the buffer resource’s contents are undefined; the closure is responsible for populating it with valid data. This span is valid only for the duration of the closure.

> **Throws**

> Any error thrown by `body`.

## See Also

### Replacing buffer contents

- [replace(commandBuffer:)](replace%28commandbuffer_%29.md): Returns a Metal buffer you populate on the GPU with the new contents of the buffer resource.
