> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit](https://developer.apple.com/documentation/glkit)

# GLKit (Swift)

**Framework:** GLKit  
**Kind:** Framework  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Speed up OpenGL ES or OpenGL app development. Use math libraries, background texture loading, pre-created shader effects, and a standard view and view controller to implement your rendering loop.

<a id="overview"></a>

## Overview

The GLKit framework provides functions and classes that reduce the effort required to create new shader-based apps or to port existing apps that rely on fixed-function vertex or fragment processing provided by earlier versions of OpenGL ES or OpenGL.

<a id="GLKit-Features"></a>

### GLKit Features

GLKit provides functionality in four key areas:

- *Texture loading* allows your app to easily load textures from a variety of sources. Textures can even be loaded asynchronously in the background with just a few lines of code. For more information, see [GLKTextureLoader](glkit/glktextureloader.md).
- *Math libraries* provide commonly used vector, quaternion and matrix operations. These implementations are optimized to provide great performance.
- *Effects* provide standard implementations of common shader effects. You configure the effect and the associated vertex data; the effect creates and loads an appropriate shader. GLKit includes three effects: The [GLKBaseEffect](glkit/glkbaseeffect.md) class implements a critical subset of the OpenGL ES 1.1 shading and lighting model, the [GLKReflectionMapEffect](glkit/glkreflectionmapeffect.md) class extends the base effect to include reflection mapping support, and the [GLKSkyboxEffect](glkit/glkskyboxeffect.md) class provides an implementation of a skybox effect.
- *Views and View Controllers* provide a standard implementation of an OpenGL ES view and a corresponding view controller. This reduces the amount of code needed to create an iOS app that use OpenGL ES. For more information, see [GLKView](glkit/glkview.md) and [GLKViewController](glkit/glkviewcontroller.md).

On iOS, GLKit requires an OpenGL ES 2.0 context. In macOS, GLKit requires an OpenGL context that supports the OpenGL 3.2 Core Profile.

## Topics

### Texture Loading

- [GLKTextureInfo](glkit/glktextureinfo.md): Deprecated. Information about OpenGL textures created by the [GLKTextureLoader](glkit/glktextureloader.md) class.
- [GLKTextureLoader](glkit/glktextureloader.md): Deprecated. A utility class that simplifies loading OpenGL or OpenGL ES texture datas from a variety of image file formats.

### OpenGL ES View Rendering

- [GLKView](glkit/glkview.md): Deprecated. A default implementation for views that draw their content using OpenGL ES.
- [GLKViewDelegate](glkit/glkviewdelegate.md): Drawing callback methods for use with a [GLKView](glkit/glkview.md) object.
- [GLKViewController](glkit/glkviewcontroller.md): Deprecated. A view controller that manages an OpenGL ES rendering loop.
- [GLKViewControllerDelegate](glkit/glkviewcontrollerdelegate.md): Rendering loop callback methods for use with a [GLKViewController](glkit/glkviewcontroller.md) object.

### Mesh Data Management

- [GLKMesh](glkit/glkmesh.md): Deprecated.
- [GLKMeshBuffer](glkit/glkmeshbuffer.md): Deprecated.
- [GLKMeshBufferAllocator](glkit/glkmeshbufferallocator.md): Deprecated.
- [GLKSubmesh](glkit/glksubmesh.md): Deprecated.

### Shader-Based Rendering Effects

- [GLKNamedEffect](glkit/glknamedeffect.md): A standard interface for objects that provide shader-based OpenGL rendering effects.
- [GLKBaseEffect](glkit/glkbaseeffect.md): Deprecated. A simple lighting and shading system for use in shader-based OpenGL rendering.
- [GLKReflectionMapEffect](glkit/glkreflectionmapeffect.md): Deprecated. A lighting and shading system that supports reflection mapping for use in shader-based OpenGL rendering.
- [GLKSkyboxEffect](glkit/glkskyboxeffect.md): Deprecated. A simple skybox visual effect for use in shader-based OpenGL rendering.

### Rendering Effect Parameters

- [GLKEffectProperty](glkit/glkeffectproperty.md): Deprecated. The abstract superclass for configuration information used in GLKit rendering effects.
- [GLKEffectPropertyFog](glkit/glkeffectpropertyfog.md): Deprecated. Fog drawing information for use in GLKit rendering effects.
- [GLKEffectPropertyLight](glkit/glkeffectpropertylight.md): Deprecated. Lighting information for use in GLKit rendering effects.
- [GLKEffectPropertyTexture](glkit/glkeffectpropertytexture.md): Deprecated. Texture drawing parameters for use in GLKit rendering effects.
- [GLKEffectPropertyMaterial](glkit/glkeffectpropertymaterial.md): Deprecated. Surface appearance properties for use in GLKit rendering effects.
- [GLKEffectPropertyTransform](glkit/glkeffectpropertytransform.md): Deprecated. Coordinate transform information for use in GLKit rendering effects.
- [GLKit Effects Constants](glkit/glkit-effects-constants.md)

### Math Utilties

- [GLKMatrixStack](glkit/glkmatrixstack.md): An opaque type that represents a stack of 4 x 4 matrices, providing support for hierarchical transform modeling and similar tasks.
- [GLKMatrix3](glkit/glkmatrix3-pcl.md)
- [GLKMatrix4](glkit/glkmatrix4-pce.md)
- [GLKVector2](glkit/glkvector2-pbj.md)
- [GLKVector3](glkit/glkvector3-pbt.md)
- [GLKVector4](glkit/glkvector4-pbk.md)
- [GLKQuaternion](glkit/glkquaternion-pc6.md)
- [GLKit Math Utilities](glkit/glkit-math-utilities.md)

### Reference

- [GLKit Structures](glkit/glkit-structures.md)
- [GLKit Enumerations](glkit/glkit-enumerations.md)
- [GLKit Constants](glkit/glkit-constants.md)
- [GLKit Functions](glkit/glkit-functions.md)
- [GLKit Data Types](glkit/glkit-data-types.md)

## See Also

### Related Documentation

- [OpenGL Programming Guide for Mac](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/OpenGL-MacProgGuide/opengl_intro/opengl_intro.html#//apple_ref/doc/uid/TP40001987)
- [OpenGL ES Programming Guide](https://developer.apple.com/library/archive/documentation/3DDrawing/Conceptual/OpenGLES_ProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008793)

# GLKit (Objective-C)

**Framework:** GLKit  
**Kind:** Framework  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Speed up OpenGL ES or OpenGL app development. Use math libraries, background texture loading, pre-created shader effects, and a standard view and view controller to implement your rendering loop.

<a id="overview"></a>

## Overview

The GLKit framework provides functions and classes that reduce the effort required to create new shader-based apps or to port existing apps that rely on fixed-function vertex or fragment processing provided by earlier versions of OpenGL ES or OpenGL.

<a id="GLKit-Features"></a>

### GLKit Features

GLKit provides functionality in four key areas:

- *Texture loading* allows your app to easily load textures from a variety of sources. Textures can even be loaded asynchronously in the background with just a few lines of code. For more information, see [GLKTextureLoader](glkit/glktextureloader.md).
- *Math libraries* provide commonly used vector, quaternion and matrix operations. These implementations are optimized to provide great performance.
- *Effects* provide standard implementations of common shader effects. You configure the effect and the associated vertex data; the effect creates and loads an appropriate shader. GLKit includes three effects: The [GLKBaseEffect](glkit/glkbaseeffect.md) class implements a critical subset of the OpenGL ES 1.1 shading and lighting model, the [GLKReflectionMapEffect](glkit/glkreflectionmapeffect.md) class extends the base effect to include reflection mapping support, and the [GLKSkyboxEffect](glkit/glkskyboxeffect.md) class provides an implementation of a skybox effect.
- *Views and View Controllers* provide a standard implementation of an OpenGL ES view and a corresponding view controller. This reduces the amount of code needed to create an iOS app that use OpenGL ES. For more information, see [GLKView](glkit/glkview.md) and [GLKViewController](glkit/glkviewcontroller.md).

On iOS, GLKit requires an OpenGL ES 2.0 context. In macOS, GLKit requires an OpenGL context that supports the OpenGL 3.2 Core Profile.

## Topics

### Texture Loading

- [GLKTextureInfo](glkit/glktextureinfo.md): Deprecated. Information about OpenGL textures created by the [GLKTextureLoader](glkit/glktextureloader.md) class.
- [GLKTextureLoader](glkit/glktextureloader.md): Deprecated. A utility class that simplifies loading OpenGL or OpenGL ES texture datas from a variety of image file formats.

### OpenGL ES View Rendering

- [GLKView](glkit/glkview.md): Deprecated. A default implementation for views that draw their content using OpenGL ES.
- [GLKViewDelegate](glkit/glkviewdelegate.md): Drawing callback methods for use with a [GLKView](glkit/glkview.md) object.
- [GLKViewController](glkit/glkviewcontroller.md): Deprecated. A view controller that manages an OpenGL ES rendering loop.
- [GLKViewControllerDelegate](glkit/glkviewcontrollerdelegate.md): Rendering loop callback methods for use with a [GLKViewController](glkit/glkviewcontroller.md) object.

### Mesh Data Management

- [GLKMesh](glkit/glkmesh.md): Deprecated.
- [GLKMeshBuffer](glkit/glkmeshbuffer.md): Deprecated.
- [GLKMeshBufferAllocator](glkit/glkmeshbufferallocator.md): Deprecated.
- [GLKSubmesh](glkit/glksubmesh.md): Deprecated.

### Shader-Based Rendering Effects

- [GLKNamedEffect](glkit/glknamedeffect.md): A standard interface for objects that provide shader-based OpenGL rendering effects.
- [GLKBaseEffect](glkit/glkbaseeffect.md): Deprecated. A simple lighting and shading system for use in shader-based OpenGL rendering.
- [GLKReflectionMapEffect](glkit/glkreflectionmapeffect.md): Deprecated. A lighting and shading system that supports reflection mapping for use in shader-based OpenGL rendering.
- [GLKSkyboxEffect](glkit/glkskyboxeffect.md): Deprecated. A simple skybox visual effect for use in shader-based OpenGL rendering.

### Rendering Effect Parameters

- [GLKEffectProperty](glkit/glkeffectproperty.md): Deprecated. The abstract superclass for configuration information used in GLKit rendering effects.
- [GLKEffectPropertyFog](glkit/glkeffectpropertyfog.md): Deprecated. Fog drawing information for use in GLKit rendering effects.
- [GLKEffectPropertyLight](glkit/glkeffectpropertylight.md): Deprecated. Lighting information for use in GLKit rendering effects.
- [GLKEffectPropertyTexture](glkit/glkeffectpropertytexture.md): Deprecated. Texture drawing parameters for use in GLKit rendering effects.
- [GLKEffectPropertyMaterial](glkit/glkeffectpropertymaterial.md): Deprecated. Surface appearance properties for use in GLKit rendering effects.
- [GLKEffectPropertyTransform](glkit/glkeffectpropertytransform.md): Deprecated. Coordinate transform information for use in GLKit rendering effects.
- [GLKit Effects Constants](glkit/glkit-effects-constants.md)

### Math Utilties

- [GLKMatrixStackRef](glkit/glkmatrixstack.md): An opaque type that represents a stack of 4 x 4 matrices, providing support for hierarchical transform modeling and similar tasks.
- [GLKMatrix3](glkit/glkmatrix3-pcl.md)
- [GLKMatrix4](glkit/glkmatrix4-pce.md)
- [GLKVector2](glkit/glkvector2-pbj.md)
- [GLKVector3](glkit/glkvector3-pbt.md)
- [GLKVector4](glkit/glkvector4-pbk.md)
- [GLKQuaternion](glkit/glkquaternion-pc6.md)
- [GLKit Math Utilities](glkit/glkit-math-utilities.md)

### Reference

- [GLKit Structures](glkit/glkit-structures.md)
- [GLKit Enumerations](glkit/glkit-enumerations.md)
- [GLKit Constants](glkit/glkit-constants.md)
- [GLKit Functions](glkit/glkit-functions.md)
- [GLKit Data Types](glkit/glkit-data-types.md)

### Macros

- [GLK_EXTERN](glkit/glk_extern.md)
- [GLK_INLINE](glkit/glk_inline.md)
- [OPENGLES_DEPRECATED](glkit/opengles_deprecated.md)
- [OPENGL_DEPRECATED](glkit/opengl_deprecated.md)

## See Also

### Related Documentation

- [OpenGL Programming Guide for Mac](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/OpenGL-MacProgGuide/opengl_intro/opengl_intro.html#//apple_ref/doc/uid/TP40001987)
- [OpenGL ES Programming Guide](https://developer.apple.com/library/archive/documentation/3DDrawing/Conceptual/OpenGLES_ProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008793)
