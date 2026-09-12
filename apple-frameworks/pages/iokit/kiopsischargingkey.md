> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopsischargingkey](https://developer.apple.com/documentation/iokit/kiopsischargingkey)

# kIOPSIsChargingKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

CFDictionary key for the current power source's charging state

## Declaration

```objectivec
#define kIOPSIsChargingKey
```

<a id="discussion"></a>

## Discussion

- Apple-defined power sources will publish this key.
- For power source creators: Providing this key is REQUIRED.
- Type CFBoolean - kCFBooleanTrue or kCFBooleanFalse
