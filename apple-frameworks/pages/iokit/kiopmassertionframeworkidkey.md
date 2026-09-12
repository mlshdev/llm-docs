> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopmassertionframeworkidkey](https://developer.apple.com/documentation/iokit/kiopmassertionframeworkidkey)

# kIOPMAssertionFrameworkIDKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

Specify if the assertion creator is a framework.

## Declaration

```objectivec
#define kIOPMAssertionFrameworkIDKey
```

<a id="discussion"></a>

## Discussion

If the code that creates the assertion resides in a framework or library, the caller should specify a CFBundleIdentifier, as a CFString, identifying that bundle here. This info helps developers and administrators determine the source of an assertion.

This key may be specified in the dictionary passed to [IOPMAssertionCreateWithProperties](1557082-iopmassertioncreatewithpropertie.md).

This key may be present in the dictionary returned from [IOPMAssertionCopyProperties](1557066-iopmassertioncopyproperties.md).
