> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmaterialresource/geometrymodifier/descriptor/init(named:in:constantvalues:)](https://developer.apple.com/documentation/realitykit/lowlevelmaterialresource/geometrymodifier/descriptor/init(named:in:constantvalues:))

# init(named:in:constantValues:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a descriptor referencing the named function in the given library, with the provided function constant values.

## Declaration

```swift
init(named name: String, in library: any MTLLibrary, constantValues: MTLFunctionConstantValues)
```

## Parameters

- `name`: The name of the Metal function in the library.
- `library`: The Metal library that contains the function.
- `constantValues`: The Metal function constant values to specialize the function with. The function descriptor takes a snapshot of the constant values passed in.

## See Also

### Creating a descriptor

- [init(named:in:constantValues:uniformsSize:)](init%28named_in_constantvalues_uniformssize_%29.md): Creates a descriptor for a geometry modifier that accepts a custom uniforms argument buffer.
- [init(named:in:constantValues:uniformsType:)](init%28named_in_constantvalues_uniformstype_%29.md): Creates a descriptor for a geometry modifier that accepts a custom uniforms argument buffer, deriving the buffer size from `uniformsType`.
