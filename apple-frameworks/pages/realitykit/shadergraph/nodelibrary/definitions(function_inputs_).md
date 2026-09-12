> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shadergraph/nodelibrary/definitions(function:inputs:)](https://developer.apple.com/documentation/realitykit/shadergraph/nodelibrary/definitions(function:inputs:))

# definitions(function:inputs:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns all definitions that implement the given function with the specified input types, in order.

## Declaration

```swift
final func definitions(function: String, inputs inputTypes: ShaderGraph.DataType...) -> [ShaderGraph.NodeDefinition]
```
