> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glktextureloadercallback](https://developer.apple.com/documentation/glkit/glktextureloadercallback)

# GLKTextureLoaderCallback (Swift)

**Framework:** GLKit  
**Kind:** Type Alias  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Signature for the block executed after an asynchronous texture loading operation completes.

## Declaration

```swift
typealias GLKTextureLoaderCallback = (GLKTextureInfo?, (any Error)?) -> Void
```

<a id="Discussion"></a>

## Discussion

The block parameters are defined as follows:

- ***textureInfo***: A texture info object that describes the loaded texture or `nil` if an error occurred.
- ***error***: If the operation was successful, this value is nil; otherwise, this parameter holds an object that describes the problem that occurred.

## See Also

### Constants

- [Texture Loading Options](texture-loading-options.md): Keys to specify in a `textureOperations` dictionary.
- [Texture Error Handling](texture-error-handling.md): Strings used when handling error messages returned from a texture loading method.
- [GLKTextureLoaderError.Code](glktextureloadererror-swift.struct/code.md): Values to be returned when a texture loader encounters an error.

# GLKTextureLoaderCallback (Objective-C)

**Framework:** GLKit  
**Kind:** Type Alias  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Signature for the block executed after an asynchronous texture loading operation completes.

## Declaration

```objectivec
typedef void (^)(GLKTextureInfo *, NSError *) GLKTextureLoaderCallback;
```

<a id="Discussion"></a>

## Discussion

The block parameters are defined as follows:

- ***textureInfo***: A texture info object that describes the loaded texture or `nil` if an error occurred.
- ***error***: If the operation was successful, this value is nil; otherwise, this parameter holds an object that describes the problem that occurred.

## See Also

### Constants

- [Texture Loading Options](texture-loading-options.md): Keys to specify in a `textureOperations` dictionary.
- [Texture Error Handling](texture-error-handling.md): Strings used when handling error messages returned from a texture loading method.
- [GLKTextureLoaderError](glktextureloadererror-swift.struct/code.md): Values to be returned when a texture loader encounters an error.
