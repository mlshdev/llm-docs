> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkmodeliovertexdescriptorfrommetal(_:)](https://developer.apple.com/documentation/metalkit/mtkmodeliovertexdescriptorfrommetal(_:))

# MTKModelIOVertexDescriptorFromMetal(\_:) (Swift)

**Framework:** MetalKit  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a partially converted Model I/O vertex descriptor.

## Declaration

```swift
func MTKModelIOVertexDescriptorFromMetal(_ metalDescriptor: MTLVertexDescriptor) -> MDLVertexDescriptor
```

## Parameters

- `metalDescriptor`: A Metal vertex descriptor to convert from.

<a id="return-value"></a>

## Return Value

A Model I/O vertex descriptor object.

<a id="Discussion"></a>

## Discussion

This function is equivalent to the [MTKModelIOVertexDescriptorFromMetalWithError](mtkmodeliovertexdescriptorfrommetalwitherror.md) function, but does not report errors.

## See Also

### Converting Between Model I/O and Metal Vertex Descriptors

- [MTKMetalVertexDescriptorFromModelIO(\_:)](mtkmetalvertexdescriptorfrommodelio%28__%29.md): Returns a partially converted Metal vertex descriptor.

# MTKModelIOVertexDescriptorFromMetal (Objective-C)

**Framework:** MetalKit  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a partially converted Model I/O vertex descriptor.

## Declaration

```objectivec
extern MDLVertexDescriptor *MTKModelIOVertexDescriptorFromMetal(MTLVertexDescriptor *metalDescriptor);
```

## Parameters

- `metalDescriptor`: A Metal vertex descriptor to convert from.

<a id="return-value"></a>

## Return Value

A Model I/O vertex descriptor object.

<a id="Discussion"></a>

## Discussion

This function is equivalent to the [MTKModelIOVertexDescriptorFromMetalWithError](mtkmodeliovertexdescriptorfrommetalwitherror.md) function, but does not report errors.

## See Also

### Converting Between Model I/O and Metal Vertex Descriptors

- [MTKMetalVertexDescriptorFromModelIO](mtkmetalvertexdescriptorfrommodelio%28__%29.md): Returns a partially converted Metal vertex descriptor.
- [MTKMetalVertexDescriptorFromModelIOWithError](mtkmetalvertexdescriptorfrommodeliowitherror.md): Returns a partially converted Metal vertex descriptor, reporting any error that occurs.
- [MTKModelIOVertexDescriptorFromMetalWithError](mtkmodeliovertexdescriptorfrommetalwitherror.md): Returns a partially converted Model I/O vertex descriptor, reporting any error that occurs.
