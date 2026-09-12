> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/opengles/eaglcontext/init(api:)-q09o](https://developer.apple.com/documentation/opengles/eaglcontext/init(api:)-q09o)

# init(api:) (Swift)

**Framework:** OpenGL ES  
**Kind:** Initializer  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 2.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

Initializes and returns a newly allocated rendering context with the specified version of the OpenGL ES rendering API.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
convenience init?(api: EAGLRenderingAPI)
```

## Parameters

- `api`: The desired version of the OpenGL ES rendering API. For legal values, see [EAGLRenderingAPI](../eaglrenderingapi.md).

<a id="return-value"></a>

## Return Value

An initialized context object, or `nil` if the object couldn’t be created.

<a id="Discussion"></a>

## Discussion

To issue OpenGL ES commands to this context, you must first make the context current by calling [setCurrent(\_:)](setcurrent%28__%29.md).

Calling [init(api:)](init%28api_%29-q09o.md) creates a new [EAGLSharegroup](../eaglsharegroup.md) object and attaches it to this context.

## See Also

### Related Documentation

- [OpenGL ES Programming Guide](https://developer.apple.com/library/archive/documentation/3DDrawing/Conceptual/OpenGLES_ProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008793)

# initWithAPI: (Objective-C)

**Framework:** OpenGL ES  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 2.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

Initializes and returns a newly allocated rendering context with the specified version of the OpenGL ES rendering API.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (instancetype) initWithAPI:(EAGLRenderingAPI) api;
```

## Parameters

- `api`: The desired version of the OpenGL ES rendering API. For legal values, see [EAGLRenderingAPI](../eaglrenderingapi.md).

<a id="return-value"></a>

## Return Value

An initialized context object, or `nil` if the object couldn’t be created.

<a id="Discussion"></a>

## Discussion

To issue OpenGL ES commands to this context, you must first make the context current by calling [setCurrentContext:](setcurrent%28__%29.md).

Calling [initWithAPI:](init%28api_%29-q09o.md) creates a new [EAGLSharegroup](../eaglsharegroup.md) object and attaches it to this context.

## See Also

### Related Documentation

- [OpenGL ES Programming Guide](https://developer.apple.com/library/archive/documentation/3DDrawing/Conceptual/OpenGLES_ProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008793)
