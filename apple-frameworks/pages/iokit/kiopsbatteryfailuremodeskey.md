> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopsbatteryfailuremodeskey](https://developer.apple.com/documentation/iokit/kiopsbatteryfailuremodeskey)

# kIOPSBatteryFailureModesKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.6+

Enumerates a battery's failures and error conditions.

## Declaration

```objectivec
#define kIOPSBatteryFailureModesKey
```

<a id="discussion"></a>

## Discussion

Various battery failures will be listed here. A battery may suffer from more than one type of failure simultaneously, so this key has a CFArray value.

If BatteryFailureModesKey is not defined (or is set to an empty dictionary), then the battery has no detectable failures.

Each entry in the array should be a short descriptive string describing the error.

- Apple-defined power sources will publish this key if any battery errors exist.
- For power source creators: Providing this key is RECOMMENDED.
- Type CFArrayRef
