> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/computegraphcomponent/settexture(_:at:)

# setTexture(\_:at:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Binds a Metal texture to a parameter at the given index.

## Declaration

```swift
mutating func setTexture(_ texture: (any MTLTexture)?, at index: Int)
```

## Parameters

- `texture`: The `MTLTexture` to bind, or `nil` to unbind the current texture.
- `index`: The index of the texture parameter in the texture table.
