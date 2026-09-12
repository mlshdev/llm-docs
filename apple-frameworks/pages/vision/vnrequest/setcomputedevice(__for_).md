> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrequest/setcomputedevice(_:for:)](https://developer.apple.com/documentation/vision/vnrequest/setcomputedevice(_:for:))

# setComputeDevice(\_:for:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Assigns a compute device for a compute stage.

## Declaration

```swift
@nonobjc func setComputeDevice(_ computeDevice: MLComputeDevice?, for computeStage: VNComputeStage)
```

## Parameters

- `computeDevice`: The compute device to assign to the compute stage.
- `computeStage`: The compute stage.

<a id="Discussion"></a>

## Discussion

If the parameter `computeDevice` is `nil`, the framework removes any explicit compute device assignment and allows the framework to select the device.

Configure any compute device for a given compute stage. When performing a request, the system makes a validity check. Call [supportedComputeStageDevices](supportedcomputestagedevices.md) to get valid compute devices for a request’s compute stages.

## See Also

### Configuring the Compute Device

- [computeDevice(for:)](computedevice%28for_%29.md): Returns the compute device for a compute stage.
- [supportedComputeStageDevices](supportedcomputestagedevices.md): The collection of compute devices per stage that a request supports.
