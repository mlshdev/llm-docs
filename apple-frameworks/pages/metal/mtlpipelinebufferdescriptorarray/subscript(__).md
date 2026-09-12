> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlpipelinebufferdescriptorarray/subscript(_:)](https://developer.apple.com/documentation/metal/mtlpipelinebufferdescriptorarray/subscript(_:))

# subscript(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Subscript  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Returns the pipeline buffer descriptor at the specified array index.

## Declaration

```swift
subscript(bufferIndex: Int) -> MTLPipelineBufferDescriptor! { get set }
```

## Parameters

- `bufferIndex`: The array index of the requested pipeline buffer descriptor.

<a id="return-value"></a>

## Return Value

The descriptor for the buffer bound at this index.

# objectAtIndexedSubscript: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Returns the pipeline buffer descriptor at the specified array index.

## Declaration

```objectivec
- (MTLPipelineBufferDescriptor *) objectAtIndexedSubscript:(NSUInteger) bufferIndex;
```

## Parameters

- `bufferIndex`: The array index of the requested pipeline buffer descriptor.

<a id="return-value"></a>

## Return Value

The descriptor for the buffer bound at this index.

## See Also

### Accessing array elements

- [setObject:atIndexedSubscript:](setobject_atindexedsubscript_.md): Sets a pipeline buffer descriptor at the specified array index.
