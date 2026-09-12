> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iopowersources_h](https://developer.apple.com/documentation/iokit/iopowersources_h)

# IOPowerSources.h

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** API Collection

<a id="overview"></a>

## Overview

IOPowerSources provides uniform access to the state of power sources attached to the system. You can receive a change notification when any power source data changes. "Power sources" currently include batteries and UPS devices.

The header follows CF semantics in that it is the caller's responsibility to CFRelease() anything returned by a "Copy" function, and the caller should not CFRelease() anything returned by a "Get" function.

<a id="1770673"></a>

### Included Headers

- \<sys/cdefs.h\>

## Topics

### Quick Power Source Info

- [IOPSGetTimeRemainingEstimate](1523835-iopsgettimeremainingestimate.md): Returns the estimated minutes remaining until all power sources (battery and/or UPS's) are empty, or returns [kIOPSTimeRemainingUnlimited](kiopstimeremainingunlimited.md) if attached to an unlimited power source.

### Power Source Descriptions

- [IOPSCopyExternalPowerAdapterDetails](1523866-iopscopyexternalpoweradapterdeta.md): Returns a CFDictionary that describes the attached (AC) external power adapter (if any external power adapter is attached.
- [IOPSCopyPowerSourcesInfo](1523839-iopscopypowersourcesinfo.md): Returns a blob of Power Source information in an opaque CFTypeRef.
- [IOPSCopyPowerSourcesList](1523856-iopscopypowersourceslist.md): Returns a CFArray of Power Source handles, each of type CFTypeRef.
- [IOPSGetPowerSourceDescription](1523867-iopsgetpowersourcedescription.md): Returns a CFDictionary with readable information about the specific power source.
- [IOPSGetProvidingPowerSourceType(CFTypeRef)](iopowersources_h/1810316-iopsgetprovidingpowersourcetype.md): Indicates the power source the computer is currently drawing from.
- [IOPSNotificationCreateRunLoopSource](1523868-iopsnotificationcreaterunloopsou.md): Returns a CFRunLoopSourceRef that notifies the caller when power source information changes.

### Low Power Warnings

- [IOPSGetBatteryWarningLevel](1523851-iopsgetbatterywarninglevel.md): Indicates whether the system is at a low battery warning level.

### Data Types

- [IOPSLowBatteryWarningLevel](iopslowbatterywarninglevel.md): The battery can provide no more than 10 minutes of runtime.

### Constants

- [Defines](iopowersources_h/defines.md)
