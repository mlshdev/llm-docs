> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopspowersourceidkey](https://developer.apple.com/documentation/iokit/kiopspowersourceidkey)

# kIOPSPowerSourceIDKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

CFNumber key uniquely identifying a UPS attached to the system.

## Declaration

```objectivec
#define kIOPSPowerSourceIDKey
```

<a id="discussion"></a>

## Discussion

- Apple UPS power sources will publish this key.
- Callers should not set this key; macOS power management will publish this key for UPS's.
- Type CFNumber, kCFNumberIntType, uniquely identifying an attached UPS.
