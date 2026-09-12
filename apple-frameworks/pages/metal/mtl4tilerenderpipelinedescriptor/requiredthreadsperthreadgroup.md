> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4tilerenderpipelinedescriptor/requiredthreadsperthreadgroup](https://developer.apple.com/documentation/metal/mtl4tilerenderpipelinedescriptor/requiredthreadsperthreadgroup)

# requiredThreadsPerThreadgroup (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the required number of threads per threadgroup for tile dispatches.

## Declaration

```swift
var requiredThreadsPerThreadgroup: MTLSize { get set }
```

<a id="discussion"></a>

## Discussion

This value is typically optional, except in the cases where the tile function that [tileFunctionDescriptor](tilefunctiondescriptor.md) references uses `CooperativeTensors`. In this case, you need to provide a non-zero value to this property.

Additionally, when you set this value, the `threadsPerTile` argument of any tile dispatch needs to match it.

Setting this value to a size of 0 in every dimension disables this property.

# requiredThreadsPerThreadgroup (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the required number of threads per threadgroup for tile dispatches.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTLSize requiredThreadsPerThreadgroup;
```

<a id="discussion"></a>

## Discussion

This value is typically optional, except in the cases where the tile function that [tileFunctionDescriptor](tilefunctiondescriptor.md) references uses `CooperativeTensors`. In this case, you need to provide a non-zero value to this property.

Additionally, when you set this value, the `threadsPerTile` argument of any tile dispatch needs to match it.

Setting this value to a size of 0 in every dimension disables this property.
