> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousbinterfaceinterface183/1559513-usbinterfaceopenseize](https://developer.apple.com/documentation/iokit/iousbinterfaceinterface183/1559513-usbinterfaceopenseize)

# USBInterfaceOpenSeize

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.4+ · macOS 10.1+

Opens the IOUSBInterface for exclusive access.

## Declaration

```objectivec
IOReturn (*USBInterfaceOpenSeize)(void *self);
```

## Parameters

- `self`: Pointer to the IOUSBInterfaceInterface.

<a id="return_value"></a>

## Return Value

Returns kIOReturnExclusiveAccess if some other task has the interface open already and refuses to close it, kIOReturnError if the connection with the kernel cannot be established or kIOReturnSuccess if successful.

<a id="discussion"></a>

## Discussion

If another client has the device open, an attempt is made to get that client to close it before returning.

Before the client can issue commands that change the state of the device, it must have succeeded in opening the device. This establishes an exclusive link between the clients task and the actual device.
