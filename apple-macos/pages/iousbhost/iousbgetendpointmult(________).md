> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbgetendpointmult(_:_:_:_:)](https://developer.apple.com/documentation/iousbhost/iousbgetendpointmult(_:_:_:_:))

# IOUSBGetEndpointMult(\_:\_:\_:\_:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Function  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```swift
func IOUSBGetEndpointMult(_ usbDeviceSpeed: UInt32, _ descriptor: UnsafePointer<IOUSBEndpointDescriptor>!, _ companionDescriptor: UnsafePointer<IOUSBSuperSpeedEndpointCompanionDescriptor>!, _ sspCompanionDescriptor: UnsafePointer<IOUSBSuperSpeedPlusIsochronousEndpointCompanionDescriptor>!) -> UInt8
```

## See Also

### Functions

- [IOUSBGetEndpointBurstSize(\_:\_:\_:\_:)](iousbgetendpointburstsize%28________%29.md)
- [IOUSBGetEndpointSynchronizationType(\_:)](iousbgetendpointsynchronizationtype%28__%29.md)
- [IOUSBGetEndpointUsageType(\_:)](iousbgetendpointusagetype%28__%29.md)
- [IOUSBGetPlatformCapabilityDescriptor(\_:)](iousbgetplatformcapabilitydescriptor%28__%29.md)
- [IOUSBGetPlatformCapabilityDescriptorWithUUID(\_:\_:)](iousbgetplatformcapabilitydescriptorwithuuid%28____%29.md)
- [IOUSBGetSuperSpeedPlusDeviceCapabilityDescriptor(\_:)](iousbgetsuperspeedplusdevicecapabilitydescriptor%28__%29.md)
- [IOUSBHostCIControllerStateToString(\_:)](iousbhostcicontrollerstatetostring%28__%29.md)
- [IOUSBHostCIDeviceSpeedToString(\_:)](iousbhostcidevicespeedtostring%28__%29.md)
- [IOUSBHostCIDeviceStateToString(\_:)](iousbhostcidevicestatetostring%28__%29.md)
- [IOUSBHostCIEndpointStateToString(\_:)](iousbhostciendpointstatetostring%28__%29.md)
- [IOUSBHostCIExceptionTypeToString(\_:)](iousbhostciexceptiontypetostring%28__%29.md)
- [IOUSBHostCILinkStateEnabled(\_:)](iousbhostcilinkstateenabled%28__%29.md)
- [IOUSBHostCILinkStateToString(\_:)](iousbhostcilinkstatetostring%28__%29.md)
- [IOUSBHostCIMessageStatusFromIOReturn(\_:)](iousbhostcimessagestatusfromioreturn%28__%29.md)
- [IOUSBHostCIMessageStatusToIOReturn(\_:)](iousbhostcimessagestatustoioreturn%28__%29.md)

# IOUSBGetEndpointMult (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Function  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```objectivec
uint8_t IOUSBGetEndpointMult(uint32_t usbDeviceSpeed, const IOUSBEndpointDescriptor *descriptor, const IOUSBSuperSpeedEndpointCompanionDescriptor *companionDescriptor, const IOUSBSuperSpeedPlusIsochronousEndpointCompanionDescriptor *sspCompanionDescriptor);
```

## See Also

### Functions

- [IOUSBGetEndpointBurstSize](iousbgetendpointburstsize%28________%29.md)
- [IOUSBGetEndpointSynchronizationType](iousbgetendpointsynchronizationtype%28__%29.md)
- [IOUSBGetEndpointUsageType](iousbgetendpointusagetype%28__%29.md)
- [IOUSBGetPlatformCapabilityDescriptor](iousbgetplatformcapabilitydescriptor%28__%29.md)
- [IOUSBGetPlatformCapabilityDescriptorWithUUID](iousbgetplatformcapabilitydescriptorwithuuid%28____%29.md)
- [IOUSBGetSuperSpeedPlusDeviceCapabilityDescriptor](iousbgetsuperspeedplusdevicecapabilitydescriptor%28__%29.md)
- [IOUSBHostCIControllerStateToString](iousbhostcicontrollerstatetostring%28__%29.md)
- [IOUSBHostCIDeviceSpeedToString](iousbhostcidevicespeedtostring%28__%29.md)
- [IOUSBHostCIDeviceStateToString](iousbhostcidevicestatetostring%28__%29.md)
- [IOUSBHostCIEndpointStateToString](iousbhostciendpointstatetostring%28__%29.md)
- [IOUSBHostCIExceptionTypeToString](iousbhostciexceptiontypetostring%28__%29.md)
- [IOUSBHostCILinkStateEnabled](iousbhostcilinkstateenabled%28__%29.md)
- [IOUSBHostCILinkStateToString](iousbhostcilinkstatetostring%28__%29.md)
- [IOUSBHostCIMessageStatusFromIOReturn](iousbhostcimessagestatusfromioreturn%28__%29.md)
- [IOUSBHostCIMessageStatusToIOReturn](iousbhostcimessagestatustoioreturn%28__%29.md)
