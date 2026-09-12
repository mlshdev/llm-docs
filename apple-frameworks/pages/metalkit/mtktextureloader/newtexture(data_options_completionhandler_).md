> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtktextureloader/newtexture(data:options:completionhandler:)](https://developer.apple.com/documentation/metalkit/mtktextureloader/newtexture(data:options:completionhandler:))

# newTexture(data:options:completionHandler:) (Swift)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Asynchronously creates a new Metal texture from an in-memory representation of the texture’s data.

## Declaration

```swift
func newTexture(data: Data, options: [MTKTextureLoader.Option : Any]? = nil, completionHandler: @escaping @Sendable ((any MTLTexture)?, (any Error)?) -> Void)
```

```swift
func newTexture(data: Data, options: [MTKTextureLoader.Option : Any]? = nil) async throws -> any MTLTexture
```

## Parameters

- `data`: The [NSData](../../foundation/nsdata.md) object containing image data.
- `options`: A dictionary describing any additional texture loading steps. See `Texture Loading Options`.
- `completionHandler`: A block called when the texture has been loaded and fully initialized.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func newTexture(data: Data, options: [MTKTextureLoader.Option : Any]? = nil) async throws -> MTLTexture
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Loading Textures from In-Memory Data Representations

- [newTexture(data:options:)](newtexture%28data_options_%29.md): Synchronously creates a new Metal texture from an in-memory representation of the texture’s data.

# newTextureWithData:options:completionHandler: (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Asynchronously creates a new Metal texture from an in-memory representation of the texture’s data.

## Declaration

```objectivec
- (void) newTextureWithData:(NSData *) data options:(NSDictionary<NSString *,id> *) options completionHandler:(MTKTextureLoaderCallback) completionHandler;
```

## Parameters

- `data`: The [NSData](../../foundation/nsdata.md) object containing image data.
- `options`: A dictionary describing any additional texture loading steps. See `Texture Loading Options`.
- `completionHandler`: A block called when the texture has been loaded and fully initialized.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You can call this method from synchronous code using a completion handler, as shown on this page, or you can call it as an asynchronous method that has the following declaration:
>
> ```swift
> func newTexture(data: Data, options: [MTKTextureLoader.Option : Any]? = nil) async throws -> MTLTexture
> ```
>
> For information about concurrency and asynchronous code in Swift, see [Calling Objective-C APIs Asynchronously](https://developer.apple.com/documentation/swift/calling-objective-c-apis-asynchronously).

## See Also

### Loading Textures from In-Memory Data Representations

- [newTextureWithData:options:error:](newtexture%28data_options_%29.md): Synchronously creates a new Metal texture from an in-memory representation of the texture’s data.
