> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopmassertionlevelkey](https://developer.apple.com/documentation/iokit/kiopmassertionlevelkey)

# kIOPMAssertionLevelKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

The CFDictionary key for assertion level in an assertion info dictionary.

## Declaration

```objectivec
#define kIOPMAssertionLevelKey
```

<a id="discussion"></a>

## Discussion

The value for this key will be a CFNumber, kCFNumberIntType with value `kIOPMAssertionLevelOff` or `kIOPMAssertionLevelOn`. The level reflects the assertion's level set at creation, or adjusted via IOPMAssertionSetLevel
