> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontextstandalone/maketextureresource(descriptor:)](https://developer.apple.com/documentation/realitykit/lowlevelrendercontextstandalone/maketextureresource(descriptor:))

# makeTextureResource(descriptor:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a texture resource from the given descriptor.

## Declaration

```swift
final func makeTextureResource(descriptor: LowLevelTextureResource.Descriptor) throws -> LowLevelTextureResource
```

## Parameters

- `descriptor`: The texture type, pixel format, dimensions, and usage flags.

<a id="return-value"></a>

## Return Value

A newly created [LowLevelTextureResource](../lowleveltextureresource.md).

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the descriptor is invalid or if the underlying GPU allocation fails.
