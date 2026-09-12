> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iopm_h_user-space](https://developer.apple.com/documentation/iokit/iopm_h_user-space)

# IOPM.h User-Space

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** API Collection

Defines power management constants and keys used by both in-kernel and user space power management.

<a id="overview"></a>

## Overview

IOPM.h defines a range of power management constants used in several in-kernel and user space APIs. Most significantly, the IOPMPowerFlags used to specify the fields of an IOPMPowerState struct are defined here.

Most of the constants defined in IOPM.h are deprecated or for Apple internal use only, and are not elaborated on in headerdoc.

<a id="1770685"></a>

### Included Headers

- \<IOKit/IOTypes.h\>
- \<IOKit/IOMessage.h\>
- \<IOKit/IOReturn.h\>

## Topics

### Data Types

- [IOPMSystemCapabilityChangeParameters](https://developer.apple.com/documentation/kernel/iopmsystemcapabilitychangeparameters): A structure describing a system capability change.

### Constants

- [Defines](iopm_h_user-space/defines.md)
- [Global Variables](iopm_h_user-space/global_variables.md)
- [IOPMPowerFlags](https://developer.apple.com/documentation/kernel/iopmpowerflags): Bits are used in defining capabilityFlags, inputPowerRequirements, and outputPowerCharacter in the IOPMPowerState structure.
- [IOPMSystemCapabilityChangeFlags](1499721-iopmsystemcapabilitychangeflags.md)
