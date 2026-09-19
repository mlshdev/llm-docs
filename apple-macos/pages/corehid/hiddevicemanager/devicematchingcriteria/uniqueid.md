> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corehid/hiddevicemanager/devicematchingcriteria/uniqueid

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
