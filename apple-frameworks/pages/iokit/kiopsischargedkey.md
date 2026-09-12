> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopsischargedkey](https://developer.apple.com/documentation/iokit/kiopsischargedkey)

# kIOPSIsChargedKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.6+

CFDictionary key indicates whether the battery is charged.

## Declaration

```objectivec
#define kIOPSIsChargedKey
```

<a id="discussion"></a>

## Discussion

A battery must be plugged in to an external power source in order to be fully charged. Note that a battery may validly be plugged in, not charging, and \<100% charge. e.g. A battery with capacity \>= 95% and not charging, is defined as charged.

- Apple-defined power sources will publish this key.
- For power source creators: Providing this key is REQUIRED.
- Type CFBoolean - kCFBooleanTrue or kCFBooleanFalse
