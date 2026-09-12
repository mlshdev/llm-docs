> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxdiskwriteexceptiondiagnostic/totalwritescaused](https://developer.apple.com/documentation/metrickit/mxdiskwriteexceptiondiagnostic/totalwritescaused)

# totalWritesCaused (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The total amount of data written to disk or other long-term storage during the disk write exception.

> Use [totalBytesWritten](../diskwriteexceptiondiagnostic/totalbyteswritten.md) instead.

## Declaration

```swift
var totalWritesCaused: Measurement<UnitInformationStorage> { get }
```

# totalWritesCaused (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The total amount of data written to disk or other long-term storage during the disk write exception.

> Use [totalBytesWritten](../diskwriteexceptiondiagnostic/totalbyteswritten.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSMeasurement<NSUnitInformationStorage *> * totalWritesCaused;
```
