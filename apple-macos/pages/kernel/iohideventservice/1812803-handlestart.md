> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohideventservice/1812803-handlestart](https://developer.apple.com/documentation/kernel/iohideventservice/1812803-handlestart)

# handleStart

**Interface language:** Objective-C

**Framework:** Kernel

Prepare the hardware and driver to support I/O operations.

## Declaration

```objectivec
virtual bool handleStart(
 IOService *provider ); 
```

## Parameters

- `provider`: The provider argument passed to start().

<a id="return_value"></a>

## Return Value

True on success, or false otherwise. Returning false will cause start() to fail and return false.

<a id="overview"></a>

## Overview

IOHIDEventService will call this method from start() before any I/O operations are issued to the concrete subclass. Methods such as getReportElements() are only called after handleStart() has returned true. A subclass that overrides this method should begin its implementation by calling the version in super, and then check the return value.

## See Also

### Miscellaneous

- [dispatchDigitizerEvent](1812711-dispatchdigitizerevent.md): Dispatch tablet events without orientation
- [dispatchDigitizerEventWithPolarOrientation](1812728-dispatchdigitizereventwithpolaro.md): Dispatch tablet events with polar orientation
- [dispatchDigitizerEventWithTiltOrientation](1812735-dispatchdigitizereventwithtiltor.md): Dispatch tablet events with tilt orientation
- [dispatchMultiAxisPointerEvent](1812745-dispatchmultiaxispointerevent.md): Dispatch multi-axis pointer event
- [handleClose](1812757-handleclose.md): Handle a client close on the interface.
- [handleIsOpen](1812770-handleisopen.md): Query whether a client has an open on the interface.
- [handleOpen](1812786-handleopen.md): Handle a client open on the interface.
- [handleStop](1812816-handlestop.md): Quiesce the hardware and stop the driver.
