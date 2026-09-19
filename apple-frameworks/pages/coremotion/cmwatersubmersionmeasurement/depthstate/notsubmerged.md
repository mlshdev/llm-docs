> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremotion/cmwatersubmersionmeasurement/depthstate/notsubmerged

# CMWaterSubmersionMeasurement.DepthState.notSubmerged (Swift)

**Framework:** Core Motion  
**Kind:** Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · visionOS 1.0+ · watchOS 2.0+

The device is not submerged in water.

## Declaration

```swift
case notSubmerged
```

## See Also

### Depth states

- [CMWaterSubmersionMeasurement.DepthState.submergedShallow](submergedshallow.md): The device is submerged, but less than 1 meter under water.
- [CMWaterSubmersionMeasurement.DepthState.submergedDeep](submergeddeep.md): The device is submerged at least 1 meter under water.
- [CMWaterSubmersionMeasurement.DepthState.approachingMaxDepth](approachingmaxdepth.md): The device is approaching the maximum safe diving depth.
- [CMWaterSubmersionMeasurement.DepthState.pastMaxDepth](pastmaxdepth.md): The device has exceeded the maximum safe diving depth.
- [CMWaterSubmersionMeasurement.DepthState.sensorDepthError](sensordeptherror.md): An error with the depth sensor occurred.
- [CMWaterSubmersionMeasurement.DepthState.unknown](unknown.md): The device’s depth state is unknown.

# CMWaterSubmersionDepthStateNotSubmerged (Objective-C)

**Framework:** Core Motion  
**Kind:** Enumeration Case  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

The device is not submerged in water.

## Declaration

```objectivec
CMWaterSubmersionDepthStateNotSubmerged
```

## See Also

### Depth states

- [CMWaterSubmersionDepthStateSubmergedShallow](submergedshallow.md): The device is submerged, but less than 1 meter under water.
- [CMWaterSubmersionDepthStateSubmergedDeep](submergeddeep.md): The device is submerged at least 1 meter under water.
- [CMWaterSubmersionDepthStateApproachingMaxDepth](approachingmaxdepth.md): The device is approaching the maximum safe diving depth.
- [CMWaterSubmersionDepthStatePastMaxDepth](pastmaxdepth.md): The device has exceeded the maximum safe diving depth.
- [CMWaterSubmersionDepthStateSensorDepthError](sensordeptherror.md): An error with the depth sensor occurred.
- [CMWaterSubmersionDepthStateUnknown](unknown.md): The device’s depth state is unknown.
