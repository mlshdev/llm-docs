> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkeffectpropertyfog/enabled](https://developer.apple.com/documentation/glkit/glkeffectpropertyfog/enabled)

# enabled (Swift)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

A Boolean value that indicates whether fog is applied to the fragment color.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var enabled: GLboolean { get set }
```

<a id="Discussion"></a>

## Discussion

If the value of this property is `GL_TRUE`, then fog calculations are performed each time a fragment is computed. If the value of this property is `GL_FALSE`, then fog calculations are skipped. The default value is `GL_TRUE`.

# enabled (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

A Boolean value that indicates whether fog is applied to the fragment color.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic, assign) GLboolean enabled;
```

<a id="Discussion"></a>

## Discussion

If the value of this property is `GL_TRUE`, then fog calculations are performed each time a fragment is computed. If the value of this property is `GL_FALSE`, then fog calculations are skipped. The default value is `GL_TRUE`.
