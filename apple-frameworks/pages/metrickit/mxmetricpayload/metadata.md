> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxmetricpayload/metadata](https://developer.apple.com/documentation/metrickit/mxmetricpayload/metadata)

# metaData (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A set of system-level information for the device.

> Use [MetricReport.Environment](../metricreport/environment-swift.struct.md) instead.

## Declaration

```swift
var metaData: MXMetaData? { get }
```

## See Also

### Reading information about the payload

- [timeStampBegin](timestampbegin.md): Deprecated. The starting time of the reporting period.
- [timeStampEnd](timestampend.md): Deprecated. The ending time of the reporting period.
- [includesMultipleApplicationVersions](includesmultipleapplicationversions.md): Deprecated. A Boolean indicating if the version of the app changed at least once during the reporting period.
- [latestApplicationVersion](latestapplicationversion.md): Deprecated. The version of the app on the device at the end of the reporting period.

# metaData (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A set of system-level information for the device.

> Use [MetricReport.Environment](../metricreport/environment-swift.struct.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nullable) MXMetaData * metaData;
```

## See Also

### Reading information about the payload

- [timeStampBegin](timestampbegin.md): Deprecated. The starting time of the reporting period.
- [timeStampEnd](timestampend.md): Deprecated. The ending time of the reporting period.
- [includesMultipleApplicationVersions](includesmultipleapplicationversions.md): Deprecated. A Boolean indicating if the version of the app changed at least once during the reporting period.
- [latestApplicationVersion](latestapplicationversion.md): Deprecated. The version of the app on the device at the end of the reporting period.
