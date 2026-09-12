> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmwatersubmersionmeasurement/depth](https://developer.apple.com/documentation/coremotion/cmwatersubmersionmeasurement/depth)

# depth (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+ · watchOS 9.0+

The depth under water.

## Declaration

```swift
var depth: Measurement<UnitLength>? { get }
```

## See Also

### Accessing the data

- [date](date.md): The time and date when the system recorded the measurements.
- [pressure](pressure.md): The water pressure.
- [surfacePressure](surfacepressure.md): The surface air pressure.
- [submersionState](submersionstate.md): The depth state.
- [CMWaterSubmersionMeasurement.DepthState](depthstate.md): A state based on the device’s depth under water.

# depth (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The depth under water.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSMeasurement<NSUnitLength *> * depth;
```

## See Also

### Accessing the data

- [date](date.md): The time and date when the system recorded the measurements.
- [pressure](pressure.md): The water pressure.
- [surfacePressure](surfacepressure.md): The surface air pressure.
- [submersionState](submersionstate.md): The depth state.
- [CMWaterSubmersionDepthState](depthstate.md): A state based on the device’s depth under water.
