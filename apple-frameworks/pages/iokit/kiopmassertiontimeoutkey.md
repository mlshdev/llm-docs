> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopmassertiontimeoutkey](https://developer.apple.com/documentation/iokit/kiopmassertiontimeoutkey)

# kIOPMAssertionTimeoutKey

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.7+

kIOPMAssertionTimeoutKey specifies an outer bound, in seconds, that this assertion should be asserted.

## Declaration

```objectivec
#define kIOPMAssertionTimeoutKey
```

<a id="discussion"></a>

## Discussion

If your application hangs, or is unable to complete its assertion task in a reasonable amount of time, specifying a timeout allows PM to disable your assertion so the system can resume normal activity. Once a timeout with the [kIOPMAssertionTimeoutActionTurnOff](kiopmassertiontimeoutactionturnoff.md) assertion fires, the level will be set to [kIOPMAssertionTimeoutActionTurnOff](kiopmassertiontimeoutactionturnoff.md). The assertion may be re-armed by calling IOPMAssertionSetLevel.

This key may be specified in the dictionary passed to [IOPMAssertionCreateWithProperties](1557082-iopmassertioncreatewithpropertie.md).

This key may be present in the dictionary returned from [IOPMAssertionCopyProperties](1557066-iopmassertioncopyproperties.md).
