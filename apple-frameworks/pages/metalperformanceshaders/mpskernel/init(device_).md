> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpskernel/init(device:)](https://developer.apple.com/documentation/metalperformanceshaders/mpskernel/init(device:))

# init(device:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Initializes a new kernel object.

## Declaration

```swift
init(device: any MTLDevice)
```

## Parameters

- `device`: The Metal device on which the kernel will be used.

<a id="return-value"></a>

## Return Value

An initialized kernel object.

## Mentioned In

- [The MPSKernel Class](../the-mpskernel-class.md)

<a id="Discussion"></a>

## Discussion

This method fails if the device is not supported. Query the [MPSSupportsMTLDevice(\_:)](../mpssupportsmtldevice%28__%29.md) function to determine whether the device is supported.

## See Also

### Methods

- [copy(with:device:)](copy%28with_device_%29.md): Makes a copy of this kernel object for a new device.

# initWithDevice: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Initializes a new kernel object.

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device;
```

## Parameters

- `device`: The Metal device on which the kernel will be used.

<a id="return-value"></a>

## Return Value

An initialized kernel object.

## Mentioned In

- [The MPSKernel Class](../the-mpskernel-class.md)

<a id="Discussion"></a>

## Discussion

This method fails if the device is not supported. Query the [MPSSupportsMTLDevice](../mpssupportsmtldevice%28__%29.md) function to determine whether the device is supported.

## See Also

### Methods

- [copyWithZone:device:](copy%28with_device_%29.md): Makes a copy of this kernel object for a new device.
