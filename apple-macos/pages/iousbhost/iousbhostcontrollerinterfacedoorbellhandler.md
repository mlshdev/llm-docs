> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostcontrollerinterfacedoorbellhandler](https://developer.apple.com/documentation/iousbhost/iousbhostcontrollerinterfacedoorbellhandler)

# IOUSBHostControllerInterfaceDoorbellHandler (Swift)

**Framework:** IOUSBHost  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```swift
typealias IOUSBHostControllerInterfaceDoorbellHandler = (IOUSBHostControllerInterface, UnsafeMutablePointer<IOUSBHostCIDoorbell>, UInt32) -> Void
```

## See Also

### Data Types

- [IOUSBHostCIDoorbell](iousbhostcidoorbell.md)
- [IOUSBHostCIPortStatus](iousbhostciportstatus.md)
- [IOUSBHostControllerInterfaceCommandHandler](iousbhostcontrollerinterfacecommandhandler.md)
- [IOUSBHostIsochronousTransactionCompletionHandler](iousbhostisochronoustransactioncompletionhandler.md)

# IOUSBHostControllerInterfaceDoorbellHandler (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```objectivec
typedef void (^)(IOUSBHostControllerInterface *, unsigned int *, unsigned int) IOUSBHostControllerInterfaceDoorbellHandler;
```

## See Also

### Data Types

- [IOUSBHostCIDoorbell](iousbhostcidoorbell.md)
- [IOUSBHostCIPortStatus](iousbhostciportstatus.md)
- [IOUSBHostControllerInterfaceCommandHandler](iousbhostcontrollerinterfacecommandhandler.md)
- [IOUSBHostIsochronousTransactionCompletionHandler](iousbhostisochronoustransactioncompletionhandler.md)
