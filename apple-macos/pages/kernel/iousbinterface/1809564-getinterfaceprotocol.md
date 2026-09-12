> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbinterface/1809564-getinterfaceprotocol](https://developer.apple.com/documentation/kernel/iousbinterface/1809564-getinterfaceprotocol)

# GetInterfaceProtocol

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual UInt8 GetInterfaceProtocol(); 
```

<a id="return_value"></a>

## Return Value

the interface index

<a id="overview"></a>

## Overview

returns the protocol code (assigned by the USB).

## See Also

### Miscellaneous

- [DeviceRequest(IOUSBDevRequest \*, IOUSBCompletion \*)](1809501-devicerequest.md): Sends a control request to the default control pipe in the device (pipe zero)
- [DeviceRequest(IOUSBDevRequestDesc \*, IOUSBCompletion \*)](1809505-devicerequest.md): Sends a control request to the default control pipe in the device (pipe zero)
- [EnableRemoteWake](1809508-enableremotewake.md): Will enable or disable the USB 3.0 remote wake function for the interface
- [FindNextAltInterface](1809512-findnextaltinterface.md)
- [FindNextAssociatedDescriptor](1809516-findnextassociateddescriptor.md)
- [FindNextPipe(IOUSBPipe \*, IOUSBFindEndpointRequest \*)](1809521-findnextpipe.md)
- [FindNextPipe(IOUSBPipe \*, IOUSBFindEndpointRequest \*, bool)](1809527-findnextpipe.md)
- [GetAlternateSetting](1809532-getalternatesetting.md)
- [GetConfigValue](1809537-getconfigvalue.md)
- [GetDevice](1809542-getdevice.md)
- [GetEndpointProperties](1809546-getendpointproperties.md): Returns the properties of an endpoint, possibly in an alternate interface.
- [GetEndpointPropertiesV3](1809552-getendpointpropertiesv3.md): Returns the properties of an endpoint, possibly in an alternate interface, including any information from the SuperSpeed Companion Descriptor
- [GetInterfaceClass](1809556-getinterfaceclass.md)
- [GetInterfaceNumber](1809561-getinterfacenumber.md)
- [GetInterfaceStatus](1809569-getinterfacestatus.md): Returns the result of issuing a GET_STATUS request on the device for this interface.
- [GetInterfaceStringIndex](1809572-getinterfacestringindex.md)
- [GetInterfaceSubClass](1809576-getinterfacesubclass.md)
- [GetNumEndpoints](1809584-getnumendpoints.md)
- [GetPipeObj](1809591-getpipeobj.md)
- [RecreateStreams](1809596-recreatestreams.md)
- [RememberStreams](1809603-rememberstreams.md)
- [RememberStreams.](1809609-rememberstreams.md)
- [SetAlternateInterface](1809615-setalternateinterface.md)
- [SetFunctionSuspendFeature](1809621-setfunctionsuspendfeature.md): Issues a SET_FEATURE(FUNCTION_SUSPEND) to the interface.
