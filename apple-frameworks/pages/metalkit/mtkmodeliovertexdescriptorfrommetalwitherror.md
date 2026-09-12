> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkmodeliovertexdescriptorfrommetalwitherror](https://developer.apple.com/documentation/metalkit/mtkmodeliovertexdescriptorfrommetalwitherror)

# MTKModelIOVertexDescriptorFromMetalWithError

**Interface language:** Objective-C

**Framework:** MetalKit  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Returns a partially converted Model I/O vertex descriptor, reporting any error that occurs.

## Declaration

```objectivec
extern MDLVertexDescriptor *MTKModelIOVertexDescriptorFromMetalWithError(MTLVertexDescriptor *metalDescriptor, NSError **error);
```

## Parameters

- `metalDescriptor`: A Metal vertex descriptor to convert from.
- `error`: A pointer to an [NSError](../foundation/nserror.md) object if an error occurred, or `nil` if conversion succeeded.

<a id="return-value"></a>

## Return Value

A Model I/O vertex descriptor object.

<a id="Discussion"></a>

## Discussion

This function can only set vertex format, offset, buffer index, and stride information in the resulting MDLMutableVertexDescriptor object. It does not add any semantic information such as attribute names. Names must be set in the returned MDLMutableVertexDescriptor object before it can be applied to a Model I/O mesh.

## See Also

### Converting Between Model I/O and Metal Vertex Descriptors

- [MTKMetalVertexDescriptorFromModelIO](mtkmetalvertexdescriptorfrommodelio%28__%29.md): Returns a partially converted Metal vertex descriptor.
- [MTKMetalVertexDescriptorFromModelIOWithError](mtkmetalvertexdescriptorfrommodeliowitherror.md): Returns a partially converted Metal vertex descriptor, reporting any error that occurs.
- [MTKModelIOVertexDescriptorFromMetal](mtkmodeliovertexdescriptorfrommetal%28__%29.md): Returns a partially converted Model I/O vertex descriptor.
