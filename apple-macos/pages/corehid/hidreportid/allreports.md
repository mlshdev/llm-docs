> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidreportid/allreports](https://developer.apple.com/documentation/corehid/hidreportid/allreports)

# allReports

**Framework:** Core HID  
**Kind:** Type Property  
**Availability:** macOS 15.0+

A convenient definition that represents every possible report ID.

## Declaration

```swift
static let allReports: ClosedRange<HIDReportID>
```

<a id="discussion"></a>

## Discussion

This can be useful when specifying the report IDs to monitor in [monitorNotifications(reportIDsToMonitor:elementsToMonitor:)](../hiddeviceclient/monitornotifications%28reportidstomonitor_elementstomonitor_%29.md).
