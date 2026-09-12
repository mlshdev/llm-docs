> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontextstandalone/makebufferresource(descriptor:)](https://developer.apple.com/documentation/realitykit/lowlevelrendercontextstandalone/makebufferresource(descriptor:))

# makeBufferResource(descriptor:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a GPU-managed buffer resource from the given descriptor.

## Declaration

```swift
final func makeBufferResource(descriptor: LowLevelBufferResource.Descriptor) throws -> LowLevelBufferResource
```

## Parameters

- `descriptor`: The capacity and alignment requirements for the buffer.

<a id="return-value"></a>

## Return Value

A newly created [LowLevelBufferResource](../lowlevelbufferresource.md).

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the descriptor is invalid or if the underlying GPU allocation fails.
