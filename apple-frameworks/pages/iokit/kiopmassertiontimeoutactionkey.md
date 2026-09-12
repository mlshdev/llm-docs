> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopmassertiontimeoutactionkey](https://developer.apple.com/documentation/iokit/kiopmassertiontimeoutactionkey)

# kIOPMAssertionTimeoutActionKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

Specifies the action to take upon timeout expiration.

## Declaration

```objectivec
#define kIOPMAssertionTimeoutActionKey
```

<a id="discussion"></a>

## Discussion

The action specified by this key applies only if you include an [kIOPMAssertionTimeoutKey](kiopmassertiontimeoutkey.md). If you don’t specify a timeout action, the default is [kIOPMAssertionTimeoutActionTurnOff](kiopmassertiontimeoutactionturnoff.md).

You can add this key in the dictionary you pass to [IOPMAssertionCreateWithProperties](1557082-iopmassertioncreatewithpropertie.md). The key may be present in the dictionary that [IOPMAssertionCopyProperties](1557066-iopmassertioncopyproperties.md) returns.
