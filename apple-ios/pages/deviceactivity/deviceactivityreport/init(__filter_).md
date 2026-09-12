> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivityreport/init(_:filter:)](https://developer.apple.com/documentation/deviceactivity/deviceactivityreport/init(_:filter:))

# init(\_:filter:)

**Framework:** DeviceActivity  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Creates a new device activity report.

## Declaration

```swift
@MainActor @preconcurrency init(_ context: DeviceActivityReport.Context, filter: DeviceActivityFilter = DeviceActivityFilter())
```

## Parameters

- `context`: The context of the report.
- `filter`: A filter for the device activity data that your app extension will use to render the report.

<a id="discussion"></a>

## Discussion

If you do not specify a filter, then the system will provide all device activity data for the current user and the current device to your device activity report app extension.
