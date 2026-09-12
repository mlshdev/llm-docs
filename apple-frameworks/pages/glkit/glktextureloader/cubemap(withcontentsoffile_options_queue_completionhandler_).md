> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glktextureloader/cubemap(withcontentsoffile:options:queue:completionhandler:)](https://developer.apple.com/documentation/glkit/glktextureloader/cubemap(withcontentsoffile:options:queue:completionhandler:))

# cubeMap(withContentsOfFile:options:queue:completionHandler:) (Swift)

**Framework:** GLKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

Asynchronously loads a cube map texture image from a single file and creates a new texture from the data.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func cubeMap(withContentsOfFile path: String, options: [String : NSNumber]? = nil, queue: dispatch_queue_t?, completionHandler block: @escaping @Sendable (GLKTextureInfo?, (any Error)?) -> Void)
```

```swift
func cubeMap(withContentsOfFile path: String, options: [String : NSNumber]? = nil, queue: dispatch_queue_t?) async throws -> GLKTextureInfo
```

## Parameters

- `path`: A path to the file to load.
- `options`: A dictionary that describes any additional steps you want the texture loader to take when loading the texture. See [Texture Loading Options](../texture-loading-options.md).
- `queue`: A dispatch queue that your block is called on when the task completes. If `NULL` is passed, the block is called on the main dispatch queue.
- `block`: A block to be called when the task completes.

<a id="Discussion"></a>

## Discussion

This method is identical to [cubeMap(withContentsOfFile:options:)](cubemap%28withcontentsoffile_options_%29.md), except that it loads the texture asynchronously. When this method is called, it creates a new background task to handle the request and then returns control to your app. Later, when the task is complete, GLKit calls your completion handler on the queue you provided.

## See Also

### Loading Cube Maps from Files

- [cubeMap(withContentsOfFile:options:)](cubemap%28withcontentsoffile_options_%29.md): Deprecated. Loads a cube map texture image from a single file and creates a new texture from the data.
- [cubeMap(withContentsOfFiles:options:)](cubemap%28withcontentsoffiles_options_%29.md): Deprecated. Loads a cube map texture image from a series of files and creates a new texture from the data.
- [cubeMap(withContentsOfFiles:options:queue:completionHandler:)](cubemap%28withcontentsoffiles_options_queue_completionhandler_%29.md): Deprecated. Asynchronously loads a cube map texture image from a series of files and creates a new texture from the data.

# cubeMapWithContentsOfFile:options:queue:completionHandler: (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

Asynchronously loads a cube map texture image from a single file and creates a new texture from the data.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (void) cubeMapWithContentsOfFile:(NSString *) path options:(NSDictionary<NSString *,NSNumber *> *) options queue:(dispatch_queue_t) queue completionHandler:(GLKTextureLoaderCallback) block;
```

## Parameters

- `path`: A path to the file to load.
- `options`: A dictionary that describes any additional steps you want the texture loader to take when loading the texture. See [Texture Loading Options](../texture-loading-options.md).
- `queue`: A dispatch queue that your block is called on when the task completes. If `NULL` is passed, the block is called on the main dispatch queue.
- `block`: A block to be called when the task completes.

<a id="Discussion"></a>

## Discussion

This method is identical to [cubeMapWithContentsOfFile:options:error:](cubemap%28withcontentsoffile_options_%29.md), except that it loads the texture asynchronously. When this method is called, it creates a new background task to handle the request and then returns control to your app. Later, when the task is complete, GLKit calls your completion handler on the queue you provided.

## See Also

### Loading Cube Maps from Files

- [cubeMapWithContentsOfFile:options:error:](cubemap%28withcontentsoffile_options_%29.md): Deprecated. Loads a cube map texture image from a single file and creates a new texture from the data.
- [cubeMapWithContentsOfFiles:options:error:](cubemap%28withcontentsoffiles_options_%29.md): Deprecated. Loads a cube map texture image from a series of files and creates a new texture from the data.
- [cubeMapWithContentsOfFiles:options:queue:completionHandler:](cubemap%28withcontentsoffiles_options_queue_completionhandler_%29.md): Deprecated. Asynchronously loads a cube map texture image from a series of files and creates a new texture from the data.
