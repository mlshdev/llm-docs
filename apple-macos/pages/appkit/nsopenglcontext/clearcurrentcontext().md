> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglcontext/clearcurrentcontext()](https://developer.apple.com/documentation/appkit/nsopenglcontext/clearcurrentcontext())

# clearCurrentContext() (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Clears the current context.

> Please use Metal or MetalKit.

## Declaration

```swift
class func clearCurrentContext()
```

<a id="Discussion"></a>

## Discussion

Until you issue a subsequent call to the [makeCurrentContext()](makecurrentcontext%28%29.md) method, OpenGL calls do nothing.

## See Also

### Managing the Current Context

- [current](current.md): Deprecated. Returns the current OpenGL graphics context.
- [makeCurrentContext()](makecurrentcontext%28%29.md): Deprecated. Sets the context as the current OpenGL context object.

# clearCurrentContext (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Clears the current context.

> Please use Metal or MetalKit.

## Declaration

```objectivec
+ (void) clearCurrentContext;
```

<a id="Discussion"></a>

## Discussion

Until you issue a subsequent call to the [makeCurrentContext](makecurrentcontext%28%29.md) method, OpenGL calls do nothing.

## See Also

### Managing the Current Context

- [currentContext](current.md): Deprecated. Returns the current OpenGL graphics context.
- [makeCurrentContext](makecurrentcontext%28%29.md): Deprecated. Sets the context as the current OpenGL context object.
