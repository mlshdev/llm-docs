> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimageeuclideandistancetransform/init(device:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimageeuclideandistancetransform/init(device:))

# init(device:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

Creates a Euclidean distance transform that runs on a specified device.

## Declaration

```swift
init(device: any MTLDevice)
```

## Parameters

- `device`: The device that the filter runs on.

## See Also

### Creating a Euclidean distance transform

- [init(coder:device:)](init%28coder_device_%29.md): Creates a Euclidean distance transform that uses a specified decoder for your data and runs on a specified device.

# initWithDevice: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

Creates a Euclidean distance transform that runs on a specified device.

## Declaration

```objectivec
- (instancetype) initWithDevice:(id<MTLDevice>) device;
```

## Parameters

- `device`: The device that the filter runs on.

## See Also

### Creating a Euclidean distance transform

- [initWithCoder:device:](init%28coder_device_%29.md): Creates a Euclidean distance transform that uses a specified decoder for your data and runs on a specified device.
