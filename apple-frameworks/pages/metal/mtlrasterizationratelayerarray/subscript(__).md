> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrasterizationratelayerarray/subscript(_:)](https://developer.apple.com/documentation/metal/mtlrasterizationratelayerarray/subscript(_:))

# subscript(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Subscript  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

Retrieves the sample value at the specified index.

## Declaration

```swift
subscript(layerIndex: Int) -> MTLRasterizationRateLayerDescriptor? { get set }
```

## Parameters

- `layerIndex`: The index of the sample you want to retrieve.

<a id="return-value"></a>

## Return Value

An [NSNumber](../../foundation/nsnumber.md) instance describing the value of the sample at the specified index, or `0` if the index is out of range.

## See Also

### Accessing members of the array

- [MTLRasterizationRateLayerDescriptor](../mtlrasterizationratelayerdescriptor.md): The minimum rasterization rates to apply to sections of a layer in the render target.

# objectAtIndexedSubscript: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

Retrieves the sample value at the specified index.

## Declaration

```objectivec
- (MTLRasterizationRateLayerDescriptor *) objectAtIndexedSubscript:(NSUInteger) layerIndex;
```

## Parameters

- `layerIndex`: The index of the sample you want to retrieve.

<a id="return-value"></a>

## Return Value

An [NSNumber](../../foundation/nsnumber.md) instance describing the value of the sample at the specified index, or `0` if the index is out of range.

## See Also

### Accessing members of the array

- [setObject:atIndexedSubscript:](setobject_atindexedsubscript_.md): Stores a sample value at the specified index.
- [MTLRasterizationRateLayerDescriptor](../mtlrasterizationratelayerdescriptor.md): The minimum rasterization rates to apply to sections of a layer in the render target.
