> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/portalmaterial/program-swift.struct/descriptor-swift.struct/init(shadergraph:inputvalues:constantvalues:)](https://developer.apple.com/documentation/realitykit/portalmaterial/program-swift.struct/descriptor-swift.struct/init(shadergraph:inputvalues:constantvalues:))

# init(shaderGraph:inputValues:constantValues:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Creates a descriptor with the given shader graph and optional initial values.

## Declaration

```swift
init(shaderGraph: ShaderGraph, inputValues: [String : MaterialParameters.Value] = [:], constantValues: MTLFunctionConstantValues = .init())
```

## Parameters

- `shaderGraph`: The shader graph that describes the program’s surface and, optionally, geometry-modifier shading.
- `inputValues`: Initial values for the inputs the shader graph declares. Defaults to an empty dictionary, leaving each input at its declared default.
- `constantValues`: Values for the function-constant inputs the shader graph declares. Defaults to an empty `MTLFunctionConstantValues`, leaving each function constant at its declared default.
