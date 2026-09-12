> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/textureresource](https://developer.apple.com/documentation/realitykit/textureresource)

# TextureResource

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A representation of a texture.

## Declaration

```swift
@MainActor @preconcurrency class TextureResource
```

## Mentioned In

- [Rendering high-fidelity characters](rendering-high-fidelity-characters.md)

<a id="overview"></a>

## Overview

A texture resource holds pixel data accessible by the GPU, organized as an image, a cube of images, an array of images, or a 3D image (volume texture).

Assign texture resources to material parameters to provide color and fine surface-rendering details.

## Topics

### Creating a texture resource

- [TextureResource.Contents](textureresource/contents.md): An object that references the pixel data for each mipmap level of a texture.
- [TextureResource.Format](textureresource/format.md): The pixel format and encoding of a texture.
- [TextureResource.Compression](textureresource/compression.md): The compression to apply when importing an image as a texture.

### Creating a 2D texture resource

- [TextureResource.Dimensions2D](textureresource/dimensions2d.md): The dimensions of a 2D texture.

### Creating a cube texture resource

- [TextureResource.DimensionsCube](textureresource/dimensionscube.md): The dimensions of the cube texture.

### Creating a 2D array texture resource

- [TextureResource.Dimensions2DArray](textureresource/dimensions2darray.md): The dimensions of the 2D array texture.

### Creating a 3D texture resource

- [TextureResource.Dimensions3D](textureresource/dimensions3d.md): The dimensions of the 3D texture.

### Loading a texture

- [init(named:in:)](textureresource/init%28named_in_%29.md): Asynchronously loads a texture resource from a bundle.
- [init(named:in:options:)](textureresource/init%28named_in_options_%29.md): Asynchronously loads a texture resource from a bundle with options.
- [init(contentsOf:withName:options:)](textureresource/init%28contentsof_withname_options_%29.md): Asynchronously creates a texture resource from a file URL with creation options.
- [init(contentsOf:withName:)](textureresource/init%28contentsof_withname_%29.md): Asynchronously creates a texture resource from a file URL.
- [load(named:in:)](textureresource/load%28named_in_%29.md): Returns a texture resource by synchronously loading it from a bundle.
- [load(named:in:options:)](textureresource/load%28named_in_options_%29.md): Returns a texture resource by synchronously loading it from a bundle with options.
- [load(contentsOf:withName:options:)](textureresource/load%28contentsof_withname_options_%29.md): Synchronously loads a texture resource from a URL with options.
- [load(contentsOf:withName:)](textureresource/load%28contentsof_withname_%29.md): Synchronously loads a texture resource from a URL.
- [loadAsync(named:in:)](textureresource/loadasync%28named_in_%29.md): Deprecated. Returns a load request that creates a texture resource by asynchronously loading it from a bundle.
- [loadAsync(named:in:options:)](textureresource/loadasync%28named_in_options_%29.md): Deprecated. Returns a load request that creates a texture resource by asynchronously loading it from a bundle with options.
- [loadAsync(contentsOf:withName:)](textureresource/loadasync%28contentsof_withname_%29.md): Deprecated. Asynchronously loads a texture resource from a URL.

### Describing the texture

- [textureType](textureresource/texturetype.md): The dimension and arrangement of the texture image data.
- [pixelFormat](textureresource/pixelformat.md): The texture’s pixel format.
- [height](textureresource/height.md): The height of the texture image, in pixels.
- [width](textureresource/width.md): The width of the texture image, in pixels.
- [depth](textureresource/depth.md): The depth of the texture image, in pixels.
- [arrayLength](textureresource/arraylength.md): The number of slices in the texture array.
- [mipmapLevelCount](textureresource/mipmaplevelcount.md): The number of mipmaps for the texture.
- [semantic](textureresource/semantic-swift.property.md): The intended usage of the texture resource.

### Drawing the texture

- [drawableQueue](textureresource/drawablequeue-swift.property.md): The drawable queue that replaces the texture.

### Copying the texture

- [copy(to:)](textureresource/copy%28to_%29-jfbi.md): Copies texture data to another texture.
- [copyAsync(to:completionHandler:)](textureresource/copyasync%28to_completionhandler_%29.md): Deprecated. Asynchronously copies texture data to another texture.

### Modifying the texture

- [replace(withDrawables:)](textureresource/replace%28withdrawables_%29.md): Dynamically replaces the texture with a drawable queue.
- [replace(withImage:options:)](textureresource/replace%28withimage_options_%29.md): Dynamically replaces the texture with a Core Graphics image.
- [replace(using:options:)](textureresource/replace%28using_options_%29.md): Asynchronously replaces the texture with a Core Graphics image.
- [replace(with:)](textureresource/replace%28with_%29.md): Replaces a texture resource with a low-level texture.

### Deprecated

- [generate(from:withName:options:)](textureresource/generate%28from_withname_options_%29.md): Deprecated. Synchronously creates a texture resource from an in-memory Core Graphics image.
- [generateAsync(from:withName:options:)](textureresource/generateasync%28from_withname_options_%29.md): Deprecated. Asynchronously generates a texture resource from an in-memory Core Graphics image.
- [replaceAsync(withImage:options:)](textureresource/replaceasync%28withimage_options_%29.md): Deprecated. Asynchronously replaces the texture with a Core Graphics image.
- [generate(from:named:options:)](textureresource/generate%28from_named_options_%29.md): Asynchronously generates a texture resource from an in-memory Core Graphics image.
- [loadAsync(contentsOf:withName:options:)](textureresource/loadasync%28contentsof_withname_options_%29.md): Deprecated. Asynchronously loads a texture resource from a URL with options.

### Classes

- [TextureResource.Drawable](textureresource/drawable.md): A drawable associated with a drawable queue
- [TextureResource.DrawableQueue](textureresource/drawablequeue-swift.class.md): A drawable queue that may be used to update a texture resource dynamically

### Structures

- [TextureResource.CreateOptions](textureresource/createoptions.md): An object that holds texture resource creation options.

### Initializers

- [init(cubeFromEquirectangular:named:quality:faceSize:options:)](textureresource/init%28cubefromequirectangular_named_quality_facesize_options_%29.md): Asynchronously creates a cube texture resource from an equirectangular image.
- [init(cubeFromImage:named:options:)](textureresource/init%28cubefromimage_named_options_%29.md): Asynchronously creates a cube texture resource from a 2D image of cube faces.
- [init(dimensions:format:contents:)](textureresource/init%28dimensions_format_contents_%29.md): Asynchronously creates a 2D texture resource from a pixel Metal buffer, or data.
- [init(from:)](textureresource/init%28from_%29.md): Asynchronously creates a texture resource from a low-level texture.
- [init(image:withName:options:)](textureresource/init%28image_withname_options_%29.md): Asynchronously creates a texture resource from an in-memory Core Graphics image.

### Instance Methods

- [copy(to:)](textureresource/copy%28to_%29.md): Asynchronously copies texture data to another texture.

### Type Aliases

- [TextureResource.SamplingQuality](textureresource/samplingquality.md): An object for controlling the texture-sampling quality.

### Type Methods

- [cube(slices:named:options:)](textureresource/cube%28slices_named_options_%29.md): Asynchronously creates a cube texture resource from face images.
- [texture2DArray(slices:named:options:)](textureresource/texture2darray%28slices_named_options_%29.md): Asynchronously creates a 2D texture array by generating it from images.
- [texture3D(slices:named:options:)](textureresource/texture3d%28slices_named_options_%29.md): Asynchronously creates a 3D texture by generating it from images.

### Enumerations

- [TextureResource.MipmapsMode](textureresource/mipmapsmode.md): An enumeration for specifying how to allocate and generate mipmaps for a texture.
- [TextureResource.Semantic](textureresource/semantic-swift.enum.md): An object for specifying the intended use of a texture.

### Default Implementations

- [Equatable Implementations](textureresource/equatable-implementations.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Resource](resource.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Texture resources

- [Generating procedural textures](../visionos/generating-procedural-textures-in-visionos.md): Display a 3D model that generates procedural textures in a reality view.
- [Displaying a stereoscopic image](../visionos/displaying-a-stereoscopic-image-in-visionos.md): Build a stereoscopic image by applying textures to the left and right eye in a shader graph material.
- [TextureResource.CreateOptions](textureresource/createoptions.md): An object that holds texture resource creation options.
- [TextureResource.SamplingQuality](textureresource/samplingquality.md): An object for controlling the texture-sampling quality.
- [TextureResource.MipmapsMode](textureresource/mipmapsmode.md): An enumeration for specifying how to allocate and generate mipmaps for a texture.
- [TextureResource.Semantic](textureresource/semantic-swift.enum.md): An object for specifying the intended use of a texture.
