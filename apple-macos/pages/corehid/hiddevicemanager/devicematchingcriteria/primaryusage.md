> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corehid/hiddevicemanager/devicematchingcriteria/primaryusage](https://developer.apple.com/documentation/corehid/hiddevicemanager/devicematchingcriteria/primaryusage)

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
