> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohideventservice](https://developer.apple.com/documentation/kernel/iohideventservice)

# IOHIDEventService

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Class  
**Availability:** macOS 10.12.2+ (deprecated in 10.15.2)

IOService represents an device or OS service in IOKit and DriverKit.

## Declaration

```objectivec
class IOHIDEventService : IOService
```

<a id="overview"></a>

## Overview

IOKit provides driver lifecycle management through the IOService APIs.  Drivers and devices are represented as subclasses of IOService.

## Topics

### Miscellaneous

- [dispatchDigitizerEvent](iohideventservice/1812711-dispatchdigitizerevent.md): Dispatch tablet events without orientation
- [dispatchDigitizerEventWithPolarOrientation](iohideventservice/1812728-dispatchdigitizereventwithpolaro.md): Dispatch tablet events with polar orientation
- [dispatchDigitizerEventWithTiltOrientation](iohideventservice/1812735-dispatchdigitizereventwithtiltor.md): Dispatch tablet events with tilt orientation
- [dispatchMultiAxisPointerEvent](iohideventservice/1812745-dispatchmultiaxispointerevent.md): Dispatch multi-axis pointer event
- [handleClose](iohideventservice/1812757-handleclose.md): Handle a client close on the interface.
- [handleIsOpen](iohideventservice/1812770-handleisopen.md): Query whether a client has an open on the interface.
- [handleOpen](iohideventservice/1812786-handleopen.md): Handle a client open on the interface.
- [handleStart](iohideventservice/1812803-handlestart.md): Prepare the hardware and driver to support I/O operations.
- [handleStop](iohideventservice/1812816-handlestop.md): Quiesce the hardware and stop the driver.

### Instance Variables

- [\_reserved](iohideventservice/reserved.md)

### Instance Methods

- [CopyEvent](iohideventservice/3753516-copyevent.md): Deprecated.
- [CreateAction_CopyEvent](iohideventservice/3753519-createaction_copyevent.md): Deprecated.
- [CreateAction_SetLED](iohideventservice/3869767-createaction_setled.md): Deprecated.
- [CreateAction_SetUserProperties](iohideventservice/3753520-createaction_setuserproperties.md): Deprecated.
- [Dispatch](iohideventservice/3294579-dispatch.md): Deprecated.
- [EventAvailable](iohideventservice/3294592-eventavailable.md): Deprecated.
- [EventAvailable_Impl](iohideventservice/3294593-eventavailable_impl.md): Deprecated.
- [SetEventMemory](iohideventservice/3294598-seteventmemory.md): Deprecated.
- [SetEventMemory_Impl](iohideventservice/3294599-seteventmemory_impl.md): Deprecated.
- [SetLED](iohideventservice/3294601-setled.md): Deprecated.
- [SetLEDAction](iohideventservice/3869768-setledaction.md): Deprecated.
- [SetLEDState](iohideventservice/3869771-setledstate.md): Deprecated.
- [SetLEDState_Impl](iohideventservice/3869772-setledstate_impl.md): Deprecated.
- [SetLED_Impl](iohideventservice/3294602-setled_impl.md): Deprecated.
- [SetProperties_Impl](iohideventservice/3753521-setproperties_impl.md): Deprecated.
- [SetUserProperties](iohideventservice/3753522-setuserproperties.md): Deprecated.
- [Start_Impl](iohideventservice/3753525-start_impl.md): Deprecated.
- [Stop_Impl](iohideventservice/3753526-stop_impl.md): Deprecated.
- [calculateStandardType](iohideventservice/1558595-calculatestandardtype.md): Deprecated.
- [close](iohideventservice/2765595-close.md): Deprecated.
- [closeForClient](iohideventservice/2873398-closeforclient.md): Deprecated.
- [completeCopyEvent](iohideventservice/3753527-completecopyevent.md): Deprecated.
- [completeSetLED](iohideventservice/3869774-completesetled.md): Deprecated.
- [completeSetProperties](iohideventservice/3753528-completesetproperties.md): Deprecated.
- [copyEvent](iohideventservice/2765598-copyevent.md): Deprecated.
- [copyEventForClient](iohideventservice/2870306-copyeventforclient.md): Deprecated.
- [copyMatchingEvent](iohideventservice/3081666-copymatchingevent.md): Deprecated.
- [copyPropertyForClient](iohideventservice/2870303-copypropertyforclient.md): Deprecated.
- [determineResolution](iohideventservice/1558613-determineresolution.md): Deprecated.
- [dispatchAbsolutePointerEvent](iohideventservice/1558604-dispatchabsolutepointerevent.md): Deprecated.
- [dispatchBiometricEvent](iohideventservice/2824240-dispatchbiometricevent.md): Deprecated.
- [dispatchDigitizerEvent](iohideventservice/1558608-dispatchdigitizerevent.md): Deprecated.
- [dispatchDigitizerEventWithOrientation](iohideventservice/1558596-dispatchdigitizereventwithorient.md): Deprecated.
- [dispatchDigitizerEventWithPolarOrientation](iohideventservice/1558555-dispatchdigitizereventwithpolaro.md): Deprecated.
- [dispatchDigitizerEventWithTiltOrientation](iohideventservice/1558617-dispatchdigitizereventwithtiltor.md): Deprecated.
- [dispatchEvent](iohideventservice/2765586-dispatchevent.md): Deprecated. Dispatches an event.
- [dispatchExtendedGameControllerEvent](iohideventservice/2765592-dispatchextendedgamecontrollerev.md): Deprecated.
- [dispatchExtendedGameControllerEventWithOptionalBottomButtons](iohideventservice/4316297-dispatchextendedgamecontrollerev.md): Deprecated.
- [dispatchExtendedGameControllerEventWithOptionalButtons](iohideventservice/4077797-dispatchextendedgamecontrollerev.md): Deprecated.
- [dispatchExtendedGameControllerEventWithThumbstickButtons](iohideventservice/3037457-dispatchextendedgamecontrollerev.md): Deprecated.
- [dispatchKeyboardEvent](iohideventservice/1558606-dispatchkeyboardevent.md): Deprecated.
- [dispatchKeyboardEvent](iohideventservice/3603595-dispatchkeyboardevent.md): Deprecated.
- [dispatchMultiAxisPointerEvent](iohideventservice/1558594-dispatchmultiaxispointerevent.md): Deprecated.
- [dispatchRelativePointerEvent](iohideventservice/1558568-dispatchrelativepointerevent.md): Deprecated.
- [dispatchRelativePointerEventWithFixed](iohideventservice/2765608-dispatchrelativepointereventwith.md): Deprecated.
- [dispatchScrollWheelEvent](iohideventservice/1558590-dispatchscrollwheelevent.md): Deprecated.
- [dispatchScrollWheelEventWithFixed](iohideventservice/2765602-dispatchscrollwheeleventwithfixe.md): Deprecated.
- [dispatchStandardGameControllerEvent](iohideventservice/2765589-dispatchstandardgamecontrollerev.md): Deprecated.
- [dispatchTabletPointerEvent](iohideventservice/1558562-dispatchtabletpointerevent.md): Deprecated.
- [dispatchTabletProximityEvent](iohideventservice/1558586-dispatchtabletproximityevent.md): Deprecated.
- [dispatchUnicodeEvent](iohideventservice/1558582-dispatchunicodeevent.md): Deprecated.
- [free](https://developer.apple.com/documentation/hiddriverkit/iohideventservice/free)
- [getCountryCode](iohideventservice/1558585-getcountrycode.md): Deprecated.
- [getDeviceUsagePairs](iohideventservice/1558559-getdeviceusagepairs.md): Deprecated.
- [getElementValue](iohideventservice/1558578-getelementvalue.md): Deprecated.
- [getLocationID](iohideventservice/1558611-getlocationid.md): Deprecated.
- [getManufacturer](iohideventservice/1558618-getmanufacturer.md): Deprecated.
- [getMetaClass](iohideventservice/1558610-getmetaclass.md): Deprecated.
- [getPrimaryUsage](iohideventservice/2765606-getprimaryusage.md): Deprecated.
- [getPrimaryUsagePage](iohideventservice/2765591-getprimaryusagepage.md): Deprecated.
- [getProduct](iohideventservice/1558580-getproduct.md): Deprecated.
- [getProductID](iohideventservice/1558553-getproductid.md): Deprecated.
- [getReportElements](iohideventservice/1558589-getreportelements.md): Deprecated.
- [getReportInterval](iohideventservice/1558574-getreportinterval.md): Deprecated.
- [getSerialNumber](iohideventservice/1558549-getserialnumber.md): Deprecated.
- [getTransport](iohideventservice/1558583-gettransport.md): Deprecated.
- [getVendorID](iohideventservice/1558584-getvendorid.md): Deprecated.
- [getVendorIDSource](iohideventservice/1558609-getvendoridsource.md): Deprecated.
- [getVersion](iohideventservice/1558588-getversion.md): Deprecated.
- [handleClose](iohideventservice/1558561-handleclose.md): Deprecated.
- [handleCopyMatchingEvent](iohideventservice/3753529-handlecopymatchingevent.md): Deprecated.
- [handleCopyMatchingEvent_Impl](iohideventservice/3753530-handlecopymatchingevent_impl.md): Deprecated.
- [handleIsOpen](iohideventservice/1558571-handleisopen.md): Deprecated.
- [handleOpen](iohideventservice/1558591-handleopen.md): Deprecated.
- [handleStart](iohideventservice/1558579-handlestart.md): Deprecated.
- [handleStop](iohideventservice/1558563-handlestop.md): Deprecated.
- [init](iohideventservice/1558615-init.md): Deprecated.
- [isPowerButtonNmiEnabled](iohideventservice/3578268-ispowerbuttonnmienabled.md): Deprecated.
- [matchPropertyTable](iohideventservice/1558551-matchpropertytable.md): Deprecated.
- [message](iohideventservice/3075121-message.md): Deprecated.
- [multiAxisTimerCallback](iohideventservice/1558558-multiaxistimercallback.md): Deprecated.
- [newConsumerShim](iohideventservice/1558554-newconsumershim.md): Deprecated.
- [newKeyboardShim](iohideventservice/1558598-newkeyboardshim.md): Deprecated.
- [newUserClient](iohideventservice/2765583-newuserclient.md): Deprecated.
- [open](iohideventservice/2765582-open.md): Deprecated.
- [openForClient](iohideventservice/2870305-openforclient.md): Deprecated.
- [parseSupportedElements](iohideventservice/1558557-parsesupportedelements.md): Deprecated.
- [processTabletElement](iohideventservice/1558600-processtabletelement.md): Deprecated.
- [readyForReports](iohideventservice/1558607-readyforreports.md): Deprecated.
- [setElementValue](iohideventservice/1558603-setelementvalue.md): Deprecated.
- [setProperties](iohideventservice/1558565-setproperties.md): Deprecated.
- [setPropertiesForClient](iohideventservice/2870304-setpropertiesforclient.md): Deprecated.
- [setSystemProperties](iohideventservice/1558547-setsystemproperties.md): Deprecated.
- [start](iohideventservice/1558564-start.md): Deprecated.
- [stop](iohideventservice/1558597-stop.md): Deprecated.
- [supportsHeadset](iohideventservice/3019360-supportsheadset.md): Deprecated.

### Type Methods

- [CopyEvent_Invoke](iohideventservice/4520009-copyevent_invoke.md): Deprecated.
- [CopyEvent_Invoke](iohideventservice/4520010-copyevent_invoke.md): Deprecated.
- [EventAvailable_Invoke](iohideventservice/3294594-eventavailable_invoke.md): Deprecated.
- [SetEventMemory_Invoke](iohideventservice/3294600-seteventmemory_invoke.md): Deprecated.
- [SetLEDAction_Invoke](iohideventservice/4520011-setledaction_invoke.md): Deprecated.
- [SetLEDAction_Invoke](iohideventservice/4520012-setledaction_invoke.md): Deprecated.
- [SetLEDState_Invoke](iohideventservice/3869773-setledstate_invoke.md): Deprecated.
- [SetLED_Invoke](iohideventservice/3294603-setled_invoke.md): Deprecated.
- [SetUserProperties_Invoke](iohideventservice/4520013-setuserproperties_invoke.md): Deprecated.
- [SetUserProperties_Invoke](iohideventservice/4520014-setuserproperties_invoke.md): Deprecated.
- [debugActionNMI](iohideventservice/2765593-debugactionnmi.md): Deprecated.
- [debugActionSysdiagnose](iohideventservice/2765590-debugactionsysdiagnose.md): Deprecated.
- [handleCopyMatchingEvent_Invoke](iohideventservice/3753531-handlecopymatchingevent_invoke.md): Deprecated.
- [powerButtonNMI](iohideventservice/3578269-powerbuttonnmi.md): Deprecated.

## Relationships

### Inherits From

- [IOService](ioservice.md)

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
- [IOHIDInterface](iohidinterface.md): Deprecated. IOService represents an device or OS service in IOKit and DriverKit.
- [IOHIDSystem](iohidsystem.md): Deprecated.
- [IOHIKeyboardMapper](iohikeyboardmapper.md): Deprecated.
- [IOHIKeyboard](iohikeyboard.md): Deprecated.
- [IOHIPointing](iohipointing.md): Deprecated.
- [IOHIDevice](iohidevice.md): Deprecated.
- [IOHIDElement](iohidelement.md): Deprecated.
- [IOHIDWorkLoop](iohidworkloop.md): Deprecated.
- [IOEthernetInterface](ioethernetinterface.md): Deprecated. The Ethernet interface object.
- [IOEthernetController](ioethernetcontroller.md): Deprecated. Abstract superclass for Ethernet controllers.
