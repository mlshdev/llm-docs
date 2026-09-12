> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metrickit/metricreport/environment-swift.struct/includesmultipleapplicationversions](https://developer.apple.com/documentation/metrickit/metricreport/environment-swift.struct/includesmultipleapplicationversions)

# includesMultipleApplicationVersions

**Framework:** MetricKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

A Boolean indicating if the version of the app changed at least once during the reporting period.

## Declaration

```swift
let includesMultipleApplicationVersions: Bool
```

## See Also

### App information

- [latestApplicationVersion](latestapplicationversion.md): The version of the app on the device at the end of the reporting period.
- [isTestFlightApp](istestflightapp.md): Indicates whether the app is registered with TestFlight.
