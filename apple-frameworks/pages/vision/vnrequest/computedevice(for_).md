> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrequest/computedevice(for:)](https://developer.apple.com/documentation/vision/vnrequest/computedevice(for:))

# computeDevice(for:)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Returns the compute device for a compute stage.

## Declaration

```swift
@nonobjc func computeDevice(for computeStage: VNComputeStage) -> MLComputeDevice?
```

## Parameters

- `computeStage`: The compute stage to inspect.

<a id="return-value"></a>

## Return Value

The current compute device; otherwise, `nil` if one isn’t assigned.

## See Also

### Configuring the Compute Device

- [setComputeDevice(\_:for:)](setcomputedevice%28__for_%29.md): Assigns a compute device for a compute stage.
- [supportedComputeStageDevices](supportedcomputestagedevices.md): The collection of compute devices per stage that a request supports.
