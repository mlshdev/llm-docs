> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkmetalvertexdescriptorfrommodelio(_:)](https://developer.apple.com/documentation/metalkit/mtkmetalvertexdescriptorfrommodelio(_:))

# MTKMetalVertexDescriptorFromModelIO(\_:) (Swift)

**Framework:** MetalKit  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a partially converted Metal vertex descriptor.

## Declaration

```swift
func MTKMetalVertexDescriptorFromModelIO(_ modelIODescriptor: MDLVertexDescriptor) -> MTLVertexDescriptor?
```

<a id="return-value"></a>

## Return Value

A Metal vertex descriptor object.

<a id="Discussion"></a>

## Discussion

This function is equivalent to the [MTKMetalVertexDescriptorFromModelIOWithError](mtkmetalvertexdescriptorfrommodeliowitherror.md) function, but does not report errors.

## See Also

### Converting Between Model I/O and Metal Vertex Descriptors

- [MTKModelIOVertexDescriptorFromMetal(\_:)](mtkmodeliovertexdescriptorfrommetal%28__%29.md): Returns a partially converted Model I/O vertex descriptor.

# MTKMetalVertexDescriptorFromModelIO (Objective-C)

**Framework:** MetalKit  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Returns a partially converted Metal vertex descriptor.

## Declaration

```objectivec
extern MTLVertexDescriptor *MTKMetalVertexDescriptorFromModelIO(MDLVertexDescriptor *modelIODescriptor);
```

<a id="return-value"></a>

## Return Value

A Metal vertex descriptor object.

<a id="Discussion"></a>

## Discussion

This function is equivalent to the [MTKMetalVertexDescriptorFromModelIOWithError](mtkmetalvertexdescriptorfrommodeliowitherror.md) function, but does not report errors.

## See Also

### Converting Between Model I/O and Metal Vertex Descriptors

- [MTKMetalVertexDescriptorFromModelIOWithError](mtkmetalvertexdescriptorfrommodeliowitherror.md): Returns a partially converted Metal vertex descriptor, reporting any error that occurs.
- [MTKModelIOVertexDescriptorFromMetal](mtkmodeliovertexdescriptorfrommetal%28__%29.md): Returns a partially converted Model I/O vertex descriptor.
- [MTKModelIOVertexDescriptorFromMetalWithError](mtkmodeliovertexdescriptorfrommetalwitherror.md): Returns a partially converted Model I/O vertex descriptor, reporting any error that occurs.
