> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkelectrocardiogram/samplingfrequency](https://developer.apple.com/documentation/healthkit/hkelectrocardiogram/samplingfrequency)

# samplingFrequency (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

The frequency at which the Apple Watch sampled the voltage.

## Declaration

```swift
@NSCopying var samplingFrequency: HKQuantity? { get }
```

<a id="Discussion"></a>

## Discussion

The system records the frequency in [hertz()](../hkunit/hertz%28%29.md) units.

## See Also

### Accessing Voltage Measurements

- [numberOfVoltageMeasurements](numberofvoltagemeasurements.md): The number of voltage measurements associated with this sample.
- [HKElectrocardiogram.VoltageMeasurement](voltagemeasurement.md): The voltage for all leads at a single point in time.
- [HKElectrocardiogram.Lead](lead.md): The lead used to record a voltage measurement.

# samplingFrequency (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

The frequency at which the Apple Watch sampled the voltage.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) HKQuantity * samplingFrequency;
```

<a id="Discussion"></a>

## Discussion

The system records the frequency in [hertzUnit](../hkunit/hertz%28%29.md) units.

## See Also

### Accessing Voltage Measurements

- [numberOfVoltageMeasurements](numberofvoltagemeasurements.md): The number of voltage measurements associated with this sample.
- [HKElectrocardiogramVoltageMeasurement](voltagemeasurement.md): The voltage for all leads at a single point in time.
- [HKElectrocardiogramLead](lead.md): The lead used to record a voltage measurement.
