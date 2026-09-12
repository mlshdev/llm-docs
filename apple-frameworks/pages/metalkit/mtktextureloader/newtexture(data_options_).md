> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtktextureloader/newtexture(data:options:)](https://developer.apple.com/documentation/metalkit/mtktextureloader/newtexture(data:options:))

# newTexture(data:options:) (Swift)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Synchronously creates a new Metal texture from an in-memory representation of the texture’s data.

## Declaration

```swift
func newTexture(data: Data, options: [MTKTextureLoader.Option : Any]? = nil) throws -> any MTLTexture
```

## Parameters

- `data`: The [NSData](../../foundation/nsdata.md) object containing image data.
- `options`: A dictionary describing any additional texture loading steps. See `Texture Loading Options`.

<a id="return-value"></a>

## Return Value

A fully loaded and initialized Metal texture, or `nil` if an error occurred.

## See Also

### Loading Textures from In-Memory Data Representations

- [newTexture(data:options:completionHandler:)](newtexture%28data_options_completionhandler_%29.md): Asynchronously creates a new Metal texture from an in-memory representation of the texture’s data.

# newTextureWithData:options:error: (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Synchronously creates a new Metal texture from an in-memory representation of the texture’s data.

## Declaration

```objectivec
- (id<MTLTexture>) newTextureWithData:(NSData *) data options:(NSDictionary<NSString *,id> *) options error:(NSError **) error;
```

## Parameters

- `data`: The [NSData](../../foundation/nsdata.md) object containing image data.
- `options`: A dictionary describing any additional texture loading steps. See `Texture Loading Options`.
- `error`: A pointer to an [NSError](../../foundation/nserror.md) object if an error occurred, or `nil` if the texture was fully loaded and initialized.

<a id="return-value"></a>

## Return Value

A fully loaded and initialized Metal texture, or `nil` if an error occurred.

## See Also

### Loading Textures from In-Memory Data Representations

- [newTextureWithData:options:completionHandler:](newtexture%28data_options_completionhandler_%29.md): Asynchronously creates a new Metal texture from an in-memory representation of the texture’s data.
