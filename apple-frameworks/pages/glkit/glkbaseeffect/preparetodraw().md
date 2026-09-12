> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkbaseeffect/preparetodraw()](https://developer.apple.com/documentation/glkit/glkbaseeffect/preparetodraw())

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

An effect must be prepared after it is configured and again when your application wants to use the effect to render any primitives. When your application prepares an effect, some OpenGL state is altered to allow the effect to operate:

- The `GL_CURRENT_PROGRAM` state is always changed to point to the shader provided by the effect object.
- When texturing is enabled, the `GL_TEXTURE_BINDING_2D` state may also change.

If your application requires the previous state to be saved before the effect alters them, it must explicitly save and restore the values.

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

An effect must be prepared after it is configured and again when your application wants to use the effect to render any primitives. When your application prepares an effect, some OpenGL state is altered to allow the effect to operate:

- The `GL_CURRENT_PROGRAM` state is always changed to point to the shader provided by the effect object.
- When texturing is enabled, the `GL_TEXTURE_BINDING_2D` state may also change.

If your application requires the previous state to be saved before the effect alters them, it must explicitly save and restore the values.
