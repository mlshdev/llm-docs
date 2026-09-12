> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/metricreport/environment-swift.struct](https://developer.apple.com/documentation/metrickit/metricreport/environment-swift.struct)

# MetricReport.Environment

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

Device and app metadata associated with a metric report.

## Declaration

```swift
struct Environment
```

## Mentioned In

- [Analyzing app performance with MetricKit](../analyzing-app-performance-with-metrickit.md)

## Topics

### Device information

- [deviceType](environment-swift.struct/devicetype.md): The hardware identifier for the device.
- [osVersion](environment-swift.struct/osversion.md): The version of the OS on the device including the type of OS, version number, and build number.
- [platformArchitecture](environment-swift.struct/platformarchitecture.md): The name of the processor architecture for the device.
- [regionFormat](environment-swift.struct/regionformat.md): The short country code for the region format setting of the device.

### App information

- [latestApplicationVersion](environment-swift.struct/latestapplicationversion.md): The version of the app on the device at the end of the reporting period.
- [includesMultipleApplicationVersions](environment-swift.struct/includesmultipleapplicationversions.md): A Boolean indicating if the version of the app changed at least once during the reporting period.
- [isTestFlightApp](environment-swift.struct/istestflightapp.md): Indicates whether the app is registered with TestFlight.

### System state

- [lowPowerModeEnabled](environment-swift.struct/lowpowermodeenabled.md): Indicates whether low power mode is enabled on the device.
- [hasExceededStateLimit](environment-swift.struct/hasexceededstatelimit.md): A Boolean indicating if the number of emitted states exceeded the aggregation limit.

### Instance Properties

- [applicationBuildVersion](environment-swift.struct/applicationbuildversion.md): The value of the bundle version key in the app’s property list.
- [bundleIdentifier](environment-swift.struct/bundleidentifier.md): String representation of the bundle ID of the process.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
