> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtktextureloader/newtexture(url:options:)](https://developer.apple.com/documentation/metalkit/mtktextureloader/newtexture(url:options:))

# newTexture(URL:options:) (Swift)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Synchronously loads image data and creates a new Metal texture from a given URL.

## Declaration

```swift
func newTexture(URL: URL, options: [MTKTextureLoader.Option : Any]? = nil) throws -> any MTLTexture
```

## Parameters

- `URL`: The URL of the file to load.
- `options`: A dictionary describing any additional texture loading steps. See `Texture Loading Options`.

<a id="return-value"></a>

## Return Value

A fully loaded and initialized Metal texture, or `nil` if an error occurred.

## See Also

### Loading Textures from URLs

- [newTexture(URL:options:completionHandler:)](newtexture%28url_options_completionhandler_%29.md): Asynchronously loads image data and creates a new Metal texture from a given URL.
- [newTextures(URLs:options:error:)](newtextures%28urls_options_error_%29.md): Synchronously loads image data and creates new Metal textures from the specified list of URLs.
- [newTextures(URLs:options:completionHandler:)](newtextures%28urls_options_completionhandler_%29.md): Asynchronously loads image data and creates new Metal textures from the specified list of URLs.

# newTextureWithContentsOfURL:options:error: (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Synchronously loads image data and creates a new Metal texture from a given URL.

## Declaration

```objectivec
- (id<MTLTexture>) newTextureWithContentsOfURL:(NSURL *) URL options:(NSDictionary<NSString *,id> *) options error:(NSError **) error;
```

## Parameters

- `URL`: The URL of the file to load.
- `options`: A dictionary describing any additional texture loading steps. See `Texture Loading Options`.
- `error`: A pointer to an [NSError](../../foundation/nserror.md) object if an error occurred, or `nil` if the texture was fully loaded and initialized.

<a id="return-value"></a>

## Return Value

A fully loaded and initialized Metal texture, or `nil` if an error occurred.

## See Also

### Loading Textures from URLs

- [newTextureWithContentsOfURL:options:completionHandler:](newtexture%28url_options_completionhandler_%29.md): Asynchronously loads image data and creates a new Metal texture from a given URL.
- [newTexturesWithContentsOfURLs:options:error:](newtextures%28urls_options_error_%29.md): Synchronously loads image data and creates new Metal textures from the specified list of URLs.
- [newTexturesWithContentsOfURLs:options:completionHandler:](newtextures%28urls_options_completionhandler_%29.md): Asynchronously loads image data and creates new Metal textures from the specified list of URLs.
