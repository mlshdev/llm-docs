> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsopenglcontext/getvalues(_:for:)](https://developer.apple.com/documentation/appkit/nsopenglcontext/getvalues(_:for:))

# getValues(\_:for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Returns the value of the requested parameter.

> Please use Metal or MetalKit.

## Declaration

```swift
func getValues(_ vals: UnsafeMutablePointer<GLint>, for param: NSOpenGLContext.Parameter)
```

## Parameters

- `vals`: On input, a pointer to a variable with enough space for one or more `long` integers. On output, the variable contains the value (or values) for the given parameter.
- `param`: The parameter you want to get. For a list of parameters, see the table in [NSOpenGLContext.Parameter](parameter.md).

## See Also

### Context Parameter Handling

- [setValues(\_:for:)](setvalues%28__for_%29.md): Deprecated. Sets the value of the specified parameter.

# getValues:forParameter: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Returns the value of the requested parameter.

> Please use Metal or MetalKit.

## Declaration

```objectivec
- (void) getValues:(GLint *) vals forParameter:(NSOpenGLContextParameter) param;
```

## Parameters

- `vals`: On input, a pointer to a variable with enough space for one or more `long` integers. On output, the variable contains the value (or values) for the given parameter.
- `param`: The parameter you want to get. For a list of parameters, see the table in [NSOpenGLContextParameter](parameter.md).

## See Also

### Context Parameter Handling

- [setValues:forParameter:](setvalues%28__for_%29.md): Deprecated. Sets the value of the specified parameter.
