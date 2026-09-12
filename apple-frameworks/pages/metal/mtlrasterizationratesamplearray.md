> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrasterizationratesamplearray](https://developer.apple.com/documentation/metal/mtlrasterizationratesamplearray)

# MTLRasterizationRateSampleArray (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

An array instance that contains rasterization rates.

## Declaration

```swift
class MTLRasterizationRateSampleArray
```

<a id="overview"></a>

## Overview

The [horizontal](mtlrasterizationratelayerdescriptor/horizontal.md) and [vertical](mtlrasterizationratelayerdescriptor/vertical.md) properties of an [MTLRasterizationRateLayerDescriptor](mtlrasterizationratelayerdescriptor.md) point to [MTLRasterizationRateSampleArray](mtlrasterizationratesamplearray.md) instances that contains rasterization rates for the layer map. You can use array subscript syntax to access the samples. [MTLRasterizationRateSampleArray](mtlrasterizationratesamplearray.md) instances perform bounds checking on any memory operations you make to their sample data.

## Topics

### Accessing the array

- [subscript(\_:)](mtlrasterizationratesamplearray/subscript%28__%29.md): Retrieves the sample value at the specified index.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Inspecting the layer rate function parameters

- [sampleCount](mtlrasterizationratelayerdescriptor/samplecount.md): The number of rows and columns in the layer map.
- [maxSampleCount](mtlrasterizationratelayerdescriptor/maxsamplecount.md): The maximum number of rows and columns in the layer map.
- [horizontal](mtlrasterizationratelayerdescriptor/horizontal.md): The horizontal rasterization rates for the layer map’s rows.
- [vertical](mtlrasterizationratelayerdescriptor/vertical.md): The vertical rasterization rates for the layer map’s rows.

# MTLRasterizationRateSampleArray (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

An array instance that contains rasterization rates.

## Declaration

```objectivec
@interface MTLRasterizationRateSampleArray : NSObject
```

<a id="overview"></a>

## Overview

The [horizontal](mtlrasterizationratelayerdescriptor/horizontal.md) and [vertical](mtlrasterizationratelayerdescriptor/vertical.md) properties of an [MTLRasterizationRateLayerDescriptor](mtlrasterizationratelayerdescriptor.md) point to [MTLRasterizationRateSampleArray](mtlrasterizationratesamplearray.md) instances that contains rasterization rates for the layer map. You can use array subscript syntax to access the samples. [MTLRasterizationRateSampleArray](mtlrasterizationratesamplearray.md) instances perform bounds checking on any memory operations you make to their sample data.

## Topics

### Accessing the array

- [objectAtIndexedSubscript:](mtlrasterizationratesamplearray/objectatindexedsubscript_.md): Retrieves the sample value at the specified index.
- [setObject:atIndexedSubscript:](mtlrasterizationratesamplearray/setobject_atindexedsubscript_.md): Stores a sample value at the specified index.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Inspecting the layer rate function parameters

- [sampleCount](mtlrasterizationratelayerdescriptor/samplecount.md): The number of rows and columns in the layer map.
- [maxSampleCount](mtlrasterizationratelayerdescriptor/maxsamplecount.md): The maximum number of rows and columns in the layer map.
- [horizontal](mtlrasterizationratelayerdescriptor/horizontal.md): The horizontal rasterization rates for the layer map’s rows.
- [vertical](mtlrasterizationratelayerdescriptor/vertical.md): The vertical rasterization rates for the layer map’s rows.
- [horizontalSampleStorage](mtlrasterizationratelayerdescriptor/horizontalsamplestorage.md): A pointer to the storage for the layer map’s horizontal rasterization rates.
- [verticalSampleStorage](mtlrasterizationratelayerdescriptor/verticalsamplestorage.md): A pointer to the storage for the layer map’s vertical rasterization rates.
