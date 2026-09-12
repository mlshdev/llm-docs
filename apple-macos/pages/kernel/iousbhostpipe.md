> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iousbhostpipe](https://developer.apple.com/documentation/kernel/iousbhostpipe)

# IOUSBHostPipe

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Class  
**Availability:** macOS 10.11+ (deprecated in 10.15.4)

## Declaration

```objectivec
class IOUSBHostPipe : IOUSBHostIOSource
```

## Topics

### Instance Methods

- [Abort](iousbhostpipe/3294681-abort.md): Deprecated.
- [Abort_Impl](iousbhostpipe/3294682-abort_impl.md): Deprecated.
- [AdjustPipe](iousbhostpipe/3294684-adjustpipe.md): Deprecated.
- [AdjustPipe_Impl](iousbhostpipe/3294685-adjustpipe_impl.md): Deprecated.
- [AsyncIO](iousbhostpipe/3294687-asyncio.md): Deprecated.
- [AsyncIOBundled](iousbhostpipe/3438058-asynciobundled.md): Deprecated.
- [AsyncIOBundled_Impl](iousbhostpipe/3294688-asynciobundled_impl.md): Deprecated.
- [AsyncIO_Impl](iousbhostpipe/3294690-asyncio_impl.md): Deprecated.
- [ClearStall](iousbhostpipe/3294692-clearstall.md): Deprecated.
- [ClearStall_Impl](iousbhostpipe/3294693-clearstall_impl.md): Deprecated.
- [CompleteAsyncIO](iousbhostpipe/3294695-completeasyncio.md): Deprecated.
- [CompleteAsyncIOBundled](iousbhostpipe/3438059-completeasynciobundled.md): Deprecated.
- [CompleteAsyncIsochIO](iousbhostpipe/3438062-completeasyncisochio.md): Deprecated.
- [CreateMemoryDescriptorRing](https://developer.apple.com/documentation/usbdriverkit/iousbhostpipe/creatememorydescriptorring)
- [CreateMemoryDescriptorRing_Impl](iousbhostpipe/3294700-creatememorydescriptorring_impl.md): Deprecated.
- [Dispatch](iousbhostpipe/3294702-dispatch.md): Deprecated.
- [GetDescriptors](iousbhostpipe/3294703-getdescriptors.md): Deprecated.
- [GetDescriptors_Impl](iousbhostpipe/3294704-getdescriptors_impl.md): Deprecated.
- [GetDeviceAddress](iousbhostpipe/3294706-getdeviceaddress.md): Deprecated.
- [GetDeviceAddress_Impl](iousbhostpipe/3294707-getdeviceaddress_impl.md): Deprecated.
- [GetIdlePolicy](iousbhostpipe/3294709-getidlepolicy.md): Deprecated.
- [GetIdlePolicy_Impl](iousbhostpipe/3294710-getidlepolicy_impl.md): Deprecated.
- [GetSpeed](iousbhostpipe/3294712-getspeed.md): Deprecated.
- [GetSpeed_Impl](iousbhostpipe/3294713-getspeed_impl.md): Deprecated.
- [IO](iousbhostpipe/3294715-io.md): Deprecated.
- [IO_Impl](iousbhostpipe/3294716-io_impl.md): Deprecated.
- [IsochIO](iousbhostpipe/3438063-isochio.md): Deprecated.
- [IsochIO_Impl](iousbhostpipe/3366019-isochio_impl.md): Deprecated.
- [SetIdlePolicy](iousbhostpipe/3294718-setidlepolicy.md): Deprecated.
- [SetIdlePolicy_Impl](iousbhostpipe/3294719-setidlepolicy_impl.md): Deprecated.
- [SetMemoryDescriptor](https://developer.apple.com/documentation/usbdriverkit/iousbhostpipe/setmemorydescriptor)
- [SetMemoryDescriptor_Impl](iousbhostpipe/3294722-setmemorydescriptor_impl.md): Deprecated.
- [abort](iousbhostpipe/1584505-abort.md): Deprecated.
- [abortGated](iousbhostpipe/1584499-abortgated.md): Deprecated.
- [adjustOutstandingIO](iousbhostpipe/2881960-adjustoutstandingio.md): Deprecated.
- [adjustPipe](iousbhostpipe/1584512-adjustpipe.md): Deprecated.
- [adjustPipe](iousbhostpipe/3516804-adjustpipe.md): Deprecated.
- [adjustPipeGated](iousbhostpipe/1584485-adjustpipegated.md): Deprecated.
- [adjustPipeGatedV2](iousbhostpipe/1644642-adjustpipegatedv2.md): Deprecated.
- [clearStall](iousbhostpipe/1584510-clearstall.md): Deprecated.
- [clearStallGated](iousbhostpipe/1584497-clearstallgated.md): Deprecated.
- [closeGated](iousbhostpipe/1584482-closegated.md): Deprecated.
- [controlRequest](iousbhostpipe/1584489-controlrequest.md): Deprecated.
- [controlRequest](iousbhostpipe/3516805-controlrequest.md): Deprecated.
- [controlRequest](iousbhostpipe/3516806-controlrequest.md): Deprecated.
- [controlRequest](iousbhostpipe/3516807-controlrequest.md): Deprecated.
- [controlRequestGated](iousbhostpipe/1584491-controlrequestgated.md): Deprecated.
- [copyStream](iousbhostpipe/1584502-copystream.md): Deprecated.
- [copyStreamGated](iousbhostpipe/1584514-copystreamgated.md): Deprecated.
- [destroyGated](iousbhostpipe/1584506-destroygated.md): Deprecated.
- [destroyMemoryDescriptorRing](iousbhostpipe/3294727-destroymemorydescriptorring.md): Deprecated.
- [disableStreams](iousbhostpipe/1584507-disablestreams.md): Deprecated.
- [disableStreamsGated](iousbhostpipe/1584492-disablestreamsgated.md): Deprecated.
- [enableStreams](iousbhostpipe/1584483-enablestreams.md): Deprecated.
- [enableStreamsGated](iousbhostpipe/1584496-enablestreamsgated.md): Deprecated.
- [free](iousbhostpipe/1584484-free.md): Deprecated.
- [getDescriptors](iousbhostpipe/1644641-getdescriptors.md): Deprecated.
- [getDeviceAddress](iousbhostpipe/1584487-getdeviceaddress.md): Deprecated.
- [getEndpointDescriptor](iousbhostpipe/1584486-getendpointdescriptor.md): Deprecated.
- [getIdlePolicy](iousbhostpipe/1584498-getidlepolicy.md): Deprecated.
- [getIdlePolicyGated](iousbhostpipe/1584508-getidlepolicygated.md): Deprecated.
- [getMetaClass](iousbhostpipe/1584511-getmetaclass.md): Deprecated.
- [getOutstandingIO](iousbhostpipe/2881961-getoutstandingio.md): Deprecated.
- [getSpeed](iousbhostpipe/1584488-getspeed.md): Deprecated.
- [getSuperSpeedEndpointCompanionDescriptor](iousbhostpipe/1584513-getsuperspeedendpointcompanionde.md): Deprecated.
- [initWithDescriptorsAndOwners](iousbhostpipe/1584493-initwithdescriptorsandowners.md): Deprecated.
- [io](iousbhostpipe/1584504-io.md): Deprecated.
- [io](iousbhostpipe/3516808-io.md): Deprecated.
- [io](iousbhostpipe/3516809-io.md): Deprecated.
- [io](iousbhostpipe/3516810-io.md): Deprecated.
- [io](iousbhostpipe/3753556-io.md): Deprecated.
- [io](iousbhostpipe/3753557-io.md): Deprecated.
- [isochronousIoGated](iousbhostpipe/1584509-isochronousiogated.md): Deprecated.
- [openGated](iousbhostpipe/1584503-opengated.md): Deprecated.
- [setIdlePolicy](iousbhostpipe/1584500-setidlepolicy.md): Deprecated.
- [setIdlePolicyGated](iousbhostpipe/1584494-setidlepolicygated.md): Deprecated.

### Type Methods

- [Abort_Invoke](iousbhostpipe/3182644-abort_invoke.md): Deprecated.
- [AdjustPipe_Invoke](iousbhostpipe/3182646-adjustpipe_invoke.md): Deprecated.
- [AsyncIOBundled_Invoke](iousbhostpipe/3230711-asynciobundled_invoke.md): Deprecated.
- [AsyncIO_Invoke](iousbhostpipe/3182648-asyncio_invoke.md): Deprecated.
- [ClearStall_Invoke](iousbhostpipe/3182650-clearstall_invoke.md): Deprecated.
- [CompleteAsyncIOBundled_Invoke](iousbhostpipe/4520045-completeasynciobundled_invoke.md): Deprecated.
- [CompleteAsyncIOBundled_Invoke](iousbhostpipe/4520046-completeasynciobundled_invoke.md): Deprecated.
- [CompleteAsyncIO_Invoke](iousbhostpipe/4520047-completeasyncio_invoke.md): Deprecated.
- [CompleteAsyncIO_Invoke](iousbhostpipe/4520048-completeasyncio_invoke.md): Deprecated.
- [CompleteAsyncIsochIO_Invoke](iousbhostpipe/4520049-completeasyncisochio_invoke.md): Deprecated.
- [CompleteAsyncIsochIO_Invoke](iousbhostpipe/4520050-completeasyncisochio_invoke.md): Deprecated.
- [CreateMemoryDescriptorRing_Invoke](iousbhostpipe/3295834-creatememorydescriptorring_invok.md): Deprecated.
- [GetDescriptors_Invoke](iousbhostpipe/3182657-getdescriptors_invoke.md): Deprecated.
- [GetDeviceAddress_Invoke](iousbhostpipe/3182659-getdeviceaddress_invoke.md): Deprecated.
- [GetIdlePolicy_Invoke](iousbhostpipe/3182661-getidlepolicy_invoke.md): Deprecated.
- [GetSpeed_Invoke](iousbhostpipe/3182663-getspeed_invoke.md): Deprecated.
- [IO_Invoke](iousbhostpipe/3182665-io_invoke.md): Deprecated.
- [IsochIO_Invoke](iousbhostpipe/3366113-isochio_invoke.md): Deprecated.
- [SetIdlePolicy_Invoke](iousbhostpipe/3182668-setidlepolicy_invoke.md): Deprecated.
- [SetMemoryDescriptor_Invoke](iousbhostpipe/3295836-setmemorydescriptor_invoke.md): Deprecated.
- [asyncIOCompletionCallback](iousbhostpipe/3294724-asynciocompletioncallback.md): Deprecated.
- [asyncIOCompletionCallbackBundled](iousbhostpipe/3294725-asynciocompletioncallbackbundled.md): Deprecated.
- [asyncIsochIOCompletionCallback](iousbhostpipe/3294726-asyncisochiocompletioncallback.md): Deprecated.
- [asyncIsochIOTransactionCompletionCallback](iousbhostpipe/3753555-asyncisochiotransactioncompletio.md): Deprecated.
- [isochIOTransactionCompatCallback](iousbhostpipe/3753558-isochiotransactioncompatcallback.md): Deprecated.
- [rawBufferControlRequestCompletion](iousbhostpipe/1584490-rawbuffercontrolrequestcompletio.md): Deprecated.
- [withDescriptorsAndOwners](iousbhostpipe/1584495-withdescriptorsandowners.md): Deprecated.

## Relationships

### Inherits From

- [IOUSBHostIOSource](iousbhostiosource.md)

## See Also

### IOKit

- [IOUSBDevice](iousbdevice.md): Deprecated. An input/output service object that represents a device on the USB bus.
- [IOUSBInterface](iousbinterface.md): Deprecated. An object that represents an interface of a device on the USB bus.
- [IOOFPathMatching](1575304-ioofpathmatching.md): Deprecated.
- [IOUSBHostInterface](iousbhostinterface.md): Deprecated.
- [IOUSBHostDevice](iousbhostdevice.md): Deprecated.
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
