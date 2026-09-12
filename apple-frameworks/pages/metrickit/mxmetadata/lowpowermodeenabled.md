> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/mxmetadata/lowpowermodeenabled](https://developer.apple.com/documentation/metrickit/mxmetadata/lowpowermodeenabled)

# lowPowerModeEnabled (Swift)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ (deprecated in 27.0) · iPadOS 17.0+ (deprecated in 27.0) · Mac Catalyst 17.0+ (deprecated in 27.0) · macOS 14.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Indicates whether low power mode is enabled on the device.

> Use [lowPowerModeEnabled](../metricreport/environment-swift.struct/lowpowermodeenabled.md) or [lowPowerModeEnabled](../diagnosticreport/environment-swift.struct/lowpowermodeenabled.md) instead.

## Declaration

```swift
var lowPowerModeEnabled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Retrieve the current setting of the system for the low power mode setting. On systems where the low power mode is unknown or unsupported, the value returned from the [lowPowerModeEnabled](lowpowermodeenabled.md) property is always NO.

## See Also

### Reading data about a payload

- [applicationBuildVersion](applicationbuildversion.md): Deprecated. The value of the bundle version key in the app’s property list.
- [deviceType](devicetype.md): Deprecated. The hardware identifier for the device.
- [isTestFlightApp](istestflightapp.md): Deprecated. Indicates whether the app is registered with TestFlight.
- [osVersion](osversion.md): Deprecated. The version of the OS on the device including the type of OS, version number, and build number.
- [platformArchitecture](platformarchitecture.md): Deprecated. The name of the processor architecture for the device.
- [regionFormat](regionformat.md): Deprecated. The short country code for the region format setting of the device.
- [pid](pid.md): Deprecated. The process ID (PID) of the process.

# lowPowerModeEnabled (Objective-C)

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ (deprecated in 27.0) · iPadOS 17.0+ (deprecated in 27.0) · Mac Catalyst 17.0+ (deprecated in 27.0) · macOS 14.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Indicates whether low power mode is enabled on the device.

> Use [lowPowerModeEnabled](../metricreport/environment-swift.struct/lowpowermodeenabled.md) or [lowPowerModeEnabled](../diagnosticreport/environment-swift.struct/lowpowermodeenabled.md) instead.

## Declaration

```objectivec
@property (readonly) bool lowPowerModeEnabled;
```

<a id="Discussion"></a>

## Discussion

Retrieve the current setting of the system for the low power mode setting. On systems where the low power mode is unknown or unsupported, the value returned from the [lowPowerModeEnabled](lowpowermodeenabled.md) property is always NO.

## See Also

### Reading data about a payload

- [applicationBuildVersion](applicationbuildversion.md): Deprecated. The value of the bundle version key in the app’s property list.
- [deviceType](devicetype.md): Deprecated. The hardware identifier for the device.
- [isTestFlightApp](istestflightapp.md): Deprecated. Indicates whether the app is registered with TestFlight.
- [osVersion](osversion.md): Deprecated. The version of the OS on the device including the type of OS, version number, and build number.
- [platformArchitecture](platformarchitecture.md): Deprecated. The name of the processor architecture for the device.
- [regionFormat](regionformat.md): Deprecated. The short country code for the region format setting of the device.
- [pid](pid.md): Deprecated. The process ID (PID) of the process.
