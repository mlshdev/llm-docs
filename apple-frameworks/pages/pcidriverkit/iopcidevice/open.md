> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pcidriverkit/iopcidevice/open](https://developer.apple.com/documentation/pcidriverkit/iopcidevice/open)

# Open

**Interface language:** Objective-C

**Framework:** PCIDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · macOS

Opens a session to the PCI device.

## Declaration

```objectivec
kern_return_t Open(IOService *forClient, IOOptionBits options);
```

## Parameters

- `forClient`: The service object that is opening the session. Typically, you specify your driver’s custom [IOService](../../driverkit/ioservice.md) object.
- `options`: Additional options for opening the session.

<a id="return-value"></a>

## Return Value

[kIOReturnSuccess](../../driverkit/kioreturnsuccess.md) on success, or another value if an error occurs. See [Error Codes](../../driverkit/error-codes.md).

<a id="Discussion"></a>

## Discussion

This method gives the specified [IOService](../../driverkit/ioservice.md) object exclusive access to the PCI device. It also gives the service object access to the PCI device’s configuration and aperture space.

## See Also

### Running the Service

- [init](init.md): Initializes the device.
- [Close](close.md): Closes the session to the PCI device.
- [free](free.md): Performs any final cleanup for the object.
