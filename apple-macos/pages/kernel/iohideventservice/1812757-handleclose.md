> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohideventservice/1812757-handleclose](https://developer.apple.com/documentation/kernel/iohideventservice/1812757-handleclose)

# handleClose

**Interface language:** Objective-C

**Framework:** Kernel

Handle a client close on the interface.

## Declaration

```objectivec
virtual void handleClose(
 IOService *client,
 IOOptionBitsoptions); 
```

## Parameters

- `client`: The client object that requested the close.
- `options`: Options passed to IOService::close().

<a id="overview"></a>

## Overview

This method is called by IOService::close() with the arbitration lock held. This method will in turn call handleClientClose() to notify interested subclasses about the client close. If this represents the last close, then the interface will also close the controller before this method returns. The controllerWillClose() method will be called before closing the controller. Subclasses should not override this method.

## See Also

### Miscellaneous

- [dispatchDigitizerEvent](1812711-dispatchdigitizerevent.md): Dispatch tablet events without orientation
- [dispatchDigitizerEventWithPolarOrientation](1812728-dispatchdigitizereventwithpolaro.md): Dispatch tablet events with polar orientation
- [dispatchDigitizerEventWithTiltOrientation](1812735-dispatchdigitizereventwithtiltor.md): Dispatch tablet events with tilt orientation
- [dispatchMultiAxisPointerEvent](1812745-dispatchmultiaxispointerevent.md): Dispatch multi-axis pointer event
- [handleIsOpen](1812770-handleisopen.md): Query whether a client has an open on the interface.
- [handleOpen](1812786-handleopen.md): Handle a client open on the interface.
- [handleStart](1812803-handlestart.md): Prepare the hardware and driver to support I/O operations.
- [handleStop](1812816-handlestop.md): Quiesce the hardware and stop the driver.
