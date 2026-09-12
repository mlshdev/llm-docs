> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopshealthconfidencekey](https://developer.apple.com/documentation/iokit/kiopshealthconfidencekey)

# kIOPSHealthConfidenceKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.4+

CFDictionary key for our confidence in the accuracy of our power source's "health" estimate.

## Declaration

```objectivec
#define kIOPSHealthConfidenceKey
```

<a id="discussion"></a>

## Discussion

- Apple-defined power sources will no longer publish this key.
- Power source creators should not publish this key.
- For power source creators: This key is DEPRECATED, do not implement it.
- Type CFStringRef
