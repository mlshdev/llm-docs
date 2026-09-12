> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hiddeviceclient/monitornotifications(reportidstomonitor:elementstomonitor:)](https://developer.apple.com/documentation/corehid/hiddeviceclient/monitornotifications(reportidstomonitor:elementstomonitor:))

# monitorNotifications(reportIDsToMonitor:elementsToMonitor:)

**Framework:** Core HID  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Creates an asynchronous that receives notifications about the associated device.

## Declaration

```swift
func monitorNotifications(reportIDsToMonitor: [ClosedRange<HIDReportID>], elementsToMonitor: [HIDElement]) -> AsyncThrowingStream<HIDDeviceClient.Notification, any Error>
```

## Parameters

- `reportIDsToMonitor`: The report IDs that should trigger an [HIDDeviceClient.Notification.inputReport(id:data:timestamp:)](notification/inputreport%28id_data_timestamp_%29.md) notification.
- `elementsToMonitor`: The elements that should trigger an [HIDDeviceClient.Notification.elementUpdates(values:)](notification/elementupdates%28values_%29.md) notification. Elements of interest can be parsed from [elements](elements.md).

<a id="return-value"></a>

## Return Value

An asynchronous stream that receive notifications.

## Mentioned In

- [Communicating with human interface devices](../communicatingwithhiddevices.md)

<a id="discussion"></a>

## Discussion

Notifications come in asynchronously from the device at arbitrary times when relevant events occur.

Example usage:

```swift
for await notification in try await client.monitorNotifications(reportIDsToMonitor: [HIDReportID.allReports], elementsToMonitor: await client.elements) {
switch notification {
case .inputReport(let reportID, let report, let timestamp):
    break
case .elementUpdates(let values):
    break
case .deviceSeized:
    break
case .deviceUnseized:
    break
case .deviceRemoved:
    break
}
```

> **Throws**

> [HIDDeviceError](../hiddeviceerror.md) if there is an issue with setup.

## See Also

### Monitor device notifications

- [HIDDeviceClient.Notification](notification.md): Notifications for a HID device.
