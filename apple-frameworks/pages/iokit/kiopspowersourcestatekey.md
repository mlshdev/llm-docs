> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopspowersourcestatekey](https://developer.apple.com/documentation/iokit/kiopspowersourcestatekey)

# kIOPSPowerSourceStateKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

CFDictionary key for the current source of power.

## Declaration

```objectivec
#define kIOPSPowerSourceStateKey
```

<a id="discussion"></a>

## Discussion

- Apple-defined power sources will publish this key.
- For power source creators: Providing this key is REQUIRED.
- [kIOPSBatteryPowerValue](kiopsbatterypowervalue.md) indicates power source is drawing internal power; [kIOPSACPowerValue](kiopsacpowervalue.md) indicates power source is connected to an external power source.
- Type CFString, value is [kIOPSACPowerValue](kiopsacpowervalue.md), [kIOPSBatteryPowerValue](kiopsbatterypowervalue.md), or [kIOPSOffLineValue](kiopsofflinevalue.md).
