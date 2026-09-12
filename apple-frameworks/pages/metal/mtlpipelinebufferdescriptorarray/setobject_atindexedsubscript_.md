> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlpipelinebufferdescriptorarray/setobject:atindexedsubscript:](https://developer.apple.com/documentation/metal/mtlpipelinebufferdescriptorarray/setobject:atindexedsubscript:)

# setObject:atIndexedSubscript:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Sets a pipeline buffer descriptor at the specified array index.

## Declaration

```objectivec
- (void) setObject:(MTLPipelineBufferDescriptor *) buffer atIndexedSubscript:(NSUInteger) bufferIndex;
```

## Parameters

- `buffer`: The pipeline buffer descriptor to set in the array.
- `bufferIndex`: The array index in which to set the given pipeline buffer descriptor.

## See Also

### Accessing array elements

- [objectAtIndexedSubscript:](subscript%28__%29.md): Returns the pipeline buffer descriptor at the specified array index.
