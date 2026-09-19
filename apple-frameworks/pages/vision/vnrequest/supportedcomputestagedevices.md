> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/vision/vnrequest/supportedcomputestagedevices

# supportedComputeStageDevices

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

The collection of compute devices per stage that a request supports.

## Declaration

```swift
@nonobjc var supportedComputeStageDevices: [VNComputeStage : [MLComputeDevice]] { get throws }
```

<a id="Discussion"></a>

## Discussion

A dictionary of per-stage compute devices; otherwise, `nil` if an error occurs.

## See Also

### Configuring the Compute Device

- [setComputeDevice(\_:for:)](setcomputedevice%28__for_%29.md): Assigns a compute device for a compute stage.
- [computeDevice(for:)](computedevice%28for_%29.md): Returns the compute device for a compute stage.
