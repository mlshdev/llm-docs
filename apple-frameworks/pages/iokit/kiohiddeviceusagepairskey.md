> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiohiddeviceusagepairskey](https://developer.apple.com/documentation/iokit/kiohiddeviceusagepairskey)

# kIOHIDDeviceUsagePairsKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

A key that contains the top-level usages of the device.

## Declaration

```objectivec
#define kIOHIDDeviceUsagePairsKey
```

<a id="discussion"></a>

## Discussion

The value of this key is an array of dictionaries. The keys and values of each dictionary are the usage pages and usages for which to match your driver. Use this key when the device supports multiple behaviors and you want to match your driver against more than one of these behaviors.

## See Also

### Usage Keys

- [kIOHIDDeviceUsageKey](kiohiddeviceusagekey.md): A key that specifies a usage type of the device.
- [kIOHIDDeviceUsagePageKey](kiohiddeviceusagepagekey.md): A key that specifies a usage page of the device.
- [kIOHIDPrimaryUsageKey](kiohidprimaryusagekey.md): A key that specifies the primary usage type of the device.
- [kIOHIDPrimaryUsagePageKey](kiohidprimaryusagepagekey.md): A key that specifies the primary usage page of the device.
