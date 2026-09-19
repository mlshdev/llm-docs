> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxmetricpayload/latestapplicationversion

# latestApplicationVersion (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The version of the app on the device at the end of the reporting period.

> Use [latestApplicationVersion](../metricreport/environment-swift.struct/latestapplicationversion.md) instead.

## Declaration

```swift
var latestApplicationVersion: String { get }
```

## See Also

### Reading information about the payload

- [timeStampBegin](timestampbegin.md): Deprecated. The starting time of the reporting period.
- [timeStampEnd](timestampend.md): Deprecated. The ending time of the reporting period.
- [includesMultipleApplicationVersions](includesmultipleapplicationversions.md): Deprecated. A Boolean indicating if the version of the app changed at least once during the reporting period.
- [metaData](metadata.md): Deprecated. A set of system-level information for the device.

# latestApplicationVersion (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The version of the app on the device at the end of the reporting period.

> Use [latestApplicationVersion](../metricreport/environment-swift.struct/latestapplicationversion.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSString * latestApplicationVersion;
```

## See Also

### Reading information about the payload

- [timeStampBegin](timestampbegin.md): Deprecated. The starting time of the reporting period.
- [timeStampEnd](timestampend.md): Deprecated. The ending time of the reporting period.
- [includesMultipleApplicationVersions](includesmultipleapplicationversions.md): Deprecated. A Boolean indicating if the version of the app changed at least once during the reporting period.
- [metaData](metadata.md): Deprecated. A set of system-level information for the device.
