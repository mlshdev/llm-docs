> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpssupportsmtldevice(_:)](https://developer.apple.com/documentation/metalperformanceshaders/mpssupportsmtldevice(_:))

# MPSSupportsMTLDevice(\_:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Determines whether the Metal Performance Shaders framework supports a Metal device.

## Declaration

```swift
func MPSSupportsMTLDevice(_ device: (any MTLDevice)?) -> Bool
```

## Parameters

- `device`: A valid Metal device.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device is supported. [false](https://developer.apple.com/documentation/swift/false) if the device is not supported.

## Mentioned In

- [The MPSKernel Class](the-mpskernel-class.md)

<a id="Discussion"></a>

## Discussion

For a full listing of Metal Performance Shaders feature set support, see [Feature Availability](https://developer.apple.com/metal/availability/).

# MPSSupportsMTLDevice (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Determines whether the Metal Performance Shaders framework supports a Metal device.

## Declaration

```objectivec
BOOL MPSSupportsMTLDevice(id<MTLDevice>device);
```

## Parameters

- `device`: A valid Metal device.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device is supported. [false](https://developer.apple.com/documentation/swift/false) if the device is not supported.

## Mentioned In

- [The MPSKernel Class](the-mpskernel-class.md)

<a id="Discussion"></a>

## Discussion

For a full listing of Metal Performance Shaders feature set support, see [Feature Availability](https://developer.apple.com/metal/availability/).
