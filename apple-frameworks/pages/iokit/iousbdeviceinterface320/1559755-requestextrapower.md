> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousbdeviceinterface320/1559755-requestextrapower](https://developer.apple.com/documentation/iokit/iousbdeviceinterface320/1559755-requestextrapower)

# RequestExtraPower

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.6+

Clients can use this API to reserve extra power for use by this device while the machine is asleep or while it is awake. Units are milliAmps (mA).

## Declaration

```objectivec
IOReturn (*RequestExtraPower)(void *self, UInt32 type, UInt32 requestedPower, UInt32 *powerAvailable);
```

## Parameters

- `self`: Pointer to the IOUSBDeviceInterface.
- `type`: Indicates whether the power is to be used during wake or sleep (One of kUSBPowerDuringSleep or kUSBPowerDuringWake)
- `requestedPower`: Amount of power desired, in mA
- `powerAvailable`: Amount of power that was reserved, in mA

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful, kIOReturnNoDevice if there is no connection to an IOService, or kIOReturnUnsupported is the bus doesn't support this function.

<a id="discussion"></a>

## Discussion

The device has to be open to use this function.
