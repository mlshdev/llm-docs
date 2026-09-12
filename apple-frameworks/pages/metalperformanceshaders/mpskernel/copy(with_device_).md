> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpskernel/copy(with:device:)](https://developer.apple.com/documentation/metalperformanceshaders/mpskernel/copy(with:device:))

# copy(with:device:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Makes a copy of this kernel object for a new device.

## Declaration

```swift
func copy(with zone: NSZone? = nil, device: (any MTLDevice)?) -> Self
```

## Parameters

- `zone`: The zone in which to allocate the kernel object.
- `device`: The Metal device for the new kernel object.

<a id="return-value"></a>

## Return Value

A copy of this kernel object.

## Mentioned In

- [The MPSKernel Class](../the-mpskernel-class.md)

<a id="Discussion"></a>

## Discussion

The same kernel objects should not be used to encode separate kernel operations on multiple command buffers from multiple threads. Many kernels have mutable properties that might be changed by another thread while the kernel is being encoded. If you need to use a kernel from multiple threads, make a copy of it for each additional thread using [copy(with:)](../../foundation/nscopying/copy%28with_%29.md) or [copy(with:device:)](copy%28with_device_%29.md). Note that the [copy(with:)](../../foundation/nscopying/copy%28with_%29.md) method makes a copy of the kernel object on the same device.

This method fails if the device is not supported. Query the [MPSSupportsMTLDevice(\_:)](../mpssupportsmtldevice%28__%29.md) function to determine whether the device is supported.

## See Also

### Methods

- [init(device:)](init%28device_%29.md): Initializes a new kernel object.

# copyWithZone:device: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Makes a copy of this kernel object for a new device.

## Declaration

```objectivec
- (instancetype) copyWithZone:(NSZone *) zone device:(id<MTLDevice>) device;
```

## Parameters

- `zone`: The zone in which to allocate the kernel object.
- `device`: The Metal device for the new kernel object.

<a id="return-value"></a>

## Return Value

A copy of this kernel object.

## Mentioned In

- [The MPSKernel Class](../the-mpskernel-class.md)

<a id="Discussion"></a>

## Discussion

The same kernel objects should not be used to encode separate kernel operations on multiple command buffers from multiple threads. Many kernels have mutable properties that might be changed by another thread while the kernel is being encoded. If you need to use a kernel from multiple threads, make a copy of it for each additional thread using [copyWithZone:](../../foundation/nscopying/copy%28with_%29.md) or [copyWithZone:device:](copy%28with_device_%29.md). Note that the [copyWithZone:](../../foundation/nscopying/copy%28with_%29.md) method makes a copy of the kernel object on the same device.

This method fails if the device is not supported. Query the [MPSSupportsMTLDevice](../mpssupportsmtldevice%28__%29.md) function to determine whether the device is supported.

## See Also

### Methods

- [initWithDevice:](init%28device_%29.md): Initializes a new kernel object.
