> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmwatersubmersionmeasurement/depthstate/sensordeptherror](https://developer.apple.com/documentation/coremotion/cmwatersubmersionmeasurement/depthstate/sensordeptherror)

# CMWaterSubmersionMeasurement.DepthState.sensorDepthError (Swift)

**Framework:** Core Motion  
**Kind:** Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · visionOS 1.0+ · watchOS 2.0+

An error with the depth sensor occurred.

## Declaration

```swift
case sensorDepthError
```

<a id="Discussion"></a>

## Discussion

The system sends a measurement with this state if the wearer continues to descend past the maximum depth.

## See Also

### Depth states

- [CMWaterSubmersionMeasurement.DepthState.notSubmerged](notsubmerged.md): The device is not submerged in water.
- [CMWaterSubmersionMeasurement.DepthState.submergedShallow](submergedshallow.md): The device is submerged, but less than 1 meter under water.
- [CMWaterSubmersionMeasurement.DepthState.submergedDeep](submergeddeep.md): The device is submerged at least 1 meter under water.
- [CMWaterSubmersionMeasurement.DepthState.approachingMaxDepth](approachingmaxdepth.md): The device is approaching the maximum safe diving depth.
- [CMWaterSubmersionMeasurement.DepthState.pastMaxDepth](pastmaxdepth.md): The device has exceeded the maximum safe diving depth.
- [CMWaterSubmersionMeasurement.DepthState.unknown](unknown.md): The device’s depth state is unknown.

# CMWaterSubmersionDepthStateSensorDepthError (Objective-C)

**Framework:** Core Motion  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

An error with the depth sensor occurred.

## Declaration

```objectivec
CMWaterSubmersionDepthStateSensorDepthError
```

<a id="Discussion"></a>

## Discussion

The system sends a measurement with this state if the wearer continues to descend past the maximum depth.

## See Also

### Depth states

- [CMWaterSubmersionDepthStateNotSubmerged](notsubmerged.md): The device is not submerged in water.
- [CMWaterSubmersionDepthStateSubmergedShallow](submergedshallow.md): The device is submerged, but less than 1 meter under water.
- [CMWaterSubmersionDepthStateSubmergedDeep](submergeddeep.md): The device is submerged at least 1 meter under water.
- [CMWaterSubmersionDepthStateApproachingMaxDepth](approachingmaxdepth.md): The device is approaching the maximum safe diving depth.
- [CMWaterSubmersionDepthStatePastMaxDepth](pastmaxdepth.md): The device has exceeded the maximum safe diving depth.
- [CMWaterSubmersionDepthStateUnknown](unknown.md): The device’s depth state is unknown.
