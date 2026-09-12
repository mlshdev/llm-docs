> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousbinterfaceinterface550](https://developer.apple.com/documentation/iokit/iousbinterfaceinterface550)

# IOUSBInterfaceInterface550

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Structure  
**Availability:** Mac Catalyst 18.4+ · macOS 10.8+

## Declaration

```objectivec
typedef struct IOUSBInterfaceStruct550 {
    ...
} IOUSBInterfaceInterface550;
```

## Topics

### Instance Properties

- [AbortPipe](iousbinterfaceinterface550/1559748-abortpipe.md)
- [AbortStreamsPipe](iousbinterfaceinterface550/1559034-abortstreamspipe.md)
- [AddRef](iousbinterfaceinterface550/1558791-addref.md)
- [ClearPipeStall](iousbinterfaceinterface550/1559728-clearpipestall.md)
- [ClearPipeStallBothEnds](iousbinterfaceinterface550/1559623-clearpipestallbothends.md)
- [ControlRequest](iousbinterfaceinterface550/1559402-controlrequest.md)
- [ControlRequestAsync](iousbinterfaceinterface550/1559590-controlrequestasync.md)
- [ControlRequestAsyncTO](iousbinterfaceinterface550/1559022-controlrequestasyncto.md)
- [ControlRequestTO](iousbinterfaceinterface550/1559588-controlrequestto.md)
- [CreateInterfaceAsyncEventSource](iousbinterfaceinterface550/1559271-createinterfaceasynceventsource.md)
- [CreateInterfaceAsyncPort](iousbinterfaceinterface550/1559075-createinterfaceasyncport.md)
- [CreateStreams](iousbinterfaceinterface550/1559160-createstreams.md)
- [FindNextAltInterface](iousbinterfaceinterface550/1559347-findnextaltinterface.md)
- [FindNextAssociatedDescriptor](iousbinterfaceinterface550/1558914-findnextassociateddescriptor.md)
- [GetAlternateSetting](iousbinterfaceinterface550/1559100-getalternatesetting.md)
- [GetBandwidthAvailable](iousbinterfaceinterface550/1559320-getbandwidthavailable.md)
- [GetBusFrameNumber](iousbinterfaceinterface550/1559042-getbusframenumber.md)
- [GetBusFrameNumberWithTime](iousbinterfaceinterface550/1558964-getbusframenumberwithtime.md)
- [GetBusMicroFrameNumber](iousbinterfaceinterface550/1559718-getbusmicroframenumber.md)
- [GetConfigurationValue](iousbinterfaceinterface550/1559721-getconfigurationvalue.md)
- [GetConfiguredStreams](iousbinterfaceinterface550/1559788-getconfiguredstreams.md)
- [GetDevice](iousbinterfaceinterface550/1558868-getdevice.md)
- [GetDeviceProduct](iousbinterfaceinterface550/1558887-getdeviceproduct.md)
- [GetDeviceReleaseNumber](iousbinterfaceinterface550/1559480-getdevicereleasenumber.md)
- [GetDeviceVendor](iousbinterfaceinterface550/1558729-getdevicevendor.md)
- [GetEndpointProperties](iousbinterfaceinterface550/1559069-getendpointproperties.md)
- [GetEndpointPropertiesV3](iousbinterfaceinterface550/1559815-getendpointpropertiesv3.md)
- [GetFrameListTime](iousbinterfaceinterface550/1558723-getframelisttime.md)
- [GetIOUSBLibVersion](iousbinterfaceinterface550/1559266-getiousblibversion.md)
- [GetInterfaceAsyncEventSource](iousbinterfaceinterface550/1559467-getinterfaceasynceventsource.md)
- [GetInterfaceAsyncPort](iousbinterfaceinterface550/1558793-getinterfaceasyncport.md)
- [GetInterfaceClass](iousbinterfaceinterface550/1559521-getinterfaceclass.md)
- [GetInterfaceNumber](iousbinterfaceinterface550/1559656-getinterfacenumber.md)
- [GetInterfaceProtocol](iousbinterfaceinterface550/1558787-getinterfaceprotocol.md)
- [GetInterfaceSubClass](iousbinterfaceinterface550/1559505-getinterfacesubclass.md)
- [GetLocationID](iousbinterfaceinterface550/1559809-getlocationid.md)
- [GetNumEndpoints](iousbinterfaceinterface550/1559300-getnumendpoints.md)
- [GetPipeProperties](iousbinterfaceinterface550/1559276-getpipeproperties.md)
- [GetPipePropertiesV2](iousbinterfaceinterface550/1559342-getpipepropertiesv2.md)
- [GetPipePropertiesV3](iousbinterfaceinterface550/1559364-getpipepropertiesv3.md)
- [GetPipeStatus](iousbinterfaceinterface550/1559011-getpipestatus.md)
- [LowLatencyCreateBuffer](iousbinterfaceinterface550/1559555-lowlatencycreatebuffer.md)
- [LowLatencyDestroyBuffer](iousbinterfaceinterface550/1559642-lowlatencydestroybuffer.md)
- [LowLatencyReadIsochPipeAsync](iousbinterfaceinterface550/1558767-lowlatencyreadisochpipeasync.md)
- [LowLatencyWriteIsochPipeAsync](iousbinterfaceinterface550/1559153-lowlatencywriteisochpipeasync.md)
- [QueryInterface](iousbinterfaceinterface550/1559150-queryinterface.md)
- [ReadIsochPipeAsync](iousbinterfaceinterface550/1559369-readisochpipeasync.md)
- [ReadPipe](iousbinterfaceinterface550/1559066-readpipe.md)
- [ReadPipeAsync](iousbinterfaceinterface550/1558938-readpipeasync.md)
- [ReadPipeAsyncTO](iousbinterfaceinterface550/1559031-readpipeasyncto.md)
- [ReadPipeTO](iousbinterfaceinterface550/1559318-readpipeto.md)
- [ReadStreamsPipeAsyncTO](iousbinterfaceinterface550/1559478-readstreamspipeasyncto.md)
- [ReadStreamsPipeTO](iousbinterfaceinterface550/1559740-readstreamspipeto.md)
- [Release](iousbinterfaceinterface550/1559593-release.md)
- [ResetPipe](iousbinterfaceinterface550/1559312-resetpipe.md)
- [SetAlternateInterface](iousbinterfaceinterface550/1559778-setalternateinterface.md)
- [SetPipePolicy](iousbinterfaceinterface550/1559285-setpipepolicy.md)
- [SupportsStreams](iousbinterfaceinterface550/1559366-supportsstreams.md)
- [USBInterfaceClose](iousbinterfaceinterface550/1559399-usbinterfaceclose.md)
- [USBInterfaceGetStringIndex](iousbinterfaceinterface550/1559692-usbinterfacegetstringindex.md)
- [USBInterfaceOpen](iousbinterfaceinterface550/1558905-usbinterfaceopen.md)
- [USBInterfaceOpenSeize](iousbinterfaceinterface550/1559731-usbinterfaceopenseize.md)
- [WriteIsochPipeAsync](iousbinterfaceinterface550/1559614-writeisochpipeasync.md)
- [WritePipe](iousbinterfaceinterface550/1559475-writepipe.md)
- [WritePipeAsync](iousbinterfaceinterface550/1559494-writepipeasync.md)
- [WritePipeAsyncTO](iousbinterfaceinterface550/1559263-writepipeasyncto.md)
- [WritePipeTO](iousbinterfaceinterface550/1558950-writepipeto.md)
- [WriteStreamsPipeAsyncTO](iousbinterfaceinterface550/1559025-writestreamspipeasyncto.md)
- [WriteStreamsPipeTO](iousbinterfaceinterface550/1559562-writestreamspipeto.md)
