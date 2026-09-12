> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkelectrocardiogram/lead](https://developer.apple.com/documentation/healthkit/hkelectrocardiogram/lead)

# HKElectrocardiogram.Lead (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

The lead used to record a voltage measurement.

## Declaration

```swift
enum Lead
```

## Topics

### Leads

- [HKElectrocardiogram.Lead.appleWatchSimilarToLeadI](lead/applewatchsimilartoleadi.md): Apple Watch Series 4 or later.

### Initializers

- [init(rawValue:)](lead/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing Voltage Measurements

- [numberOfVoltageMeasurements](numberofvoltagemeasurements.md): The number of voltage measurements associated with this sample.
- [samplingFrequency](samplingfrequency.md): The frequency at which the Apple Watch sampled the voltage.
- [HKElectrocardiogram.VoltageMeasurement](voltagemeasurement.md): The voltage for all leads at a single point in time.

# HKElectrocardiogramLead (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

The lead used to record a voltage measurement.

## Declaration

```objectivec
enum HKElectrocardiogramLead : NSInteger;
```

## Topics

### Leads

- [HKElectrocardiogramLeadAppleWatchSimilarToLeadI](lead/applewatchsimilartoleadi.md): Apple Watch Series 4 or later.

## See Also

### Accessing Voltage Measurements

- [numberOfVoltageMeasurements](numberofvoltagemeasurements.md): The number of voltage measurements associated with this sample.
- [samplingFrequency](samplingfrequency.md): The frequency at which the Apple Watch sampled the voltage.
- [HKElectrocardiogramVoltageMeasurement](voltagemeasurement.md): The voltage for all leads at a single point in time.
