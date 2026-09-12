> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioethernetinterface](https://developer.apple.com/documentation/kernel/ioethernetinterface)

# IOEthernetInterface

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Class  
**Availability:** macOS 10.6+ (deprecated in 10.15.4)

The Ethernet interface object.

## Declaration

```objectivec
class IOEthernetInterface : IONetworkInterface
```

<a id="overview"></a>

## Overview

An Ethernet controller driver, that is a subclass of IOEthernetController, will instantiate an object of this class when the driver calls the attachInterface() method. This interface object will then vend an Ethernet interface to DLIL, and manage the connection between the controller driver and the upper networking layers. Drivers will seldom need to subclass IOEthernetInterface.

## Topics

### Miscellaneous

- [controllerDidChangePowerState](ioethernetinterface/1810626-controllerdidchangepowerstate.md): Handles a notification that the network controller servicing this interface object has transitioned to a new power state.
- [controllerDidOpen](ioethernetinterface/1810636-controllerdidopen.md): A notification that the interface has opened the network controller.
- [controllerWillChangePowerState](ioethernetinterface/1810670-controllerwillchangepowerstate.md): Handles a notification that the network controller servicing this interface object is about to transition to a new power state.
- [controllerWillClose](ioethernetinterface/1810684-controllerwillclose.md): A notification that the interface will close the network controller.
- [free](ioethernetinterface/1810696-free.md): Frees the IOEthernetInterface instance.
- [getNamePrefix](ioethernetinterface/1810711-getnameprefix.md): Returns a string containing the prefix to use when creating a BSD name for this interface.
- [init](ioethernetinterface/1810722-init.md): Initializes an IOEthernetInterface instance.
- [performCommand](ioethernetinterface/1810736-performcommand.md): Handles an ioctl command sent to the Ethernet interface.

### Instance Variables

- [\_reserved](ioethernetinterface/reserved.md)

### Instance Methods

- [attachToDataLinkLayer](ioethernetinterface/1585552-attachtodatalinklayer.md): Deprecated.
- [controllerDidChangePowerState](ioethernetinterface/1585555-controllerdidchangepowerstate.md): Deprecated.
- [controllerDidOpen](ioethernetinterface/1585532-controllerdidopen.md): Deprecated.
- [controllerWillChangePowerState](ioethernetinterface/1585542-controllerwillchangepowerstate.md): Deprecated.
- [controllerWillClose](ioethernetinterface/1585544-controllerwillclose.md): Deprecated.
- [disableFilter](ioethernetinterface/1585537-disablefilter.md): Deprecated.
- [enableController](ioethernetinterface/1585547-enablecontroller.md): Deprecated.
- [enableFilter](ioethernetinterface/1585560-enablefilter.md): Deprecated.
- [feedPacketInputTap](ioethernetinterface/1585536-feedpacketinputtap.md): Deprecated.
- [feedPacketOutputTap](ioethernetinterface/1585540-feedpacketoutputtap.md): Deprecated.
- [free](ioethernetinterface/1585566-free.md): Deprecated.
- [getFilters](ioethernetinterface/1585551-getfilters.md): Deprecated.
- [getMetaClass](ioethernetinterface/1585558-getmetaclass.md): Deprecated.
- [getNamePrefix](ioethernetinterface/1585553-getnameprefix.md): Deprecated.
- [init](ioethernetinterface/1585541-init.md): Deprecated.
- [initIfnetParams](ioethernetinterface/1585559-initifnetparams.md): Deprecated.
- [inputEvent](ioethernetinterface/1585535-inputevent.md): Deprecated.
- [performCommand](ioethernetinterface/1585549-performcommand.md): Deprecated.
- [reportInterfaceWakeFlags](ioethernetinterface/1585562-reportinterfacewakeflags.md): Deprecated.
- [setFilters](ioethernetinterface/1585534-setfilters.md): Deprecated.
- [setupMulticastFilter](ioethernetinterface/1585561-setupmulticastfilter.md): Deprecated.
- [syncSIOCADDMULTI](ioethernetinterface/1585550-syncsiocaddmulti.md): Deprecated.
- [syncSIOCDELMULTI](ioethernetinterface/1585543-syncsiocdelmulti.md): Deprecated.
- [syncSIOCGIFDEVMTU](ioethernetinterface/1585548-syncsiocgifdevmtu.md): Deprecated.
- [syncSIOCSIFADDR](ioethernetinterface/1585557-syncsiocsifaddr.md): Deprecated.
- [syncSIOCSIFCAP](ioethernetinterface/2934826-syncsiocsifcap.md): Deprecated.
- [syncSIOCSIFFLAGS](ioethernetinterface/1585567-syncsiocsifflags.md): Deprecated.
- [syncSIOCSIFLLADDR](ioethernetinterface/1585545-syncsiocsiflladdr.md): Deprecated.
- [syncSIOCSIFMTU](ioethernetinterface/1585546-syncsiocsifmtu.md): Deprecated.
- [willTerminate](ioethernetinterface/1585539-willterminate.md): Deprecated.

### Type Methods

- [enableFilter_Wrapper](ioethernetinterface/1585556-enablefilter_wrapper.md): Deprecated.
- [handleEthernetInputEvent](ioethernetinterface/1585533-handleethernetinputevent.md): Deprecated.
- [performGatedCommand](ioethernetinterface/1585565-performgatedcommand.md): Deprecated.

## Relationships

### Inherits From

- [IONetworkInterface](ionetworkinterface.md)

## See Also

### IOKit

- [IOUSBDevice](iousbdevice.md): Deprecated. An input/output service object that represents a device on the USB bus.
- [IOUSBInterface](iousbinterface.md): Deprecated. An object that represents an interface of a device on the USB bus.
- [IOOFPathMatching](1575304-ioofpathmatching.md): Deprecated.
- [IOUSBHostInterface](iousbhostinterface.md): Deprecated.
- [IOUSBHostDevice](iousbhostdevice.md): Deprecated.
- [IOUSBHostPipe](iousbhostpipe.md): Deprecated.
- [IOUSBHostIOSource](iousbhostiosource.md): Deprecated.
- [IOUSBHostStream](iousbhoststream.md): Deprecated.
- [IOHIDEventDriver](iohideventdriver.md): Deprecated.
- [IOHIDEventService](iohideventservice.md): Deprecated. IOService represents an device or OS service in IOKit and DriverKit.
- [IOHIDInterface](iohidinterface.md): Deprecated. IOService represents an device or OS service in IOKit and DriverKit.
- [IOHIDSystem](iohidsystem.md): Deprecated.
- [IOHIKeyboardMapper](iohikeyboardmapper.md): Deprecated.
- [IOHIKeyboard](iohikeyboard.md): Deprecated.
- [IOHIPointing](iohipointing.md): Deprecated.
- [IOHIDevice](iohidevice.md): Deprecated.
- [IOHIDElement](iohidelement.md): Deprecated.
- [IOHIDWorkLoop](iohidworkloop.md): Deprecated.
- [IOEthernetController](ioethernetcontroller.md): Deprecated. Abstract superclass for Ethernet controllers.
