> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopsispresentkey](https://developer.apple.com/documentation/iokit/kiopsispresentkey)

# kIOPSIsPresentKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

CFDictionary key for the current power source's presence.

## Declaration

```objectivec
#define kIOPSIsPresentKey
```

<a id="discussion"></a>

## Discussion

- Apple-defined power sources will publish this key.
- For instance, a portable with the capacity for two batteries but with only one present would show two power source dictionaries, but kIOPSIsPresentKey would have the value kCFBooleanFalse in one of them.
- For power source creators: Providing this key is REQUIRED.
- Type CFBoolean - kCFBooleanTrue or kCFBooleanFalse
