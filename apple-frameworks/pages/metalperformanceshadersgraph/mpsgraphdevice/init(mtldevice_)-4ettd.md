> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphdevice/init(mtldevice:)-4ettd](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphdevice/init(mtldevice:)-4ettd)

# init(mtlDevice:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a device from a given Metal device.

## Declaration

```swift
convenience init(mtlDevice metalDevice: any MTLDevice)
```

## Parameters

- `metalDevice`: `MTLDevice` to create an MPSGraphDevice from.

<a id="return-value"></a>

## Return Value

A valid device.

# deviceWithMTLDevice: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a device from a given Metal device.

## Declaration

```objectivec
+ (instancetype) deviceWithMTLDevice:(id<MTLDevice>) metalDevice;
```

## Parameters

- `metalDevice`: `MTLDevice` to create an MPSGraphDevice from.

<a id="return-value"></a>

## Return Value

A valid device.
