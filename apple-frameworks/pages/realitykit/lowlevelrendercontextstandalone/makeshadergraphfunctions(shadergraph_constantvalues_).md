> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelrendercontextstandalone/makeshadergraphfunctions(shadergraph:constantvalues:)](https://developer.apple.com/documentation/realitykit/lowlevelrendercontextstandalone/makeshadergraphfunctions(shadergraph:constantvalues:))

# makeShaderGraphFunctions(shaderGraph:constantValues:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A synchronous variant of [makeShaderGraphFunctions(shaderGraph:constantValues:)](makeshadergraphfunctions%28shadergraph_constantvalues_%29.md) for non-async callers.

## Declaration

```swift
final func makeShaderGraphFunctions(shaderGraph: ShaderGraph, constantValues: MTLFunctionConstantValues) throws -> sending LowLevelMaterialResource.ShaderGraphOutput
```

## Parameters

- `shaderGraph`: The ShaderGraph to compile.
- `constantValues`: The Metal function constant values used to specialize the compiled functions.

<a id="return-value"></a>

## Return Value

The compiled functions for use in a [LowLevelMaterialResource](../lowlevelmaterialresource.md).
