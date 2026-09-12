> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontextstandalone/makemeshresource(descriptor:)](https://developer.apple.com/documentation/realitykit/lowlevelrendercontextstandalone/makemeshresource(descriptor:))

# makeMeshResource(descriptor:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a mesh resource from the given descriptor.

## Declaration

```swift
final func makeMeshResource(descriptor: LowLevelMeshResource.Descriptor) throws -> LowLevelMeshResource
```

## Parameters

- `descriptor`: The vertex and index buffer layout to allocate.

<a id="return-value"></a>

## Return Value

A newly created [LowLevelMeshResource](../lowlevelmeshresource.md).

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the descriptor is invalid or if the underlying GPU allocation fails.
