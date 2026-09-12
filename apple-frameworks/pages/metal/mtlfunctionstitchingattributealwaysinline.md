> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlfunctionstitchingattributealwaysinline](https://developer.apple.com/documentation/metal/mtlfunctionstitchingattributealwaysinline)

# MTLFunctionStitchingAttributeAlwaysInline (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An attribute to specify that Metal needs to inline all of the function calls when generating the stitched function.

## Declaration

```swift
class MTLFunctionStitchingAttributeAlwaysInline
```

<a id="overview"></a>

## Overview

To inline functions in a call graph, instantiate an instance of this class and assign it as an attribute on the [MTLFunctionStitchingGraph](mtlfunctionstitchinggraph.md).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MTLFunctionStitchingAttribute](mtlfunctionstitchingattribute.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Related Documentation

- [attributes](mtlfunctionstitchinggraph/attributes.md): A list of attributes to configure how the Metal device object generates the new stitched function.

### Stitched function libraries

- [Customizing shaders using function pointers and stitching](customizing-shaders-using-function-pointers-and-stitching.md): Define custom shader behavior at runtime by creating functions from existing ones and preferentially linking to others in a dynamic library.
- [MTLStitchedLibraryDescriptor](mtlstitchedlibrarydescriptor.md): A description of a new library of procedurally generated functions.
- [MTLFunctionStitchingGraph](mtlfunctionstitchinggraph.md): A description of a new stitched function.
- [MTLFunctionStitchingInputNode](mtlfunctionstitchinginputnode.md): A call graph node that describes an input to the call graph.
- [MTLFunctionStitchingFunctionNode](mtlfunctionstitchingfunctionnode.md): A call graph node that describes a function call and its inputs.
- [MTLFunctionStitchingNode](mtlfunctionstitchingnode.md): A protocol to identify call graph nodes.
- [MTLFunctionStitchingAttribute](mtlfunctionstitchingattribute.md): A protocol to identify types that customize how the Metal compiler stitches a function together.

# MTLFunctionStitchingAttributeAlwaysInline (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An attribute to specify that Metal needs to inline all of the function calls when generating the stitched function.

## Declaration

```objectivec
@interface MTLFunctionStitchingAttributeAlwaysInline : NSObject
```

<a id="overview"></a>

## Overview

To inline functions in a call graph, instantiate an instance of this class and assign it as an attribute on the [MTLFunctionStitchingGraph](mtlfunctionstitchinggraph.md).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [MTLFunctionStitchingAttribute](mtlfunctionstitchingattribute.md)

## See Also

### Related Documentation

- [attributes](mtlfunctionstitchinggraph/attributes.md): A list of attributes to configure how the Metal device object generates the new stitched function.

### Stitched function libraries

- [Customizing shaders using function pointers and stitching](customizing-shaders-using-function-pointers-and-stitching.md): Define custom shader behavior at runtime by creating functions from existing ones and preferentially linking to others in a dynamic library.
- [MTLStitchedLibraryDescriptor](mtlstitchedlibrarydescriptor.md): A description of a new library of procedurally generated functions.
- [MTLFunctionStitchingGraph](mtlfunctionstitchinggraph.md): A description of a new stitched function.
- [MTLFunctionStitchingInputNode](mtlfunctionstitchinginputnode.md): A call graph node that describes an input to the call graph.
- [MTLFunctionStitchingFunctionNode](mtlfunctionstitchingfunctionnode.md): A call graph node that describes a function call and its inputs.
- [MTLFunctionStitchingNode](mtlfunctionstitchingnode.md): A protocol to identify call graph nodes.
- [MTLFunctionStitchingAttribute](mtlfunctionstitchingattribute.md): A protocol to identify types that customize how the Metal compiler stitches a function together.
