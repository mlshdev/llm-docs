> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hiddeviceclient/seizedevice()](https://developer.apple.com/documentation/corehid/hiddeviceclient/seizedevice())

# seizeDevice()

**Framework:** Core HID  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Attempt to obtain the device so that this client is the only active client.

## Declaration

```swift
func seizeDevice() throws
```

<a id="discussion"></a>

## Discussion

If successful, this client is the only one that receives notifications using [monitorNotifications(reportIDsToMonitor:elementsToMonitor:)](monitornotifications%28reportidstomonitor_elementstomonitor_%29.md), and the only one that can use certain functions to interact with the device. The device won’t be freed until the client that holds it is deinitialized. There must not be any outstanding calls when attempting to seize a device.

> **Throws**

> [HIDDeviceError](../hiddeviceerror.md) if the attempt to seize the device is unsuccessful. Notably, [HIDDeviceError.busy](../hiddeviceerror/busy.md) is thrown if there are outstanding calls to [monitorNotifications(reportIDsToMonitor:elementsToMonitor:)](monitornotifications%28reportidstomonitor_elementstomonitor_%29.md), [dispatchSetReportRequest(type:id:data:timeout:)](dispatchsetreportrequest%28type_id_data_timeout_%29.md), [dispatchGetReportRequest(type:id:timeout:)](dispatchgetreportrequest%28type_id_timeout_%29.md), or [updateElements(\_:timeout:)](updateelements%28__timeout_%29.md); and [HIDDeviceError.exclusiveAccess](../hiddeviceerror/exclusiveaccess.md) is thrown if the device is currently seized by another client.

## See Also

### Interact with the device

- [dispatchGetReportRequest(type:id:timeout:)](dispatchgetreportrequest%28type_id_timeout_%29.md): Send a get report request to the device over the transport.
- [dispatchSetReportRequest(type:id:data:timeout:)](dispatchsetreportrequest%28type_id_data_timeout_%29.md): Send a set report request to the device over the transport.
