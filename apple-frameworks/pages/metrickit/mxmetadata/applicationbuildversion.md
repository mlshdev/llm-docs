> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxmetadata/applicationbuildversion](https://developer.apple.com/documentation/metrickit/mxmetadata/applicationbuildversion)

# applicationBuildVersion (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The value of the bundle version key in the app’s property list.

> Use [MetricReport.Environment](../metricreport/environment-swift.struct.md) or [DiagnosticReport.Environment](../diagnosticreport/environment-swift.struct.md) instead.

## Declaration

```swift
var applicationBuildVersion: String { get }
```

<a id="Discussion"></a>

## Discussion

Returns the value of [CFBundleVersion](../../bundleresources/information-property-list/cfbundleversion.md) from this app’s information property list.

## See Also

### Reading data about a payload

- [deviceType](devicetype.md): Deprecated. The hardware identifier for the device.
- [isTestFlightApp](istestflightapp.md): Deprecated. Indicates whether the app is registered with TestFlight.
- [lowPowerModeEnabled](lowpowermodeenabled.md): Deprecated. Indicates whether low power mode is enabled on the device.
- [osVersion](osversion.md): Deprecated. The version of the OS on the device including the type of OS, version number, and build number.
- [platformArchitecture](platformarchitecture.md): Deprecated. The name of the processor architecture for the device.
- [regionFormat](regionformat.md): Deprecated. The short country code for the region format setting of the device.
- [pid](pid.md): Deprecated. The process ID (PID) of the process.

# applicationBuildVersion (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The value of the bundle version key in the app’s property list.

> Use [MetricReport.Environment](../metricreport/environment-swift.struct.md) or [DiagnosticReport.Environment](../diagnosticreport/environment-swift.struct.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSString * applicationBuildVersion;
```

<a id="Discussion"></a>

## Discussion

Returns the value of [CFBundleVersion](../../bundleresources/information-property-list/cfbundleversion.md) from this app’s information property list.

## See Also

### Reading data about a payload

- [deviceType](devicetype.md): Deprecated. The hardware identifier for the device.
- [isTestFlightApp](istestflightapp.md): Deprecated. Indicates whether the app is registered with TestFlight.
- [lowPowerModeEnabled](lowpowermodeenabled.md): Deprecated. Indicates whether low power mode is enabled on the device.
- [osVersion](osversion.md): Deprecated. The version of the OS on the device including the type of OS, version number, and build number.
- [platformArchitecture](platformarchitecture.md): Deprecated. The name of the processor architecture for the device.
- [regionFormat](regionformat.md): Deprecated. The short country code for the region format setting of the device.
- [pid](pid.md): Deprecated. The process ID (PID) of the process.
