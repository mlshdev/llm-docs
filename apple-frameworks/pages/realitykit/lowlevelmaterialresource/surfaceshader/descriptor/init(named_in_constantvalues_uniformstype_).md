> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmaterialresource/surfaceshader/descriptor/init(named:in:constantvalues:uniformstype:)](https://developer.apple.com/documentation/realitykit/lowlevelmaterialresource/surfaceshader/descriptor/init(named:in:constantvalues:uniformstype:))

# init(named:in:constantValues:uniformsType:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a descriptor for a surface shader that accepts a custom uniforms argument buffer, deriving the buffer size from `uniformsType`.

## Declaration

```swift
init<UniformsType>(named name: String, in library: any MTLLibrary, constantValues: MTLFunctionConstantValues = .init(), uniformsType: UniformsType.Type)
```

## Parameters

- `name`: The name of the Metal function in the library.
- `library`: The Metal library that contains the function.
- `constantValues`: The Metal function constant values to specialize the function with. The function descriptor takes a snapshot of the constant values passed in.
- `uniformsType`: The Swift type that mirrors your Metal uniforms struct.

<a id="discussion"></a>

## Discussion

Equivalent to calling [init(named:in:constantValues:uniformsSize:)](init%28named_in_constantvalues_uniformssize_%29.md) with `MemoryLayout<UniformsType>.size`.

## See Also

### Creating a descriptor

- [init(named:in:constantValues:)](init%28named_in_constantvalues_%29.md): Creates a descriptor referencing the named function in the given library, with the provided function constant values.
- [init(named:in:constantValues:uniformsSize:)](init%28named_in_constantvalues_uniformssize_%29.md): Creates a descriptor for a surface shader that accepts a custom uniforms argument buffer.
