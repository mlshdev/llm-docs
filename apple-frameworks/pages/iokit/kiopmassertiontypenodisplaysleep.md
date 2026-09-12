> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/kiopmassertiontypenodisplaysleep](https://developer.apple.com/documentation/iokit/kiopmassertiontypenodisplaysleep)

# kIOPMAssertionTypeNoDisplaySleep

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

Use as AssertionType argument to [IOPMAssertionCreate](1557118-iopmassertioncreate.md). The idle display will not sleep when enabled, and consequently the system will not idle sleep.

## Declaration

```objectivec
#define kIOPMAssertionTypeNoDisplaySleep
```

<a id="discussion"></a>

## Discussion

When asserted and set to level [kIOPMAssertionLevelOn](1557096-assertion/kiopmassertionlevelon.md), the system will prefer to enter the Dark Wake state, or remain in Dark Wake if already there, rather than go to sleep.

Assertions are just suggestions to the OS, and the OS can only honor them to the best of its ability. In the case of low power or a thermal emergency, the system may sleep anyway despite the assertion.

An assertion must publish the AssertionType in its assertion properties dictionary. The AssertionType should be a key in the properties dictionary, with a value of a CFNumber containing the kCFNumberIntegerType value [kIOPMAssertionLevelOff](1557096-assertion/kiopmassertionleveloff.md) or [kIOPMAssertionLevelOn](1557096-assertion/kiopmassertionlevelon.md).
