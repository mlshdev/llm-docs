> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtktextureloader/newtexture(cgimage:options:)](https://developer.apple.com/documentation/metalkit/mtktextureloader/newtexture(cgimage:options:))

# newTexture(cgImage:options:) (Swift)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Synchronously loads image data and creates a new Metal texture from a given bitmap image.

## Declaration

```swift
func newTexture(cgImage: CGImage, options: [MTKTextureLoader.Option : Any]? = nil) throws -> any MTLTexture
```

## Parameters

- `cgImage`: The [CGImage](../../coregraphics/cgimage.md) from which to load image data.
- `options`: A dictionary describing any additional texture loading steps. See `Texture Loading Options`.

<a id="return-value"></a>

## Return Value

A fully loaded and initialized Metal texture, or `nil` if an error occurred.

## See Also

### Loading Textures from Core Graphics Images

- [newTexture(cgImage:options:completionHandler:)](newtexture%28cgimage_options_completionhandler_%29.md): Asynchronously loads image data and creates a new Metal texture from a given bitmap image.

# newTextureWithCGImage:options:error: (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Synchronously loads image data and creates a new Metal texture from a given bitmap image.

## Declaration

```objectivec
- (id<MTLTexture>) newTextureWithCGImage:(CGImageRef) cgImage options:(NSDictionary<NSString *,id> *) options error:(NSError **) error;
```

## Parameters

- `cgImage`: The [CGImageRef](../../coregraphics/cgimage.md) from which to load image data.
- `options`: A dictionary describing any additional texture loading steps. See `Texture Loading Options`.
- `error`: A pointer to an [NSError](../../foundation/nserror.md) object if an error occurred, or `nil` if the texture was fully loaded and initialized.

<a id="return-value"></a>

## Return Value

A fully loaded and initialized Metal texture, or `nil` if an error occurred.

## See Also

### Loading Textures from Core Graphics Images

- [newTextureWithCGImage:options:completionHandler:](newtexture%28cgimage_options_completionhandler_%29.md): Asynchronously loads image data and creates a new Metal texture from a given bitmap image.
