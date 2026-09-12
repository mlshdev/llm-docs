> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowleveltexture/init(descriptor:)](https://developer.apple.com/documentation/realitykit/lowleveltexture/init(descriptor:))

# init(descriptor:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a low-level texture from a descriptor.

## Declaration

```swift
@MainActor init(descriptor: LowLevelTexture.Descriptor) throws
```

## Parameters

- `descriptor`: An object that defines the structure of the low-level texture.

<a id="discussion"></a>

## Discussion

> **Throws**

> If the descriptor is invalid or if memory was not allocated successfully.
