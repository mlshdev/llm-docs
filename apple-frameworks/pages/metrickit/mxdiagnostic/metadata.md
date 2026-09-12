> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxdiagnostic/metadata](https://developer.apple.com/documentation/metrickit/mxdiagnostic/metadata)

# metaData (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A set of system-level information for the device.

> Use [DiagnosticReport.Environment](../diagnosticreport/environment-swift.struct.md) instead.

## Declaration

```swift
var metaData: MXMetaData { get }
```

## See Also

### Reading data About a diagnostic

- [applicationVersion](applicationversion.md): Deprecated. The value of the bundle version key, short form, in the app’s property list.
- [signpostData](signpostdata.md): Deprecated.

# metaData (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ (deprecated in 27.0) · iPadOS 14.0+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A set of system-level information for the device.

> Use [DiagnosticReport.Environment](../diagnosticreport/environment-swift.struct.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) MXMetaData * metaData;
```

## See Also

### Reading data About a diagnostic

- [applicationVersion](applicationversion.md): Deprecated. The value of the bundle version key, short form, in the app’s property list.
- [signpostData](signpostdata.md): Deprecated.
