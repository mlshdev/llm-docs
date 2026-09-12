> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iofirewireavclib_h](https://developer.apple.com/documentation/iokit/iofirewireavclib_h)

# IOFireWireAVCLib.h

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** API Collection

<a id="overview"></a>

## Overview

<a id="1675182"></a>

### Included Headers

- \<IOKit/IOCFPlugIn.h\>
- \<IOKit/firewire/IOFireWireFamilyCommon.h\>
- \<IOKit/avc/IOFireWireAVCConsts.h\>

## Topics

### Callbacks

- [IOFWAVCCommandHandlerCallback](iofwavccommandhandlercallback.md): Callback called when a incoming AVC command matching a registered command handler is received.
- [IOFWAVCPCRCallback](iofwavcpcrcallback.md): Callback called after a successful lock transaction to a CMP plug.
- [IOFWAVCRequestCallback](iofwavcrequestcallback.md): This Callback has been deprecated. Use installAVCCommandHandler instead.
- [IOFWAVCSubunitPlugHandlerCallback](iofwavcsubunitplughandlercallback.md): Callback called when a incoming AVC command matching a registered command handler is received.
