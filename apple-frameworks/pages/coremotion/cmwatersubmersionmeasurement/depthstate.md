> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmwatersubmersionmeasurement/depthstate](https://developer.apple.com/documentation/coremotion/cmwatersubmersionmeasurement/depthstate)

# CMWaterSubmersionMeasurement.DepthState (Swift)

**Framework:** Core Motion  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · visionOS 1.0+ · watchOS 2.0+

A state based on the device’s depth under water.

## Declaration

```swift
enum DepthState
```

## Topics

### Depth states

- [CMWaterSubmersionMeasurement.DepthState.notSubmerged](depthstate/notsubmerged.md): The device is not submerged in water.
- [CMWaterSubmersionMeasurement.DepthState.submergedShallow](depthstate/submergedshallow.md): The device is submerged, but less than 1 meter under water.
- [CMWaterSubmersionMeasurement.DepthState.submergedDeep](depthstate/submergeddeep.md): The device is submerged at least 1 meter under water.
- [CMWaterSubmersionMeasurement.DepthState.approachingMaxDepth](depthstate/approachingmaxdepth.md): The device is approaching the maximum safe diving depth.
- [CMWaterSubmersionMeasurement.DepthState.pastMaxDepth](depthstate/pastmaxdepth.md): The device has exceeded the maximum safe diving depth.
- [CMWaterSubmersionMeasurement.DepthState.sensorDepthError](depthstate/sensordeptherror.md): An error with the depth sensor occurred.
- [CMWaterSubmersionMeasurement.DepthState.unknown](depthstate/unknown.md): The device’s depth state is unknown.

### Initializers

- [init(rawValue:)](depthstate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing the data

- [date](date.md): The time and date when the system recorded the measurements.
- [depth](depth.md): The depth under water.
- [pressure](pressure.md): The water pressure.
- [surfacePressure](surfacepressure.md): The surface air pressure.
- [submersionState](submersionstate.md): The depth state.

# CMWaterSubmersionDepthState (Objective-C)

**Framework:** Core Motion  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

A state based on the device’s depth under water.

## Declaration

```objectivec
enum CMWaterSubmersionDepthState : NSInteger;
```

## Topics

### Depth states

- [CMWaterSubmersionDepthStateNotSubmerged](depthstate/notsubmerged.md): The device is not submerged in water.
- [CMWaterSubmersionDepthStateSubmergedShallow](depthstate/submergedshallow.md): The device is submerged, but less than 1 meter under water.
- [CMWaterSubmersionDepthStateSubmergedDeep](depthstate/submergeddeep.md): The device is submerged at least 1 meter under water.
- [CMWaterSubmersionDepthStateApproachingMaxDepth](depthstate/approachingmaxdepth.md): The device is approaching the maximum safe diving depth.
- [CMWaterSubmersionDepthStatePastMaxDepth](depthstate/pastmaxdepth.md): The device has exceeded the maximum safe diving depth.
- [CMWaterSubmersionDepthStateSensorDepthError](depthstate/sensordeptherror.md): An error with the depth sensor occurred.
- [CMWaterSubmersionDepthStateUnknown](depthstate/unknown.md): The device’s depth state is unknown.

## See Also

### Accessing the data

- [date](date.md): The time and date when the system recorded the measurements.
- [depth](depth.md): The depth under water.
- [pressure](pressure.md): The water pressure.
- [surfacePressure](surfacepressure.md): The surface air pressure.
- [submersionState](submersionstate.md): The depth state.
