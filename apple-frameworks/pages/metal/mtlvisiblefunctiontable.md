> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlvisiblefunctiontable](https://developer.apple.com/documentation/metal/mtlvisiblefunctiontable)

# MTLVisibleFunctionTable (Swift)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A table of shader functions visible to your app that you can pass into compute commands to customize the behavior of a shader.

## Declaration

```swift
protocol MTLVisibleFunctionTable : MTLResource
```

## Topics

### Setting a table entry

- [setFunction(\_:index:)](mtlvisiblefunctiontable/setfunction%28__index_%29.md): Sets a table entry to point to a callable function.
- [setFunctions(\_:range:)](mtlvisiblefunctiontable/setfunctions%28__range_%29.md): Sets a range of table entries to point to an array of callable functions.

### Instance Properties

- [gpuResourceID](mtlvisiblefunctiontable/gpuresourceid.md)

## Relationships

### Inherits From

- [MTLAllocation](mtlallocation.md)
- [MTLResource](mtlresource.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Shader functions

- [MTLFunctionDescriptor](mtlfunctiondescriptor.md): A description of a function object to create.
- [MTLFunction](mtlfunction.md): A interface that represents a public shader function in a Metal library.
- [MTLFunctionHandle](mtlfunctionhandle.md): An object representing a function that you can add to a visible function table.
- [MTLVisibleFunctionTableDescriptor](mtlvisiblefunctiontabledescriptor.md): A specification of how to create a visible function table.
- [MTLIntersectionFunctionDescriptor](mtlintersectionfunctiondescriptor.md): A description of an intersection function that performs an intersection test.
- [MTLIntersectionFunctionTableDescriptor](mtlintersectionfunctiontabledescriptor.md): A specification of how to create an intersection function table.
- [MTLIntersectionFunctionTable](mtlintersectionfunctiontable.md): A table of intersection functions that Metal calls to perform ray-tracing intersection tests.

# MTLVisibleFunctionTable (Objective-C)

**Framework:** Metal  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A table of shader functions visible to your app that you can pass into compute commands to customize the behavior of a shader.

## Declaration

```objectivec
@protocol MTLVisibleFunctionTable <MTLResource>
```

## Topics

### Setting a table entry

- [setFunction:atIndex:](mtlvisiblefunctiontable/setfunction%28__index_%29.md): Sets a table entry to point to a callable function.
- [setFunctions:withRange:](mtlvisiblefunctiontable/setfunctions_withrange_.md): Sets a range of table entries to point to an array of callable functions.

### Instance Properties

- [gpuResourceID](mtlvisiblefunctiontable/gpuresourceid.md)

## Relationships

### Inherits From

- [MTLResource](mtlresource.md)

## See Also

### Shader functions

- [MTLFunctionDescriptor](mtlfunctiondescriptor.md): A description of a function object to create.
- [MTLFunction](mtlfunction.md): A interface that represents a public shader function in a Metal library.
- [MTLFunctionHandle](mtlfunctionhandle.md): An object representing a function that you can add to a visible function table.
- [MTLVisibleFunctionTableDescriptor](mtlvisiblefunctiontabledescriptor.md): A specification of how to create a visible function table.
- [MTLIntersectionFunctionDescriptor](mtlintersectionfunctiondescriptor.md): A description of an intersection function that performs an intersection test.
- [MTLIntersectionFunctionTableDescriptor](mtlintersectionfunctiontabledescriptor.md): A specification of how to create an intersection function table.
- [MTLIntersectionFunctionTable](mtlintersectionfunctiontable.md): A table of intersection functions that Metal calls to perform ray-tracing intersection tests.
