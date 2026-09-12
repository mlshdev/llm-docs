> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimageeuclideandistancetransform/init(coder:device:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimageeuclideandistancetransform/init(coder:device:))

# init(coder:device:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Initializer  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

Creates a Euclidean distance transform that uses a specified decoder for your data and runs on a specified device.

## Declaration

```swift
init?(coder aDecoder: NSCoder, device: any MTLDevice)
```

## Parameters

- `aDecoder`: The decoder for your data.
- `device`: The device that the filter runs on.

<a id="Discussion"></a>

## Discussion

Use this initializer to specify the location of your data; otherwise, the framework may guess incorrectly.

## See Also

### Creating a Euclidean distance transform

- [init(device:)](init%28device_%29.md): Creates a Euclidean distance transform that runs on a specified device.

# initWithCoder:device: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.0+ · macOS 10.13.4+ · tvOS 11.3+ · visionOS 1.0+

Creates a Euclidean distance transform that uses a specified decoder for your data and runs on a specified device.

## Declaration

```objectivec
- (instancetype) initWithCoder:(NSCoder *) aDecoder device:(id<MTLDevice>) device;
```

## Parameters

- `aDecoder`: The decoder for your data.
- `device`: The device that the filter runs on.

<a id="Discussion"></a>

## Discussion

Use this initializer to specify the location of your data; otherwise, the framework may guess incorrectly.

## See Also

### Creating a Euclidean distance transform

- [initWithDevice:](init%28device_%29.md): Creates a Euclidean distance transform that runs on a specified device.
