> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopstimetoemptykey](https://developer.apple.com/documentation/iokit/kiopstimetoemptykey)

# kIOPSTimeToEmptyKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

CFDictionary key for the current power source's time remaining until empty.

## Declaration

```objectivec
#define kIOPSTimeToEmptyKey
```

<a id="discussion"></a>

## Discussion

Only valid if the power source is running off its own power. That's when the [kIOPSPowerSourceStateKey](kiopspowersourcestatekey.md) has value [kIOPSBatteryPowerValue](kiopsbatterypowervalue.md) and the value of [kIOPSIsChargingKey](kiopsischargingkey.md) is kCFBooleanFalse.

- Apple-defined power sources will publish this key.
- For power source creators: Providing this key is RECOMMENDED.
- Type CFNumber kCFNumberIntType (signed integer), units are minutes
- A value of -1 indicates "Still Calculating the Time", otherwise estimated minutes left on the battery.
