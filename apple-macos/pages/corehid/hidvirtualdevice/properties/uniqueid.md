> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corehid/hidvirtualdevice/properties/uniqueid

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
