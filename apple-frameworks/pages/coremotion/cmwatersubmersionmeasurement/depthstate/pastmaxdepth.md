> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmwatersubmersionmeasurement/depthstate/pastmaxdepth](https://developer.apple.com/documentation/coremotion/cmwatersubmersionmeasurement/depthstate/pastmaxdepth)

# CMWaterSubmersionMeasurement.DepthState.pastMaxDepth (Swift)

**Framework:** Core Motion  
**Kind:** Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · visionOS 1.0+ · watchOS 2.0+

The device has exceeded the maximum safe diving depth.

## Declaration

```swift
case pastMaxDepth
```

<a id="Discussion"></a>

## Discussion

The system sets the maximum depth based on the entitlement that your app uses, as shown in this table:

| Shallow Depth and Pressure entitlement | 6 m |
| --- | --- |
| Full Submerged Depth and Pressure entitlement | 40 m |

## See Also

### Depth states

- [CMWaterSubmersionMeasurement.DepthState.notSubmerged](notsubmerged.md): The device is not submerged in water.
- [CMWaterSubmersionMeasurement.DepthState.submergedShallow](submergedshallow.md): The device is submerged, but less than 1 meter under water.
- [CMWaterSubmersionMeasurement.DepthState.submergedDeep](submergeddeep.md): The device is submerged at least 1 meter under water.
- [CMWaterSubmersionMeasurement.DepthState.approachingMaxDepth](approachingmaxdepth.md): The device is approaching the maximum safe diving depth.
- [CMWaterSubmersionMeasurement.DepthState.sensorDepthError](sensordeptherror.md): An error with the depth sensor occurred.
- [CMWaterSubmersionMeasurement.DepthState.unknown](unknown.md): The device’s depth state is unknown.

# CMWaterSubmersionDepthStatePastMaxDepth (Objective-C)

**Framework:** Core Motion  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

The device has exceeded the maximum safe diving depth.

## Declaration

```objectivec
CMWaterSubmersionDepthStatePastMaxDepth
```

<a id="Discussion"></a>

## Discussion

The system sets the maximum depth based on the entitlement that your app uses, as shown in this table:

| Shallow Depth and Pressure entitlement | 6 m |
| --- | --- |
| Full Submerged Depth and Pressure entitlement | 40 m |

## See Also

### Depth states

- [CMWaterSubmersionDepthStateNotSubmerged](notsubmerged.md): The device is not submerged in water.
- [CMWaterSubmersionDepthStateSubmergedShallow](submergedshallow.md): The device is submerged, but less than 1 meter under water.
- [CMWaterSubmersionDepthStateSubmergedDeep](submergeddeep.md): The device is submerged at least 1 meter under water.
- [CMWaterSubmersionDepthStateApproachingMaxDepth](approachingmaxdepth.md): The device is approaching the maximum safe diving depth.
- [CMWaterSubmersionDepthStateSensorDepthError](sensordeptherror.md): An error with the depth sensor occurred.
- [CMWaterSubmersionDepthStateUnknown](unknown.md): The device’s depth state is unknown.
