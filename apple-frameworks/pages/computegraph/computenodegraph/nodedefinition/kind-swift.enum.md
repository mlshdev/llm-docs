> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/computegraph/computenodegraph/nodedefinition/kind-swift.enum](https://developer.apple.com/documentation/computegraph/computenodegraph/nodedefinition/kind-swift.enum)

# ComputeNodeGraph.NodeDefinition.Kind

**Framework:** Compute Graph  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · Reality Composer Pro

## Declaration

```swift
enum Kind
```

## Topics

### Enumeration Cases

- [ComputeNodeGraph.NodeDefinition.Kind.binaryArithmetic(a:b:operation:)](kind-swift.enum/binaryarithmetic%28a_b_operation_%29.md): An arithmetic node with two operands of the given type, performing the specified operation
- [ComputeNodeGraph.NodeDefinition.Kind.compose(type:)](kind-swift.enum/compose%28type_%29.md): A node which composes a structure or vector type from its components
- [ComputeNodeGraph.NodeDefinition.Kind.convert(from:to:)](kind-swift.enum/convert%28from_to_%29.md): Convert from one primitive MTLDataType to another.
- [ComputeNodeGraph.NodeDefinition.Kind.decompose(type:)](kind-swift.enum/decompose%28type_%29.md): A node which decomposes a structure or vector type, providing access to individual components
- [ComputeNodeGraph.NodeDefinition.Kind.fieldReference(type:)](kind-swift.enum/fieldreference%28type_%29.md): Node contains a reference to a field of another stage, containing the given layout
- [ComputeNodeGraph.NodeDefinition.Kind.function(name:bundle:)](kind-swift.enum/function%28name_bundle_%29.md): Node refers to a MTLFunction with name and optional bundle.
- [ComputeNodeGraph.NodeDefinition.Kind.graphGlobal](kind-swift.enum/graphglobal.md): A node which contains global constants affecting the graph
- [ComputeNodeGraph.NodeDefinition.Kind.graphInput](kind-swift.enum/graphinput.md): Return a uniform value supplied externally.
- [ComputeNodeGraph.NodeDefinition.Kind.loadState(definition:)](kind-swift.enum/loadstate%28definition_%29.md): Node loads stored state into the graph
- [ComputeNodeGraph.NodeDefinition.Kind.reinterpret(from:to:)](kind-swift.enum/reinterpret%28from_to_%29.md): Reinterpret one type scalar or vector type as another of the same number of size and bytes.
- [ComputeNodeGraph.NodeDefinition.Kind.sampleTexture(sampler:)](kind-swift.enum/sampletexture%28sampler_%29.md): A texture sampling operation with specified settings.
- [ComputeNodeGraph.NodeDefinition.Kind.stage(type:)](kind-swift.enum/stage%28type_%29.md): Node represents an execution stage in the graph, for example ‘simulation’ or ‘emission’
- [ComputeNodeGraph.NodeDefinition.Kind.standardLibrary(type:function:)](kind-swift.enum/standardlibrary%28type_function_%29.md): A call to a standard library function with the specified data type.
- [ComputeNodeGraph.NodeDefinition.Kind.storeState(definition:)](kind-swift.enum/storestate%28definition_%29.md): Node stores state into the graph.
- [ComputeNodeGraph.NodeDefinition.Kind.swizzle(type:channels:)](kind-swift.enum/swizzle%28type_channels_%29.md): A swizzle operation for the given vector data type and channel specification
- [ComputeNodeGraph.NodeDefinition.Kind.textureReference(port:)](kind-swift.enum/texturereference%28port_%29.md)
- [ComputeNodeGraph.NodeDefinition.Kind.unaryArithmetic(type:operation:)](kind-swift.enum/unaryarithmetic%28type_operation_%29.md): An arithmetic node with one operand of the given data type, performing the specified operation

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
