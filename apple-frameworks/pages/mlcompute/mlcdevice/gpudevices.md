> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcdevice/gpudevices](https://developer.apple.com/documentation/mlcompute/mlcdevice/gpudevices)

# gpuDevices (Swift)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

An array that contains the specific Metal devices you use to execute neural networks.

## Declaration

```swift
var gpuDevices: [any MTLDevice] { get }
```

## See Also

### Inspecting Devices

- [type](type.md): Deprecated. The type you specify when creating the device.
- [actualDeviceType](actualdevicetype.md): Deprecated. The active device.

# gpuDevices (Objective-C)

**Framework:** ML Compute  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

An array that contains the specific Metal devices you use to execute neural networks.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<id<MTLDevice>> * gpuDevices;
```

## See Also

### Inspecting Devices

- [type](type.md): Deprecated. The type you specify when creating the device.
- [actualDeviceType](actualdevicetype.md): Deprecated. The active device.
