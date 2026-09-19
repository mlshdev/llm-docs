> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corehid/hiddevicemanager/devicematchingcriteria/primaryusage

# primaryUsage

**Framework:** Core HID  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The HID specification compliant usage for the device.

## Declaration

```swift
var primaryUsage: HIDUsage?
```

<a id="discussion"></a>

## Discussion

This is the main usage for the device, pulled from the top level collection of the report descriptor, specifying the general device type.

For more details, see [HIDUsage](../../hidusage.md).
