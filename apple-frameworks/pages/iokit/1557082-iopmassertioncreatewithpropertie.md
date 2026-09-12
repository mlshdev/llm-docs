> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/1557082-iopmassertioncreatewithpropertie](https://developer.apple.com/documentation/iokit/1557082-iopmassertioncreatewithpropertie)

# IOPMAssertionCreateWithProperties

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.7+

Creates an IOPMAssertion with more flexibility than [IOPMAssertionCreateWithDescription](1557078-iopmassertioncreatewithdescripti.md).

## Declaration

```objectivec
IOReturn IOPMAssertionCreateWithProperties(CFDictionaryRef AssertionProperties, IOPMAssertionID *AssertionID);
```

## Parameters

- `AssertionProperties`: Dictionary providing the properties of the assertion that need to be created.
- `AssertionID`: (Output) On successful return, contains a unique reference to a PM assertion.

<a id="discussion"></a>

## Discussion

Create a new PM assertion - the caller must specify the type of assertion, initial level, and its properties as [IOPMAssertionDictionaryKeys](iopmlib_h/iopmassertiondictionarykeys.md) keys in the `AssertionProperties` dictionary. The following keys are recommend and/or required to be specified in the AssertionProperties dictionary argument.

- REQUIRED: `kIOPMAssertionTypeKey` define the assertion type.
- REQUIRED: `kIOPMAssertionValueKey` define an inital value.
- REQUIRED: `kIOPMAssertionNameKey` Caller must describe the name for the activity that requires the change in behavior provided by the assertion.
- OPTIONAL: `kIOPMAssertionDetailsKey` Caller may describe context-specific data about the assertion.
- OPTIONAL: `kIOPMAssertionHumanReadableReasonKey` Caller may describe the reason for creating the assertion in a localizable CFString. This should be a human readable phrase that describes the actions the calling process is taking while the assertion is held, like "Downloading TV episodes", or "Compiling Projects"
- OPTIONAL: `kIOPMAssertionLocalizationBundlePathKey` Caller may provide its bundle's path, where macOS can localize for GUI display the CFString specified by [kIOPMAssertionHumanReadableReasonKey](kiopmassertionhumanreadablereasonkey.md).
- OPTIONAL: `kIOPMAssertionPlugInIDKey` if the caller is a plugin with a different identity than the process it's loaded in.
- OPTIONAL: `kIOPMAssertionFrameworkIDKey` if the caller is a framework acting on behalf of a process.
- OPTIONAL: The caller may specify a timeout.

## See Also

### Assertions

- [IOPMAssertionCopyProperties](1557066-iopmassertioncopyproperties.md): Copies details about an `IOPMAssertion`
- [IOPMAssertionCreate](1557118-iopmassertioncreate.md): Deprecated. Dynamically requests a system behavior from the power management system.
- [IOPMAssertionCreateWithDescription](1557078-iopmassertioncreatewithdescripti.md)
- [IOPMAssertionCreateWithName](1557134-iopmassertioncreatewithname.md): Dynamically requests a system behavior from the power management system.
- [IOPMAssertionDeclareUserActivity](1557127-iopmassertiondeclareuseractivity.md): Declares that the user is active on the system. This causes the display to power on and postpone display sleep up to the user's display sleep Energy Saver settings. If you prefer to hold the display awake for a longer period and you know how long you'd like to hold it, consider taking assertion [kIOPMAssertionTypePreventUserIdleDisplaySleep](kiopmassertiontypepreventuseridledisplaysleep.md) using [IOPMAssertionCreateWithDescription](1557078-iopmassertioncreatewithdescripti.md) API instead.
- [IOPMAssertionRelease](1557090-iopmassertionrelease.md): Decrements the assertion's retain count.
- [IOPMAssertionRetain](1557071-iopmassertionretain.md): Increments the assertion's retain count.
- [IOPMAssertionSetProperty](1557107-iopmassertionsetproperty.md): Sets a property in the assertion.
- [IOPMCopyAssertionsByProcess](1557130-iopmcopyassertionsbyprocess.md): Returns a dictionary listing all assertions, grouped by their owning process.
- [IOPMCopyAssertionsStatus](1557072-iopmcopyassertionsstatus.md): Returns a list of available assertions and their system-wide levels.
