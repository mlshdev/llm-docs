> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiohidprimaryusagekey](https://developer.apple.com/documentation/iokit/kiohidprimaryusagekey)

# kIOHIDPrimaryUsageKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key that specifies the primary usage type of the device.

## Declaration

```objectivec
#define kIOHIDPrimaryUsageKey
```

<a id="discussion"></a>

## Discussion

The value of this key is the number for a HID usage type.

[kIOHIDPrimaryUsageKey](kiohidprimaryusagekey.md) and [kIOHIDPrimaryUsagePageKey](kiohidprimaryusagepagekey.md) are not always rich enough to describe a device’s capabilities. Take, for example, a device that describes both a keyboard and a mouse in the same descriptor. To support this more complicated scenario, use the following keys instead:

- [kIOHIDDeviceUsageKey](kiohiddeviceusagekey.md)
- [kIOHIDDeviceUsagePageKey](kiohiddeviceusagepagekey.md)
- [kIOHIDDeviceUsagePairsKey](kiohiddeviceusagepairskey.md)

To match on only one criterion, add [kIOHIDDeviceUsageKey](kiohiddeviceusagekey.md) and [kIOHIDDeviceUsagePageKey](kiohiddeviceusagepagekey.md) to the matching dictionary. To match on multiple criteria, add [kIOHIDDeviceUsagePairsKey](kiohiddeviceusagepairskey.md) to the matching dictionary.

## See Also

### Usage Keys

- [kIOHIDDeviceUsageKey](kiohiddeviceusagekey.md): A key that specifies a usage type of the device.
- [kIOHIDDeviceUsagePageKey](kiohiddeviceusagepagekey.md): A key that specifies a usage page of the device.
- [kIOHIDDeviceUsagePairsKey](kiohiddeviceusagepairskey.md): A key that contains the top-level usages of the device.
- [kIOHIDPrimaryUsagePageKey](kiohidprimaryusagepagekey.md): A key that specifies the primary usage page of the device.
