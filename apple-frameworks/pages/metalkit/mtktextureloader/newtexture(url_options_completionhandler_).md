> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtktextureloader/newtexture(url:options:completionhandler:)](https://developer.apple.com/documentation/metalkit/mtktextureloader/newtexture(url:options:completionhandler:))

# newTexture(URL:options:completionHandler:) (Swift)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Asynchronously loads image data and creates a new Metal texture from a given URL.

## Declaration

```swift
func newTexture(URL: URL, options: [MTKTextureLoader.Option : Any]? = nil, completionHandler: @escaping @Sendable ((any MTLTexture)?, (any Error)?) -> Void)
```

```swift
func newTexture(URL: URL, options: [MTKTextureLoader.Option : Any]? = nil) async throws -> any MTLTexture
```

## Parameters

- `URL`: The URL of the file to load.
- `options`: A dictionary describing any additional texture loading steps. See `Texture Loading Options`.
- `completionHandler`: A block called when the texture has been loaded and fully initialized.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func newTexture(URL: URL, options: [MTKTextureLoader.Option : Any]? = nil) async throws -> MTLTexture
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Loading Textures from URLs

- [newTexture(URL:options:)](newtexture%28url_options_%29.md): Synchronously loads image data and creates a new Metal texture from a given URL.
- [newTextures(URLs:options:error:)](newtextures%28urls_options_error_%29.md): Synchronously loads image data and creates new Metal textures from the specified list of URLs.
- [newTextures(URLs:options:completionHandler:)](newtextures%28urls_options_completionhandler_%29.md): Asynchronously loads image data and creates new Metal textures from the specified list of URLs.

# newTextureWithContentsOfURL:options:completionHandler: (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Asynchronously loads image data and creates a new Metal texture from a given URL.

## Declaration

```objectivec
- (void) newTextureWithContentsOfURL:(NSURL *) URL options:(NSDictionary<NSString *,id> *) options completionHandler:(MTKTextureLoaderCallback) completionHandler;
```

## Parameters

- `URL`: The URL of the file to load.
- `options`: A dictionary describing any additional texture loading steps. See `Texture Loading Options`.
- `completionHandler`: A block called when the texture has been loaded and fully initialized.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func newTexture(URL: URL, options: [MTKTextureLoader.Option : Any]? = nil) async throws -> MTLTexture
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Loading Textures from URLs

- [newTextureWithContentsOfURL:options:error:](newtexture%28url_options_%29.md): Synchronously loads image data and creates a new Metal texture from a given URL.
- [newTexturesWithContentsOfURLs:options:error:](newtextures%28urls_options_error_%29.md): Synchronously loads image data and creates new Metal textures from the specified list of URLs.
- [newTexturesWithContentsOfURLs:options:completionHandler:](newtextures%28urls_options_completionhandler_%29.md): Asynchronously loads image data and creates new Metal textures from the specified list of URLs.
