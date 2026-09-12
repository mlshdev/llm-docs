> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkskyboxeffect/preparetodraw()](https://developer.apple.com/documentation/glkit/glkskyboxeffect/preparetodraw())

# prepareToDraw() (Swift)

**Framework:** GLKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

Prepares an effect for rendering.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func prepareToDraw()
```

<a id="Discussion"></a>

## Discussion

When the skybox shader is bound, the following state variables are altered:

- `GL_CURRENT_PROGRAM`
- `GL_TEXTURE_BINDING_CUBE_MAP`
- `GL_VERTEX_ARRAY_BINDING_OES`
- `GL_VERTEX_ATTRIB_ARRAY_ENABLED`

Your application is responsible for saving and restoring these variables, if necessary for it to execute correctly.

# prepareToDraw (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

Prepares an effect for rendering.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (void) prepareToDraw;
```

<a id="Discussion"></a>

## Discussion

When the skybox shader is bound, the following state variables are altered:

- `GL_CURRENT_PROGRAM`
- `GL_TEXTURE_BINDING_CUBE_MAP`
- `GL_VERTEX_ARRAY_BINDING_OES`
- `GL_VERTEX_ATTRIB_ARRAY_ENABLED`

Your application is responsible for saving and restoring these variables, if necessary for it to execute correctly.
