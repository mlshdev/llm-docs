> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglcontext/init(format:share:)](https://developer.apple.com/documentation/appkit/nsopenglcontext/init(format:share:))

# init(format:share:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Returns an OpenGL context object initialized with the specified pixel format information.

> Please use Metal or MetalKit.

## Declaration

```swift
init?(format: NSOpenGLPixelFormat, share: NSOpenGLContext?)
```

## Parameters

- `format`: The pixel format to request for the OpenGL graphics context.
- `share`: Another OpenGL graphics context whose texture namespace and display lists you want to share with the receiver. If you do not want to share those features with another graphics context, you may pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

An `NSOpenGLContext` object initialized with the specified parameters, or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

If the parameters contain invalid information, this method returns `nil`. This may happen if one of the following situations occurs:

- The `format` parameter is `nil` or contains an invalid pixel format.
- The `share` parameter is not `nil` and contains an invalid context.
- The `share` parameter contains a context with a pixel format that is incompatible with the one in `format`.

Pixel formats are incompatible if they use different renderers; this can happen if, for example, one format required an accumulation buffer that could only be provided by the software renderer, and the other format did not.

## See Also

### Creating Contexts

- [init(cglContextObj:)](init%28cglcontextobj_%29-30lqr.md): Deprecated. Initializes and returns an OpenGL context object using an existing CGL context.

# initWithFormat:shareContext: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Returns an OpenGL context object initialized with the specified pixel format information.

> Please use Metal or MetalKit.

## Declaration

```objectivec
- (instancetype) initWithFormat:(NSOpenGLPixelFormat *) format shareContext:(NSOpenGLContext *) share;
```

## Parameters

- `format`: The pixel format to request for the OpenGL graphics context.
- `share`: Another OpenGL graphics context whose texture namespace and display lists you want to share with the receiver. If you do not want to share those features with another graphics context, you may pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

An `NSOpenGLContext` object initialized with the specified parameters, or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

If the parameters contain invalid information, this method returns `nil`. This may happen if one of the following situations occurs:

- The `format` parameter is `nil` or contains an invalid pixel format.
- The `share` parameter is not `nil` and contains an invalid context.
- The `share` parameter contains a context with a pixel format that is incompatible with the one in `format`.

Pixel formats are incompatible if they use different renderers; this can happen if, for example, one format required an accumulation buffer that could only be provided by the software renderer, and the other format did not.

## See Also

### Creating Contexts

- [initWithCGLContextObj:](init%28cglcontextobj_%29-30lqr.md): Deprecated. Initializes and returns an OpenGL context object using an existing CGL context.
