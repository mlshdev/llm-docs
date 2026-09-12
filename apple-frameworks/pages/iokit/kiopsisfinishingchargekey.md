> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopsisfinishingchargekey](https://developer.apple.com/documentation/iokit/kiopsisfinishingchargekey)

# kIOPSIsFinishingChargeKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.6+

CFDictionary key indicates whether the battery is finishing off its charge.

## Declaration

```objectivec
#define kIOPSIsFinishingChargeKey
```

<a id="discussion"></a>

## Discussion

When this is true, the system UI should indicate that the battery is "Finishing Charge." Some batteries may continue charging after they report 100% capacity.

- Apple-defined battery power sources will publish this key.
- For power source creators: Providing this key is RECOMMENDED.
- Type CFBoolean - kCFBooleanTrue or kCFBooleanFalse
