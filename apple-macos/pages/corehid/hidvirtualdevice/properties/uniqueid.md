> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hidvirtualdevice/properties/uniqueid](https://developer.apple.com/documentation/corehid/hidvirtualdevice/properties/uniqueid)

# uniqueID

**Framework:** Core HID  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

A unique ID for the device.

## Declaration

```swift
let uniqueID: String?
```

<a id="discussion"></a>

## Discussion

Use `uniqueID` to facilitate driver matching, or client matching using [HIDDeviceManager](../../hiddevicemanager.md).
