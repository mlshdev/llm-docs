> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/opengles/eaglcontext/sharegroup](https://developer.apple.com/documentation/opengles/eaglcontext/sharegroup)

# sharegroup (Swift)

**Framework:** OpenGL ES  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 2.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

The context’s sharegroup object. (read-only)

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
var sharegroup: EAGLSharegroup { get }
```

<a id="Discussion"></a>

## Discussion

Retrieve the sharegroup of a context when you want to create two or more contexts that share rendering resources. Call [init(api:)](init%28api_%29-q09o.md) to initialize the first context, retrieve its sharegroup, and then initialize additional contexts by calling [init(api:sharegroup:)](init%28api_sharegroup_%29-2rt8m.md), passing this sharegroup as the parameter.

## See Also

### Related Documentation

- [init(api:sharegroup:)](init%28api_sharegroup_%29-2rt8m.md): Deprecated. Initializes and returns a newly allocated rendering context with the specified version of OpenGL ES rendering API and the specified sharegroup.

# sharegroup (Objective-C)

**Framework:** OpenGL ES  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 2.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

The context’s sharegroup object. (read-only)

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
@property (readonly, nonnull) EAGLSharegroup * sharegroup;
```

<a id="Discussion"></a>

## Discussion

Retrieve the sharegroup of a context when you want to create two or more contexts that share rendering resources. Call [initWithAPI:](init%28api_%29-q09o.md) to initialize the first context, retrieve its sharegroup, and then initialize additional contexts by calling [initWithAPI:sharegroup:](init%28api_sharegroup_%29-2rt8m.md), passing this sharegroup as the parameter.

## See Also

### Related Documentation

- [initWithAPI:sharegroup:](init%28api_sharegroup_%29-2rt8m.md): Deprecated. Initializes and returns a newly allocated rendering context with the specified version of OpenGL ES rendering API and the specified sharegroup.
