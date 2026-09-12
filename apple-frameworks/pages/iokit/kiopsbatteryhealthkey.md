> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopsbatteryhealthkey](https://developer.apple.com/documentation/iokit/kiopsbatteryhealthkey)

# kIOPSBatteryHealthKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

CFDictionary key for the current power source's "health" estimate.

## Declaration

```objectivec
#define kIOPSBatteryHealthKey
```

<a id="discussion"></a>

## Discussion

- Apple-defined battery power sources will publish this key.
- Use value [kIOPSGoodValue](kiopsgoodvalue.md) to describe a well-performing power source,
- Use [kIOPSFairValue](kiopsfairvalue.md) to describe a functional power source with limited capacity
- And use [kIOPSPoorValue](kiopspoorvalue.md) to describe a power source that's not capable of Providing power.
- For power source creators: Providing this key is OPTIONAL.
- Type CFStringRef
