> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidvirtualdevice/dispatchinputreport(data:timestamp:)](https://developer.apple.com/documentation/corehid/hidvirtualdevice/dispatchinputreport(data:timestamp:))

# dispatchInputReport(data:timestamp:)

**Framework:** Core HID  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Dispatch an input report to the system.

## Declaration

```swift
func dispatchInputReport(data: Data, timestamp: SuspendingClock.Instant) async throws
```

## Parameters

- `data`: The bytes to send as a part of the input report. Determining the correct values can be aided by referencing the device’s report descriptor. If there are multiple reports, the first byte should be the report ID.
- `timestamp`: The time that the report originated.

<a id="discussion"></a>

## Discussion

This dispatches an input report to the system, as if a person is interacting with a physical control. For example, if the virtual device represents a keyboard, a keyboard report can be dispatched here to simulate a person pressing a key on the keyboard. The system receives the report and any [HIDDeviceClient](../hiddeviceclient.md) devices monitoring for such activity. [activate(delegate:)](activate%28delegate_%29.md) must run successfully before this function runs.

> **Throws**

> [HIDDeviceError](../hiddeviceerror.md) if there is an issue with the request.
