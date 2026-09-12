> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glktextureloader/texture(with:options:queue:completionhandler:)](https://developer.apple.com/documentation/glkit/glktextureloader/texture(with:options:queue:completionhandler:))

# texture(with:options:queue:completionHandler:) (Swift)

**Framework:** GLKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

Asynchronously loads a 2D texture image from a Quartz image and creates a new texture from the data.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func texture(with cgImage: CGImage, options: [String : NSNumber]? = nil, queue: dispatch_queue_t?, completionHandler block: @escaping @Sendable (GLKTextureInfo?, (any Error)?) -> Void)
```

```swift
func texture(with cgImage: CGImage, options: [String : NSNumber]? = nil, queue: dispatch_queue_t?) async throws -> GLKTextureInfo
```

## Parameters

- `cgImage`: The Quartz image to be turned into a texture.
- `options`: A dictionary that describes any additional steps you want the texture loader to take when loading the texture. See [Texture Loading Options](../texture-loading-options.md).
- `queue`: A dispatch queue that your block is called on when the task completes. If `NULL` is passed, the block is called on the main dispatch queue.
- `block`: A block to be called when the task completes.

<a id="Discussion"></a>

## Discussion

This method is identical to [texture(with:options:)](texture%28with_options_%29.md), except that it loads the texture asynchronously. When this method is called, it creates a new background task to handle the request and then returns control to your app. Later, when the task is complete, GLKit calls your completion handler on the queue you provided.

## See Also

### Creating Textures from CGImages

- [texture(with:options:)](texture%28with_options_%29.md): Deprecated. Loads a 2D texture image from a Quartz image and creates a new texture from the data.

# textureWithCGImage:options:queue:completionHandler: (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

Asynchronously loads a 2D texture image from a Quartz image and creates a new texture from the data.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (void) textureWithCGImage:(CGImageRef) cgImage options:(NSDictionary<NSString *,NSNumber *> *) options queue:(dispatch_queue_t) queue completionHandler:(GLKTextureLoaderCallback) block;
```

## Parameters

- `cgImage`: The Quartz image to be turned into a texture.
- `options`: A dictionary that describes any additional steps you want the texture loader to take when loading the texture. See [Texture Loading Options](../texture-loading-options.md).
- `queue`: A dispatch queue that your block is called on when the task completes. If `NULL` is passed, the block is called on the main dispatch queue.
- `block`: A block to be called when the task completes.

<a id="Discussion"></a>

## Discussion

This method is identical to [textureWithCGImage:options:error:](texture%28with_options_%29.md), except that it loads the texture asynchronously. When this method is called, it creates a new background task to handle the request and then returns control to your app. Later, when the task is complete, GLKit calls your completion handler on the queue you provided.

## See Also

### Creating Textures from CGImages

- [textureWithCGImage:options:error:](texture%28with_options_%29.md): Deprecated. Loads a 2D texture image from a Quartz image and creates a new texture from the data.
