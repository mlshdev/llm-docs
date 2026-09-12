> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/computegraphcomponent/settexture(_:port:)](https://developer.apple.com/documentation/realitykit/computegraphcomponent/settexture(_:port:))

# setTexture(\_:port:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Binds a Metal texture to a parameter identified by its port address.

## Declaration

```swift
@discardableResult mutating func setTexture(_ texture: (any MTLTexture)?, port: ComputeNodeGraph.Port.Address) -> Bool
```

## Parameters

- `texture`: The `MTLTexture` to bind, or `nil` to unbind the current texture.
- `port`: The port address identifying the texture parameter.

<a id="return-value"></a>

## Return Value

`true` if the port was found and the texture was set; `false` otherwise.
