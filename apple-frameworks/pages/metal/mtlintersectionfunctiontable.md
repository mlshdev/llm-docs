> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlintersectionfunctiontable](https://developer.apple.com/documentation/metal/mtlintersectionfunctiontable)

# MTLIntersectionFunctionTable (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A table of intersection functions that Metal calls to perform ray-tracing intersection tests.

## Declaration

```swift
protocol MTLIntersectionFunctionTable : MTLResource
```

<a id="overview"></a>

## Overview

Don’t implement this protocol yourself. Instead create an [MTLIntersectionFunctionTableDescriptor](mtlintersectionfunctiontabledescriptor.md) instance and configure its properties. Then call the appropriate method on the pipeline state that you want to use this table with:

- **Compute pipeline**: [makeIntersectionFunctionTable(descriptor:)](mtlcomputepipelinestate/makeintersectionfunctiontable%28descriptor_%29.md)
- **Render pipeline**: [makeIntersectionFunctionTable(descriptor:stage:)](mtlrenderpipelinestate/makeintersectionfunctiontable%28descriptor_stage_%29.md)

If you use the same ray-tracing functions with more than one pipeline, make a separate table for each.

Use the methods on this instance to set the table entries to point at the intersection functions, and to provide buffers as arguments for those functions. For more information about intersection functions, see [Metal Shading Language Specification](https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf).

## Topics

### Setting a table entry

- [setFunction(\_:index:)](mtlintersectionfunctiontable/setfunction%28__index_%29.md): Sets an entry in the table.
- [setFunctions(\_:range:)](mtlintersectionfunctiontable/setfunctions%28__range_%29.md): Sets a range of entries in the table.

### Specifying arguments for intersection functions

- [setBuffer(\_:offset:index:)](mtlintersectionfunctiontable/setbuffer%28__offset_index_%29.md): Sets a buffer for the intersection functions.
- [setBuffers(\_:offsets:range:)](mtlintersectionfunctiontable/setbuffers%28__offsets_range_%29.md): Sets a range of buffers for the intersection functions.
- [setVisibleFunctionTable(\_:bufferIndex:)](mtlintersectionfunctiontable/setvisiblefunctiontable%28__bufferindex_%29.md): Sets a visible function table for the intersection functions.
- [setVisibleFunctionTables(\_:bufferRange:)](mtlintersectionfunctiontable/setvisiblefunctiontables%28__bufferrange_%29.md): Sets a range of visible function tables for the intersection functions.

### Specifying opaque triangle intersection testing

- [setOpaqueTriangleIntersectionFunction(signature:index:)](mtlintersectionfunctiontable/setopaquetriangleintersectionfunction%28signature_index_%29.md): Sets an entry in the intersection table to point to a system-defined opaque triangle intersection function.
- [setOpaqueTriangleIntersectionFunction(signature:range:)](mtlintersectionfunctiontable/setopaquetriangleintersectionfunction%28signature_range_%29.md): Sets a range of entries in the intersection table to point to a system-defined opaque triangle intersection function.

### Instance Properties

- [gpuResourceID](mtlintersectionfunctiontable/gpuresourceid.md)

### Instance Methods

- [setOpaqueCurveIntersectionFunction(signature:index:)](mtlintersectionfunctiontable/setopaquecurveintersectionfunction%28signature_index_%29.md)
- [setOpaqueCurveIntersectionFunction(signature:range:)](mtlintersectionfunctiontable/setopaquecurveintersectionfunction%28signature_range_%29.md)

## Relationships

### Inherits From

- [MTLAllocation](mtlallocation.md)
- [MTLResource](mtlresource.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Intersection function tables

- [MTLIntersectionFunctionTableDescriptor](mtlintersectionfunctiontabledescriptor.md): A specification of how to create an intersection function table.
- [MTLIntersectionFunctionDescriptor](mtlintersectionfunctiondescriptor.md): A description of an intersection function that performs an intersection test.
- [MTLIntersectionFunctionSignature](mtlintersectionfunctionsignature.md): Constants for specifying different types of custom intersection functions.
- [MTLIntersectionFunctionBufferArguments](mtlintersectionfunctionbufferarguments.md)

# MTLIntersectionFunctionTable (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A table of intersection functions that Metal calls to perform ray-tracing intersection tests.

## Declaration

```objectivec
@protocol MTLIntersectionFunctionTable <MTLResource>
```

<a id="overview"></a>

## Overview

Don’t implement this protocol yourself. Instead create an [MTLIntersectionFunctionTableDescriptor](mtlintersectionfunctiontabledescriptor.md) instance and configure its properties. Then call the appropriate method on the pipeline state that you want to use this table with:

- **Compute pipeline**: [newIntersectionFunctionTableWithDescriptor:](mtlcomputepipelinestate/makeintersectionfunctiontable%28descriptor_%29.md)
- **Render pipeline**: [newIntersectionFunctionTableWithDescriptor:stage:](mtlrenderpipelinestate/makeintersectionfunctiontable%28descriptor_stage_%29.md)

If you use the same ray-tracing functions with more than one pipeline, make a separate table for each.

Use the methods on this instance to set the table entries to point at the intersection functions, and to provide buffers as arguments for those functions. For more information about intersection functions, see [Metal Shading Language Specification](https://developer.apple.com/metal/Metal-Shading-Language-Specification.pdf).

## Topics

### Setting a table entry

- [setFunction:atIndex:](mtlintersectionfunctiontable/setfunction%28__index_%29.md): Sets an entry in the table.
- [setFunctions:withRange:](mtlintersectionfunctiontable/setfunctions_withrange_.md): Sets a range of entries in the table.

### Specifying arguments for intersection functions

- [setBuffer:offset:atIndex:](mtlintersectionfunctiontable/setbuffer%28__offset_index_%29.md): Sets a buffer for the intersection functions.
- [setBuffers:offsets:withRange:](mtlintersectionfunctiontable/setbuffers_offsets_withrange_.md): Sets a range of buffers for the intersection functions.
- [setVisibleFunctionTable:atBufferIndex:](mtlintersectionfunctiontable/setvisiblefunctiontable%28__bufferindex_%29.md): Sets a visible function table for the intersection functions.
- [setVisibleFunctionTables:withBufferRange:](mtlintersectionfunctiontable/setvisiblefunctiontables_withbufferrange_.md): Sets a range of visible function tables for the intersection functions.

### Specifying opaque triangle intersection testing

- [setOpaqueTriangleIntersectionFunctionWithSignature:atIndex:](mtlintersectionfunctiontable/setopaquetriangleintersectionfunction%28signature_index_%29.md): Sets an entry in the intersection table to point to a system-defined opaque triangle intersection function.
- [setOpaqueTriangleIntersectionFunctionWithSignature:withRange:](mtlintersectionfunctiontable/setopaquetriangleintersectionfunction%28signature_range_%29.md): Sets a range of entries in the intersection table to point to a system-defined opaque triangle intersection function.

### Instance Properties

- [gpuResourceID](mtlintersectionfunctiontable/gpuresourceid.md)

### Instance Methods

- [setOpaqueCurveIntersectionFunctionWithSignature:atIndex:](mtlintersectionfunctiontable/setopaquecurveintersectionfunction%28signature_index_%29.md)
- [setOpaqueCurveIntersectionFunctionWithSignature:withRange:](mtlintersectionfunctiontable/setopaquecurveintersectionfunction%28signature_range_%29.md)

## Relationships

### Inherits From

- [MTLResource](mtlresource.md)

## See Also

### Intersection function tables

- [MTLIntersectionFunctionTableDescriptor](mtlintersectionfunctiontabledescriptor.md): A specification of how to create an intersection function table.
- [MTLIntersectionFunctionDescriptor](mtlintersectionfunctiondescriptor.md): A description of an intersection function that performs an intersection test.
- [MTLIntersectionFunctionSignature](mtlintersectionfunctionsignature.md): Constants for specifying different types of custom intersection functions.
- [MTLIntersectionFunctionBufferArguments](mtlintersectionfunctionbufferarguments.md)
