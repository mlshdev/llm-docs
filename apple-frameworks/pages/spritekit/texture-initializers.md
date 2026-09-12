> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/texture-initializers](https://developer.apple.com/documentation/spritekit/texture-initializers)

# Texture Initializers (Swift)

**Framework:** SpriteKit  
**Kind:** API Collection

See the various ways to create and use textures in SpriteKit.

<a id="overview"></a>

## Overview

Use these functions to create a new texture. While doing so, you should be aware of the memory implications of texture memory, and the other ways to get textures other than `SKTexture` initializers.

<a id="Memory-Considerations"></a>

### Memory Considerations

When creating textures you should be aware of the memory consumed as a result of their file size dimensions. Often, the memory available to prepared textures is limited by hardware because textures are loaded in VRAM. Consider the following tips:

- Access a texture only when needed and dispose of it when you are done. This frees up memory for other parts of the app.
- Avoid loading too many textures in a single pass through the rendering loop. The process of decoding an image from disk is an expensive one and can therefore cause a few frames to be skipped. To avoid performance hiccups, preload textures ahead of time, such as when the scene is loaded.
- If you frequently use that same textures together (for example, all the grass tiles any time grass is displayed in a scene) then you should consider bundling them into an [SKTextureAtlas](sktextureatlas.md) to increase loading and runtime peformance.

<a id="Ways-to-Access-Textures"></a>

### Ways to Access Textures

In addition to the [Texture Initializers](texture-initializers.md) in `SKTexture`, the following other classes vend textures, too:

- Access a texture by its original filename within a SpriteKit texture atlas folder using `SKTextureAtlas`’s [textureNamed(\_:)](sktextureatlas/texturenamed%28__%29.md)
- Create a texture by rendering an existing node in the tree, including its children, using `SKView`’s [texture(from:)](skview/texture%28from_%29.md)

## Topics

### Filename Initializer

Search the app bundle for an image by filename.

- [init(imageNamed:)](sktexture/init%28imagenamed_%29.md): Create a new texture object from an image file stored in the app bundle.

### Texture Within a Texture

- [init(rect:in:)](sktexture/init%28rect_in_%29.md): Creates a new texture from a sub-rectangle of an existing texture.

### Texture from Image

- [init(image:)](sktexture/init%28image_%29.md): Create a new texture object from an image object.
- [init(cgImage:)](sktexture/init%28cgimage_%29-27ovb.md): Create a new texture object from a Quartz 2D image.

### Texture with Effects

- [applying(\_:)](sktexture/applying%28__%29.md): Creates a new texture by applying a Core Image filter to an existing texture.

### Texture from Data

- [init(data:size:)](sktexture/init%28data_size_%29.md): Creates a new texture from raw pixel data.
- [init(data:size:rowLength:alignment:)](sktexture/init%28data_size_rowlength_alignment_%29.md): Creates a new texture from custom formatted raw pixel data.
- [init(data:size:flipped:)](sktexture/init%28data_size_flipped_%29.md): Creates a new texture from raw pixel data.

### Texture from Normal Map

- [generatingNormalMap()](sktexture/generatingnormalmap%28%29.md): Creates a normal map texture by analyzing the contents of an existing texture.
- [generatingNormalMap(withSmoothness:contrast:)](sktexture/generatingnormalmap%28withsmoothness_contrast_%29.md): Creates a normal map texture by analyzing the contents of an existing texture.

### Noise Textures

- [init(vectorNoiseWithSmoothness:size:)](sktexture/init%28vectornoisewithsmoothness_size_%29.md): Creates a new texture whose contents are procedurally generated directional noise data.
- [init(noiseWithSmoothness:size:grayscale:)](sktexture/init%28noisewithsmoothness_size_grayscale_%29.md): Creates a new texture whose contents are procedurally generated color noise data.

### Texture from Noise Map

- [init(noiseMap:)](sktexture/init%28noisemap_%29.md): Creates a texture from the specified noise map.

## See Also

### First Steps

- [Loading and Using Textures](loading-and-using-textures.md): Learn the basics about using textures in SpriteKit.

# Texture Initializers (Objective-C)

**Framework:** SpriteKit  
**Kind:** API Collection

See the various ways to create and use textures in SpriteKit.

<a id="overview"></a>

## Overview

Use these functions to create a new texture. While doing so, you should be aware of the memory implications of texture memory, and the other ways to get textures other than `SKTexture` initializers.

<a id="Memory-Considerations"></a>

### Memory Considerations

When creating textures you should be aware of the memory consumed as a result of their file size dimensions. Often, the memory available to prepared textures is limited by hardware because textures are loaded in VRAM. Consider the following tips:

- Access a texture only when needed and dispose of it when you are done. This frees up memory for other parts of the app.
- Avoid loading too many textures in a single pass through the rendering loop. The process of decoding an image from disk is an expensive one and can therefore cause a few frames to be skipped. To avoid performance hiccups, preload textures ahead of time, such as when the scene is loaded.
- If you frequently use that same textures together (for example, all the grass tiles any time grass is displayed in a scene) then you should consider bundling them into an [SKTextureAtlas](sktextureatlas.md) to increase loading and runtime peformance.

<a id="Ways-to-Access-Textures"></a>

### Ways to Access Textures

In addition to the [Texture Initializers](texture-initializers.md) in `SKTexture`, the following other classes vend textures, too:

- Access a texture by its original filename within a SpriteKit texture atlas folder using `SKTextureAtlas`’s [textureNamed:](sktextureatlas/texturenamed%28__%29.md)
- Create a texture by rendering an existing node in the tree, including its children, using `SKView`’s [textureFromNode:](skview/texture%28from_%29.md)

## Topics

### Filename Initializer

Search the app bundle for an image by filename.

- [textureWithImageNamed:](sktexture/init%28imagenamed_%29.md): Create a new texture object from an image file stored in the app bundle.

### Texture Within a Texture

- [textureWithRect:inTexture:](sktexture/init%28rect_in_%29.md): Creates a new texture from a sub-rectangle of an existing texture.

### Texture from Image

- [textureWithImage:](sktexture/init%28image_%29.md): Create a new texture object from an image object.
- [textureWithCGImage:](sktexture/init%28cgimage_%29-27ovb.md): Create a new texture object from a Quartz 2D image.

### Texture with Effects

- [textureByApplyingCIFilter:](sktexture/applying%28__%29.md): Creates a new texture by applying a Core Image filter to an existing texture.

### Texture from Data

- [textureWithData:size:](sktexture/init%28data_size_%29.md): Creates a new texture from raw pixel data.
- [textureWithData:size:rowLength:alignment:](sktexture/init%28data_size_rowlength_alignment_%29.md): Creates a new texture from custom formatted raw pixel data.
- [textureWithData:size:flipped:](sktexture/init%28data_size_flipped_%29.md): Creates a new texture from raw pixel data.

### Texture from Normal Map

- [textureByGeneratingNormalMap](sktexture/generatingnormalmap%28%29.md): Creates a normal map texture by analyzing the contents of an existing texture.
- [textureByGeneratingNormalMapWithSmoothness:contrast:](sktexture/generatingnormalmap%28withsmoothness_contrast_%29.md): Creates a normal map texture by analyzing the contents of an existing texture.

### Noise Textures

- [textureVectorNoiseWithSmoothness:size:](sktexture/init%28vectornoisewithsmoothness_size_%29.md): Creates a new texture whose contents are procedurally generated directional noise data.
- [textureNoiseWithSmoothness:size:grayscale:](sktexture/init%28noisewithsmoothness_size_grayscale_%29.md): Creates a new texture whose contents are procedurally generated color noise data.

### Texture from Noise Map

- [textureWithNoiseMap:](sktexture/init%28noisemap_%29.md): Creates a texture from the specified noise map.

## See Also

### First Steps

- [Loading and Using Textures](loading-and-using-textures.md): Learn the basics about using textures in SpriteKit.
