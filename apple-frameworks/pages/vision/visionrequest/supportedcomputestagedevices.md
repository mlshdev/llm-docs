> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/visionrequest/supportedcomputestagedevices](https://developer.apple.com/documentation/vision/visionrequest/supportedcomputestagedevices)

# supportedComputeStageDevices

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

The collection of compute devices per stage that a request supports.

## Declaration

```swift
var supportedComputeStageDevices: [ComputeStage : [MLComputeDevice]] { get }
```

## See Also

### Getting the compute device

- [computeDevice(for:)](computedevice%28for_%29.md): Returns the compute device for a compute stage.
- [ComputeStage](../computestage.md): Types that represent the compute stage.
