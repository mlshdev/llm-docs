> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelargumenttable/texture(at:)](https://developer.apple.com/documentation/realitykit/lowlevelargumenttable/texture(at:))

# texture(at:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns the texture bound at the given index, or `nil` if the slot is unset.

## Declaration

```swift
final func texture(at index: Int) -> LowLevelTextureResource?
```

## Parameters

- `index`: The slot index within the argument table’s texture array.

<a id="return-value"></a>

## Return Value

The texture resource at `index`, or `nil` if the slot is unoccupied.

## See Also

### Accessing textures

- [setTexture(\_:at:)](settexture%28__at_%29.md): Binds a texture to the slot at the given index.
