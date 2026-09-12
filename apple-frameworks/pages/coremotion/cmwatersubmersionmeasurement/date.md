> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmwatersubmersionmeasurement/date](https://developer.apple.com/documentation/coremotion/cmwatersubmersionmeasurement/date)

# date (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+ · watchOS 9.0+

The time and date when the system recorded the measurements.

## Declaration

```swift
var date: Date { get }
```

## See Also

### Accessing the data

- [depth](depth.md): The depth under water.
- [pressure](pressure.md): The water pressure.
- [surfacePressure](surfacepressure.md): The surface air pressure.
- [submersionState](submersionstate.md): The depth state.
- [CMWaterSubmersionMeasurement.DepthState](depthstate.md): A state based on the device’s depth under water.

# date (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The time and date when the system recorded the measurements.

## Declaration

```objectivec
@property (nonatomic, readonly) NSDate * date;
```

## See Also

### Accessing the data

- [depth](depth.md): The depth under water.
- [pressure](pressure.md): The water pressure.
- [surfacePressure](surfacepressure.md): The surface air pressure.
- [submersionState](submersionstate.md): The depth state.
- [CMWaterSubmersionDepthState](depthstate.md): A state based on the device’s depth under water.
