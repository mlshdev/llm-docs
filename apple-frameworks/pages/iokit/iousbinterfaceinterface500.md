> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousbinterfaceinterface500](https://developer.apple.com/documentation/iokit/iousbinterfaceinterface500)

# IOUSBInterfaceInterface500

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Structure  
**Availability:** Mac Catalyst 18.4+ · macOS 10.7+

## Declaration

```objectivec
typedef struct IOUSBInterfaceStruct500 {
    ...
} IOUSBInterfaceInterface500;
```

## Topics

### Instance Properties

- [AbortPipe](iousbinterfaceinterface500/1559124-abortpipe.md)
- [AddRef](iousbinterfaceinterface500/1558854-addref.md)
- [ClearPipeStall](iousbinterfaceinterface500/1559565-clearpipestall.md)
- [ClearPipeStallBothEnds](iousbinterfaceinterface500/1558754-clearpipestallbothends.md)
- [ControlRequest](iousbinterfaceinterface500/1559442-controlrequest.md)
- [ControlRequestAsync](iousbinterfaceinterface500/1559231-controlrequestasync.md)
- [ControlRequestAsyncTO](iousbinterfaceinterface500/1559536-controlrequestasyncto.md)
- [ControlRequestTO](iousbinterfaceinterface500/1558978-controlrequestto.md)
- [CreateInterfaceAsyncEventSource](iousbinterfaceinterface500/1558798-createinterfaceasynceventsource.md)
- [CreateInterfaceAsyncPort](iousbinterfaceinterface500/1559126-createinterfaceasyncport.md)
- [FindNextAltInterface](iousbinterfaceinterface500/1559670-findnextaltinterface.md)
- [FindNextAssociatedDescriptor](iousbinterfaceinterface500/1559332-findnextassociateddescriptor.md)
- [GetAlternateSetting](iousbinterfaceinterface500/1559441-getalternatesetting.md)
- [GetBandwidthAvailable](iousbinterfaceinterface500/1559766-getbandwidthavailable.md)
- [GetBusFrameNumber](iousbinterfaceinterface500/1559667-getbusframenumber.md)
- [GetBusFrameNumberWithTime](iousbinterfaceinterface500/1558878-getbusframenumberwithtime.md)
- [GetBusMicroFrameNumber](iousbinterfaceinterface500/1559094-getbusmicroframenumber.md)
- [GetConfigurationValue](iousbinterfaceinterface500/1559167-getconfigurationvalue.md)
- [GetDevice](iousbinterfaceinterface500/1559428-getdevice.md)
- [GetDeviceProduct](iousbinterfaceinterface500/1559560-getdeviceproduct.md)
- [GetDeviceReleaseNumber](iousbinterfaceinterface500/1558958-getdevicereleasenumber.md)
- [GetDeviceVendor](iousbinterfaceinterface500/1559613-getdevicevendor.md)
- [GetEndpointProperties](iousbinterfaceinterface500/1559127-getendpointproperties.md)
- [GetFrameListTime](iousbinterfaceinterface500/1559688-getframelisttime.md)
- [GetIOUSBLibVersion](iousbinterfaceinterface500/1558866-getiousblibversion.md)
- [GetInterfaceAsyncEventSource](iousbinterfaceinterface500/1559829-getinterfaceasynceventsource.md)
- [GetInterfaceAsyncPort](iousbinterfaceinterface500/1559382-getinterfaceasyncport.md)
- [GetInterfaceClass](iousbinterfaceinterface500/1559725-getinterfaceclass.md)
- [GetInterfaceNumber](iousbinterfaceinterface500/1559485-getinterfacenumber.md)
- [GetInterfaceProtocol](iousbinterfaceinterface500/1559317-getinterfaceprotocol.md)
- [GetInterfaceSubClass](iousbinterfaceinterface500/1559017-getinterfacesubclass.md)
- [GetLocationID](iousbinterfaceinterface500/1559176-getlocationid.md)
- [GetNumEndpoints](iousbinterfaceinterface500/1559068-getnumendpoints.md)
- [GetPipeProperties](iousbinterfaceinterface500/1559793-getpipeproperties.md)
- [GetPipePropertiesV2](iousbinterfaceinterface500/1559558-getpipepropertiesv2.md)
- [GetPipeStatus](iousbinterfaceinterface500/1559081-getpipestatus.md)
- [LowLatencyCreateBuffer](iousbinterfaceinterface500/1558777-lowlatencycreatebuffer.md)
- [LowLatencyDestroyBuffer](iousbinterfaceinterface500/1559649-lowlatencydestroybuffer.md)
- [LowLatencyReadIsochPipeAsync](iousbinterfaceinterface500/1559765-lowlatencyreadisochpipeasync.md)
- [LowLatencyWriteIsochPipeAsync](iousbinterfaceinterface500/1559293-lowlatencywriteisochpipeasync.md)
- [QueryInterface](iousbinterfaceinterface500/1559079-queryinterface.md)
- [ReadIsochPipeAsync](iousbinterfaceinterface500/1559730-readisochpipeasync.md)
- [ReadPipe](iousbinterfaceinterface500/1559324-readpipe.md)
- [ReadPipeAsync](iousbinterfaceinterface500/1559681-readpipeasync.md)
- [ReadPipeAsyncTO](iousbinterfaceinterface500/1559761-readpipeasyncto.md)
- [ReadPipeTO](iousbinterfaceinterface500/1559497-readpipeto.md)
- [Release](iousbinterfaceinterface500/1559019-release.md)
- [ResetPipe](iousbinterfaceinterface500/1559596-resetpipe.md)
- [SetAlternateInterface](iousbinterfaceinterface500/1558841-setalternateinterface.md)
- [SetPipePolicy](iousbinterfaceinterface500/1559463-setpipepolicy.md)
- [USBInterfaceClose](iousbinterfaceinterface500/1559543-usbinterfaceclose.md)
- [USBInterfaceGetStringIndex](iousbinterfaceinterface500/1559819-usbinterfacegetstringindex.md)
- [USBInterfaceOpen](iousbinterfaceinterface500/1559001-usbinterfaceopen.md)
- [USBInterfaceOpenSeize](iousbinterfaceinterface500/1559691-usbinterfaceopenseize.md)
- [WriteIsochPipeAsync](iousbinterfaceinterface500/1559599-writeisochpipeasync.md)
- [WritePipe](iousbinterfaceinterface500/1559803-writepipe.md)
- [WritePipeAsync](iousbinterfaceinterface500/1559105-writepipeasync.md)
- [WritePipeAsyncTO](iousbinterfaceinterface500/1559409-writepipeasyncto.md)
- [WritePipeTO](iousbinterfaceinterface500/1559039-writepipeto.md)
