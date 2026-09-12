> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohideventservice/1812770-handleisopen](https://developer.apple.com/documentation/kernel/iohideventservice/1812770-handleisopen)

# handleIsOpen

**Interface language:** Objective-C

**Framework:** Kernel

Query whether a client has an open on the interface.

## Declaration

```objectivec
virtual bool handleIsOpen(
 const IOService *client) const; 
```

<a id="return_value"></a>

## Return Value

true if the specified client, or any client if none (0) is specified, presently has an open on this object.

<a id="overview"></a>

## Overview

This method is always called by IOService with the arbitration lock held. Subclasses should not override this method.

## See Also

### Miscellaneous

- [dispatchDigitizerEvent](1812711-dispatchdigitizerevent.md): Dispatch tablet events without orientation
- [dispatchDigitizerEventWithPolarOrientation](1812728-dispatchdigitizereventwithpolaro.md): Dispatch tablet events with polar orientation
- [dispatchDigitizerEventWithTiltOrientation](1812735-dispatchdigitizereventwithtiltor.md): Dispatch tablet events with tilt orientation
- [dispatchMultiAxisPointerEvent](1812745-dispatchmultiaxispointerevent.md): Dispatch multi-axis pointer event
- [handleClose](1812757-handleclose.md): Handle a client close on the interface.
- [handleOpen](1812786-handleopen.md): Handle a client open on the interface.
- [handleStart](1812803-handlestart.md): Prepare the hardware and driver to support I/O operations.
- [handleStop](1812816-handlestop.md): Quiesce the hardware and stop the driver.
