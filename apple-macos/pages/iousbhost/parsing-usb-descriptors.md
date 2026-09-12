> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/parsing-usb-descriptors](https://developer.apple.com/documentation/iousbhost/parsing-usb-descriptors)

# Parsing USB Descriptors (Swift)

**Framework:** IOUSBHost  
**Kind:** API Collection

Extract information from various USB descriptors using helper methods.

## Topics

### Configuration Descriptor Parsing

- [IOUSBGetNextDescriptor(\_:\_:)](iousbgetnextdescriptor%28____%29.md): Obtains the next descriptor in a configuration descriptor.
- [IOUSBGetNextDescriptorWithType(\_:\_:\_:)](iousbgetnextdescriptorwithtype%28______%29.md): Obtains the next descriptor in a configuration descriptor that matches the type.
- [IOUSBGetNextAssociatedDescriptor(\_:\_:\_:)](iousbgetnextassociateddescriptor%28______%29.md): Obtains the next associated descriptor in a configuration descriptor.
- [IOUSBGetNextAssociatedDescriptorWithType(\_:\_:\_:\_:)](iousbgetnextassociateddescriptorwithtype%28________%29.md): Obtains the next associated descriptor in a configuration descriptor and matches the type.
- [IOUSBGetNextInterfaceAssociationDescriptor(\_:\_:)](iousbgetnextinterfaceassociationdescriptor%28____%29.md): Obtains the next interface association descriptor in a configuration descriptor.
- [IOUSBGetNextInterfaceDescriptor(\_:\_:)](iousbgetnextinterfacedescriptor%28____%29.md): Obtains the next interface descriptor in a configuration descriptor.
- [IOUSBGetConfigurationMaxPowerMilliAmps(\_:\_:)](iousbgetconfigurationmaxpowermilliamps%28____%29.md): Obtains the maximum bus current that a configuration descriptor requires.

### BOS Descriptor Parsing

- [IOUSBGetUSB20ExtensionDeviceCapabilityDescriptor(\_:)](iousbgetusb20extensiondevicecapabilitydescriptor%28__%29.md): Obtains the first USB 2.0 extension capability descriptor in a BOS descriptor.
- [IOUSBGetNextCapabilityDescriptorWithType(\_:\_:\_:)](iousbgetnextcapabilitydescriptorwithtype%28______%29.md): Obtains the next descriptor matching a specific type within a BOS descriptor.
- [IOUSBGetNextCapabilityDescriptor(\_:\_:)](iousbgetnextcapabilitydescriptor%28____%29.md): Obtains the next device capability descriptor in a BOS descriptor.
- [IOUSBGetSuperSpeedDeviceCapabilityDescriptor(\_:)](iousbgetsuperspeeddevicecapabilitydescriptor%28__%29.md): Obtains the first SuperSpeed capability descriptor in a BOS descriptor.
- [IOUSBGetContainerIDDescriptor(\_:)](iousbgetcontaineriddescriptor%28__%29.md): Obtains the first container ID capability descriptor in a BOS descriptor.
- [IOUSBGetBillboardDescriptor(\_:)](iousbgetbillboarddescriptor%28__%29.md): Obtains the first billboard capability descriptor in a BOS descriptor.

### Endpoint Descriptor Parsing

- [IOUSBGetNextEndpointDescriptor(\_:\_:\_:)](iousbgetnextendpointdescriptor%28______%29.md): Obtains the next endpoint descriptor for an interface descriptor.
- [IOUSBGetEndpointDirection(\_:)](iousbgetendpointdirection%28__%29.md): Obtains the direction of an endpoint from an endpoint descriptor.
- [IOUSBGetEndpointAddress(\_:)](iousbgetendpointaddress%28__%29.md): Obtains the direction and number of an endpoint from an endpoint descriptor.
- [IOUSBGetEndpointNumber(\_:)](iousbgetendpointnumber%28__%29.md): Obtains the number of an endpoint from an endpoint descriptor.
- [IOUSBGetEndpointType(\_:)](iousbgetendpointtype%28__%29.md): Obtains the type of an endpoint from an endpoint descriptor.
- [IOUSBGetEndpointMaxPacketSize(\_:\_:)](iousbgetendpointmaxpacketsize%28____%29.md): Obtains the maximum packet size from an endpoint descriptor.
- [IOUSBGetEndpointIntervalEncodedMicroframes(\_:\_:)](iousbgetendpointintervalencodedmicroframes%28____%29.md): Obtains the interval of an endpoint descriptor.
- [IOUSBGetEndpointIntervalMicroframes(\_:\_:)](iousbgetendpointintervalmicroframes%28____%29.md): Obtains the interval of an endpoint descriptor.
- [IOUSBGetEndpointIntervalFrames(\_:\_:)](iousbgetendpointintervalframes%28____%29.md): Obtains the interval of an endpoint descriptor.
- [IOUSBGetEndpointMaxStreamsEncoded(\_:\_:\_:)](iousbgetendpointmaxstreamsencoded%28______%29.md): Obtains the number of streams that an endpoint supports.
- [IOUSBGetEndpointMaxStreams(\_:\_:\_:)](iousbgetendpointmaxstreams%28______%29.md): Obtains the number of supported streams.

# Parsing USB Descriptors (Objective-C)

**Framework:** IOUSBHost  
**Kind:** API Collection

Extract information from various USB descriptors using helper methods.

## Topics

### Configuration Descriptor Parsing

- [IOUSBGetNextDescriptor](iousbgetnextdescriptor%28____%29.md): Obtains the next descriptor in a configuration descriptor.
- [IOUSBGetNextDescriptorWithType](iousbgetnextdescriptorwithtype%28______%29.md): Obtains the next descriptor in a configuration descriptor that matches the type.
- [IOUSBGetNextAssociatedDescriptor](iousbgetnextassociateddescriptor%28______%29.md): Obtains the next associated descriptor in a configuration descriptor.
- [IOUSBGetNextAssociatedDescriptorWithType](iousbgetnextassociateddescriptorwithtype%28________%29.md): Obtains the next associated descriptor in a configuration descriptor and matches the type.
- [IOUSBGetNextInterfaceAssociationDescriptor](iousbgetnextinterfaceassociationdescriptor%28____%29.md): Obtains the next interface association descriptor in a configuration descriptor.
- [IOUSBGetNextInterfaceDescriptor](iousbgetnextinterfacedescriptor%28____%29.md): Obtains the next interface descriptor in a configuration descriptor.
- [IOUSBGetConfigurationMaxPowerMilliAmps](iousbgetconfigurationmaxpowermilliamps%28____%29.md): Obtains the maximum bus current that a configuration descriptor requires.

### BOS Descriptor Parsing

- [IOUSBGetUSB20ExtensionDeviceCapabilityDescriptor](iousbgetusb20extensiondevicecapabilitydescriptor%28__%29.md): Obtains the first USB 2.0 extension capability descriptor in a BOS descriptor.
- [IOUSBGetNextCapabilityDescriptorWithType](iousbgetnextcapabilitydescriptorwithtype%28______%29.md): Obtains the next descriptor matching a specific type within a BOS descriptor.
- [IOUSBGetNextCapabilityDescriptor](iousbgetnextcapabilitydescriptor%28____%29.md): Obtains the next device capability descriptor in a BOS descriptor.
- [IOUSBGetSuperSpeedDeviceCapabilityDescriptor](iousbgetsuperspeeddevicecapabilitydescriptor%28__%29.md): Obtains the first SuperSpeed capability descriptor in a BOS descriptor.
- [IOUSBGetContainerIDDescriptor](iousbgetcontaineriddescriptor%28__%29.md): Obtains the first container ID capability descriptor in a BOS descriptor.
- [IOUSBGetBillboardDescriptor](iousbgetbillboarddescriptor%28__%29.md): Obtains the first billboard capability descriptor in a BOS descriptor.

### Endpoint Descriptor Parsing

- [IOUSBGetNextEndpointDescriptor](iousbgetnextendpointdescriptor%28______%29.md): Obtains the next endpoint descriptor for an interface descriptor.
- [IOUSBGetEndpointDirection](iousbgetendpointdirection%28__%29.md): Obtains the direction of an endpoint from an endpoint descriptor.
- [IOUSBGetEndpointAddress](iousbgetendpointaddress%28__%29.md): Obtains the direction and number of an endpoint from an endpoint descriptor.
- [IOUSBGetEndpointNumber](iousbgetendpointnumber%28__%29.md): Obtains the number of an endpoint from an endpoint descriptor.
- [IOUSBGetEndpointType](iousbgetendpointtype%28__%29.md): Obtains the type of an endpoint from an endpoint descriptor.
- [IOUSBGetEndpointMaxPacketSize](iousbgetendpointmaxpacketsize%28____%29.md): Obtains the maximum packet size from an endpoint descriptor.
- [IOUSBGetEndpointIntervalEncodedMicroframes](iousbgetendpointintervalencodedmicroframes%28____%29.md): Obtains the interval of an endpoint descriptor.
- [IOUSBGetEndpointIntervalMicroframes](iousbgetendpointintervalmicroframes%28____%29.md): Obtains the interval of an endpoint descriptor.
- [IOUSBGetEndpointIntervalFrames](iousbgetendpointintervalframes%28____%29.md): Obtains the interval of an endpoint descriptor.
- [IOUSBGetEndpointMaxStreamsEncoded](iousbgetendpointmaxstreamsencoded%28______%29.md): Obtains the number of streams that an endpoint supports.
- [IOUSBGetEndpointMaxStreams](iousbgetendpointmaxstreams%28______%29.md): Obtains the number of supported streams.

## See Also

### Retrieving Base Class Descriptors

- [descriptorWithType:length:index:languageID:requestType:requestRecipient:error:](iousbhostobject/descriptorwithtype_length_index_languageid_requesttype_requestrecipient_error_.md): Retrieves a descriptor from the cache or the device.
- [descriptorWithType:length:error:](iousbhostobject/descriptorwithtype_length_error_.md): Retrieves a descriptor with default arguments from the cache or the device.
- [descriptorWithType:length:index:languageID:error:](iousbhostobject/descriptorwithtype_length_index_languageid_error_.md): Retrieves a string descriptor from the cache or the device.
- [stringWithIndex:languageID:error:](iousbhostobject/stringwithindex_languageid_error_.md): Retrieves a string from a string descriptor.
- [stringWithIndex:error:](iousbhostobject/stringwithindex_error_.md): Retrieves an English-language string from a string descriptor.
