> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtktextureloader/newtexture(texture:options:completionhandler:)](https://developer.apple.com/documentation/metalkit/mtktextureloader/newtexture(texture:options:completionhandler:))

# newTexture(texture:options:completionHandler:) (Swift)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Asynchronously loads image data and creates a Metal texture from the specified Model I/O texture.

## Declaration

```swift
func newTexture(texture: MDLTexture, options: [MTKTextureLoader.Option : Any]? = nil, completionHandler: @escaping @Sendable ((any MTLTexture)?, (any Error)?) -> Void)
```

```swift
func newTexture(texture: MDLTexture, options: [MTKTextureLoader.Option : Any]? = nil) async throws -> any MTLTexture
```

## Parameters

- `texture`: A Model I/O texture object containing image data from which to create the texture.
- `options`: A dictionary describing any additional texture loading steps. See `Texture Loading Options`.
- `completionHandler`: A block called when the texture has been loaded and fully initialized.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func newTexture(texture: MDLTexture, options: [MTKTextureLoader.Option : Any]? = nil) async throws -> MTLTexture
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Loading Textures from Model I/O Representations

- [newTexture(texture:options:)](newtexture%28texture_options_%29.md): Synchronously loads image data and creates a Metal texture from the specified Model I/O texture.

# newTextureWithMDLTexture:options:completionHandler: (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Asynchronously loads image data and creates a Metal texture from the specified Model I/O texture.

## Declaration

```objectivec
- (void) newTextureWithMDLTexture:(MDLTexture *) texture options:(NSDictionary<NSString *,id> *) options completionHandler:(MTKTextureLoaderCallback) completionHandler;
```

## Parameters

- `texture`: A Model I/O texture object containing image data from which to create the texture.
- `options`: A dictionary describing any additional texture loading steps. See `Texture Loading Options`.
- `completionHandler`: A block called when the texture has been loaded and fully initialized.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func newTexture(texture: MDLTexture, options: [MTKTextureLoader.Option : Any]? = nil) async throws -> MTLTexture
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Loading Textures from Model I/O Representations

- [newTextureWithMDLTexture:options:error:](newtexture%28texture_options_%29.md): Synchronously loads image data and creates a Metal texture from the specified Model I/O texture.
