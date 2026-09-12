> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionstitchinginputnode](https://developer.apple.com/documentation/metal/mtlfunctionstitchinginputnode)

# MTLFunctionStitchingInputNode (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A call graph node that describes an input to the call graph.

## Declaration

```swift
class MTLFunctionStitchingInputNode
```

<a id="overview"></a>

## Overview

An input node contains data from one of the stitched function’s parameters. The output data type of an input node has the same type as the matching parameter.

## Topics

### Initializing an input node

- [init(argumentIndex:)](mtlfunctionstitchinginputnode/init%28argumentindex_%29.md): Creates a new input node.

### Configuring an input node

- [argumentIndex](mtlfunctionstitchinginputnode/argumentindex.md): The index in the command’s buffer argument table that declares which data to read for this input node.

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
- [MTLFunctionStitchingFunctionNode](mtlfunctionstitchingfunctionnode.md): A call graph node that describes a function call and its inputs.
- [MTLFunctionStitchingNode](mtlfunctionstitchingnode.md): A protocol to identify call graph nodes.
- [MTLFunctionStitchingAttributeAlwaysInline](mtlfunctionstitchingattributealwaysinline.md): An attribute to specify that Metal needs to inline all of the function calls when generating the stitched function.
- [MTLFunctionStitchingAttribute](mtlfunctionstitchingattribute.md): A protocol to identify types that customize how the Metal compiler stitches a function together.

# MTLFunctionStitchingInputNode (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A call graph node that describes an input to the call graph.

## Declaration

```objectivec
@interface MTLFunctionStitchingInputNode : NSObject
```

<a id="overview"></a>

## Overview

An input node contains data from one of the stitched function’s parameters. The output data type of an input node has the same type as the matching parameter.

## Topics

### Initializing an input node

- [initWithArgumentIndex:](mtlfunctionstitchinginputnode/init%28argumentindex_%29.md): Creates a new input node.

### Configuring an input node

- [argumentIndex](mtlfunctionstitchinginputnode/argumentindex.md): The index in the command’s buffer argument table that declares which data to read for this input node.

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
- [MTLFunctionStitchingFunctionNode](mtlfunctionstitchingfunctionnode.md): A call graph node that describes a function call and its inputs.
- [MTLFunctionStitchingNode](mtlfunctionstitchingnode.md): A protocol to identify call graph nodes.
- [MTLFunctionStitchingAttributeAlwaysInline](mtlfunctionstitchingattributealwaysinline.md): An attribute to specify that Metal needs to inline all of the function calls when generating the stitched function.
- [MTLFunctionStitchingAttribute](mtlfunctionstitchingattribute.md): A protocol to identify types that customize how the Metal compiler stitches a function together.
