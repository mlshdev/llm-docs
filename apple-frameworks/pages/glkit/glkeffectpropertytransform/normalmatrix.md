> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glkeffectpropertytransform/normalmatrix](https://developer.apple.com/documentation/glkit/glkeffectpropertytransform/normalmatrix)

# normalMatrix (Swift)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

The matrix used to transform normal coordinates from world space to eye space.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var normalMatrix: GLKMatrix3 { get }
```

<a id="Discussion"></a>

## Discussion

The normal matrix is derived from the [modelviewMatrix](modelviewmatrix.md) property and is automatically calculated when needed.

## See Also

### Configuring Modelview Properties

- [modelviewMatrix](modelviewmatrix.md): Deprecated. The matrix used to transform position coordinates from world space to eye space.

# normalMatrix (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · macOS 10.8+ (deprecated in 10.14) · tvOS 9.0+ (deprecated in 12.0)

The matrix used to transform normal coordinates from world space to eye space.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (nonatomic, readonly) GLKMatrix3 normalMatrix;
```

<a id="Discussion"></a>

## Discussion

The normal matrix is derived from the [modelviewMatrix](modelviewmatrix.md) property and is automatically calculated when needed.

## See Also

### Configuring Modelview Properties

- [modelviewMatrix](modelviewmatrix.md): Deprecated. The matrix used to transform position coordinates from world space to eye space.
