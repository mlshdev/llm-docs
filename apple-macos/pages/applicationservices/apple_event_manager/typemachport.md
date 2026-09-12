> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/apple_event_manager/typemachport](https://developer.apple.com/documentation/applicationservices/apple_event_manager/typemachport)

# typeMachPort (Swift)

**Framework:** Core Services

For specifying a Mach port.

<a id="overview"></a>

## Overview

You might use this constant as part of sending an Apple event to an arbitrary Mach port. Your code for creating the descriptor might look like the following:

<a id="2556054"></a>

**Listing 1**

```occ
mach_port_t port = lookupPortForTarget(); // User routine to get  port.
// Now create a descriptor with it:
AECreateDesc(typeMachPort, &port, sizeof(port), &desc);
```

Actually sending an Apple event to a Mach port is an advanced technique and is not documented here.

## Topics

### Constants

- [typeMachPort](https://developer.apple.com/documentation/coreservices/typemachport): Indicates a descriptor that specifies a Mach port.

# typeMachPort (Objective-C)

**Framework:** Core Services

For specifying a Mach port.

## Declaration

```objectivec
enum {
   typeMachPort = 'port'
};
```

<a id="overview"></a>

## Overview

You might use this constant as part of sending an Apple event to an arbitrary Mach port. Your code for creating the descriptor might look like the following:

<a id="2556054"></a>

**Listing 1**

```occ
mach_port_t port = lookupPortForTarget(); // User routine to get  port.
// Now create a descriptor with it:
AECreateDesc(typeMachPort, &port, sizeof(port), &desc);
```

Actually sending an Apple event to a Mach port is an advanced technique and is not documented here.

## Topics

### Constants

- [typeMachPort](https://developer.apple.com/documentation/coreservices/1542936-typekernelprocessid/typemachport): Indicates a descriptor that specifies a Mach port.
