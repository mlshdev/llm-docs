> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource/drawablequeue-swift.class/pixelformat](https://developer.apple.com/documentation/realitykit/textureresource/drawablequeue-swift.class/pixelformat)

# pixelFormat

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The size and bit layout of all pixels in each drawable’s texture.

## Declaration

```swift
var pixelFormat: MTLPixelFormat { get }
```

## See Also

### Working with queues

- [allowsNextDrawableTimeout](allowsnextdrawabletimeout.md): A Boolean value that determines whether requests for a new drawable expire if the system can’t satisfy them.
- [height](height.md): The height of each drawable’s texture in pixels.
- [mipmapsMode](mipmapsmode.md): Options that determine how mipmaps are handled for each drawable’s textures.
- [usage](usage.md): Options that determine how you can use each drawable’s textures.
- [width](width.md): The width of each drawable’s texture in pixels.
- [nextDrawable()](nextdrawable%28%29.md): Returns drawable when one is available, blocking the caller in the meantime.
