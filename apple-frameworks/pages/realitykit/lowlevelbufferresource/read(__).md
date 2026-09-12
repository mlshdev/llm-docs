> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelbufferresource/read(_:)](https://developer.apple.com/documentation/realitykit/lowlevelbufferresource/read(_:))

# read(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Reads the current contents of the buffer resource synchronously on the CPU.

## Declaration

```swift
final func read<R, E>(_ body: (RawSpan) throws(E) -> R) throws(E) -> R where E : Error, R : ~Copyable
```

## Parameters

- `body`: A closure that receives a read-only span over the buffer’s bytes.

<a id="discussion"></a>

## Discussion

You pass a closure that receives a read-only span representing the contents of the buffer resource. This span is valid only for the duration of the closure.

> **Throws**

> Any error thrown by `body`.

## See Also

### Reading buffer contents

- [read(commandBuffer:)](read%28commandbuffer_%29.md): Returns a Metal buffer containing the current contents of the buffer resource for GPU read operations.
