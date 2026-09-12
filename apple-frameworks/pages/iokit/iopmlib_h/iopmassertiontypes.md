> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iopmlib_h/iopmassertiontypes](https://developer.apple.com/documentation/iokit/iopmlib_h/iopmassertiontypes)

# IOPMAssertionTypes

**Interface language:** Objective-C

**Framework:** IOKit

Use as AssertionType argument to [IOPMAssertionCreate](../1557118-iopmassertioncreate.md). The idle display will not sleep when enabled, and consequently the system will not idle sleep.

## Declaration

```objectivec
/*!
   */
#define kIOPMAssertionTypePreventUserIdleSystemSleep CFSTR("PreventUserIdleSystemSleep")
/*!
   */
#define kIOPMAssertionTypePreventUserIdleDisplaySleep CFSTR("PreventUserIdleDisplaySleep")
/*!
   */
#define kIOPMAssertionTypePreventSystemSleep CFSTR("PreventSystemSleep")
/*!
   */
#define kIOPMAssertionTypeNoIdleSleep CFSTR("NoIdleSleepAssertion")
/*!
   */
#define kIOPMAssertionTypeNoDisplaySleep CFSTR("NoDisplaySleepAssertion")
```

<a id="overview"></a>

## Overview

When asserted and set to level [kIOPMAssertionLevelOn](../1557096-assertion/kiopmassertionlevelon.md), the system will prefer to enter the Dark Wake state, or remain in Dark Wake if already there, rather than go to sleep.

Assertions are just suggestions to the OS, and the OS can only honor them to the best of its ability. In the case of low power or a thermal emergency, the system may sleep anyway despite the assertion.

An assertion must publish the AssertionType in its assertion properties dictionary. The AssertionType should be a key in the properties dictionary, with a value of a CFNumber containing the kCFNumberIntegerType value [kIOPMAssertionLevelOff](../1557096-assertion/kiopmassertionleveloff.md) or [kIOPMAssertionLevelOn](../1557096-assertion/kiopmassertionlevelon.md).

## See Also

### Miscellaneous

- [IOPMAssertionDictionaryKeys](iopmassertiondictionarykeys.md)
- [IOPMCopyBatteryInfo](../1557138-iopmcopybatteryinfo.md): Request raw battery data from the system.
- [IOPMFindPowerManagement](../1557133-iopmfindpowermanagement.md): Finds the Root Power Domain IOService.
- [IOPMGetAggressiveness](../1557117-iopmgetaggressiveness.md): Retrieves the current value of one of the aggressiveness factors in IOKit Power Management.
- [IOPMSetAggressiveness](../1557098-iopmsetaggressiveness.md): Sets one of the aggressiveness factors in IOKit Power Management.
- [IOPMSleepEnabled](../1557074-iopmsleepenabled.md): Tells whether the system supports full sleep, or just doze
- [IOPMSleepSystem](../1557121-iopmsleepsystem.md): Request that the system initiate sleep.

### Related Documentation

- [kIOPMAssertionTypePreventUserIdleSystemSleep](../kiopmassertiontypepreventuseridlesystemsleep.md): Prevents the system from sleeping automatically due to a lack of user activity.
- [kIOPMAssertionTypePreventUserIdleDisplaySleep](../kiopmassertiontypepreventuseridledisplaysleep.md): Prevents the display from dimming automatically.
- [kIOPMAssertionTypeNoIdleSleep](../kiopmassertiontypenoidlesleep.md): Pass as the AssertionType argument to . The system will not idle sleep when enabled (display may sleep). Note that the system may sleep for other reasons.
- [kIOPMAssertionTypeNoDisplaySleep](../kiopmassertiontypenodisplaysleep.md): Use as AssertionType argument to . The idle display will not sleep when enabled, and consequently the system will not idle sleep.
- [kIOPMAssertionTypePreventSystemSleep](../kiopmassertiontypepreventsystemsleep.md): Prevents the system from sleeping and allows the system to reside in Dark Wake for an arbitrary length of time.
