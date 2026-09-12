> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohidinterface](https://developer.apple.com/documentation/kernel/iohidinterface)

# IOHIDInterface

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.15.2)

IOService represents an device or OS service in IOKit and DriverKit.

## Declaration

```objectivec
class IOHIDInterface : IOService
```

<a id="overview"></a>

## Overview

IOKit provides driver lifecycle management through the IOService APIs.  Drivers and devices are represented as subclasses of IOService.

## Topics

### Miscellaneous

- [free](iohidinterface/1812725-free.md): Free the IOHIDInterface object.
- [init](iohidinterface/1812739-init.md): Initialize an IOHIDInterface object.
- [matchPropertyTable](iohidinterface/1812756-matchpropertytable.md): Called by the provider during a match
- [start](iohidinterface/1812781-start.md): Start up the driver using the given provider.

### Callbacks

- [CompletionAction](iohidinterface/completionaction.md)
- [InterruptReportAction](iohidinterface/interruptreportaction.md): Callback to handle an asynchronous report received from the HID device.
- [IOHIDInterface::CompletionAction](iohidinterface/iohidinterface_completionaction.md)
- [IOHIDInterface::InterruptReportAction](iohidinterface/iohidinterface_interruptreportaction.md): Callback to handle an asynchronous report received from the HID device.

### Instance Variables

- [\_reserved](iohidinterface/reserved.md)

### Instance Methods

- [AddReportToPool](iohidinterface/3294546-addreporttopool.md): Deprecated.
- [AddReportToPool_Impl](iohidinterface/3294547-addreporttopool_impl.md): Deprecated.
- [Close](iohidinterface/3294549-close.md): Deprecated.
- [Close_Impl](iohidinterface/3294550-close_impl.md): Deprecated.
- [Dispatch](iohidinterface/3294552-dispatch.md): Deprecated.
- [GetElementValues](iohidinterface/3294553-getelementvalues.md): Deprecated.
- [GetElementValues_Impl](iohidinterface/3294554-getelementvalues_impl.md): Deprecated.
- [GetReport](iohidinterface/3294556-getreport.md): Deprecated.
- [GetReport_Impl](iohidinterface/3294557-getreport_impl.md): Deprecated.
- [GetSupportedCookies](iohidinterface/3294559-getsupportedcookies.md): Deprecated.
- [GetSupportedCookies_Impl](iohidinterface/3294560-getsupportedcookies_impl.md): Deprecated.
- [HandleReportPrivate](iohidinterface/3294562-handlereportprivate.md): Deprecated.
- [Open](iohidinterface/3294563-open.md): Deprecated.
- [Open_Impl](iohidinterface/3294564-open_impl.md): Deprecated.
- [ReportAvailable](iohidinterface/3294566-reportavailable.md): Deprecated.
- [SendDebugBuffer](iohidinterface/3787569-senddebugbuffer.md): Deprecated.
- [SendDebugBuffer_Impl](iohidinterface/3787570-senddebugbuffer_impl.md): Deprecated.
- [SetElementValues](iohidinterface/3294568-setelementvalues.md): Deprecated.
- [SetElementValues_Impl](iohidinterface/3294569-setelementvalues_impl.md): Deprecated.
- [SetReport](iohidinterface/3294571-setreport.md): Deprecated.
- [SetReport_Impl](iohidinterface/3294572-setreport_impl.md): Deprecated.
- [addReportToPoolGated](iohidinterface/3294574-addreporttopoolgated.md): Deprecated.
- [close](iohidinterface/1545711-close.md): Deprecated.
- [createElements](iohidinterface/3294576-createelements.md): Deprecated.
- [createMatchingElements](iohidinterface/1545731-creatematchingelements.md): Deprecated.
- [free](https://developer.apple.com/documentation/hiddriverkit/iohidinterface/free)
- [getCountryCode](iohidinterface/1545717-getcountrycode.md): Deprecated.
- [getLocationID](iohidinterface/1545716-getlocationid.md): Deprecated.
- [getManufacturer](iohidinterface/1545718-getmanufacturer.md): Deprecated.
- [getMaxReportSize](iohidinterface/1545712-getmaxreportsize.md): Deprecated.
- [getMetaClass](iohidinterface/1545732-getmetaclass.md): Deprecated.
- [getProduct](iohidinterface/1545707-getproduct.md): Deprecated.
- [getProductID](iohidinterface/1545701-getproductid.md): Deprecated.
- [getReport](iohidinterface/1545729-getreport.md): Deprecated.
- [getReport](iohidinterface/3516593-getreport.md): Deprecated.
- [getReportInterval](iohidinterface/1545710-getreportinterval.md): Deprecated.
- [getSerialNumber](iohidinterface/1545720-getserialnumber.md): Deprecated.
- [getTransport](iohidinterface/1545700-gettransport.md): Deprecated.
- [getVendorID](iohidinterface/1545713-getvendorid.md): Deprecated.
- [getVendorIDSource](iohidinterface/1545703-getvendoridsource.md): Deprecated.
- [getVersion](iohidinterface/1545705-getversion.md): Deprecated.
- [handleReport](iohidinterface/1545706-handlereport.md): Deprecated.
- [handleReportGated](iohidinterface/3294577-handlereportgated.md): Deprecated.
- [init](iohidinterface/1545733-init.md): Deprecated. Initializes IOHIDInterface object.
- [matchPropertyTable](iohidinterface/1545727-matchpropertytable.md): Deprecated.
- [message](iohidinterface/1545719-message.md): Deprecated.
- [open](iohidinterface/1545722-open.md): Deprecated.
- [openGated](iohidinterface/3294578-opengated.md): Deprecated.
- [serializeDebugState](iohidinterface/3787572-serializedebugstate.md): Deprecated.
- [setProperty](iohidinterface/3516594-setproperty.md): Deprecated.
- [setReport](iohidinterface/1545724-setreport.md): Deprecated.
- [setReport](iohidinterface/3516595-setreport.md): Deprecated.
- [start](iohidinterface/1545702-start.md): Deprecated.
- [stop](iohidinterface/1545726-stop.md): Deprecated.

### Type Methods

- [AddReportToPool_Invoke](iohidinterface/3294548-addreporttopool_invoke.md): Deprecated.
- [Close_Invoke](iohidinterface/3294551-close_invoke.md): Deprecated.
- [GetElementValues_Invoke](iohidinterface/3294555-getelementvalues_invoke.md): Deprecated.
- [GetReport_Invoke](iohidinterface/3294558-getreport_invoke.md): Deprecated.
- [GetSupportedCookies_Invoke](iohidinterface/3294561-getsupportedcookies_invoke.md): Deprecated.
- [Open_Invoke](iohidinterface/3294565-open_invoke.md): Deprecated.
- [ReportAvailable_Invoke](iohidinterface/4520007-reportavailable_invoke.md): Deprecated.
- [ReportAvailable_Invoke](iohidinterface/4520008-reportavailable_invoke.md): Deprecated.
- [SendDebugBuffer_Invoke](iohidinterface/3787571-senddebugbuffer_invoke.md): Deprecated.
- [SetElementValues_Invoke](iohidinterface/3294570-setelementvalues_invoke.md): Deprecated.
- [SetReport_Invoke](iohidinterface/3294573-setreport_invoke.md): Deprecated.
- [withElements](iohidinterface/1545728-withelements.md): Deprecated.

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
- [IOHIDEventService](iohideventservice.md): Deprecated. IOService represents an device or OS service in IOKit and DriverKit.
- [IOHIDSystem](iohidsystem.md): Deprecated.
- [IOHIKeyboardMapper](iohikeyboardmapper.md): Deprecated.
- [IOHIKeyboard](iohikeyboard.md): Deprecated.
- [IOHIPointing](iohipointing.md): Deprecated.
- [IOHIDevice](iohidevice.md): Deprecated.
- [IOHIDElement](iohidelement.md): Deprecated.
- [IOHIDWorkLoop](iohidworkloop.md): Deprecated.
- [IOEthernetInterface](ioethernetinterface.md): Deprecated. The Ethernet interface object.
- [IOEthernetController](ioethernetcontroller.md): Deprecated. Abstract superclass for Ethernet controllers.
