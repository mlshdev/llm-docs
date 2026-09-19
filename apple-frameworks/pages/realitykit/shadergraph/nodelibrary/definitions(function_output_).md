> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/shadergraph/nodelibrary/definitions(function:output:)

# definitions(function:output:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns all definitions that implement the given function with the specified output type.

## Declaration

```swift
final func definitions(function: String, output outputType: ShaderGraph.DataType) -> [ShaderGraph.NodeDefinition]
```
