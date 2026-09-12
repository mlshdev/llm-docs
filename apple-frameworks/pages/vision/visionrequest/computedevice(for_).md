> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/visionrequest/computedevice(for:)](https://developer.apple.com/documentation/vision/visionrequest/computedevice(for:))

# computeDevice(for:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

Returns the compute device for a compute stage.

## Declaration

```swift
func computeDevice(for computeStage: ComputeStage) -> MLComputeDevice?
```

## Parameters

- `computeStage`: The compute stage to inspect.

<a id="return-value"></a>

## Return Value

The current compute device; otherwise, `nil` if one isn’t assigned.

## Default Implementations

### VisionRequest Implementations

- [computeDevice(for:)](computedevice%28for_%29-52l0g.md): Returns the compute device for a compute stage.

## See Also

### Getting the compute device

- [supportedComputeStageDevices](supportedcomputestagedevices.md): The collection of compute devices per stage that a request supports.
- [ComputeStage](../computestage.md): Types that represent the compute stage.
