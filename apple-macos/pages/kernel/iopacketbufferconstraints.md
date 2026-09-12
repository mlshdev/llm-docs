> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopacketbufferconstraints](https://developer.apple.com/documentation/kernel/iopacketbufferconstraints)

# IOPacketBufferConstraints

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Structure  
**Availability:** macOS 10.6+

## Declaration

```objectivec
typedef struct IOPacketBufferConstraints {
    ...
} IOPacketBufferConstraints;
```

<a id="overview"></a>

## Overview

Constraint parameters, specified by a driver, for the data buffer in a packet mbuf. This is observed by allocatePacket() to satisfy the stated requirements.

## Topics

### Instance Properties

- [alignLength](iopacketbufferconstraints/1393417-alignlength.md)
- [alignStart](iopacketbufferconstraints/1393367-alignstart.md)
- [reserved](iopacketbufferconstraints/1393469-reserved.md)

## See Also

### Network Data

- [IONetworkData](ionetworkdata.md): An object that manages a fixed-size named buffer.
- [IONetworkMedium](ionetworkmedium.md): An object that encapsulates information about a network medium (i.e. 10Base-T, or 100Base-T Full Duplex).
- [IOPacketQueue](iopacketqueue.md): Implements a bounded FIFO queue of mbuf packets.
