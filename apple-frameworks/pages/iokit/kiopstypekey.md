> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopstypekey](https://developer.apple.com/documentation/iokit/kiopstypekey)

# kIOPSTypeKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.6+

CFDictionary key for the type of the power source

## Declaration

```objectivec
#define kIOPSTypeKey
```

<a id="discussion"></a>

## Discussion

- Apple-defined power sources will publish this key.
- For power source creators: Providing this key is REQUIRED.
- Type CFStringRef. Valid transport types are kIOPSUPSType or kIOPSInternalBatteryType.
