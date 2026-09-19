> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metalfx/mtlfxframeinterpolatordescriptor/supportsdevice(_:)

# supportsDevice(\_:) (Swift)

**Framework:** MetalFX  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Queries whether a Metal device supports frame interpolation.

## Declaration

```swift
class func supportsDevice(_ device: any MTLDevice) -> Bool
```

## Parameters

- `device`: The GPU device for which this methods tests support.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device supports frame interpolation, [false](https://developer.apple.com/documentation/swift/false) otherwise.

# supportsDevice: (Objective-C)

**Framework:** MetalFX  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Queries whether a Metal device supports frame interpolation.

## Declaration

```objectivec
+ (BOOL) supportsDevice:(id<MTLDevice>) device;
```

## Parameters

- `device`: The GPU device for which this methods tests support.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the device supports frame interpolation, [false](https://developer.apple.com/documentation/swift/false) otherwise.
