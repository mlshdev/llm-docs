> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxdiskwriteexceptiondiagnostic/totalwritescaused

# totalWritesCaused (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The total amount of data written to disk or other long-term storage during the disk write exception.

> Use [totalBytesWritten](../diskwriteexceptiondiagnostic/totalbyteswritten.md) instead.

## Declaration

```swift
var totalWritesCaused: Measurement<UnitInformationStorage> { get }
```

# totalWritesCaused (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.2) · iPadOS 14.0+ (deprecated in 27.2) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The total amount of data written to disk or other long-term storage during the disk write exception.

> Use [totalBytesWritten](../diskwriteexceptiondiagnostic/totalbyteswritten.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSMeasurement<NSUnitInformationStorage *> * totalWritesCaused;
```
