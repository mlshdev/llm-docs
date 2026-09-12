> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph](https://developer.apple.com/documentation/accelerate/bnnsgraph)

# BNNSGraph

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS · watchOS 11.0+

An enumeration that acts as a namespace for the Swift overlays to BNNS Graph.

## Declaration

```swift
enum BNNSGraph
```

## Topics

### Compiling a graph object and creating a context

- [BNNSGraph.Context](bnnsgraph/context.md): A wrapper around a compiled graph object that adds a required modifiable context to support dynamically sized models and set execute-time options.

### Protocols

- [BNNSGraph.PointerArgument](bnnsgraph/pointerargument.md): A type that BNNS Graph accepts as an input-output argument.
- [BNNSGraph.TensorDescriptor](bnnsgraph/tensordescriptor.md): A protocol that allows `makeContext` to return a collection of heterogeneously typed `Tensor` structures.

### Structures

- [BNNSGraph.Builder](bnnsgraph/builder.md): A structure thats provides a closure you can use to define the arguments and operations of a BNNS Graph.
- [BNNSGraph.CompileOptions](bnnsgraph/compileoptions.md): The compilation options that BNNS uses when compiling a source mlmodelc file to a graph object.
- [BNNSGraph.Shape](bnnsgraph/shape.md): The specification of the shape of an argument.

### Type Methods

- [makeContext(options:\_:)](bnnsgraph/makecontext%28options___%29.md): Returns a new context that wraps a graph object that the given closure defines.

### Enumerations

- [BNNSGraph.Error](bnnsgraph/error.md): Error codes that a graph context throws.

## See Also

### Enumerations

- [BNNS](bnns.md): An enumeration that acts as a namespace for Swift overlays to BNNS.
