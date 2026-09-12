> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrequest/supportedcomputestagedevicesandreturnerror:](https://developer.apple.com/documentation/vision/vnrequest/supportedcomputestagedevicesandreturnerror:)

# supportedComputeStageDevicesAndReturnError:

**Interface language:** Objective-C

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The collection of compute devices per stage that a request supports.

## Declaration

```objectivec
- (NSDictionary<NSString *,NSArray<id<MLComputeDeviceProtocol>> *> *) supportedComputeStageDevicesAndReturnError:(NSError **) error;
```

<a id="return-value"></a>

## Return Value

A dictionary of per-stage compute devices; otherwise, `nil` if an error occurs.

## See Also

### Configuring the Compute Device

- [setComputeDevice:forComputeStage:](setcomputedevice_forcomputestage_.md): Assigns a compute device for a compute stage.
- [computeDeviceForComputeStage:](computedeviceforcomputestage_.md): Returns the compute device for a compute stage.
