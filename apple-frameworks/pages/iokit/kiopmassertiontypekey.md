> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopmassertiontypekey](https://developer.apple.com/documentation/iokit/kiopmassertiontypekey)

# kIOPMAssertionTypeKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

The CFDictionary key for assertion type in an assertion info dictionary.

## Declaration

```objectivec
#define kIOPMAssertionTypeKey
```

<a id="discussion"></a>

## Discussion

The value for this key will be a CFStringRef, with the value of the assertion type specified at creation time. Note that macOS may substitute a support assertion type string if the caller specifies a deprecated assertion type; in that case the value for this key could differ from the caller-provided assertion type.
