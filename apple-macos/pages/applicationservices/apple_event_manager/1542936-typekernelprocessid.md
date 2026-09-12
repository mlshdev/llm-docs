> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/apple_event_manager/1542936-typekernelprocessid](https://developer.apple.com/documentation/applicationservices/apple_event_manager/1542936-typekernelprocessid)

# typeKernelProcessID

**Framework:** Core Services

For specifying an application by UNIX process ID.

<a id="overview"></a>

## Overview

You might use this constant in a situation where you have access to the PID for a process but don’t have a Process Manager connection. Your code for creating the descriptor might look like the following:

<a id="2556049"></a>

**Listing 1**

```occ
pid_t pid = findTheAppPid(); // User supplied routine to get PID. // Now create a descriptor with it: AECreateDesc(typeKernelProcessID, &pid, sizeof(pid), &desc);
```

## Topics

### Constants

- [typeKernelProcessID](https://developer.apple.com/documentation/coreservices/typekernelprocessid): Indicates a descriptor containing a UNIX process ID. A process ID is similar to a PSN (processor serial number) but does not require a Process Manager connection. It is analogous to a 32-bit unsigned integer.
- [typeMachPort](https://developer.apple.com/documentation/coreservices/typemachport): Indicates a descriptor that specifies a Mach port.
