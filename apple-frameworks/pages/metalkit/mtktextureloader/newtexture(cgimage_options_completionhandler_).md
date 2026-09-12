> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtktextureloader/newtexture(cgimage:options:completionhandler:)](https://developer.apple.com/documentation/metalkit/mtktextureloader/newtexture(cgimage:options:completionhandler:))

# newTexture(cgImage:options:completionHandler:) (Swift)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Asynchronously loads image data and creates a new Metal texture from a given bitmap image.

## Declaration

```swift
func newTexture(cgImage: CGImage, options: [MTKTextureLoader.Option : Any]? = nil, completionHandler: @escaping @Sendable ((any MTLTexture)?, (any Error)?) -> Void)
```

```swift
func newTexture(cgImage: CGImage, options: [MTKTextureLoader.Option : Any]? = nil) async throws -> any MTLTexture
```

## Parameters

- `cgImage`: The [CGImage](../../coregraphics/cgimage.md) from which to load image data.
- `options`: A dictionary describing any additional texture loading steps. See `Texture Loading Options`.
- `completionHandler`: A block called when the texture has been loaded and fully initialized.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func newTexture(cgImage: CGImage, options: [MTKTextureLoader.Option : Any]? = nil) async throws -> MTLTexture
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Loading Textures from Core Graphics Images

- [newTexture(cgImage:options:)](newtexture%28cgimage_options_%29.md): Synchronously loads image data and creates a new Metal texture from a given bitmap image.

# newTextureWithCGImage:options:completionHandler: (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Asynchronously loads image data and creates a new Metal texture from a given bitmap image.

## Declaration

```objectivec
- (void) newTextureWithCGImage:(CGImageRef) cgImage options:(NSDictionary<NSString *,id> *) options completionHandler:(MTKTextureLoaderCallback) completionHandler;
```

## Parameters

- `cgImage`: The [CGImageRef](../../coregraphics/cgimage.md) from which to load image data.
- `options`: A dictionary describing any additional texture loading steps. See `Texture Loading Options`.
- `completionHandler`: A block called when the texture has been loaded and fully initialized.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func newTexture(cgImage: CGImage, options: [MTKTextureLoader.Option : Any]? = nil) async throws -> MTLTexture
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Loading Textures from Core Graphics Images

- [newTextureWithCGImage:options:error:](newtexture%28cgimage_options_%29.md): Synchronously loads image data and creates a new Metal texture from a given bitmap image.
