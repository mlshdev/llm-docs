> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtktextureloader/newtextures(urls:options:error:)](https://developer.apple.com/documentation/metalkit/mtktextureloader/newtextures(urls:options:error:))

# newTextures(URLs:options:error:) (Swift)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Synchronously loads image data and creates new Metal textures from the specified list of URLs.

## Declaration

```swift
func newTextures(URLs: [URL], options: [MTKTextureLoader.Option : Any]? = nil, error: NSErrorPointer) -> [any MTLTexture]
```

## Parameters

- `URLs`: An array of URLs referencing files to load.
- `options`: A dictionary describing any additional texture loading steps. See `Texture Loading Options`.
- `error`: If all textures were fully loaded and initialized, this pointer is `nil` on output. If an error occurs while loading any of the specified URLs, this pointer refers to an [NSError](../../foundation/nserror.md) object describing the failure. (Which element in the `URLs` array the error corresponds to is undefined.)

<a id="return-value"></a>

## Return Value

An array of Metal textures, each corresponding to a URL listed in the `URLs` parameter. If an error occurs while loading a texture, the corresponding array element is an [NSNull](../../foundation/nsnull.md) object.

## See Also

### Loading Textures from URLs

- [newTexture(URL:options:)](newtexture%28url_options_%29.md): Synchronously loads image data and creates a new Metal texture from a given URL.
- [newTexture(URL:options:completionHandler:)](newtexture%28url_options_completionhandler_%29.md): Asynchronously loads image data and creates a new Metal texture from a given URL.
- [newTextures(URLs:options:completionHandler:)](newtextures%28urls_options_completionhandler_%29.md): Asynchronously loads image data and creates new Metal textures from the specified list of URLs.

# newTexturesWithContentsOfURLs:options:error: (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Synchronously loads image data and creates new Metal textures from the specified list of URLs.

## Declaration

```objectivec
- (NSArray<id<MTLTexture>> *) newTexturesWithContentsOfURLs:(NSArray<NSURL *> *) URLs options:(NSDictionary<NSString *,id> *) options error:(NSError **) error;
```

## Parameters

- `URLs`: An array of URLs referencing files to load.
- `options`: A dictionary describing any additional texture loading steps. See `Texture Loading Options`.
- `error`: If all textures were fully loaded and initialized, this pointer is `nil` on output. If an error occurs while loading any of the specified URLs, this pointer refers to an [NSError](../../foundation/nserror.md) object describing the failure. (Which element in the `URLs` array the error corresponds to is undefined.)

<a id="return-value"></a>

## Return Value

An array of Metal textures, each corresponding to a URL listed in the `URLs` parameter. If an error occurs while loading a texture, the corresponding array element is an [NSNull](../../foundation/nsnull.md) object.

## See Also

### Loading Textures from URLs

- [newTextureWithContentsOfURL:options:error:](newtexture%28url_options_%29.md): Synchronously loads image data and creates a new Metal texture from a given URL.
- [newTextureWithContentsOfURL:options:completionHandler:](newtexture%28url_options_completionhandler_%29.md): Asynchronously loads image data and creates a new Metal texture from a given URL.
- [newTexturesWithContentsOfURLs:options:completionHandler:](newtextures%28urls_options_completionhandler_%29.md): Asynchronously loads image data and creates new Metal textures from the specified list of URLs.
