> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopstimetofullchargekey](https://developer.apple.com/documentation/iokit/kiopstimetofullchargekey)

# kIOPSTimeToFullChargeKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

CFDictionary key for the current power source's time remaining until empty.

## Declaration

```objectivec
#define kIOPSTimeToFullChargeKey
```

<a id="discussion"></a>

## Discussion

Only valid if the value of [kIOPSIsChargingKey](kiopsischargingkey.md) is kCFBooleanTrue.

- Apple-defined power sources will publish this key.
- For power source creators: Providing this key is RECOMMENDED.
- Type CFNumber kCFNumberIntType (signed integer), units are minutes
- A value of -1 indicates "Still Calculating the Time", otherwise estimated minutes until fully charged.
