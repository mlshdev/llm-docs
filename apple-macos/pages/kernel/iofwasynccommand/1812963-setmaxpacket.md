> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofwasynccommand/1812963-setmaxpacket](https://developer.apple.com/documentation/kernel/iofwasynccommand/1812963-setmaxpacket)

# setMaxPacket

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
IOReturn setMaxPacket(
 UInt32maxBytes) 
```

## Parameters

- `maxBytes`: Maximum packet size in bytes. If the maxsize is 4 then quadlet transfers will be used.

<a id="overview"></a>

## Overview

Sets the maximum size for block transfers used by the command. The command is initialized to use the maximum packet size calculated from the device's PHY speed, bus info block and the bus topology. Call this method before calling submit().
