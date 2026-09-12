> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/configuration/output-swift.struct/init(colorpixelformat:depthpixelformat:)](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/configuration/output-swift.struct/init(colorpixelformat:depthpixelformat:))

# init(colorPixelFormat:depthPixelFormat:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates an output configuration with the given color and depth pixel formats.

## Declaration

```swift
init(colorPixelFormat: MTLPixelFormat?, depthPixelFormat: MTLPixelFormat? = nil)
```

## Parameters

- `colorPixelFormat`: The pixel format of the color attachment, or `nil` for depth-only passes.
- `depthPixelFormat`: The pixel format of the depth attachment, or `nil` to omit depth. Defaults to `nil`.
