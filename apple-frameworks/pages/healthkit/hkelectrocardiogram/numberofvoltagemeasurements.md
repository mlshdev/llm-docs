> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkelectrocardiogram/numberofvoltagemeasurements](https://developer.apple.com/documentation/healthkit/hkelectrocardiogram/numberofvoltagemeasurements)

# numberOfVoltageMeasurements (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

The number of voltage measurements associated with this sample.

## Declaration

```swift
var numberOfVoltageMeasurements: Int { get }
```

## See Also

### Accessing Voltage Measurements

- [samplingFrequency](samplingfrequency.md): The frequency at which the Apple Watch sampled the voltage.
- [HKElectrocardiogram.VoltageMeasurement](voltagemeasurement.md): The voltage for all leads at a single point in time.
- [HKElectrocardiogram.Lead](lead.md): The lead used to record a voltage measurement.

# numberOfVoltageMeasurements (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

The number of voltage measurements associated with this sample.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) NSInteger numberOfVoltageMeasurements;
```

## See Also

### Accessing Voltage Measurements

- [samplingFrequency](samplingfrequency.md): The frequency at which the Apple Watch sampled the voltage.
- [HKElectrocardiogramVoltageMeasurement](voltagemeasurement.md): The voltage for all leads at a single point in time.
- [HKElectrocardiogramLead](lead.md): The lead used to record a voltage measurement.
