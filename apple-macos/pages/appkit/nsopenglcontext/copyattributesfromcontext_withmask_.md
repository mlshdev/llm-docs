> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglcontext/copyattributesfromcontext:withmask:](https://developer.apple.com/documentation/appkit/nsopenglcontext/copyattributesfromcontext:withmask:)

# copyAttributesFromContext:withMask:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Copies selected groups of state variables to the OpenGL context.

## Declaration

```objectivec
- (void) copyAttributesFromContext:(NSOpenGLContext *) context withMask:(GLbitfield) mask;
```

## Parameters

- `context`: The OpenGL graphics context containing the desired state variables.
- `mask`: A bitfield containing a bitwise OR of the same symbolic names that are passed to the OpenGL call `glPushAttrib`. The single symbolic constant `GL_ALL_ATTRIB_BITS` can be used to copy the maximum possible portion of the rendering state.

<a id="Discussion"></a>

## Discussion

Not all values for OpenGL states can be copied. For example, the pixel pack and unpack state, render mode state, and select and feedback state are not copied. The state that can be copied is exactly the state that is manipulated by the OpenGL call `glPushAttrib`.
