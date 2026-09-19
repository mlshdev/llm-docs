> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iousbdeviceinterface182/1559458-usbdeviceabortpipezero

# USBDeviceAbortPipeZero

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Aborts a transaction on the default control pipe.

## Declaration

```objectivec
IOReturn (*USBDeviceAbortPipeZero)(void *self);
```

## Parameters

- `self`: Pointer to the IOUSBDeviceInterface.

<a id="return_value"></a>

## Return Value

Returns kIOReturnSuccess if successful, kIOReturnNoDevice if there is no connection to an IOService, or kIOReturnNotOpen if the device is not open for exclusive access.

<a id="discussion"></a>

## Discussion

The device must be open to use this function.
