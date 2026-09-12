> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohideventservice/1812728-dispatchdigitizereventwithpolaro](https://developer.apple.com/documentation/kernel/iohideventservice/1812728-dispatchdigitizereventwithpolaro)

# dispatchDigitizerEventWithPolarOrientation

**Interface language:** Objective-C

**Framework:** Kernel

Dispatch tablet events with polar orientation

## Declaration

```objectivec
virtual void dispatchDigitizerEventWithPolarOrientation( 
 AbsoluteTime timeStamp, 
 UInt32 transducerID, 
 DigitizerTransducerType type, 
 bool inRange, 
 UInt32 buttonState, 
 IOFixed x, 
 IOFixed y, 
 IOFixed z = 0, 
 IOFixed tipPressure = 0, // 0.0-1.0 in 16:16 fixed 
 IOFixed tanPressure = 0, // 0.0-1.0 in 16:16 fixed 
 IOFixed twist = 0, 
 IOFixed altitude = 0, 
 IOFixed azimuth = 0, 
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
- `twist`: Absolute clockwise rotation along the transducer's major axis from 0.0 to 360.0 degrees in 16:16 fixed point.
- `altitude`: Specifies angle with the X-Y plane thorugh a signed, semicircular range. Positive values specify an angle downward and toward the positive Z axis. Value is represented in degrees from -180.0 to 180.0 in 16:16 fixed point.
- `azimuth`: Counter clockwise rotation of the cursor around the Z-axis through a full circular range. Value is represented in degrees from 0.0 to 360.0 in 16:16 fixed point.
- `options`: Additional options to be used when dispatching event.

<a id="overview"></a>

## Overview

This is meant to be used with transducers that leverage polar orientation

## See Also

### Miscellaneous

- [dispatchDigitizerEvent](1812711-dispatchdigitizerevent.md): Dispatch tablet events without orientation
- [dispatchDigitizerEventWithTiltOrientation](1812735-dispatchdigitizereventwithtiltor.md): Dispatch tablet events with tilt orientation
- [dispatchMultiAxisPointerEvent](1812745-dispatchmultiaxispointerevent.md): Dispatch multi-axis pointer event
- [handleClose](1812757-handleclose.md): Handle a client close on the interface.
- [handleIsOpen](1812770-handleisopen.md): Query whether a client has an open on the interface.
- [handleOpen](1812786-handleopen.md): Handle a client open on the interface.
- [handleStart](1812803-handlestart.md): Prepare the hardware and driver to support I/O operations.
- [handleStop](1812816-handlestop.md): Quiesce the hardware and stop the driver.
