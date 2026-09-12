> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohideventservice/1812816-handlestop](https://developer.apple.com/documentation/kernel/iohideventservice/1812816-handlestop)

# handleStop

**Interface language:** Objective-C

**Framework:** Kernel

Quiesce the hardware and stop the driver.

## Declaration

```objectivec
virtual void handleStop(
 IOService *provider ); 
```

## Parameters

- `provider`: The provider argument passed to stop().

<a id="overview"></a>

## Overview

IOHIDEventService will call this method from stop() to signal that the hardware should be quiesced and the driver stopped. A subclass that overrides this method should end its implementation by calling the version in super.

## See Also

### Miscellaneous

- [dispatchDigitizerEvent](1812711-dispatchdigitizerevent.md): Dispatch tablet events without orientation
- [dispatchDigitizerEventWithPolarOrientation](1812728-dispatchdigitizereventwithpolaro.md): Dispatch tablet events with polar orientation
- [dispatchDigitizerEventWithTiltOrientation](1812735-dispatchdigitizereventwithtiltor.md): Dispatch tablet events with tilt orientation
- [dispatchMultiAxisPointerEvent](1812745-dispatchmultiaxispointerevent.md): Dispatch multi-axis pointer event
- [handleClose](1812757-handleclose.md): Handle a client close on the interface.
- [handleIsOpen](1812770-handleisopen.md): Query whether a client has an open on the interface.
- [handleOpen](1812786-handleopen.md): Handle a client open on the interface.
- [handleStart](1812803-handlestart.md): Prepare the hardware and driver to support I/O operations.
