> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ioacpiaddressspacehandler](https://developer.apple.com/documentation/kernel/ioacpiaddressspacehandler)

# IOACPIAddressSpaceHandler

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.3+

## Declaration

```objectivec
typedef IOReturn (*IOACPIAddressSpaceHandler)(UInt32 operation, IOACPIAddress address, UInt64 *value, UInt32 bitWidth, UInt32 bitOffset, void *context);
```

## See Also

### Power Management

- [IOACPIPlatformDevice](ioacpiplatformdevice.md)
- [IOACPIPlatformExpert](ioacpiplatformexpert.md)
- [IOPMPowerSource](iopmpowersource.md)
- [IOPMPowerSourceList](iopmpowersourcelist.md)
- [IOPMrootDomain](iopmrootdomain.md)
- [IOPowerConnection](iopowerconnection.md)
- [IOPwrController](iopwrcontroller.md)
- [IOACPIAddress](ioacpiaddress.md)
- [IOACPIAddressSpaceDescriptor](ioacpiaddressspacedescriptor.md)
- [IOACPIAddressSpaceID](ioacpiaddressspaceid.md)
- [IOPMPowerState](iopmpowerstate.md)
- [acknowledgeSleepWakeNotification](1579170-acknowledgesleepwakenotification.md)
- [gIOACPIAddressKey](gioacpiaddresskey.md)
- [gIOACPIDeviceStatusKey](gioacpidevicestatuskey.md)
- [gIOACPIHardwareIDKey](gioacpihardwareidkey.md)
- [gIOACPIPlane](gioacpiplane.md)
- [gIOACPIUniqueIDKey](gioacpiuniqueidkey.md)
