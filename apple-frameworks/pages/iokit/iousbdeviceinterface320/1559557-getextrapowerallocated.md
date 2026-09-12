> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousbdeviceinterface320/1559557-getextrapowerallocated](https://developer.apple.com/documentation/iokit/iousbdeviceinterface320/1559557-getextrapowerallocated)

# GetExtraPowerAllocated

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.6+

Clients can use this API to ask how much extra power has already been reserved by this device. Units are milliAmps (mA).

## Declaration

```objectivec
IOReturn (*GetExtraPowerAllocated)(void *self, UInt32 type, UInt32 *powerAllocated);
```

## Parameters

- `self`: Pointer to the IOUSBDeviceInterface.
- `type`: Indicates whether the allocated power was to be used during wake or sleep (One of kUSBPowerDuringSleep or kUSBPowerDuringWake)
- `powerAllocated`: Amount of power to be returned, in mA.

<a id="return_value"></a>

## Return Value

Value returned can be 0 if no power has been allocated. Returns kIOReturnSuccess if successful, kIOReturnNoDevice if there is no connection to an IOService.

<a id="discussion"></a>

## Discussion

The device has to be open to use this function.
