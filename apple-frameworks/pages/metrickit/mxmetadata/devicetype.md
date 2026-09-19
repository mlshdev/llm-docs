> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metrickit/mxmetadata/devicetype

# deviceType (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The hardware identifier for the device.

> Use [deviceType](../metricreport/environment-swift.struct/devicetype.md) or [deviceType](../diagnosticreport/environment-swift.struct/devicetype.md) instead.

## Declaration

```swift
var deviceType: String { get }
```

## See Also

### Reading data about a payload

- [applicationBuildVersion](applicationbuildversion.md): Deprecated. The value of the bundle version key in the app’s property list.
- [isTestFlightApp](istestflightapp.md): Deprecated. Indicates whether the app is registered with TestFlight.
- [lowPowerModeEnabled](lowpowermodeenabled.md): Deprecated. Indicates whether low power mode is enabled on the device.
- [osVersion](osversion.md): Deprecated. The version of the OS on the device including the type of OS, version number, and build number.
- [platformArchitecture](platformarchitecture.md): Deprecated. The name of the processor architecture for the device.
- [regionFormat](regionformat.md): Deprecated. The short country code for the region format setting of the device.
- [pid](pid.md): Deprecated. The process ID (PID) of the process.

# deviceType (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 12.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

The hardware identifier for the device.

> Use [deviceType](../metricreport/environment-swift.struct/devicetype.md) or [deviceType](../diagnosticreport/environment-swift.struct/devicetype.md) instead.

## Declaration

```objectivec
@property (strong, readonly, nonnull) NSString * deviceType;
```

## See Also

### Reading data about a payload

- [applicationBuildVersion](applicationbuildversion.md): Deprecated. The value of the bundle version key in the app’s property list.
- [isTestFlightApp](istestflightapp.md): Deprecated. Indicates whether the app is registered with TestFlight.
- [lowPowerModeEnabled](lowpowermodeenabled.md): Deprecated. Indicates whether low power mode is enabled on the device.
- [osVersion](osversion.md): Deprecated. The version of the OS on the device including the type of OS, version number, and build number.
- [platformArchitecture](platformarchitecture.md): Deprecated. The name of the processor architecture for the device.
- [regionFormat](regionformat.md): Deprecated. The short country code for the region format setting of the device.
- [pid](pid.md): Deprecated. The process ID (PID) of the process.
