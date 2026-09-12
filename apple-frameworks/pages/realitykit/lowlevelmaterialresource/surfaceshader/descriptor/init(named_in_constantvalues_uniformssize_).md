> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmaterialresource/surfaceshader/descriptor/init(named:in:constantvalues:uniformssize:)](https://developer.apple.com/documentation/realitykit/lowlevelmaterialresource/surfaceshader/descriptor/init(named:in:constantvalues:uniformssize:))

# init(named:in:constantValues:uniformsSize:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a descriptor for a surface shader that accepts a custom uniforms argument buffer.

## Declaration

```swift
init(named name: String, in library: any MTLLibrary, constantValues: MTLFunctionConstantValues = .init(), uniformsSize: Int)
```

## Parameters

- `name`: The name of the Metal function in the library.
- `library`: The Metal library that contains the function.
- `constantValues`: The Metal function constant values to specialize the function with. The function descriptor takes a snapshot of the constant values passed in.
- `uniformsSize`: The size of the custom uniforms buffer, in bytes.

<a id="discussion"></a>

## Discussion

Use this initializer when your Metal surface shader function reads per-draw parameters through a custom uniforms argument buffer, using the same mechanism as [CustomMaterial/withMutableUniforms(ofType:stage:\_:)](https://developer.apple.com/documentation/realitykit/custommaterial/withmutableuniforms%28oftype:stage:_:%29). The function must be `[[stitchable]]` and declare the uniforms as a second `constant T &customParams` parameter:

```cpp
[[stitchable]]
void mySurfaceShader(realitykit::surface_parameters params,
                     constant MyUniforms &customParams) { ... }
```

The renderer sizes the uniforms buffer to `uniformsSize` bytes and configures the argument table automatically.

## See Also

### Creating a descriptor

- [init(named:in:constantValues:)](init%28named_in_constantvalues_%29.md): Creates a descriptor referencing the named function in the given library, with the provided function constant values.
- [init(named:in:constantValues:uniformsType:)](init%28named_in_constantvalues_uniformstype_%29.md): Creates a descriptor for a surface shader that accepts a custom uniforms argument buffer, deriving the buffer size from `uniformsType`.
