> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglcontext/setvalues(_:for:)](https://developer.apple.com/documentation/appkit/nsopenglcontext/setvalues(_:for:))

# setValues(\_:for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Sets the value of the specified parameter.

> Please use Metal or MetalKit.

## Declaration

```swift
func setValues(_ vals: UnsafePointer<GLint>, for param: NSOpenGLContext.Parameter)
```

## Parameters

- `vals`: The new value (or values) for the parameter.
- `param`: The parameter you want to modify. For a list of parameters, see [NSOpenGLContext.Parameter](parameter.md).

## See Also

### Context Parameter Handling

- [getValues(\_:for:)](getvalues%28__for_%29.md): Deprecated. Returns the value of the requested parameter.

# setValues:forParameter: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Sets the value of the specified parameter.

> Please use Metal or MetalKit.

## Declaration

```objectivec
- (void) setValues:(const GLint *) vals forParameter:(NSOpenGLContextParameter) param;
```

## Parameters

- `vals`: The new value (or values) for the parameter.
- `param`: The parameter you want to modify. For a list of parameters, see [NSOpenGLContextParameter](parameter.md).

## See Also

### Context Parameter Handling

- [getValues:forParameter:](getvalues%28__for_%29.md): Deprecated. Returns the value of the requested parameter.
