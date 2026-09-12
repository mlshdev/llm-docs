> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtktextureloader/newtexture(texture:options:)](https://developer.apple.com/documentation/metalkit/mtktextureloader/newtexture(texture:options:))

# newTexture(texture:options:) (Swift)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Synchronously loads image data and creates a Metal texture from the specified Model I/O texture.

## Declaration

```swift
func newTexture(texture: MDLTexture, options: [MTKTextureLoader.Option : Any]? = nil) throws -> any MTLTexture
```

## Parameters

- `texture`: A Model I/O texture object containing image data from which to create the texture.
- `options`: A dictionary describing any additional texture loading steps. See `Texture Loading Options`.

<a id="return-value"></a>

## Return Value

A fully loaded and initialized Metal texture, or `nil` if an error occurred.

## See Also

### Loading Textures from Model I/O Representations

- [newTexture(texture:options:completionHandler:)](newtexture%28texture_options_completionhandler_%29.md): Asynchronously loads image data and creates a Metal texture from the specified Model I/O texture.

# newTextureWithMDLTexture:options:error: (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Synchronously loads image data and creates a Metal texture from the specified Model I/O texture.

## Declaration

```objectivec
- (id<MTLTexture>) newTextureWithMDLTexture:(MDLTexture *) texture options:(NSDictionary<NSString *,id> *) options error:(NSError **) error;
```

## Parameters

- `texture`: A Model I/O texture object containing image data from which to create the texture.
- `options`: A dictionary describing any additional texture loading steps. See `Texture Loading Options`.
- `error`: A pointer to an [NSError](../../foundation/nserror.md) object if an error occurred, or `nil` if the texture was fully loaded and initialized.

<a id="return-value"></a>

## Return Value

A fully loaded and initialized Metal texture, or `nil` if an error occurred.

## See Also

### Loading Textures from Model I/O Representations

- [newTextureWithMDLTexture:options:completionHandler:](newtexture%28texture_options_completionhandler_%29.md): Asynchronously loads image data and creates a Metal texture from the specified Model I/O texture.
