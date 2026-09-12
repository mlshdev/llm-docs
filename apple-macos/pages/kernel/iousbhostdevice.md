> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostdevice](https://developer.apple.com/documentation/kernel/iousbhostdevice)

# IOUSBHostDevice

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Class  
**Availability:** macOS 10.11+ (deprecated in 10.15.4)

## Declaration

```objectivec
class IOUSBHostDevice : IOUSBDevice
```

## Topics

### Instance Methods

- [AbortDeviceRequests](iousbhostdevice/3294604-abortdevicerequests.md): Deprecated.
- [AbortDeviceRequests_Impl](iousbhostdevice/3294605-abortdevicerequests_impl.md): Deprecated.
- [AsyncDeviceRequest](iousbhostdevice/3294607-asyncdevicerequest.md): Deprecated.
- [AsyncDeviceRequest_Impl](iousbhostdevice/3294608-asyncdevicerequest_impl.md): Deprecated.
- [Close](iousbhostdevice/3294610-close.md): Deprecated.
- [Close_Impl](iousbhostdevice/3294611-close_impl.md): Deprecated.
- [CompleteAsyncDeviceRequest](iousbhostdevice/3294613-completeasyncdevicerequest.md): Deprecated.
- [CopyInterface](iousbhostdevice/3294615-copyinterface.md): Deprecated.
- [CopyInterface_Impl](iousbhostdevice/3294616-copyinterface_impl.md): Deprecated.
- [CreateIOBuffer](iousbhostdevice/3294618-createiobuffer.md): Deprecated.
- [CreateIOBuffer_Impl](iousbhostdevice/3294619-createiobuffer_impl.md): Deprecated.
- [CreateInterfaceIterator](iousbhostdevice/3294621-createinterfaceiterator.md): Deprecated.
- [CreateInterfaceIterator_Impl](iousbhostdevice/3294622-createinterfaceiterator_impl.md): Deprecated.
- [DestroyInterfaceIterator](iousbhostdevice/3294624-destroyinterfaceiterator.md): Deprecated.
- [DestroyInterfaceIterator_Impl](iousbhostdevice/3294625-destroyinterfaceiterator_impl.md): Deprecated.
- [DeviceRequest](iousbhostdevice/3294627-devicerequest.md): Deprecated.
- [DeviceRequest_Impl](iousbhostdevice/3294628-devicerequest_impl.md): Deprecated.
- [Dispatch](iousbhostdevice/3294630-dispatch.md): Deprecated.
- [GetAddress](iousbhostdevice/3294631-getaddress.md): Deprecated.
- [GetAddress_Impl](iousbhostdevice/3294632-getaddress_impl.md): Deprecated.
- [GetFrameNumber](iousbhostdevice/3438056-getframenumber.md): Deprecated.
- [GetFrameNumber_Impl](iousbhostdevice/3294634-getframenumber_impl.md): Deprecated.
- [GetPortStatus](iousbhostdevice/3294636-getportstatus.md): Deprecated.
- [GetPortStatus_Impl](iousbhostdevice/3294637-getportstatus_impl.md): Deprecated.
- [GetSpeed](iousbhostdevice/3294639-getspeed.md): Deprecated.
- [GetSpeed_Impl](iousbhostdevice/3294640-getspeed_impl.md): Deprecated.
- [Open](iousbhostdevice/3294642-open.md): Deprecated.
- [Open_Impl](iousbhostdevice/3294643-open_impl.md): Deprecated.
- [PMstop](iousbhostdevice/1543395-pmstop.md): Deprecated.
- [Reset](iousbhostdevice/3294645-reset.md): Deprecated.
- [Reset_Impl](iousbhostdevice/3294646-reset_impl.md): Deprecated.
- [SetConfiguration](iousbhostdevice/3294648-setconfiguration.md): Deprecated.
- [SetConfiguration_Impl](iousbhostdevice/3294649-setconfiguration_impl.md): Deprecated.
- [abortDeviceRequests](iousbhostdevice/1543435-abortdevicerequests.md): Deprecated.
- [abortDeviceRequestsGated](iousbhostdevice/1543480-abortdevicerequestsgated.md): Deprecated.
- [addPowerChild](iousbhostdevice/1543386-addpowerchild.md): Deprecated.
- [addPowerChildGated](iousbhostdevice/1543401-addpowerchildgated.md): Deprecated.
- [addPowerChildThreadCall](iousbhostdevice/1543437-addpowerchildthreadcall.md): Deprecated.
- [allocateDownstreamBusCurrent](iousbhostdevice/1543454-allocatedownstreambuscurrent.md): Deprecated.
- [allocateDownstreamBusCurrentGated](iousbhostdevice/1543464-allocatedownstreambuscurrentgate.md): Deprecated.
- [attach](iousbhostdevice/1543469-attach.md): Deprecated.
- [cacheDescriptor](iousbhostdevice/1543430-cachedescriptor.md): Deprecated.
- [cacheDescriptorGated](iousbhostdevice/1543463-cachedescriptorgated.md): Deprecated.
- [close](iousbhostdevice/1543377-close.md): Deprecated.
- [closeGated](iousbhostdevice/1543449-closegated.md): Deprecated.
- [compareProperty](iousbhostdevice/1543452-compareproperty.md): Deprecated.
- [compareProperty](iousbhostdevice/3516784-compareproperty.md): Deprecated.
- [createIOBuffer](iousbhostdevice/1543494-createiobuffer.md): Deprecated.
- [createPipe](iousbhostdevice/1543407-createpipe.md): Deprecated.
- [createPipeGated](iousbhostdevice/1543411-createpipegated.md): Deprecated.
- [deviceRequest](iousbhostdevice/1543421-devicerequest.md): Deprecated.
- [deviceRequest](iousbhostdevice/3516785-devicerequest.md): Deprecated.
- [deviceRequest](iousbhostdevice/3516786-devicerequest.md): Deprecated.
- [deviceRequest](iousbhostdevice/3516787-devicerequest.md): Deprecated.
- [deviceRequest](iousbhostdevice/3516788-devicerequest.md): Deprecated.
- [forcePower](iousbhostdevice/1543397-forcepower.md): Deprecated.
- [forcePowerGated](iousbhostdevice/1543393-forcepowergated.md): Deprecated.
- [free](iousbhostdevice/1543478-free.md): Deprecated.
- [getAddress](iousbhostdevice/1543403-getaddress.md): Deprecated.
- [getCapabilityDescriptors](iousbhostdevice/1543412-getcapabilitydescriptors.md): Deprecated.
- [getConfigurationDescriptor](iousbhostdevice/1543384-getconfigurationdescriptor.md): Deprecated.
- [getConfigurationDescriptor](iousbhostdevice/3516789-getconfigurationdescriptor.md): Deprecated.
- [getConfigurationDescriptorWithValue](iousbhostdevice/1543459-getconfigurationdescriptorwithva.md): Deprecated.
- [getDescriptor](iousbhostdevice/1543445-getdescriptor.md): Deprecated.
- [getDescriptorGated](iousbhostdevice/1543448-getdescriptorgated.md): Deprecated.
- [getDeviceDescriptor](iousbhostdevice/1543418-getdevicedescriptor.md): Deprecated.
- [getFrameNumber](iousbhostdevice/1543486-getframenumber.md): Deprecated.
- [getLPMExitLatency](iousbhostdevice/2880436-getlpmexitlatency.md): Deprecated.
- [getLPMExitLatencyGated](iousbhostdevice/2880438-getlpmexitlatencygated.md): Deprecated.
- [getMetaClass](iousbhostdevice/1543468-getmetaclass.md): Deprecated.
- [getPortStatus](iousbhostdevice/1543383-getportstatus.md): Deprecated.
- [getSpeed](iousbhostdevice/1543433-getspeed.md): Deprecated.
- [getStringDescriptor](iousbhostdevice/1543434-getstringdescriptor.md): Deprecated.
- [handleClose](iousbhostdevice/1543381-handleclose.md): Deprecated.
- [handleIsOpen](iousbhostdevice/1543487-handleisopen.md): Deprecated.
- [handleOpen](iousbhostdevice/1543423-handleopen.md): Deprecated.
- [idleAssertion](iousbhostdevice/1543405-idleassertion.md): Deprecated.
- [initWithController](iousbhostdevice/1543488-initwithcontroller.md): Deprecated.
- [initialPowerStateForDomainState](iousbhostdevice/1543424-initialpowerstatefordomainstate.md): Deprecated.
- [internalDeviceRequest](iousbhostdevice/1543490-internaldevicerequest.md): Deprecated.
- [internalDeviceRequestGated](iousbhostdevice/1543391-internaldevicerequestgated.md): Deprecated.
- [matchPropertyTable](iousbhostdevice/1543439-matchpropertytable.md): Deprecated.
- [matchPropertyTable](iousbhostdevice/3516790-matchpropertytable.md): Deprecated.
- [message](iousbhostdevice/1543402-message.md): Deprecated.
- [newUserClient](iousbhostdevice/3294652-newuserclient.md): Deprecated.
- [open](iousbhostdevice/1543427-open.md): Deprecated.
- [openGated](iousbhostdevice/1543473-opengated.md): Deprecated.
- [pmStopThreadCall](iousbhostdevice/1543428-pmstopthreadcall.md): Deprecated.
- [powerChangeDone](iousbhostdevice/1543491-powerchangedone.md): Deprecated.
- [powerStateDidChangeTo](iousbhostdevice/1543476-powerstatedidchangeto.md): Deprecated.
- [powerStateDidChangeToGated](iousbhostdevice/1543420-powerstatedidchangetogated.md): Deprecated.
- [powerStateWillChangeTo](iousbhostdevice/1543453-powerstatewillchangeto.md): Deprecated.
- [powerStateWillChangeToGated](iousbhostdevice/1543447-powerstatewillchangetogated.md): Deprecated.
- [registerPowerService](iousbhostdevice/1543417-registerpowerservice.md): Deprecated.
- [removePowerChild](iousbhostdevice/1543406-removepowerchild.md): Deprecated.
- [reset](iousbhostdevice/1543415-reset.md): Deprecated.
- [setConfiguration](iousbhostdevice/1543493-setconfiguration.md): Deprecated.
- [setConfigurationGated](iousbhostdevice/1543399-setconfigurationgated.md): Deprecated.
- [setPowerState](iousbhostdevice/1543458-setpowerstate.md): Deprecated.
- [setPowerStateGated](iousbhostdevice/1543461-setpowerstategated.md): Deprecated.
- [setProperties](iousbhostdevice/1644644-setproperties.md): Deprecated.
- [setProperty](iousbhostdevice/1644643-setproperty.md): Deprecated.
- [setProperty](iousbhostdevice/3516791-setproperty.md): Deprecated.
- [setProperty](iousbhostdevice/3516792-setproperty.md): Deprecated.
- [setProperty](iousbhostdevice/3516793-setproperty.md): Deprecated.
- [setProperty](iousbhostdevice/3516794-setproperty.md): Deprecated.
- [setProperty](iousbhostdevice/3516795-setproperty.md): Deprecated.
- [setProperty](iousbhostdevice/3516796-setproperty.md): Deprecated.
- [start](iousbhostdevice/1543387-start.md): Deprecated.
- [stop](iousbhostdevice/1543466-stop.md): Deprecated.
- [stringFromReturn](iousbhostdevice/1543456-stringfromreturn.md): Deprecated.
- [terminate](iousbhostdevice/1543379-terminate.md): Deprecated.
- [terminateGated](iousbhostdevice/1543495-terminategated.md): Deprecated.
- [updateIdlePolicy](iousbhostdevice/1543409-updateidlepolicy.md): Deprecated.
- [updateIdlePolicyAsync](iousbhostdevice/1543483-updateidlepolicyasync.md): Deprecated.
- [updateIdlePolicyGated](iousbhostdevice/1543441-updateidlepolicygated.md): Deprecated.
- [updateLPMPolicyGated](iousbhostdevice/2880437-updatelpmpolicygated.md): Deprecated.

### Type Methods

- [AbortDeviceRequests_Invoke](iousbhostdevice/3182482-abortdevicerequests_invoke.md): Deprecated.
- [AsyncDeviceRequest_Invoke](iousbhostdevice/3182484-asyncdevicerequest_invoke.md): Deprecated.
- [Close_Invoke](iousbhostdevice/3182486-close_invoke.md): Deprecated.
- [CompleteAsyncDeviceRequest_Invoke](iousbhostdevice/4520043-completeasyncdevicerequest_invok.md): Deprecated.
- [CompleteAsyncDeviceRequest_Invoke](iousbhostdevice/4520044-completeasyncdevicerequest_invok.md): Deprecated.
- [CopyInterface_Invoke](iousbhostdevice/3182495-copyinterface_invoke.md): Deprecated.
- [CreateIOBuffer_Invoke](iousbhostdevice/3182498-createiobuffer_invoke.md): Deprecated.
- [CreateInterfaceIterator_Invoke](iousbhostdevice/3182500-createinterfaceiterator_invoke.md): Deprecated.
- [DestroyInterfaceIterator_Invoke](iousbhostdevice/3182502-destroyinterfaceiterator_invoke.md): Deprecated.
- [DeviceRequest_Invoke](iousbhostdevice/3182504-devicerequest_invoke.md): Deprecated.
- [GetAddress_Invoke](iousbhostdevice/3182508-getaddress_invoke.md): Deprecated.
- [GetFrameNumber_Invoke](iousbhostdevice/3182510-getframenumber_invoke.md): Deprecated.
- [GetPortStatus_Invoke](iousbhostdevice/3182512-getportstatus_invoke.md): Deprecated.
- [GetSpeed_Invoke](iousbhostdevice/3182514-getspeed_invoke.md): Deprecated.
- [Open_Invoke](iousbhostdevice/3182516-open_invoke.md): Deprecated.
- [Reset_Invoke](iousbhostdevice/3182518-reset_invoke.md): Deprecated.
- [SetConfiguration_Invoke](iousbhostdevice/3182520-setconfiguration_invoke.md): Deprecated.
- [asyncDeviceRequestCompletionCallback](iousbhostdevice/3294651-asyncdevicerequestcompletioncall.md): Deprecated.
- [withController](iousbhostdevice/1543394-withcontroller.md): Deprecated.

## Relationships

### Inherits From

- [IOUSBDevice](iousbdevice.md)

## See Also

### IOKit

- [IOUSBDevice](iousbdevice.md): Deprecated. An input/output service object that represents a device on the USB bus.
- [IOUSBInterface](iousbinterface.md): Deprecated. An object that represents an interface of a device on the USB bus.
- [IOOFPathMatching](1575304-ioofpathmatching.md): Deprecated.
- [IOUSBHostInterface](iousbhostinterface.md): Deprecated.
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
- [IOEthernetInterface](ioethernetinterface.md): Deprecated. The Ethernet interface object.
- [IOEthernetController](ioethernetcontroller.md): Deprecated. Abstract superclass for Ethernet controllers.
