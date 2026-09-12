> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkmetalvertexdescriptorfrommodeliowitherror](https://developer.apple.com/documentation/metalkit/mtkmetalvertexdescriptorfrommodeliowitherror)

# MTKMetalVertexDescriptorFromModelIOWithError

**Interface language:** Objective-C

**Framework:** MetalKit  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Returns a partially converted Metal vertex descriptor, reporting any error that occurs.

## Declaration

```objectivec
extern MTLVertexDescriptor *MTKMetalVertexDescriptorFromModelIOWithError(MDLVertexDescriptor *modelIODescriptor, NSError **error);
```

## Parameters

- `modelIODescriptor`: A Model I/O vertex descriptor to convert from.
- `error`: A pointer to an [NSError](../foundation/nserror.md) object if an error occurred, or `nil` if conversion succeeded.

<a id="return-value"></a>

## Return Value

A Metal vertex descriptor object.

<a id="Discussion"></a>

## Discussion

This function can only set vertex format, offset, buffer index, and stride information in the resulting [MTLVertexDescriptor](../metal/mtlvertexdescriptor.md) object. The function copies attributes one-for-one, so it is up to you to properly arrange the MDLMutableVertexDescriptor attributes in the correct order so that the resulting [MTLVertexDescriptor](../metal/mtlvertexdescriptor.md) object can properly map mesh data to vertex shader inputs. Layout [stepFunction](../metal/mtlvertexbufferlayoutdescriptor/stepfunction.md) and [stepRate](../metal/mtlvertexbufferlayoutdescriptor/steprate.md) values for the resulting [MTLVertexDescriptor](../metal/mtlvertexdescriptor.md) object must also be set by your application.

## See Also

### Converting Between Model I/O and Metal Vertex Descriptors

- [MTKMetalVertexDescriptorFromModelIO](mtkmetalvertexdescriptorfrommodelio%28__%29.md): Returns a partially converted Metal vertex descriptor.
- [MTKModelIOVertexDescriptorFromMetal](mtkmodeliovertexdescriptorfrommetal%28__%29.md): Returns a partially converted Model I/O vertex descriptor.
- [MTKModelIOVertexDescriptorFromMetalWithError](mtkmodeliovertexdescriptorfrommetalwitherror.md): Returns a partially converted Model I/O vertex descriptor, reporting any error that occurs.
