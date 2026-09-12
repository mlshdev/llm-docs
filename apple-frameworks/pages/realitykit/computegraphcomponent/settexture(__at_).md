> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/computegraphcomponent/settexture(_:at:)](https://developer.apple.com/documentation/realitykit/computegraphcomponent/settexture(_:at:))

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
