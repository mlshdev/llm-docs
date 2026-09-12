> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtktextureloader/callback](https://developer.apple.com/documentation/metalkit/mtktextureloader/callback)

# MTKTextureLoader.Callback (Swift)

**Framework:** MetalKit  
**Kind:** Type Alias  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The signature for the block executed after an asynchronous loading operation for a single texture has completed.

## Declaration

```swift
typealias Callback = ((any MTLTexture)?, (any Error)?) -> Void
```

<a id="Discussion"></a>

## Discussion

The block parameters are defined as follows:

- **texture**: A [MTLTexture](../../metal/mtltexture.md) object, or `nil` if an error occurred.
- **error**: If the operation was successful, this value is `nil`; otherwise, this parameter holds an [NSError](../../foundation/nserror.md) object that describes the problem that occurred.

## See Also

### Completing a Texture Loading Operation

- [MTKTextureLoader.ArrayCallback](arraycallback.md): The signature for the block executed after an asynchronous loading operation for multiple textures has completed.

# MTKTextureLoaderCallback (Objective-C)

**Framework:** MetalKit  
**Kind:** Type Alias  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The signature for the block executed after an asynchronous loading operation for a single texture has completed.

## Declaration

```objectivec
typedef void (^)(id<MTLTexture>, NSError *) MTKTextureLoaderCallback;
```

<a id="Discussion"></a>

## Discussion

The block parameters are defined as follows:

- **texture**: A [MTLTexture](../../metal/mtltexture.md) object, or `nil` if an error occurred.
- **error**: If the operation was successful, this value is `nil`; otherwise, this parameter holds an [NSError](../../foundation/nserror.md) object that describes the problem that occurred.

## See Also

### Completing a Texture Loading Operation

- [MTKTextureLoaderArrayCallback](arraycallback.md): The signature for the block executed after an asynchronous loading operation for multiple textures has completed.
