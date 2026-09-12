> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohideventservice/1812711-dispatchdigitizerevent](https://developer.apple.com/documentation/kernel/iohideventservice/1812711-dispatchdigitizerevent)

# dispatchDigitizerEvent

**Interface language:** Objective-C

**Framework:** Kernel

Dispatch tablet events without orientation

## Declaration

```objectivec
virtual void dispatchDigitizerEvent( 
 AbsoluteTime timeStamp, 
 UInt32 transducerID, 
 DigitizerTransducerType type, 
 bool inRange, 
 UInt32 buttonState, 
 IOFixed x, 
 IOFixed y, 
 IOFixed z = 0, 
 IOFixed tipPressure = 0, 
 IOFixed auxPressure = 0, 
 IOFixed twist = 0, 
 IOOptionBits options = 0 ); 
```

## Parameters

- `timeStamp`: AbsoluteTime representing origination of event
- `ID`: ID of the transducer generating the event
- `type`: Type of the transducer generating the event
- `inRange`: Details whether the transducer is in promitity to digitizer surface
- `buttonState`: Button mask where bit0 is the primary button, bit1 secondary and so forth
- `x`: Absolute location of transducer along the x-axis from 0.0 to 1.0 in 16:16 fixed point.
- `y`: Absolute location of transducer along the y-axis from 0.0 to 1.0 in 16:16 fixed point.
- `z`: Absolute location of transducer along the z-axis from 0.0 to 1.0 in 16:16 fixed point. This is typically used to determine the distance between the transducer and surface
- `tipPressure`: Absolute pressure exerted on surface by tip from 0.0 to 1.0 in 16:16 fixed point.
- `auxPressure`: Absolute pressure exerted on transducer from 0.0 to 1.0 in 16:16 fixed point.
- `options`: Additional options to be used when dispatching event.

<a id="overview"></a>

## Overview

This is meant to be used with transducers without any orientation.

## See Also

### Miscellaneous

- [dispatchDigitizerEventWithPolarOrientation](1812728-dispatchdigitizereventwithpolaro.md): Dispatch tablet events with polar orientation
- [dispatchDigitizerEventWithTiltOrientation](1812735-dispatchdigitizereventwithtiltor.md): Dispatch tablet events with tilt orientation
- [dispatchMultiAxisPointerEvent](1812745-dispatchmultiaxispointerevent.md): Dispatch multi-axis pointer event
- [handleClose](1812757-handleclose.md): Handle a client close on the interface.
- [handleIsOpen](1812770-handleisopen.md): Query whether a client has an open on the interface.
- [handleOpen](1812786-handleopen.md): Handle a client open on the interface.
- [handleStart](1812803-handlestart.md): Prepare the hardware and driver to support I/O operations.
- [handleStop](1812816-handlestop.md): Quiesce the hardware and stop the driver.
