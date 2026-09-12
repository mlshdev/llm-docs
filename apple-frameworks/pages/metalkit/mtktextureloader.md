> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtktextureloader](https://developer.apple.com/documentation/metalkit/mtktextureloader)

# MTKTextureLoader (Swift)

**Framework:** MetalKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An object that creates textures from existing data in common image formats.

## Declaration

```swift
class MTKTextureLoader
```

<a id="overview"></a>

## Overview

Use the [MTKTextureLoader](mtktextureloader.md) class to create a Metal texture from existing image data.

This class supports common file formats, like PNG, JPEG, and TIFF. It also loads image data from KTX and PVR files, asset catalogs, Core Graphics images, and other sources. It infers the output texture format and pixel format from the image data.

You create textures synchronously or asynchronously using [MTKTextureLoader](mtktextureloader.md) methods that return [MTLTexture](../metal/mtltexture.md) instances. Pass options to these methods that customize the image-loading and texture-creation process.

First create an [MTKTextureLoader](mtktextureloader.md) instance, passing the device that it uses to create textures. Then use one of the texture loader’s methods to create a texture. The code example below synchronously creates a texture from data at a URL, using the default options:

**Swift**

```swift
func loadTextureUsingMetalKit(url: URL, device: MTLDevice) throws -> MTLTexture {
    let loader = MTKTextureLoader(device: device)
    
    return try loader.newTexture(URL: url, options: nil)
}
```

**Objective-C**

```objc
- (id<MTLTexture>)loadTextureUsingMetalKit: (NSURL *) url device: (id<MTLDevice>) device {
    NSError *error;
    MTKTextureLoader *loader = [[MTKTextureLoader alloc] initWithDevice: device];
    
    id<MTLTexture> texture = [loader newTextureWithContentsOfURL:url options:nil error:&error];
    
    if(!texture)
    {
        NSLog(@"Error creating the texture from %@: %@", url.absoluteString, error.localizedDescription);
        return nil;
    }
    return texture;
}
```

If you use custom data formats, or change the image data at runtime, use [MTLTexture](../metal/mtltexture.md) methods instead. For more information, see [Creating and sampling textures](../metal/creating-and-sampling-textures.md).

## Topics

### Creating a Texture Loader

- [init(device:)](mtktextureloader/init%28device_%29.md): Initializes a new texture loader object.
- [device](mtktextureloader/device.md): The device object that the texture loader uses to create textures.

### Loading Textures from URLs

- [newTexture(URL:options:)](mtktextureloader/newtexture%28url_options_%29.md): Synchronously loads image data and creates a new Metal texture from a given URL.
- [newTexture(URL:options:completionHandler:)](mtktextureloader/newtexture%28url_options_completionhandler_%29.md): Asynchronously loads image data and creates a new Metal texture from a given URL.
- [newTextures(URLs:options:error:)](mtktextureloader/newtextures%28urls_options_error_%29.md): Synchronously loads image data and creates new Metal textures from the specified list of URLs.
- [newTextures(URLs:options:completionHandler:)](mtktextureloader/newtextures%28urls_options_completionhandler_%29.md): Asynchronously loads image data and creates new Metal textures from the specified list of URLs.

### Loading Textures from Asset Catalogs

- [newTexture(name:scaleFactor:bundle:options:)](mtktextureloader/newtexture%28name_scalefactor_bundle_options_%29.md): Synchronously loads image data and creates a Metal texture from the named texture asset in an asset catalog.
- [newTexture(name:scaleFactor:bundle:options:completionHandler:)](mtktextureloader/newtexture%28name_scalefactor_bundle_options_completionhandler_%29.md): Asynchronously loads image data and creates a Metal texture from the named texture asset in an asset catalog.
- [newTextures(names:scaleFactor:bundle:options:completionHandler:)](mtktextureloader/newtextures%28names_scalefactor_bundle_options_completionhandler_%29.md): Asynchronously loads image data and creates Metal textures from the specified list of named texture assets in an asset catalog.
- [newTexture(name:scaleFactor:displayGamut:bundle:options:)](mtktextureloader/newtexture%28name_scalefactor_displaygamut_bundle_options_%29.md): Synchronously loads image data and creates a Metal texture from the named texture asset in an asset catalog, using a specified display gamut.
- [newTexture(name:scaleFactor:displayGamut:bundle:options:completionHandler:)](mtktextureloader/newtexture%28name_scalefactor_displaygamut_bundle_options_completionhandler_%29.md): Asynchronously loads image data and creates a Metal texture from the named texture asset in an asset catalog.
- [newTextures(names:scaleFactor:displayGamut:bundle:options:completionHandler:)](mtktextureloader/newtextures%28names_scalefactor_displaygamut_bundle_options_completionhandler_%29.md): Asynchronously loads image data and creates Metal textures from the specified list of named texture assets in an asset catalog.

### Loading Textures from Core Graphics Images

- [newTexture(cgImage:options:)](mtktextureloader/newtexture%28cgimage_options_%29.md): Synchronously loads image data and creates a new Metal texture from a given bitmap image.
- [newTexture(cgImage:options:completionHandler:)](mtktextureloader/newtexture%28cgimage_options_completionhandler_%29.md): Asynchronously loads image data and creates a new Metal texture from a given bitmap image.

### Loading Textures from In-Memory Data Representations

- [newTexture(data:options:)](mtktextureloader/newtexture%28data_options_%29.md): Synchronously creates a new Metal texture from an in-memory representation of the texture’s data.
- [newTexture(data:options:completionHandler:)](mtktextureloader/newtexture%28data_options_completionhandler_%29.md): Asynchronously creates a new Metal texture from an in-memory representation of the texture’s data.

### Loading Textures from Model I/O Representations

- [newTexture(texture:options:)](mtktextureloader/newtexture%28texture_options_%29.md): Synchronously loads image data and creates a Metal texture from the specified Model I/O texture.
- [newTexture(texture:options:completionHandler:)](mtktextureloader/newtexture%28texture_options_completionhandler_%29.md): Asynchronously loads image data and creates a Metal texture from the specified Model I/O texture.

### Specifying Loading Options

- [MTKTextureLoader.Option](mtktextureloader/option.md): Keys and values used to specify loading options.

### Completing a Texture Loading Operation

- [MTKTextureLoader.ArrayCallback](mtktextureloader/arraycallback.md): The signature for the block executed after an asynchronous loading operation for multiple textures has completed.
- [MTKTextureLoader.Callback](mtktextureloader/callback.md): The signature for the block executed after an asynchronous loading operation for a single texture has completed.

### Handling Errors

- [MTKTextureLoader.Error](mtktextureloader/error.md): Errors returned by the texture loader.

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

# MTKTextureLoader (Objective-C)

**Framework:** MetalKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

An object that creates textures from existing data in common image formats.

## Declaration

```objectivec
@interface MTKTextureLoader : NSObject
```

<a id="overview"></a>

## Overview

Use the [MTKTextureLoader](mtktextureloader.md) class to create a Metal texture from existing image data.

This class supports common file formats, like PNG, JPEG, and TIFF. It also loads image data from KTX and PVR files, asset catalogs, Core Graphics images, and other sources. It infers the output texture format and pixel format from the image data.

You create textures synchronously or asynchronously using [MTKTextureLoader](mtktextureloader.md) methods that return [MTLTexture](../metal/mtltexture.md) instances. Pass options to these methods that customize the image-loading and texture-creation process.

First create an [MTKTextureLoader](mtktextureloader.md) instance, passing the device that it uses to create textures. Then use one of the texture loader’s methods to create a texture. The code example below synchronously creates a texture from data at a URL, using the default options:

**Swift**

```swift
func loadTextureUsingMetalKit(url: URL, device: MTLDevice) throws -> MTLTexture {
    let loader = MTKTextureLoader(device: device)
    
    return try loader.newTexture(URL: url, options: nil)
}
```

**Objective-C**

```objc
- (id<MTLTexture>)loadTextureUsingMetalKit: (NSURL *) url device: (id<MTLDevice>) device {
    NSError *error;
    MTKTextureLoader *loader = [[MTKTextureLoader alloc] initWithDevice: device];
    
    id<MTLTexture> texture = [loader newTextureWithContentsOfURL:url options:nil error:&error];
    
    if(!texture)
    {
        NSLog(@"Error creating the texture from %@: %@", url.absoluteString, error.localizedDescription);
        return nil;
    }
    return texture;
}
```

If you use custom data formats, or change the image data at runtime, use [MTLTexture](../metal/mtltexture.md) methods instead. For more information, see [Creating and sampling textures](../metal/creating-and-sampling-textures.md).

## Topics

### Creating a Texture Loader

- [initWithDevice:](mtktextureloader/init%28device_%29.md): Initializes a new texture loader object.
- [device](mtktextureloader/device.md): The device object that the texture loader uses to create textures.

### Loading Textures from URLs

- [newTextureWithContentsOfURL:options:error:](mtktextureloader/newtexture%28url_options_%29.md): Synchronously loads image data and creates a new Metal texture from a given URL.
- [newTextureWithContentsOfURL:options:completionHandler:](mtktextureloader/newtexture%28url_options_completionhandler_%29.md): Asynchronously loads image data and creates a new Metal texture from a given URL.
- [newTexturesWithContentsOfURLs:options:error:](mtktextureloader/newtextures%28urls_options_error_%29.md): Synchronously loads image data and creates new Metal textures from the specified list of URLs.
- [newTexturesWithContentsOfURLs:options:completionHandler:](mtktextureloader/newtextures%28urls_options_completionhandler_%29.md): Asynchronously loads image data and creates new Metal textures from the specified list of URLs.

### Loading Textures from Asset Catalogs

- [newTextureWithName:scaleFactor:bundle:options:error:](mtktextureloader/newtexture%28name_scalefactor_bundle_options_%29.md): Synchronously loads image data and creates a Metal texture from the named texture asset in an asset catalog.
- [newTextureWithName:scaleFactor:bundle:options:completionHandler:](mtktextureloader/newtexture%28name_scalefactor_bundle_options_completionhandler_%29.md): Asynchronously loads image data and creates a Metal texture from the named texture asset in an asset catalog.
- [newTexturesWithNames:scaleFactor:bundle:options:completionHandler:](mtktextureloader/newtextures%28names_scalefactor_bundle_options_completionhandler_%29.md): Asynchronously loads image data and creates Metal textures from the specified list of named texture assets in an asset catalog.
- [newTextureWithName:scaleFactor:displayGamut:bundle:options:error:](mtktextureloader/newtexture%28name_scalefactor_displaygamut_bundle_options_%29.md): Synchronously loads image data and creates a Metal texture from the named texture asset in an asset catalog, using a specified display gamut.
- [newTextureWithName:scaleFactor:displayGamut:bundle:options:completionHandler:](mtktextureloader/newtexture%28name_scalefactor_displaygamut_bundle_options_completionhandler_%29.md): Asynchronously loads image data and creates a Metal texture from the named texture asset in an asset catalog.
- [newTexturesWithNames:scaleFactor:displayGamut:bundle:options:completionHandler:](mtktextureloader/newtextures%28names_scalefactor_displaygamut_bundle_options_completionhandler_%29.md): Asynchronously loads image data and creates Metal textures from the specified list of named texture assets in an asset catalog.

### Loading Textures from Core Graphics Images

- [newTextureWithCGImage:options:error:](mtktextureloader/newtexture%28cgimage_options_%29.md): Synchronously loads image data and creates a new Metal texture from a given bitmap image.
- [newTextureWithCGImage:options:completionHandler:](mtktextureloader/newtexture%28cgimage_options_completionhandler_%29.md): Asynchronously loads image data and creates a new Metal texture from a given bitmap image.

### Loading Textures from In-Memory Data Representations

- [newTextureWithData:options:error:](mtktextureloader/newtexture%28data_options_%29.md): Synchronously creates a new Metal texture from an in-memory representation of the texture’s data.
- [newTextureWithData:options:completionHandler:](mtktextureloader/newtexture%28data_options_completionhandler_%29.md): Asynchronously creates a new Metal texture from an in-memory representation of the texture’s data.

### Loading Textures from Model I/O Representations

- [newTextureWithMDLTexture:options:error:](mtktextureloader/newtexture%28texture_options_%29.md): Synchronously loads image data and creates a Metal texture from the specified Model I/O texture.
- [newTextureWithMDLTexture:options:completionHandler:](mtktextureloader/newtexture%28texture_options_completionhandler_%29.md): Asynchronously loads image data and creates a Metal texture from the specified Model I/O texture.

### Specifying Loading Options

- [MTKTextureLoaderOption](mtktextureloader/option.md): Keys and values used to specify loading options.

### Completing a Texture Loading Operation

- [MTKTextureLoaderArrayCallback](mtktextureloader/arraycallback.md): The signature for the block executed after an asynchronous loading operation for multiple textures has completed.
- [MTKTextureLoaderCallback](mtktextureloader/callback.md): The signature for the block executed after an asynchronous loading operation for a single texture has completed.

### Handling Errors

- [MTKTextureLoaderError](mtktextureloader/error.md): Errors returned by the texture loader.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
