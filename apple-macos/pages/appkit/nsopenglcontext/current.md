> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglcontext/current](https://developer.apple.com/documentation/appkit/nsopenglcontext/current)

# current (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Returns the current OpenGL graphics context.

> Please use Metal or MetalKit.

## Declaration

```swift
class var current: NSOpenGLContext? { get }
```

<a id="return-value"></a>

## Return Value

The current OpenGL graphics context, or `nil` if no such object has been set.

## See Also

### Managing the Current Context

- [clearCurrentContext()](clearcurrentcontext%28%29.md): Deprecated. Clears the current context.
- [makeCurrentContext()](makecurrentcontext%28%29.md): Deprecated. Sets the context as the current OpenGL context object.

# currentContext (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Returns the current OpenGL graphics context.

> Please use Metal or MetalKit.

## Declaration

```objectivec
@property (class, strong, readonly, nullable) NSOpenGLContext * currentContext;
```

<a id="return-value"></a>

## Return Value

The current OpenGL graphics context, or `nil` if no such object has been set.

## See Also

### Managing the Current Context

- [clearCurrentContext](clearcurrentcontext%28%29.md): Deprecated. Clears the current context.
- [makeCurrentContext](makecurrentcontext%28%29.md): Deprecated. Sets the context as the current OpenGL context object.
