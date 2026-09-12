> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohideventservice/1812745-dispatchmultiaxispointerevent](https://developer.apple.com/documentation/kernel/iohideventservice/1812745-dispatchmultiaxispointerevent)

# dispatchMultiAxisPointerEvent

**Interface language:** Objective-C

**Framework:** Kernel

Dispatch multi-axis pointer event

## Declaration

```objectivec
virtual void dispatchMultiAxisPointerEvent( 
 AbsoluteTime timeStamp, 
 UInt32 buttonState, 
 IOFixed x, 
 IOFixed y, 
 IOFixed z, 
 IOFixed rX = 0, 
 IOFixed rY = 0, 
 IOFixed rZ = 0, 
 IOOptionBits options = 0 ); 
```

## Parameters

- `timeStamp`: AbsoluteTime representing origination of event
- `buttonState`: Button mask where bit0 is the primary button, bit1 secondary and so forth
- `x`: Absolute location of pointer along the x-axis from -1.0 to 1.0 in 16:16 fixed point.
- `y`: Absolute location of pointer along the y-axis from -1.0 to 1.0 in 16:16 fixed point.
- `z`: Absolute location of pointer along the z-axis from -1.0 to 1.0 in 16:16 fixed point.
- `rX`: Absolute rotation of pointer around the x-axis from -1.0 to 1.0 in 16:16 fixed point.
- `rY`: Absolute rotation of pointer around the y-axis from -1.0 to 1.0 in 16:16 fixed point.
- `rZ`: Absolute rotation of pointer around the z-axis from -1.0 to 1.0 in 16:16 fixed point.
- `options`: Additional options to be used when dispatching event such as leveraging rotational axis for translation or using the z axis for vertical scrolling.

<a id="overview"></a>

## Overview

This is meant to be used with joysticks or multi-axis pointer devices such as those with with 6 degrees of freedom. This function will generate related relative pointer and scroll event associated with movement.

## See Also

### Miscellaneous

- [dispatchDigitizerEvent](1812711-dispatchdigitizerevent.md): Dispatch tablet events without orientation
- [dispatchDigitizerEventWithPolarOrientation](1812728-dispatchdigitizereventwithpolaro.md): Dispatch tablet events with polar orientation
- [dispatchDigitizerEventWithTiltOrientation](1812735-dispatchdigitizereventwithtiltor.md): Dispatch tablet events with tilt orientation
- [handleClose](1812757-handleclose.md): Handle a client close on the interface.
- [handleIsOpen](1812770-handleisopen.md): Query whether a client has an open on the interface.
- [handleOpen](1812786-handleopen.md): Handle a client open on the interface.
- [handleStart](1812803-handlestart.md): Prepare the hardware and driver to support I/O operations.
- [handleStop](1812816-handlestop.md): Quiesce the hardware and stop the driver.
