> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kiopsmaxerrkey

# kIOPSMaxErrKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

CFDictionary key for the current power source's percentage error in capacity reporting.

## Declaration

```objectivec
#define kIOPSMaxErrKey
```

<a id="discussion"></a>

## Discussion

In internal batteries, this refers to the battery pack's estimated percentage error.

- Apple-defined battery power sources will publish this key, but only if it's defined for the battery.
- For power source creators: Providing this key is OPTIONAL.
- Type CFNumberRef kCFNumberIntType, non-negative integer
