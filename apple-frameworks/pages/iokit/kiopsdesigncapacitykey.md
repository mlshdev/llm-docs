> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/kiopsdesigncapacitykey

# kIOPSDesignCapacityKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

CFDictionary key for the current power source's design capacity

## Declaration

```objectivec
#define kIOPSDesignCapacityKey
```

<a id="discussion"></a>

## Discussion

- Apple-defined power sources might not publish this key.
- The power source's software may specify the units for this key. The units must be consistent for all capacities reported by this power source.
- For power source creators: Providing this key is RECOMMENDED.
- Type CFNumber kCFNumberIntType (signed integer)
