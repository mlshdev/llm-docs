> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopsvendordatakey](https://developer.apple.com/documentation/iokit/kiopsvendordatakey)

# kIOPSVendorDataKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.3+

CFDictionary key for arbitrary vendor data.

## Declaration

```objectivec
#define kIOPSVendorDataKey
```

<a id="discussion"></a>

## Discussion

- Apple-defined power sources are not required to publish this key.
- For power source creators: Providing this key is OPTIONAL.
- CFDictionary; contents determined by the power source software. macOS will not look at this data.
