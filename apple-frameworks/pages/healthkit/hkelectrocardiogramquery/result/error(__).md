> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkelectrocardiogramquery/result/error(_:)

# HKElectrocardiogramQuery.Result.error(\_:)

**Framework:** HealthKit  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS · watchOS 7.0+

An error occurred while accessing the voltage measurements.

## Declaration

```swift
case error(any Error)
```

## See Also

### Results

- [HKElectrocardiogramQuery.Result.measurement(\_:)](measurement%28__%29.md): A single voltage measurement.
- [HKElectrocardiogramQuery.Result.done](done.md): The query has finished returning voltage measurements.
