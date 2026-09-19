> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corehid/hiddevicemanager/devicematchingcriteria/locationid

# locationID

**Framework:** Core HID  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The location ID for the device.

## Declaration

```swift
var locationID: UInt64?
```

<a id="discussion"></a>

## Discussion

Location IDs are typically associated with USB devices, but can be overriden to have device implementation specific meaning.
