> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/pcidriverkit/iopcidevice/close

# Close

**Interface language:** Objective-C

**Framework:** PCIDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit · macOS

Closes the session to the PCI device.

## Declaration

```objectivec
void Close(IOService *forClient, IOOptionBits options);
```

## Parameters

- `forClient`: The service object that is closing the session. If this object doesn’t have an open session to the device, this method does nothing..
- `options`: Additional options for closing the session.

<a id="Discussion"></a>

## Discussion

This method closes the session previously opened by the object in the `forClient` parameter. The method also turns off the Bus Master Enable and Memory Space Enable bits defined in the command register of the PCI specification.

## See Also

### Running the Service

- [init](init.md): Initializes the device.
- [Open](open.md): Opens a session to the PCI device.
- [free](free.md): Performs any final cleanup for the object.
