> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopsbatteryhealthconditionkey](https://developer.apple.com/documentation/iokit/kiopsbatteryhealthconditionkey)

# kIOPSBatteryHealthConditionKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.6+

kIOPSBatteryHealthConditionKey broadly describes the battery's health.

## Declaration

```objectivec
#define kIOPSBatteryHealthConditionKey
```

<a id="discussion"></a>

## Discussion

- Apple-defined power sources will publish this key.
- Value is one of the "Battery Health Condition Values" strings described in this file.
- For power source creators: Providing this key is OPTIONAL - these keys have values only used by Apple power sources.
- Type CFStringRef
