> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/drawablequeue-swift.class/allowsnextdrawabletimeout](https://developer.apple.com/documentation/realitykit/textureresource/drawablequeue-swift.class/allowsnextdrawabletimeout)

# allowsNextDrawableTimeout

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A Boolean value that determines whether requests for a new drawable expire if the system can’t satisfy them.

## Declaration

```swift
var allowsNextDrawableTimeout: Bool
```

## See Also

### Working with queues

- [height](height.md): The height of each drawable’s texture in pixels.
- [mipmapsMode](mipmapsmode.md): Options that determine how mipmaps are handled for each drawable’s textures.
- [pixelFormat](pixelformat.md): The size and bit layout of all pixels in each drawable’s texture.
- [usage](usage.md): Options that determine how you can use each drawable’s textures.
- [width](width.md): The width of each drawable’s texture in pixels.
- [nextDrawable()](nextdrawable%28%29.md): Returns drawable when one is available, blocking the caller in the meantime.
