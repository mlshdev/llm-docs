> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corehid/hidreportid/allreports

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
