> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kiohidelementusageminkey

# kIOHIDElementUsageMinKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Keys used for matching particular elements.

## Declaration

```objectivec
#define kIOHIDElementUsageMinKey
```

<a id="discussion"></a>

## Discussion

These keys should only be used with a matching dictionary when searching for elements via copyMatchingElements.
