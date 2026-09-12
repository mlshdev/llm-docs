> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glktextureloader/init(share:)](https://developer.apple.com/documentation/glkit/glktextureloader/init(share:))

# init(share:) (Swift)

**Framework:** GLKit  
**Kind:** Initializer  
**Availability:** macOS 10.8+ (deprecated in 10.14)

Initializes a new texture loader object.

> OpenGL API deprecated. (Define GL_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
init(share context: NSOpenGLContext)
```

## Parameters

- `context`: The share context used to store new textures.

<a id="return-value"></a>

## Return Value

A newly initialized texture loader.

<a id="Discussion"></a>

## Discussion

You only create a texture loader object when your app needs to load textures asynchronously.

## See Also

### Initialization

- [init(sharegroup:)](init%28sharegroup_%29.md): Deprecated. Initializes a new texture loader object.

# initWithShareContext: (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Method  
**Availability:** macOS 10.8+ (deprecated in 10.14)

Initializes a new texture loader object.

> OpenGL API deprecated. (Define GL_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (instancetype) initWithShareContext:(NSOpenGLContext *) context;
```

## Parameters

- `context`: The share context used to store new textures.

<a id="return-value"></a>

## Return Value

A newly initialized texture loader.

<a id="Discussion"></a>

## Discussion

You only create a texture loader object when your app needs to load textures asynchronously.

## See Also

### Initialization

- [initWithSharegroup:](init%28sharegroup_%29.md): Deprecated. Initializes a new texture loader object.
