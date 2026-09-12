> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglcontext/makecurrentcontext()](https://developer.apple.com/documentation/appkit/nsopenglcontext/makecurrentcontext())

# makeCurrentContext() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Sets the context as the current OpenGL context object.

> Please use Metal or MetalKit.

## Declaration

```swift
func makeCurrentContext()
```

<a id="Discussion"></a>

## Discussion

Subsequent OpenGL calls are rendered into the context defined by the receiver.

> **Note**

>  A context is current on a per-thread basis. Multiple threads must serialize calls into the same context object.

## See Also

### Managing the Current Context

- [clearCurrentContext()](clearcurrentcontext%28%29.md): Deprecated. Clears the current context.
- [current](current.md): Deprecated. Returns the current OpenGL graphics context.

# makeCurrentContext (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Sets the context as the current OpenGL context object.

> Please use Metal or MetalKit.

## Declaration

```objectivec
- (void) makeCurrentContext;
```

<a id="Discussion"></a>

## Discussion

Subsequent OpenGL calls are rendered into the context defined by the receiver.

> **Note**

>  A context is current on a per-thread basis. Multiple threads must serialize calls into the same context object.

## See Also

### Managing the Current Context

- [clearCurrentContext](clearcurrentcontext%28%29.md): Deprecated. Clears the current context.
- [currentContext](current.md): Deprecated. Returns the current OpenGL graphics context.
