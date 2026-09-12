> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopmassertionretaincountkey](https://developer.apple.com/documentation/iokit/kiopmassertionretaincountkey)

# kIOPMAssertionRetainCountKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

A potential value for [kIOPMAssertionTimeoutActionKey](kiopmassertiontimeoutactionkey.md)

## Declaration

```objectivec
#define kIOPMAssertionRetainCountKey
```

<a id="discussion"></a>

## Discussion

kIOPMAssertionRetainCountKey reflects the CoreFoundation-style retain count on this assertion. Creating or retaining an assertion increments its retain count. Release an assertion decrements its retain count. When the retain count decrements to zero, the OS will destroy the object.

This key can be found in the dictionary returned from [IOPMAssertionCopyProperties](1557066-iopmassertioncopyproperties.md).
