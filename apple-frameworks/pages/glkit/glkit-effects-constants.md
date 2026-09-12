> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkit-effects-constants](https://developer.apple.com/documentation/glkit/glkit-effects-constants)

# GLKit Effects Constants

**Interface languages:** Swift, Objective-C

**Framework:** GLKit  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

GLKit effects implement shaders to perform their calculations. These shaders require vertex data to be provided by your application. All of the effects provided by GLKit use a consistent set of indices to reference vertex data provided by your application. When your application enables a vertex attribute array by calling the `glEnableVertexAttribArray` function, or specifies the vertex attribute pointer by calling the `glVertexAttribPointer` function, it uses one of these constants to specify the `index` parameter.

## Topics

### Constants

- [GLKVertexAttrib](glkvertexattrib.md): Values used as indices in OpenGL code to associate vertex data with an attribute in a named shader effect.

## See Also

### Rendering Effect Parameters

- [GLKEffectProperty](glkeffectproperty.md): Deprecated. The abstract superclass for configuration information used in GLKit rendering effects.
- [GLKEffectPropertyFog](glkeffectpropertyfog.md): Deprecated. Fog drawing information for use in GLKit rendering effects.
- [GLKEffectPropertyLight](glkeffectpropertylight.md): Deprecated. Lighting information for use in GLKit rendering effects.
- [GLKEffectPropertyTexture](glkeffectpropertytexture.md): Deprecated. Texture drawing parameters for use in GLKit rendering effects.
- [GLKEffectPropertyMaterial](glkeffectpropertymaterial.md): Deprecated. Surface appearance properties for use in GLKit rendering effects.
- [GLKEffectPropertyTransform](glkeffectpropertytransform.md): Deprecated. Coordinate transform information for use in GLKit rendering effects.
