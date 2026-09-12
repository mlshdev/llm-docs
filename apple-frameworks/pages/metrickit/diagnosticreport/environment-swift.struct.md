> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/diagnosticreport/environment-swift.struct](https://developer.apple.com/documentation/metrickit/diagnosticreport/environment-swift.struct)

# DiagnosticReport.Environment

**Framework:** MetricKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Device, app, and state metadata associated with a diagnostic report.

## Declaration

```swift
struct Environment
```

## Mentioned In

- [Analyzing app performance with MetricKit](../analyzing-app-performance-with-metrickit.md)
- [Monitoring app performance with MetricKit](../monitoring-app-performance-with-metrickit.md)

<a id="Discussion"></a>

## Discussion

`DiagnosticReport.Environment` carries device and app context alongside state and signpost data captured around the time of the diagnostic event.

Access the app states that were active when the event occurred through [states](environment-swift.struct/states.md). Use [signpostData](environment-swift.struct/signpostdata.md) to correlate signpost events with the diagnostic:

```swift
for await report in manager.diagnosticReports {
    let environment = report.environment
    print(environment.osVersion, environment.applicationVersion)

    for state in environment.states {
        print(state.domain, state.label)
    }
}
```

## Topics

### Device information

- [deviceType](environment-swift.struct/devicetype.md): The hardware identifier for the device.
- [osVersion](environment-swift.struct/osversion.md): The version of the OS on the device including the type of OS, version number, and build number.
- [platformArchitecture](environment-swift.struct/platformarchitecture.md): The name of the processor architecture for the device.
- [regionFormat](environment-swift.struct/regionformat.md): The short country code for the region format setting of the device.

### App information

- [applicationVersion](environment-swift.struct/applicationversion.md): The value of the bundle version key, short form, in the app’s property list.
- [isTestFlightApp](environment-swift.struct/istestflightapp.md): Indicates whether the app is registered with TestFlight.

### System state

- [lowPowerModeEnabled](environment-swift.struct/lowpowermodeenabled.md): Indicates whether low power mode is enabled on the device.

### State reporting context

- [states](environment-swift.struct/states.md): All states that were active leading up to this diagnostic event.

### Signpost data

- [signpostData](environment-swift.struct/signpostdata.md): Signpost data associated with the diagnostic.

### Instance Properties

- [applicationBuildVersion](environment-swift.struct/applicationbuildversion.md): The value of the bundle version key in the app’s property list.
- [bundleIdentifier](environment-swift.struct/bundleidentifier.md): String representation of the bundle ID of the process.
- [pid](environment-swift.struct/pid.md): The process ID (PID) of the process.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
