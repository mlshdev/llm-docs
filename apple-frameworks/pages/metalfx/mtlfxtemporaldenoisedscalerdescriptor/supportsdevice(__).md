> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalfx/mtlfxtemporaldenoisedscalerdescriptor/supportsdevice(_:)](https://developer.apple.com/documentation/metalfx/mtlfxtemporaldenoisedscalerdescriptor/supportsdevice(_:))

# supportsDevice(\_:) (Swift)

**Framework:** MetalFX  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · tvOS 18.0+

Queries whether a Metal device supports denoising scaling.

## Declaration

```swift
class func supportsDevice(_ device: any MTLDevice) -> Bool
```

## Parameters

- `device`: The GPU device for which this methods tests support.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device supports denoising scaling, [false](https://developer.apple.com/documentation/swift/false) otherwise.

# supportsDevice: (Objective-C)

**Framework:** MetalFX  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 26.0+ · tvOS 18.0+

Queries whether a Metal device supports denoising scaling.

## Declaration

```objectivec
+ (BOOL) supportsDevice:(id<MTLDevice>) device;
```

## Parameters

- `device`: The GPU device for which this methods tests support.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device supports denoising scaling, [false](https://developer.apple.com/documentation/swift/false) otherwise.
