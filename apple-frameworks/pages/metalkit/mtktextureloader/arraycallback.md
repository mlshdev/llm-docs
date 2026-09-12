> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtktextureloader/arraycallback](https://developer.apple.com/documentation/metalkit/mtktextureloader/arraycallback)

# MTKTextureLoader.ArrayCallback (Swift)

**Framework:** MetalKit  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The signature for the block executed after an asynchronous loading operation for multiple textures has completed.

## Declaration

```swift
typealias ArrayCallback = ([any MTLTexture], (any Error)?) -> Void
```

<a id="Discussion"></a>

## Discussion

The block parameters are defined as follows:

- **textures**: An array of [MTLTexture](../../metal/mtltexture.md) objects whose order corresponds to the requested textures. If an error occurs when loading a texture, an [NSNull](../../foundation/nsnull.md) object occupies its place in the array.
- **error**: If all texture loading operations were successful, this value is `nil`; otherwise, this parameter holds an [NSError](../../foundation/nserror.md) object that describes the first problem that occurred. (Which element in the input array the error corresponds to is undefined.)

## See Also

### Completing a Texture Loading Operation

- [MTKTextureLoader.Callback](callback.md): The signature for the block executed after an asynchronous loading operation for a single texture has completed.

# MTKTextureLoaderArrayCallback (Objective-C)

**Framework:** MetalKit  
**Kind:** Type Alias  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The signature for the block executed after an asynchronous loading operation for multiple textures has completed.

## Declaration

```objectivec
typedef void (^)(NSArray<id<MTLTexture>> *, NSError *) MTKTextureLoaderArrayCallback;
```

<a id="Discussion"></a>

## Discussion

The block parameters are defined as follows:

- **textures**: An array of [MTLTexture](../../metal/mtltexture.md) objects whose order corresponds to the requested textures. If an error occurs when loading a texture, an [NSNull](../../foundation/nsnull.md) object occupies its place in the array.
- **error**: If all texture loading operations were successful, this value is `nil`; otherwise, this parameter holds an [NSError](../../foundation/nserror.md) object that describes the first problem that occurred. (Which element in the input array the error corresponds to is undefined.)

## See Also

### Completing a Texture Loading Operation

- [MTKTextureLoaderCallback](callback.md): The signature for the block executed after an asynchronous loading operation for a single texture has completed.
