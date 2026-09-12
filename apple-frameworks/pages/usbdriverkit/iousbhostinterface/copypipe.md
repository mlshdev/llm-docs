> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbhostinterface/copypipe](https://developer.apple.com/documentation/usbdriverkit/iousbhostinterface/copypipe)

# CopyPipe

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 19.0+

Returns the pipe for the specified endpoint address.

## Declaration

```objectivec
virtual kern_return_t CopyPipe(uint8_t address, IOUSBHostPipe **pipe);
```

## Parameters

- `address`: The address of the pipe you want. Get the address for a specific pipe from the [bEndpointAddress](../iousbendpointdescriptor/bendpointaddress.md) field of the appropriate [IOUSBEndpointDescriptor](../iousbendpointdescriptor.md) structure.
- `pipe`: A variable in which to store the [IOUSBHostPipe](../iousbhostpipe.md) object. It’s your responsibility to release this object when you finish using it.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

If the specified pipe doesn’t exist yet, but is part of the interface, this method creates the pipe before returning it.
