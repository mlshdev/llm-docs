> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglcontext/init(cglcontextobj:)-30lqr](https://developer.apple.com/documentation/appkit/nsopenglcontext/init(cglcontextobj:)-30lqr)

# init(cglContextObj:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.6+ (deprecated in 10.14)

Initializes and returns an OpenGL context object using an existing CGL context.

## Declaration

```swift
init?(cglContextObj context: CGLContextObj)
```

## Parameters

- `context`: The CGL context to wrap inside the [NSOpenGLContext](../nsopenglcontext.md) object.

<a id="return-value"></a>

## Return Value

An initialized context.

<a id="Discussion"></a>

## Discussion

If your application already has a CGL context, you can wrap a [NSOpenGLContext](../nsopenglcontext.md) object around it using this method. This method retains the CGL context by calling `CGLRetainContext(_:)`.

Only one [NSOpenGLContext](../nsopenglcontext.md) object can wrap a specific context.

Your application should not call `CGLDestroyContext(_:)` to dispose of the CGL context. Instead, your application should call `CGLReleaseContext(_:)` to decrement its reference count.

## See Also

### Creating Contexts

- [init(format:share:)](init%28format_share_%29.md): Deprecated. Returns an OpenGL context object initialized with the specified pixel format information.

# initWithCGLContextObj: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+ (deprecated in 10.14)

Initializes and returns an OpenGL context object using an existing CGL context.

## Declaration

```objectivec
- (NSOpenGLContext *) initWithCGLContextObj:(CGLContextObj) context;
```

## Parameters

- `context`: The CGL context to wrap inside the [NSOpenGLContext](../nsopenglcontext.md) object.

<a id="return-value"></a>

## Return Value

An initialized context.

<a id="Discussion"></a>

## Discussion

If your application already has a CGL context, you can wrap a [NSOpenGLContext](../nsopenglcontext.md) object around it using this method. This method retains the CGL context by calling `CGLRetainContext(_:)`.

Only one [NSOpenGLContext](../nsopenglcontext.md) object can wrap a specific context.

Your application should not call `CGLDestroyContext(_:)` to dispose of the CGL context. Instead, your application should call `CGLReleaseContext(_:)` to decrement its reference count.

## See Also

### Creating Contexts

- [initWithFormat:shareContext:](init%28format_share_%29.md): Deprecated. Returns an OpenGL context object initialized with the specified pixel format information.
