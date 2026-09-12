> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrasterizationratelayerarray/setobject:atindexedsubscript:](https://developer.apple.com/documentation/metal/mtlrasterizationratelayerarray/setobject:atindexedsubscript:)

# setObject:atIndexedSubscript:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

Stores a sample value at the specified index.

## Declaration

```objectivec
- (void) setObject:(MTLRasterizationRateLayerDescriptor *) layer atIndexedSubscript:(NSUInteger) layerIndex;
```

## Parameters

- `layer`: The layer descriptor to set
- `layerIndex`: The index of the sample you want to set.

<a id="discussion"></a>

## Discussion

The method converts the value to a single precision floating point value.

## See Also

### Accessing members of the array

- [objectAtIndexedSubscript:](subscript%28__%29.md): Retrieves the sample value at the specified index.
- [MTLRasterizationRateLayerDescriptor](../mtlrasterizationratelayerdescriptor.md): The minimum rasterization rates to apply to sections of a layer in the render target.
