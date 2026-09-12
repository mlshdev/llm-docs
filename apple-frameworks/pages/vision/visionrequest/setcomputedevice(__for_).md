> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/visionrequest/setcomputedevice(_:for:)](https://developer.apple.com/documentation/vision/visionrequest/setcomputedevice(_:for:))

# setComputeDevice(\_:for:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Assigns a compute device for a compute stage.

## Declaration

```swift
mutating func setComputeDevice(_ computeDevice: MLComputeDevice?, for computeStage: ComputeStage)
```

## Parameters

- `computeDevice`: The compute device to assign to the compute stage.
- `computeStage`: The compute stage.

<a id="Discussion"></a>

## Discussion

If the parameter `computeDevice` is \`nil\`, the framework removes any explicit compute device assignment and allows the framework to select the device.

Configure any compute device for a given compute stage. When performing a request, the system makes a validity check. Use [supportedComputeStageDevices](supportedcomputestagedevices.md) to get valid compute devices for a request’s compute stages.
