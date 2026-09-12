> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glktextureloader](https://developer.apple.com/documentation/glkit/glktextureloader)

# GLKTextureLoader (Swift)

**Framework:** GLKit  
**Kind:** Class  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

A utility class that simplifies loading OpenGL or OpenGL ES texture datas from a variety of image file formats.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
class GLKTextureLoader
```

<a id="overview"></a>

## Overview

The [GLKTextureLoader](glktextureloader.md) class can load two-dimensional or cubemap textures in most image formats supported by the Image I/O framework. In iOS, it can also load textures compressed in the PVRTC format. It can load the data synchronously or asynchronously.

To load textures synchronously, make a context with the desired sharegroup the current context, and then call one or more of the class methods. The returned texture info object includes details about the loaded texture.

To load textures asynchronously, your initialization code allocates and initializes a new [GLKTextureLoader](glktextureloader.md) object using the sharegroup object that should be the destination for new textures. Then, to load a texture, your app calls one of the texture loader’s instance methods, passing in a completion handler block to be called when the texture has been loaded.

The following OpenGL properties are set for a newly created, non-mipmapped texture:

- `GL_TEXTURE_MIN_FILTER`:`GL_LINEAR`
- `GL_TEXTURE_MAG_FILTER`:`GL_LINEAR`
- `GL_TEXTURE_WRAP_S`:`GL_CLAMP_TO_EDGE`
- `GL_TEXTURE_WRAP_T`:`GL_CLAMP_TO_EDGE`

The following OpenGL properties are set for a newly created, mipmapped texture:

- `GL_TEXTURE_MIN_FILTER`:`GL_LINEAR_MIPMAP_LINEAR`
- `GL_TEXTURE_MAG_FILTER`:`GL_LINEAR`
- `GL_TEXTURE_WRAP_S`:`GL_CLAMP_TO_EDGE`
- `GL_TEXTURE_WRAP_T`:`GL_CLAMP_TO_EDGE`

The `GLKTextureLoader` and `GLKTextureInfo` classes do not manage the OpenGL texture for you. Once the texture is returned to your app, you are responsible for it. This means that after your app is finished using an OpenGL texture, it must explicitly deallocate it by calling the `glDeleteTextures` function.

## Topics

### Initialization

- [init(sharegroup:)](glktextureloader/init%28sharegroup_%29.md): Deprecated. Initializes a new texture loader object.
- [init(share:)](glktextureloader/init%28share_%29.md): Deprecated. Initializes a new texture loader object.

### Loading Textures from Files

- [texture(withContentsOfFile:options:)](glktextureloader/texture%28withcontentsoffile_options_%29.md): Deprecated. Loads a 2D texture image from a file and creates a new texture from the data.
- [texture(withContentsOfFile:options:queue:completionHandler:)](glktextureloader/texture%28withcontentsoffile_options_queue_completionhandler_%29.md): Deprecated. Asynchronously loads a 2D texture image from a file and creates a new texture from the data.

### Loading a Texture From a URL

- [texture(withContentsOf:options:)](glktextureloader/texture%28withcontentsof_options_%29-708ft.md): Deprecated. Loads a 2D texture image from a URL and creates a new texture from the data.
- [texture(withContentsOf:options:queue:completionHandler:)](glktextureloader/texture%28withcontentsof_options_queue_completionhandler_%29-55187.md): Deprecated. Asynchronously loads a 2D texture image from a URL and creates a new texture from the data.

### Creating Textures from In-Memory Representations

- [texture(withContentsOf:options:)](glktextureloader/texture%28withcontentsof_options_%29-2ljxb.md): Deprecated. Loads a 2D texture image from a memory range and creates a new texture from the data.
- [texture(withContentsOf:options:queue:completionHandler:)](glktextureloader/texture%28withcontentsof_options_queue_completionhandler_%29-6n0cf.md): Deprecated. Asynchronously loads a 2D texture image from a memory range and creates a new texture from the data.

### Creating Textures from CGImages

- [texture(with:options:)](glktextureloader/texture%28with_options_%29.md): Deprecated. Loads a 2D texture image from a Quartz image and creates a new texture from the data.
- [texture(with:options:queue:completionHandler:)](glktextureloader/texture%28with_options_queue_completionhandler_%29.md): Deprecated. Asynchronously loads a 2D texture image from a Quartz image and creates a new texture from the data.

### Loading Cube Maps from Files

- [cubeMap(withContentsOfFile:options:)](glktextureloader/cubemap%28withcontentsoffile_options_%29.md): Deprecated. Loads a cube map texture image from a single file and creates a new texture from the data.
- [cubeMap(withContentsOfFile:options:queue:completionHandler:)](glktextureloader/cubemap%28withcontentsoffile_options_queue_completionhandler_%29.md): Deprecated. Asynchronously loads a cube map texture image from a single file and creates a new texture from the data.
- [cubeMap(withContentsOfFiles:options:)](glktextureloader/cubemap%28withcontentsoffiles_options_%29.md): Deprecated. Loads a cube map texture image from a series of files and creates a new texture from the data.
- [cubeMap(withContentsOfFiles:options:queue:completionHandler:)](glktextureloader/cubemap%28withcontentsoffiles_options_queue_completionhandler_%29.md): Deprecated. Asynchronously loads a cube map texture image from a series of files and creates a new texture from the data.

### Loading Cube Maps from URLs

- [cubeMap(withContentsOf:options:)](glktextureloader/cubemap%28withcontentsof_options_%29.md): Deprecated. Loads a cube map texture image from a single URL and creates a new texture from the data.
- [cubeMap(withContentsOf:options:queue:completionHandler:)](glktextureloader/cubemap%28withcontentsof_options_queue_completionhandler_%29.md): Deprecated. Asynchronously loads a cube map texture image from a single URL and creates a new texture from the data.

### Constants

- [GLKTextureLoaderCallback](glktextureloadercallback.md): Signature for the block executed after an asynchronous texture loading operation completes.
- [Texture Loading Options](texture-loading-options.md): Keys to specify in a `textureOperations` dictionary.
- [Texture Error Handling](texture-error-handling.md): Strings used when handling error messages returned from a texture loading method.
- [GLKTextureLoaderError.Code](glktextureloadererror-swift.struct/code.md): Values to be returned when a texture loader encounters an error.

### Instance Methods

- [texture(withName:scaleFactor:bundle:options:queue:completionHandler:)](glktextureloader/texture%28withname_scalefactor_bundle_options_queue_completionhandler_%29.md): Deprecated.

### Type Methods

- [texture(withName:scaleFactor:bundle:options:)](glktextureloader/texture%28withname_scalefactor_bundle_options_%29.md): Deprecated.

### Initializers

- [init(shareContext:)](glktextureloader/init%28sharecontext_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Texture Loading

- [GLKTextureInfo](glktextureinfo.md): Deprecated. Information about OpenGL textures created by the [GLKTextureLoader](glktextureloader.md) class.

# GLKTextureLoader (Objective-C)

**Framework:** GLKit  
**Kind:** Class  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

A utility class that simplifies loading OpenGL or OpenGL ES texture datas from a variety of image file formats.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@interface GLKTextureLoader : NSObject
```

<a id="overview"></a>

## Overview

The [GLKTextureLoader](glktextureloader.md) class can load two-dimensional or cubemap textures in most image formats supported by the Image I/O framework. In iOS, it can also load textures compressed in the PVRTC format. It can load the data synchronously or asynchronously.

To load textures synchronously, make a context with the desired sharegroup the current context, and then call one or more of the class methods. The returned texture info object includes details about the loaded texture.

To load textures asynchronously, your initialization code allocates and initializes a new [GLKTextureLoader](glktextureloader.md) object using the sharegroup object that should be the destination for new textures. Then, to load a texture, your app calls one of the texture loader’s instance methods, passing in a completion handler block to be called when the texture has been loaded.

The following OpenGL properties are set for a newly created, non-mipmapped texture:

- `GL_TEXTURE_MIN_FILTER`:`GL_LINEAR`
- `GL_TEXTURE_MAG_FILTER`:`GL_LINEAR`
- `GL_TEXTURE_WRAP_S`:`GL_CLAMP_TO_EDGE`
- `GL_TEXTURE_WRAP_T`:`GL_CLAMP_TO_EDGE`

The following OpenGL properties are set for a newly created, mipmapped texture:

- `GL_TEXTURE_MIN_FILTER`:`GL_LINEAR_MIPMAP_LINEAR`
- `GL_TEXTURE_MAG_FILTER`:`GL_LINEAR`
- `GL_TEXTURE_WRAP_S`:`GL_CLAMP_TO_EDGE`
- `GL_TEXTURE_WRAP_T`:`GL_CLAMP_TO_EDGE`

The `GLKTextureLoader` and `GLKTextureInfo` classes do not manage the OpenGL texture for you. Once the texture is returned to your app, you are responsible for it. This means that after your app is finished using an OpenGL texture, it must explicitly deallocate it by calling the `glDeleteTextures` function.

## Topics

### Initialization

- [initWithSharegroup:](glktextureloader/init%28sharegroup_%29.md): Deprecated. Initializes a new texture loader object.
- [initWithShareContext:](glktextureloader/init%28share_%29.md): Deprecated. Initializes a new texture loader object.

### Loading Textures from Files

- [textureWithContentsOfFile:options:error:](glktextureloader/texture%28withcontentsoffile_options_%29.md): Deprecated. Loads a 2D texture image from a file and creates a new texture from the data.
- [textureWithContentsOfFile:options:queue:completionHandler:](glktextureloader/texture%28withcontentsoffile_options_queue_completionhandler_%29.md): Deprecated. Asynchronously loads a 2D texture image from a file and creates a new texture from the data.

### Loading a Texture From a URL

- [textureWithContentsOfURL:options:error:](glktextureloader/texture%28withcontentsof_options_%29-708ft.md): Deprecated. Loads a 2D texture image from a URL and creates a new texture from the data.
- [textureWithContentsOfURL:options:queue:completionHandler:](glktextureloader/texture%28withcontentsof_options_queue_completionhandler_%29-55187.md): Deprecated. Asynchronously loads a 2D texture image from a URL and creates a new texture from the data.

### Creating Textures from In-Memory Representations

- [textureWithContentsOfData:options:error:](glktextureloader/texture%28withcontentsof_options_%29-2ljxb.md): Deprecated. Loads a 2D texture image from a memory range and creates a new texture from the data.
- [textureWithContentsOfData:options:queue:completionHandler:](glktextureloader/texture%28withcontentsof_options_queue_completionhandler_%29-6n0cf.md): Deprecated. Asynchronously loads a 2D texture image from a memory range and creates a new texture from the data.

### Creating Textures from CGImages

- [textureWithCGImage:options:error:](glktextureloader/texture%28with_options_%29.md): Deprecated. Loads a 2D texture image from a Quartz image and creates a new texture from the data.
- [textureWithCGImage:options:queue:completionHandler:](glktextureloader/texture%28with_options_queue_completionhandler_%29.md): Deprecated. Asynchronously loads a 2D texture image from a Quartz image and creates a new texture from the data.

### Loading Cube Maps from Files

- [cubeMapWithContentsOfFile:options:error:](glktextureloader/cubemap%28withcontentsoffile_options_%29.md): Deprecated. Loads a cube map texture image from a single file and creates a new texture from the data.
- [cubeMapWithContentsOfFile:options:queue:completionHandler:](glktextureloader/cubemap%28withcontentsoffile_options_queue_completionhandler_%29.md): Deprecated. Asynchronously loads a cube map texture image from a single file and creates a new texture from the data.
- [cubeMapWithContentsOfFiles:options:error:](glktextureloader/cubemap%28withcontentsoffiles_options_%29.md): Deprecated. Loads a cube map texture image from a series of files and creates a new texture from the data.
- [cubeMapWithContentsOfFiles:options:queue:completionHandler:](glktextureloader/cubemap%28withcontentsoffiles_options_queue_completionhandler_%29.md): Deprecated. Asynchronously loads a cube map texture image from a series of files and creates a new texture from the data.

### Loading Cube Maps from URLs

- [cubeMapWithContentsOfURL:options:error:](glktextureloader/cubemap%28withcontentsof_options_%29.md): Deprecated. Loads a cube map texture image from a single URL and creates a new texture from the data.
- [cubeMapWithContentsOfURL:options:queue:completionHandler:](glktextureloader/cubemap%28withcontentsof_options_queue_completionhandler_%29.md): Deprecated. Asynchronously loads a cube map texture image from a single URL and creates a new texture from the data.

### Constants

- [GLKTextureLoaderCallback](glktextureloadercallback.md): Signature for the block executed after an asynchronous texture loading operation completes.
- [Texture Loading Options](texture-loading-options.md): Keys to specify in a `textureOperations` dictionary.
- [Texture Error Handling](texture-error-handling.md): Strings used when handling error messages returned from a texture loading method.
- [GLKTextureLoaderError](glktextureloadererror-swift.struct/code.md): Values to be returned when a texture loader encounters an error.

### Instance Methods

- [textureWithName:scaleFactor:bundle:options:queue:completionHandler:](glktextureloader/texture%28withname_scalefactor_bundle_options_queue_completionhandler_%29.md): Deprecated.

### Type Methods

- [textureWithName:scaleFactor:bundle:options:error:](glktextureloader/texture%28withname_scalefactor_bundle_options_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Texture Loading

- [GLKTextureInfo](glktextureinfo.md): Deprecated. Information about OpenGL textures created by the [GLKTextureLoader](glktextureloader.md) class.
