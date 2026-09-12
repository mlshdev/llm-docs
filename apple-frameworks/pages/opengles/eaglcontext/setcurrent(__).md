> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/opengles/eaglcontext/setcurrent(_:)](https://developer.apple.com/documentation/opengles/eaglcontext/setcurrent(_:))

# setCurrent(\_:) (Swift)

**Framework:** OpenGL ES  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 2.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

Makes the specified context the current rendering context for the calling thread.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
class func setCurrent(_ context: EAGLContext?) -> Bool
```

## Parameters

- `context`: The rendering context that you want to make current.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise, [false](https://developer.apple.com/documentation/swift/false). If an error occurred, the rendering context for the current thread remains unchanged.

<a id="Discussion"></a>

## Discussion

A context encapsulates all OpenGL ES state for a single thread in your app. When you call any OpenGL ES API function, OpenGL ES evaluates it with respect to the calling thread’s current context. Because OpenGL ES functions require a current context, you must use this method to select a context for the current thread before calling any OpenGL ES function. Unless otherwise specified, OpenGL ES commands calls made in the same context complete in the order they are called.

OpenGL ES retains the context when it is made current, and it releases the previous context. To prevent a non-current context from being deallocated, your app should keep a `strong` reference to the context (or retain it, if using manual reference counting). Calling this method with a `nil` parameter releases the current context and leaves OpenGL ES unbound to any drawing context.

You should avoid making the same context current on multiple threads. OpenGL ES provides no thread safety, so if you want to use the same context on multiple threads, you must employ some form of thread synchronization to prevent simultaneous access to the same context from multiple threads.

# setCurrentContext: (Objective-C)

**Framework:** OpenGL ES  
**Kind:** Type Method  
**Availability:** iOS 2.0+ (deprecated in 12.0) · iPadOS 2.0+ (deprecated in 12.0) · Mac Catalyst 2.0+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 12.0)

Makes the specified context the current rendering context for the calling thread.

> OpenGLES API deprecated. (Define GLES_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
+ (BOOL) setCurrentContext:(EAGLContext *) context;
```

## Parameters

- `context`: The rendering context that you want to make current.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise, [false](https://developer.apple.com/documentation/swift/false). If an error occurred, the rendering context for the current thread remains unchanged.

<a id="Discussion"></a>

## Discussion

A context encapsulates all OpenGL ES state for a single thread in your app. When you call any OpenGL ES API function, OpenGL ES evaluates it with respect to the calling thread’s current context. Because OpenGL ES functions require a current context, you must use this method to select a context for the current thread before calling any OpenGL ES function. Unless otherwise specified, OpenGL ES commands calls made in the same context complete in the order they are called.

OpenGL ES retains the context when it is made current, and it releases the previous context. To prevent a non-current context from being deallocated, your app should keep a `strong` reference to the context (or retain it, if using manual reference counting). Calling this method with a `nil` parameter releases the current context and leaves OpenGL ES unbound to any drawing context.

You should avoid making the same context current on multiple threads. OpenGL ES provides no thread safety, so if you want to use the same context on multiple threads, you must employ some form of thread synchronization to prevent simultaneous access to the same context from multiple threads.
