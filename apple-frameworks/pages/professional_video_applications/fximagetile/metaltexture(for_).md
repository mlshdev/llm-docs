> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fximagetile/metaltexture(for:)](https://developer.apple.com/documentation/professional_video_applications/fximagetile/metaltexture(for:))

# metalTexture(for:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Retrieve a Metal texture from the IOSurface for rendering on the passed-in device. The returned texture is autoreleased.

## Declaration

```swift
func metalTexture(for metalDevice: (any MTLDevice)!) -> (any MTLTexture)!
```

## See Also

### Instance Methods

- [openGLTexture(forContext:)](opengltexture%28forcontext_%29.md): Deprecated. Retrieve an OpenGL texture from the [ioSurface](iosurface.md) for rendering with the passed-in context. You are responsible for deleting this texture.

# metalTextureForDevice: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Retrieve a Metal texture from the IOSurface for rendering on the passed-in device. The returned texture is autoreleased.

## Declaration

```objectivec
- (id<MTLTexture>) metalTextureForDevice:(id<MTLDevice>) metalDevice;
```

## See Also

### Instance Methods

- [openGLTextureForContext:](opengltexture%28forcontext_%29.md): Deprecated. Retrieve an OpenGL texture from the [ioSurface](iosurface.md) for rendering with the passed-in context. You are responsible for deleting this texture.
