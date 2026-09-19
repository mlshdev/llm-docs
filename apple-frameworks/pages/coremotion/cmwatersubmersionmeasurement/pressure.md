> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremotion/cmwatersubmersionmeasurement/pressure

# pressure (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+ · watchOS 9.0+

The water pressure.

## Declaration

```swift
var pressure: Measurement<UnitPressure>? { get }
```

## See Also

### Accessing the data

- [date](date.md): The time and date when the system recorded the measurements.
- [depth](depth.md): The depth under water.
- [surfacePressure](surfacepressure.md): The surface air pressure.
- [submersionState](submersionstate.md): The depth state.
- [CMWaterSubmersionMeasurement.DepthState](depthstate.md): A state based on the device’s depth under water.

# pressure (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The water pressure.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSMeasurement<NSUnitPressure *> * pressure;
```

## See Also

### Accessing the data

- [date](date.md): The time and date when the system recorded the measurements.
- [depth](depth.md): The depth under water.
- [surfacePressure](surfacepressure.md): The surface air pressure.
- [submersionState](submersionstate.md): The depth state.
- [CMWaterSubmersionDepthState](depthstate.md): A state based on the device’s depth under water.
