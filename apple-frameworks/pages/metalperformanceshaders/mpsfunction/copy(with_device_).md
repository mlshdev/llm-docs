> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsfunction/copy(with:device:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsfunction/copy(with:device:))

# copy(with:device:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
func copy(with zone: NSZone? = nil, device: (any MTLDevice)?) -> Self
```

## Parameters

- `zone`: The NSZone in which to allocate the object
- `device`: The device for the new MPSKernel. If nil, then use self.device.

<a id="return-value"></a>

## Return Value

A pointer to a copy of this MPSKernel. This will fail, returning nil if the device is not supported. Devices must be MTLFeatureSet_iOS_GPUFamily2_v1 or later.

<a id="discussion"></a>

## Discussion

Make a copy of this MPSFunction for a new device

-copyWithZone: will call this API to make a copy of the MPSKernel on the same device.  This interface may also be called directly to make a copy of the MPSFunction on a new device.

# copyWithZone:device: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (instancetype) copyWithZone:(NSZone *) zone device:(id<MTLDevice>) device;
```

## Parameters

- `zone`: The NSZone in which to allocate the object
- `device`: The device for the new MPSKernel. If nil, then use self.device.

<a id="return-value"></a>

## Return Value

A pointer to a copy of this MPSKernel. This will fail, returning nil if the device is not supported. Devices must be MTLFeatureSet_iOS_GPUFamily2_v1 or later.

<a id="discussion"></a>

## Discussion

Make a copy of this MPSFunction for a new device

-copyWithZone: will call this API to make a copy of the MPSKernel on the same device.  This interface may also be called directly to make a copy of the MPSFunction on a new device.
