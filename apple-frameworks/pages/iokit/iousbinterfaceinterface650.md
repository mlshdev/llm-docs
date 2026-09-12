> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousbinterfaceinterface650](https://developer.apple.com/documentation/iokit/iousbinterfaceinterface650)

# IOUSBInterfaceInterface650

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Structure  
**Availability:** Mac Catalyst 18.4+ · macOS 10.9+

## Declaration

```objectivec
typedef struct IOUSBInterfaceStruct650 {
    ...
} IOUSBInterfaceInterface650;
```

## Topics

### Instance Properties

- [AbortPipe](iousbinterfaceinterface650/1559196-abortpipe.md)
- [AbortStreamsPipe](iousbinterfaceinterface650/1558820-abortstreamspipe.md)
- [AcknowledgeNotification](iousbinterfaceinterface650/1559274-acknowledgenotification.md)
- [AddRef](iousbinterfaceinterface650/1558951-addref.md)
- [ClearPipeStall](iousbinterfaceinterface650/1559786-clearpipestall.md)
- [ClearPipeStallBothEnds](iousbinterfaceinterface650/1558927-clearpipestallbothends.md)
- [ControlRequest](iousbinterfaceinterface650/1558742-controlrequest.md)
- [ControlRequestAsync](iousbinterfaceinterface650/1558846-controlrequestasync.md)
- [ControlRequestAsyncTO](iousbinterfaceinterface650/1559742-controlrequestasyncto.md)
- [ControlRequestTO](iousbinterfaceinterface650/1559401-controlrequestto.md)
- [CreateInterfaceAsyncEventSource](iousbinterfaceinterface650/1558885-createinterfaceasynceventsource.md)
- [CreateInterfaceAsyncPort](iousbinterfaceinterface650/1558763-createinterfaceasyncport.md)
- [CreateStreams](iousbinterfaceinterface650/1559695-createstreams.md)
- [FindNextAltInterface](iousbinterfaceinterface650/1559092-findnextaltinterface.md)
- [FindNextAssociatedDescriptor](iousbinterfaceinterface650/1559041-findnextassociateddescriptor.md)
- [GetAlternateSetting](iousbinterfaceinterface650/1558814-getalternatesetting.md)
- [GetBandwidthAvailable](iousbinterfaceinterface650/1559351-getbandwidthavailable.md)
- [GetBusFrameNumber](iousbinterfaceinterface650/1559170-getbusframenumber.md)
- [GetBusFrameNumberWithTime](iousbinterfaceinterface650/1559563-getbusframenumberwithtime.md)
- [GetBusMicroFrameNumber](iousbinterfaceinterface650/1559071-getbusmicroframenumber.md)
- [GetConfigurationValue](iousbinterfaceinterface650/1559349-getconfigurationvalue.md)
- [GetConfiguredStreams](iousbinterfaceinterface650/1559813-getconfiguredstreams.md)
- [GetDevice](iousbinterfaceinterface650/1558929-getdevice.md)
- [GetDeviceProduct](iousbinterfaceinterface650/1559329-getdeviceproduct.md)
- [GetDeviceReleaseNumber](iousbinterfaceinterface650/1559114-getdevicereleasenumber.md)
- [GetDeviceVendor](iousbinterfaceinterface650/1559774-getdevicevendor.md)
- [GetEndpointProperties](iousbinterfaceinterface650/1559112-getendpointproperties.md)
- [GetEndpointPropertiesV3](iousbinterfaceinterface650/1558842-getendpointpropertiesv3.md)
- [GetFrameListTime](iousbinterfaceinterface650/1559711-getframelisttime.md)
- [GetIOUSBLibVersion](iousbinterfaceinterface650/1559451-getiousblibversion.md)
- [GetInterfaceAsyncEventSource](iousbinterfaceinterface650/1558941-getinterfaceasynceventsource.md)
- [GetInterfaceAsyncPort](iousbinterfaceinterface650/1558961-getinterfaceasyncport.md)
- [GetInterfaceClass](iousbinterfaceinterface650/1559254-getinterfaceclass.md)
- [GetInterfaceNumber](iousbinterfaceinterface650/1558944-getinterfacenumber.md)
- [GetInterfaceProtocol](iousbinterfaceinterface650/1559583-getinterfaceprotocol.md)
- [GetInterfaceSubClass](iousbinterfaceinterface650/1558732-getinterfacesubclass.md)
- [GetLocationID](iousbinterfaceinterface650/1559447-getlocationid.md)
- [GetNumEndpoints](iousbinterfaceinterface650/1559426-getnumendpoints.md)
- [GetPipeProperties](iousbinterfaceinterface650/1558827-getpipeproperties.md)
- [GetPipePropertiesV2](iousbinterfaceinterface650/1559044-getpipepropertiesv2.md)
- [GetPipePropertiesV3](iousbinterfaceinterface650/1558898-getpipepropertiesv3.md)
- [GetPipeStatus](iousbinterfaceinterface650/1558731-getpipestatus.md)
- [LowLatencyCreateBuffer](iousbinterfaceinterface650/1559607-lowlatencycreatebuffer.md)
- [LowLatencyDestroyBuffer](iousbinterfaceinterface650/1559143-lowlatencydestroybuffer.md)
- [LowLatencyReadIsochPipeAsync](iousbinterfaceinterface650/1559213-lowlatencyreadisochpipeasync.md)
- [LowLatencyWriteIsochPipeAsync](iousbinterfaceinterface650/1558760-lowlatencywriteisochpipeasync.md)
- [QueryInterface](iousbinterfaceinterface650/1559714-queryinterface.md)
- [ReadIsochPipeAsync](iousbinterfaceinterface650/1559612-readisochpipeasync.md)
- [ReadPipe](iousbinterfaceinterface650/1559159-readpipe.md)
- [ReadPipeAsync](iousbinterfaceinterface650/1558813-readpipeasync.md)
- [ReadPipeAsyncTO](iousbinterfaceinterface650/1559798-readpipeasyncto.md)
- [ReadPipeTO](iousbinterfaceinterface650/1559184-readpipeto.md)
- [ReadStreamsPipeAsyncTO](iousbinterfaceinterface650/1559762-readstreamspipeasyncto.md)
- [ReadStreamsPipeTO](iousbinterfaceinterface650/1558940-readstreamspipeto.md)
- [RegisterForNotification](iousbinterfaceinterface650/1559434-registerfornotification.md)
- [Release](iousbinterfaceinterface650/1558976-release.md)
- [ResetPipe](iousbinterfaceinterface650/1559225-resetpipe.md)
- [SetAlternateInterface](iousbinterfaceinterface650/1558937-setalternateinterface.md)
- [SetPipePolicy](iousbinterfaceinterface650/1559228-setpipepolicy.md)
- [SupportsStreams](iousbinterfaceinterface650/1559356-supportsstreams.md)
- [USBInterfaceClose](iousbinterfaceinterface650/1559772-usbinterfaceclose.md)
- [USBInterfaceGetStringIndex](iousbinterfaceinterface650/1559306-usbinterfacegetstringindex.md)
- [USBInterfaceOpen](iousbinterfaceinterface650/1559115-usbinterfaceopen.md)
- [USBInterfaceOpenSeize](iousbinterfaceinterface650/1559578-usbinterfaceopenseize.md)
- [UnregisterNotification](iousbinterfaceinterface650/1559455-unregisternotification.md)
- [WriteIsochPipeAsync](iousbinterfaceinterface650/1558994-writeisochpipeasync.md)
- [WritePipe](iousbinterfaceinterface650/1558824-writepipe.md)
- [WritePipeAsync](iousbinterfaceinterface650/1559595-writepipeasync.md)
- [WritePipeAsyncTO](iousbinterfaceinterface650/1559007-writepipeasyncto.md)
- [WritePipeTO](iousbinterfaceinterface650/1559735-writepipeto.md)
- [WriteStreamsPipeAsyncTO](iousbinterfaceinterface650/1559502-writestreamspipeasyncto.md)
- [WriteStreamsPipeTO](iousbinterfaceinterface650/1559797-writestreamspipeto.md)
