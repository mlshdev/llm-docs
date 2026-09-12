> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glktextureloader/init(sharegroup:)](https://developer.apple.com/documentation/glkit/glktextureloader/init(sharegroup:))

# init(sharegroup:) (Swift)

**Framework:** GLKit  
**Kind:** Initializer  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

Initializes a new texture loader object.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
init(sharegroup: EAGLSharegroup)
```

## Parameters

- `sharegroup`: The sharegroup used to store new textures.

<a id="return-value"></a>

## Return Value

A newly initialized texture loader.

<a id="Discussion"></a>

## Discussion

You only create a texture loader object when your app needs to load textures asynchronously.

## See Also

### Initialization

- [init(share:)](init%28share_%29.md): Deprecated. Initializes a new texture loader object.

# initWithSharegroup: (Objective-C)

**Framework:** GLKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ (deprecated in 12.0) · iPadOS 5.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

Initializes a new texture loader object.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (instancetype) initWithSharegroup:(EAGLSharegroup *) sharegroup;
```

## Parameters

- `sharegroup`: The sharegroup used to store new textures.

<a id="return-value"></a>

## Return Value

A newly initialized texture loader.

<a id="Discussion"></a>

## Discussion

You only create a texture loader object when your app needs to load textures asynchronously.

## See Also

### Initialization

- [initWithShareContext:](init%28share_%29.md): Deprecated. Initializes a new texture loader object.
