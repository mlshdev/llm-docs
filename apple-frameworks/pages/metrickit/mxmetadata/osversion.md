> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxmetadata/osversion](https://developer.apple.com/documentation/metrickit/mxmetadata/osversion)

# osVersion (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The version of the OS on the device including the type of OS, version number, and build number.

> Use [osVersion](../metricreport/environment-swift.struct/osversion.md) or [osVersion](../diagnosticreport/environment-swift.struct/osversion.md) instead.

## Declaration

```swift
var osVersion: String { get }
```

<a id="Discussion"></a>

## Discussion

The OS version is the same as the one used in crash reports.

## See Also

### Reading data about a payload

- [applicationBuildVersion](applicationbuildversion.md): Deprecated. The value of the bundle version key in the app’s property list.
- [deviceType](devicetype.md): Deprecated. The hardware identifier for the device.
- [isTestFlightApp](istestflightapp.md): Deprecated. Indicates whether the app is registered with TestFlight.
- [lowPowerModeEnabled](lowpowermodeenabled.md): Deprecated. Indicates whether low power mode is enabled on the device.
- [platformArchitecture](platformarchitecture.md): Deprecated. The name of the processor architecture for the device.
- [regionFormat](regionformat.md): Deprecated. The short country code for the region format setting of the device.
- [pid](pid.md): Deprecated. The process ID (PID) of the process.

# osVersion (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The version of the OS on the device including the type of OS, version number, and build number.

> Use [osVersion](../metricreport/environment-swift.struct/osversion.md) or [osVersion](../diagnosticreport/environment-swift.struct/osversion.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSString * osVersion;
```

<a id="Discussion"></a>

## Discussion

The OS version is the same as the one used in crash reports.

## See Also

### Reading data about a payload

- [applicationBuildVersion](applicationbuildversion.md): Deprecated. The value of the bundle version key in the app’s property list.
- [deviceType](devicetype.md): Deprecated. The hardware identifier for the device.
- [isTestFlightApp](istestflightapp.md): Deprecated. Indicates whether the app is registered with TestFlight.
- [lowPowerModeEnabled](lowpowermodeenabled.md): Deprecated. Indicates whether low power mode is enabled on the device.
- [platformArchitecture](platformarchitecture.md): Deprecated. The name of the processor architecture for the device.
- [regionFormat](regionformat.md): Deprecated. The short country code for the region format setting of the device.
- [pid](pid.md): Deprecated. The process ID (PID) of the process.
