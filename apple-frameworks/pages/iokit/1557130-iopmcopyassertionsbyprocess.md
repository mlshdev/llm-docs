> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1557130-iopmcopyassertionsbyprocess](https://developer.apple.com/documentation/iokit/1557130-iopmcopyassertionsbyprocess)

# IOPMCopyAssertionsByProcess

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.7+

Returns a dictionary listing all assertions, grouped by their owning process.

## Declaration

```objectivec
IOReturn IOPMCopyAssertionsByProcess(CFDictionaryRef *AssertionsByPID);
```

## Parameters

- `AssertionsByPID`: On success, this returns a dictionary of assertions per process. At the top level, keys to the CFDictionary are pids stored as CFNumbers (kCFNumberIntType). The value associated with each CFNumber pid is a CFArray of active assertions. Each entry in the CFArray is an assertion represented as a CFDictionary. See the keys kIOPMAssertionTypeKey and kIOPMAssertionLevelKey. Caller must CFRelease() this dictionary when done.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess on success.

<a id="discussion"></a>

## Discussion

Notes: One process may have multiple assertions. Several processes may have asserted the same assertion to different levels.

## See Also

### Assertions

- [IOPMAssertionCopyProperties](1557066-iopmassertioncopyproperties.md): Copies details about an `IOPMAssertion`
- [IOPMAssertionCreate](1557118-iopmassertioncreate.md): Deprecated. Dynamically requests a system behavior from the power management system.
- [IOPMAssertionCreateWithDescription](1557078-iopmassertioncreatewithdescripti.md)
- [IOPMAssertionCreateWithName](1557134-iopmassertioncreatewithname.md): Dynamically requests a system behavior from the power management system.
- [IOPMAssertionCreateWithProperties](1557082-iopmassertioncreatewithpropertie.md): Creates an IOPMAssertion with more flexibility than [IOPMAssertionCreateWithDescription](1557078-iopmassertioncreatewithdescripti.md).
- [IOPMAssertionDeclareUserActivity](1557127-iopmassertiondeclareuseractivity.md): Declares that the user is active on the system. This causes the display to power on and postpone display sleep up to the user's display sleep Energy Saver settings. If you prefer to hold the display awake for a longer period and you know how long you'd like to hold it, consider taking assertion [kIOPMAssertionTypePreventUserIdleDisplaySleep](kiopmassertiontypepreventuseridledisplaysleep.md) using [IOPMAssertionCreateWithDescription](1557078-iopmassertioncreatewithdescripti.md) API instead.
- [IOPMAssertionRelease](1557090-iopmassertionrelease.md): Decrements the assertion's retain count.
- [IOPMAssertionRetain](1557071-iopmassertionretain.md): Increments the assertion's retain count.
- [IOPMAssertionSetProperty](1557107-iopmassertionsetproperty.md): Sets a property in the assertion.
- [IOPMCopyAssertionsStatus](1557072-iopmcopyassertionsstatus.md): Returns a list of available assertions and their system-wide levels.
