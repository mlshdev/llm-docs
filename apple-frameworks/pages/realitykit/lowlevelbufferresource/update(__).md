> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelbufferresource/update(_:)](https://developer.apple.com/documentation/realitykit/lowlevelbufferresource/update(_:))

# update(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Updates the buffer resource in place synchronously on the CPU.

## Declaration

```swift
final func update<R, E>(_ body: @_lifetime(0: copy 0) (inout MutableRawSpan) throws(E) -> R) throws(E) -> R where E : Error, R : ~Copyable
```

## Parameters

- `body`: A closure that receives a mutable span over the buffer’s bytes for in-place modification.

<a id="discussion"></a>

## Discussion

You pass a closure that receives a mutable span representing the contents of the buffer resource, which the closure may modify. This span is valid only for the duration of the closure.

> **Throws**

> Any error thrown by `body`.
