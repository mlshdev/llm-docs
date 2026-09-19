> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kiopsnamekey

# kIOPSNameKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

CFDictionary key for the current power source's name.

## Declaration

```objectivec
#define kIOPSNameKey
```

<a id="discussion"></a>

## Discussion

- Apple-defined power sources will publish this key.
- For power source creators: Providing this key is REQUIRED.
- Type CFStringRef
