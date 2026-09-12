> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohideventservice/1812786-handleopen](https://developer.apple.com/documentation/kernel/iohideventservice/1812786-handleopen)

# handleOpen

**Interface language:** Objective-C

**Framework:** Kernel

Handle a client open on the interface.

## Declaration

```objectivec
virtual bool handleOpen(
 IOService *client, 
 IOOptionBitsoptions, 
 void *argument); 
```

## Parameters

- `client`: The client object that requested the open.
- `options`: Options passed to IOService::open().
- `argument`: Argument passed to IOService::open().

<a id="return_value"></a>

## Return Value

true to accept the client open, false otherwise.

<a id="overview"></a>

## Overview

This method is called by IOService::open() with the arbitration lock held, and must return true to accept the client open. This method will in turn call handleClientOpen() to qualify the client requesting the open.

## See Also

### Miscellaneous

- [dispatchDigitizerEvent](1812711-dispatchdigitizerevent.md): Dispatch tablet events without orientation
- [dispatchDigitizerEventWithPolarOrientation](1812728-dispatchdigitizereventwithpolaro.md): Dispatch tablet events with polar orientation
- [dispatchDigitizerEventWithTiltOrientation](1812735-dispatchdigitizereventwithtiltor.md): Dispatch tablet events with tilt orientation
- [dispatchMultiAxisPointerEvent](1812745-dispatchmultiaxispointerevent.md): Dispatch multi-axis pointer event
- [handleClose](1812757-handleclose.md): Handle a client close on the interface.
- [handleIsOpen](1812770-handleisopen.md): Query whether a client has an open on the interface.
- [handleStart](1812803-handlestart.md): Prepare the hardware and driver to support I/O operations.
- [handleStop](1812816-handlestop.md): Quiesce the hardware and stop the driver.
