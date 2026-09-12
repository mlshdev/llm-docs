> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrenderer/output-swift.struct/init(color:depth:)](https://developer.apple.com/documentation/realitykit/lowlevelrenderer/output-swift.struct/init(color:depth:))

# init(color:depth:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates an output configuration with the given color and depth texture targets.

## Declaration

```swift
init(color: LowLevelRenderer.Output.Texture? = nil, depth: LowLevelRenderer.Output.Texture? = nil)
```

## Parameters

- `color`: The color output texture, or `nil` for depth-only passes. Defaults to `nil`.
- `depth`: The depth output texture, or `nil` to omit depth. Defaults to `nil`.

## See Also

### Creating an output

- [LowLevelRenderer.Output.Texture](texture.md): A reference to a specific mip level, slice, and depth plane within a Metal texture.
