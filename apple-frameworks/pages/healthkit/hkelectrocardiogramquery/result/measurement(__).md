> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkelectrocardiogramquery/result/measurement(_:)

# HKElectrocardiogramQuery.Result.measurement(\_:)

**Framework:** HealthKit  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS · watchOS 7.0+

A single voltage measurement.

## Declaration

```swift
case measurement(HKElectrocardiogram.VoltageMeasurement)
```

## See Also

### Results

- [HKElectrocardiogramQuery.Result.done](done.md): The query has finished returning voltage measurements.
- [HKElectrocardiogramQuery.Result.error(\_:)](error%28__%29.md): An error occurred while accessing the voltage measurements.
