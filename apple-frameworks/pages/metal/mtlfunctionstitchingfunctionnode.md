> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionstitchingfunctionnode](https://developer.apple.com/documentation/metal/mtlfunctionstitchingfunctionnode)

# MTLFunctionStitchingFunctionNode (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A call graph node that describes a function call and its inputs.

## Declaration

```swift
class MTLFunctionStitchingFunctionNode
```

<a id="overview"></a>

## Overview

When the Metal device object evaluates the function graph to compile the stitched function, it evaluates the nodes stored in the [arguments](mtlfunctionstitchingfunctionnode/arguments.md) property that it hasn’t already evaluated, and then calls the function specified by [name](mtlfunctionstitchingfunctionnode/name.md) to generate the node’s output.

If the function has side effects on the input data, use the [controlDependencies](mtlfunctionstitchingfunctionnode/controldependencies.md) property on other nodes to specify whether the Metal device object needs to evaluate this node first.

## Topics

### Initializing a function node

- [init(name:arguments:controlDependencies:)](mtlfunctionstitchingfunctionnode/init%28name_arguments_controldependencies_%29.md): Creates a new function node.

### Configuring a function node

- [name](mtlfunctionstitchingfunctionnode/name.md): The name of the function to call.
- [arguments](mtlfunctionstitchingfunctionnode/arguments.md): An ordered list of the nodes that provide the function’s arguments.
- [controlDependencies](mtlfunctionstitchingfunctionnode/controldependencies.md): The list of nodes that need to execute before executing the node.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MTLFunctionStitchingNode](mtlfunctionstitchingnode.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Stitched function libraries

- [Customizing shaders using function pointers and stitching](customizing-shaders-using-function-pointers-and-stitching.md): Define custom shader behavior at runtime by creating functions from existing ones and preferentially linking to others in a dynamic library.
- [MTLStitchedLibraryDescriptor](mtlstitchedlibrarydescriptor.md): A description of a new library of procedurally generated functions.
- [MTLFunctionStitchingGraph](mtlfunctionstitchinggraph.md): A description of a new stitched function.
- [MTLFunctionStitchingInputNode](mtlfunctionstitchinginputnode.md): A call graph node that describes an input to the call graph.
- [MTLFunctionStitchingNode](mtlfunctionstitchingnode.md): A protocol to identify call graph nodes.
- [MTLFunctionStitchingAttributeAlwaysInline](mtlfunctionstitchingattributealwaysinline.md): An attribute to specify that Metal needs to inline all of the function calls when generating the stitched function.
- [MTLFunctionStitchingAttribute](mtlfunctionstitchingattribute.md): A protocol to identify types that customize how the Metal compiler stitches a function together.

# MTLFunctionStitchingFunctionNode (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A call graph node that describes a function call and its inputs.

## Declaration

```objectivec
@interface MTLFunctionStitchingFunctionNode : NSObject
```

<a id="overview"></a>

## Overview

When the Metal device object evaluates the function graph to compile the stitched function, it evaluates the nodes stored in the [arguments](mtlfunctionstitchingfunctionnode/arguments.md) property that it hasn’t already evaluated, and then calls the function specified by [name](mtlfunctionstitchingfunctionnode/name.md) to generate the node’s output.

If the function has side effects on the input data, use the [controlDependencies](mtlfunctionstitchingfunctionnode/controldependencies.md) property on other nodes to specify whether the Metal device object needs to evaluate this node first.

## Topics

### Initializing a function node

- [initWithName:arguments:controlDependencies:](mtlfunctionstitchingfunctionnode/init%28name_arguments_controldependencies_%29.md): Creates a new function node.

### Configuring a function node

- [name](mtlfunctionstitchingfunctionnode/name.md): The name of the function to call.
- [arguments](mtlfunctionstitchingfunctionnode/arguments.md): An ordered list of the nodes that provide the function’s arguments.
- [controlDependencies](mtlfunctionstitchingfunctionnode/controldependencies.md): The list of nodes that need to execute before executing the node.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [MTLFunctionStitchingNode](mtlfunctionstitchingnode.md)

## See Also

### Stitched function libraries

- [Customizing shaders using function pointers and stitching](customizing-shaders-using-function-pointers-and-stitching.md): Define custom shader behavior at runtime by creating functions from existing ones and preferentially linking to others in a dynamic library.
- [MTLStitchedLibraryDescriptor](mtlstitchedlibrarydescriptor.md): A description of a new library of procedurally generated functions.
- [MTLFunctionStitchingGraph](mtlfunctionstitchinggraph.md): A description of a new stitched function.
- [MTLFunctionStitchingInputNode](mtlfunctionstitchinginputnode.md): A call graph node that describes an input to the call graph.
- [MTLFunctionStitchingNode](mtlfunctionstitchingnode.md): A protocol to identify call graph nodes.
- [MTLFunctionStitchingAttributeAlwaysInline](mtlfunctionstitchingattributealwaysinline.md): An attribute to specify that Metal needs to inline all of the function calls when generating the stitched function.
- [MTLFunctionStitchingAttribute](mtlfunctionstitchingattribute.md): A protocol to identify types that customize how the Metal compiler stitches a function together.
