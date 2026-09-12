> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hiddevicemanager/devicematchingcriteria/uniqueid](https://developer.apple.com/documentation/corehid/hiddevicemanager/devicematchingcriteria/uniqueid)

# uniqueID

**Framework:** Core HID  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

A unique ID for the device.

## Declaration

```swift
var uniqueID: String?
```

<a id="discussion"></a>

## Discussion

This ID is software based, and isn’t associated with the device itself. It is typically set to help facilitate driver or client matching.
