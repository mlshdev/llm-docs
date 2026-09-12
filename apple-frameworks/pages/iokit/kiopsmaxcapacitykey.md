> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopsmaxcapacitykey](https://developer.apple.com/documentation/iokit/kiopsmaxcapacitykey)

# kIOPSMaxCapacityKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

CFDictionary key for the current power source's maximum or "Full Charge Capacity"

## Declaration

```objectivec
#define kIOPSMaxCapacityKey
```

<a id="discussion"></a>

## Discussion

- Apple-defined power sources will publish this key in units of percent. The value is usually 100%.
- The power source's software may specify the units for this key. The units must be consistent for all capacities reported by this power source.
- For power source creators: Providing this key is REQUIRED.
- Type CFNumber kCFNumberIntType (signed integer)
