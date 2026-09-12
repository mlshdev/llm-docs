> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/opengles/eaglcontext/init(api:sharegroup:)-2rt8m](https://developer.apple.com/documentation/opengles/eaglcontext/init(api:sharegroup:)-2rt8m)

# init(api:sharegroup:) (Swift)

**Framework:** OpenGL ES  
**Kind:** Initializer  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 2.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

Initializes and returns a newly allocated rendering context with the specified version of OpenGL ES rendering API and the specified sharegroup.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
init?(api: EAGLRenderingAPI, sharegroup: EAGLSharegroup)
```

## Parameters

- `api`: The desired version of the OpenGL ES rendering API. For legal values, see [EAGLRenderingAPI](../eaglrenderingapi.md).
- `sharegroup`: A sharegroup obtained from another [EAGLContext](../eaglcontext.md) object.

<a id="return-value"></a>

## Return Value

An initialized context object, or `nil` if the object couldn’t be created.

<a id="Discussion"></a>

## Discussion

To issue OpenGL ES commands to this context, you must first make it the current drawing context by calling [setCurrent(\_:)](setcurrent%28__%29.md).

OpenGL ES objects such as textures, renderbuffers, framebuffers and vertex buffers are shared across all contexts that are created with the same sharegroup. To specify that a new context should be initialized in an existing sharegroup, retrieve the [sharegroup](sharegroup.md) property from a previously initialized context and pass it as a parameter to this initialization method. Pass `nil` as the `sharegroup` parameter to create a new [EAGLSharegroup](../eaglsharegroup.md) object attached to the context.

# initWithAPI:sharegroup: (Objective-C)

**Framework:** OpenGL ES  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 2.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

Initializes and returns a newly allocated rendering context with the specified version of OpenGL ES rendering API and the specified sharegroup.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (instancetype) initWithAPI:(EAGLRenderingAPI) api sharegroup:(EAGLSharegroup *) sharegroup;
```

## Parameters

- `api`: The desired version of the OpenGL ES rendering API. For legal values, see [EAGLRenderingAPI](../eaglrenderingapi.md).
- `sharegroup`: A sharegroup obtained from another [EAGLContext](../eaglcontext.md) object.

<a id="return-value"></a>

## Return Value

An initialized context object, or `nil` if the object couldn’t be created.

<a id="Discussion"></a>

## Discussion

To issue OpenGL ES commands to this context, you must first make it the current drawing context by calling [setCurrentContext:](setcurrent%28__%29.md).

OpenGL ES objects such as textures, renderbuffers, framebuffers and vertex buffers are shared across all contexts that are created with the same sharegroup. To specify that a new context should be initialized in an existing sharegroup, retrieve the [sharegroup](sharegroup.md) property from a previously initialized context and pass it as a parameter to this initialization method. Pass `nil` as the `sharegroup` parameter to create a new [EAGLSharegroup](../eaglsharegroup.md) object attached to the context.
