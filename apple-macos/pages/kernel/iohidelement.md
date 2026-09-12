> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iohidelement](https://developer.apple.com/documentation/kernel/iohidelement)

# IOHIDElement

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Class  
**Availability:** macOS 10.4+ (deprecated in 10.15.1)

## Declaration

```objectivec
class IOHIDElement : OSCollection
```

## Topics

### Instance Methods

- [conformsTo](https://developer.apple.com/documentation/hiddriverkit/iohidelement/conformsto)
- [getChildElements](https://developer.apple.com/documentation/hiddriverkit/iohidelement/getchildelements)
- [getCollectionType](https://developer.apple.com/documentation/hiddriverkit/iohidelement/getcollectiontype)
- [getCookie](https://developer.apple.com/documentation/hiddriverkit/iohidelement/getcookie)
- [getDataValue](iohidelement/1426875-getdatavalue.md): Deprecated.
- [getDataValue](https://developer.apple.com/documentation/hiddriverkit/iohidelement/getdatavalue): Gets the data value.
- [getFlags](https://developer.apple.com/documentation/hiddriverkit/iohidelement/getflags)
- [getLogicalMax](https://developer.apple.com/documentation/hiddriverkit/iohidelement/getlogicalmax)
- [getLogicalMin](https://developer.apple.com/documentation/hiddriverkit/iohidelement/getlogicalmin)
- [getMetaClass](iohidelement/1426853-getmetaclass.md): Deprecated.
- [getParentElement](https://developer.apple.com/documentation/hiddriverkit/iohidelement/getparentelement)
- [getPhysicalMax](https://developer.apple.com/documentation/hiddriverkit/iohidelement/getphysicalmax)
- [getPhysicalMin](https://developer.apple.com/documentation/hiddriverkit/iohidelement/getphysicalmin)
- [getReportCount](https://developer.apple.com/documentation/hiddriverkit/iohidelement/getreportcount)
- [getReportID](https://developer.apple.com/documentation/hiddriverkit/iohidelement/getreportid)
- [getReportSize](https://developer.apple.com/documentation/hiddriverkit/iohidelement/getreportsize)
- [getReportType](iohidelement/4077796-getreporttype.md): Deprecated.
- [getScaledFixedValue](https://developer.apple.com/documentation/hiddriverkit/iohidelement/getscaledfixedvalue): Returns a fixed number that represents the scaled version of the element’s logical value.
- [getScaledFixedValue](iohidelement/3516592-getscaledfixedvalue.md): Deprecated.
- [getScaledValue](https://developer.apple.com/documentation/hiddriverkit/iohidelement/getscaledvalue): Returns a scaled version of the logical value.
- [getTimeStamp](https://developer.apple.com/documentation/hiddriverkit/iohidelement/gettimestamp)
- [getType](https://developer.apple.com/documentation/hiddriverkit/iohidelement/gettype)
- [getUnit](https://developer.apple.com/documentation/hiddriverkit/iohidelement/getunit): Returns the units that you use to interpret the element’s value.
- [getUnitExponent](https://developer.apple.com/documentation/hiddriverkit/iohidelement/getunitexponent): Returns the exponent that you use to interpret the element’s value.
- [getUsage](https://developer.apple.com/documentation/hiddriverkit/iohidelement/getusage)
- [getUsagePage](https://developer.apple.com/documentation/hiddriverkit/iohidelement/getusagepage)
- [getValue](iohidelement/1426860-getvalue.md): Deprecated.
- [getValue](https://developer.apple.com/documentation/hiddriverkit/iohidelement/getvalue): Gets the logical value that the device reported.
- [isVariableSize](iohidelement/2870278-isvariablesize.md): Deprecated.
- [setCalibration](iohidelement/1426877-setcalibration.md): Deprecated.
- [setDataValue](https://developer.apple.com/documentation/hiddriverkit/iohidelement/setdatavalue): Sets the data value of the element.
- [setValue](https://developer.apple.com/documentation/hiddriverkit/iohidelement/setvalue): Sets the value of the element.
- [setValue](iohidelement/3656574-setvalue.md): Deprecated.

## Relationships

### Inherits From

- [OSCollection](oscollection.md)

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
- [IOHIDWorkLoop](iohidworkloop.md): Deprecated.
- [IOEthernetInterface](ioethernetinterface.md): Deprecated. The Ethernet interface object.
- [IOEthernetController](ioethernetcontroller.md): Deprecated. Abstract superclass for Ethernet controllers.
