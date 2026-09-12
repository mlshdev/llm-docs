> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmwatersubmersionmeasurement/surfacepressure](https://developer.apple.com/documentation/coremotion/cmwatersubmersionmeasurement/surfacepressure)

# surfacePressure (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+ · watchOS 9.0+

The surface air pressure.

## Declaration

```swift
var surfacePressure: Measurement<UnitPressure> { get }
```

## See Also

### Accessing the data

- [date](date.md): The time and date when the system recorded the measurements.
- [depth](depth.md): The depth under water.
- [pressure](pressure.md): The water pressure.
- [submersionState](submersionstate.md): The depth state.
- [CMWaterSubmersionMeasurement.DepthState](depthstate.md): A state based on the device’s depth under water.

# surfacePressure (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The surface air pressure.

## Declaration

```objectivec
@property (nonatomic, readonly) NSMeasurement<NSUnitPressure *> * surfacePressure;
```

## See Also

### Accessing the data

- [date](date.md): The time and date when the system recorded the measurements.
- [depth](depth.md): The depth under water.
- [pressure](pressure.md): The water pressure.
- [submersionState](submersionstate.md): The depth state.
- [CMWaterSubmersionDepthState](depthstate.md): A state based on the device’s depth under water.
