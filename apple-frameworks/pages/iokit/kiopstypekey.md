> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kiopstypekey

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
