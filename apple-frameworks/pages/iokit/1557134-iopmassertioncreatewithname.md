> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1557134-iopmassertioncreatewithname](https://developer.apple.com/documentation/iokit/1557134-iopmassertioncreatewithname)

# IOPMAssertionCreateWithName

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.6+

Dynamically requests a system behavior from the power management system.

## Declaration

```objectivec
IOReturn IOPMAssertionCreateWithName(CFStringRef AssertionType, IOPMAssertionLevel AssertionLevel, CFStringRef AssertionName, IOPMAssertionID *AssertionID);
```

## Parameters

- `AssertionType`: The CFString assertion type to request from the PM system.
- `AssertionLevel`: Pass kIOPMAssertionLevelOn or kIOPMAssertionLevelOff.
- `AssertionName`: A string that describes the name of the caller and the activity being handled by this assertion (e.g. "Mail Compacting Mailboxes"). Name may be no longer than 128 characters.
- `AssertionID`: On success, a unique id will be returned in this parameter.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess on success, any other return indicates PM could not successfully activate the specified assertion.

<a id="discussion"></a>

## Discussion

No special privileges are necessary to make this call - any process may activate a power assertion. Caller must specify an AssertionName - NULL is not a valid input.

## See Also

### Assertions

- [IOPMAssertionCopyProperties](1557066-iopmassertioncopyproperties.md): Copies details about an `IOPMAssertion`
- [IOPMAssertionCreate](1557118-iopmassertioncreate.md): Deprecated. Dynamically requests a system behavior from the power management system.
- [IOPMAssertionCreateWithDescription](1557078-iopmassertioncreatewithdescripti.md)
- [IOPMAssertionCreateWithProperties](1557082-iopmassertioncreatewithpropertie.md): Creates an IOPMAssertion with more flexibility than [IOPMAssertionCreateWithDescription](1557078-iopmassertioncreatewithdescripti.md).
- [IOPMAssertionDeclareUserActivity](1557127-iopmassertiondeclareuseractivity.md): Declares that the user is active on the system. This causes the display to power on and postpone display sleep up to the user's display sleep Energy Saver settings. If you prefer to hold the display awake for a longer period and you know how long you'd like to hold it, consider taking assertion [kIOPMAssertionTypePreventUserIdleDisplaySleep](kiopmassertiontypepreventuseridledisplaysleep.md) using [IOPMAssertionCreateWithDescription](1557078-iopmassertioncreatewithdescripti.md) API instead.
- [IOPMAssertionRelease](1557090-iopmassertionrelease.md): Decrements the assertion's retain count.
- [IOPMAssertionRetain](1557071-iopmassertionretain.md): Increments the assertion's retain count.
- [IOPMAssertionSetProperty](1557107-iopmassertionsetproperty.md): Sets a property in the assertion.
- [IOPMCopyAssertionsByProcess](1557130-iopmcopyassertionsbyprocess.md): Returns a dictionary listing all assertions, grouped by their owning process.
- [IOPMCopyAssertionsStatus](1557072-iopmcopyassertionsstatus.md): Returns a list of available assertions and their system-wide levels.
