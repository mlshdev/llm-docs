> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/lowlevelrendercontextstandalone/makeshadergraphfunctions(shadergraph:constantvalues:)-7p4ye

# makeShaderGraphFunctions(shaderGraph:constantValues:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Compiles a ShaderGraph into a geometry modifier and surface shader.

## Declaration

```swift
nonisolated(nonsending) final func makeShaderGraphFunctions(shaderGraph: ShaderGraph, constantValues: MTLFunctionConstantValues) async throws -> sending LowLevelMaterialResource.ShaderGraphOutput
```

## Parameters

- `shaderGraph`: The ShaderGraph to compile.
- `constantValues`: The Metal function constant values used to specialize the compiled functions.

<a id="return-value"></a>

## Return Value

The compiled functions for use in a [LowLevelMaterialResource](../lowlevelmaterialresource.md).
