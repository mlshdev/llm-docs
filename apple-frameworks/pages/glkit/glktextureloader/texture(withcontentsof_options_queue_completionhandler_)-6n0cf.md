> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glktextureloader/texture(withcontentsof:options:queue:completionhandler:)-6n0cf](https://developer.apple.com/documentation/glkit/glktextureloader/texture(withcontentsof:options:queue:completionhandler:)-6n0cf)

# texture(withContentsOf:options:queue:completionHandler:) (Swift)

**Framework:** GLKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

Asynchronously loads a 2D texture image from a memory range and creates a new texture from the data.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func texture(withContentsOf data: Data, options: [String : NSNumber]? = nil, queue: dispatch_queue_t?, completionHandler block: @escaping @Sendable (GLKTextureInfo?, (any Error)?) -> Void)
```

```swift
func texture(withContentsOf data: Data, options: [String : NSNumber]? = nil, queue: dispatch_queue_t?) async throws -> GLKTextureInfo
```

## Parameters

- `data`: The memory range to load as a texture.
- `options`: A dictionary that describes any additional steps you want the texture loader to take when loading the texture. See [Texture Loading Options](../texture-loading-options.md).
- `queue`: A dispatch queue that your block is called on when the task completes. If `NULL` is passed, the block is called on the main dispatch queue.
- `block`: A block to be called when the task completes.

<a id="Discussion"></a>

## Discussion

This method is identical to [texture(withContentsOf:options:)](texture%28withcontentsof_options_%29-2ljxb.md), except that it loads the texture asynchronously. When this method is called, it creates a new background task to handle the request and then returns control to your app. Later, when the task is complete, GLKit calls your completion handler on the queue you provided.

## See Also

### Creating Textures from In-Memory Representations

- [texture(withContentsOf:options:)](texture%28withcontentsof_options_%29-2ljxb.md): Deprecated. Loads a 2D texture image from a memory range and creates a new texture from the data.

# textureWithContentsOfData:options:queue:completionHandler: (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

Asynchronously loads a 2D texture image from a memory range and creates a new texture from the data.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (void) textureWithContentsOfData:(NSData *) data options:(NSDictionary<NSString *,NSNumber *> *) options queue:(dispatch_queue_t) queue completionHandler:(GLKTextureLoaderCallback) block;
```

## Parameters

- `data`: The memory range to load as a texture.
- `options`: A dictionary that describes any additional steps you want the texture loader to take when loading the texture. See [Texture Loading Options](../texture-loading-options.md).
- `queue`: A dispatch queue that your block is called on when the task completes. If `NULL` is passed, the block is called on the main dispatch queue.
- `block`: A block to be called when the task completes.

<a id="Discussion"></a>

## Discussion

This method is identical to [textureWithContentsOfData:options:error:](texture%28withcontentsof_options_%29-2ljxb.md), except that it loads the texture asynchronously. When this method is called, it creates a new background task to handle the request and then returns control to your app. Later, when the task is complete, GLKit calls your completion handler on the queue you provided.

## See Also

### Creating Textures from In-Memory Representations

- [textureWithContentsOfData:options:error:](texture%28withcontentsof_options_%29-2ljxb.md): Deprecated. Loads a 2D texture image from a memory range and creates a new texture from the data.
