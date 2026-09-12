> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostcontrollerinterfacecommandhandler](https://developer.apple.com/documentation/iousbhost/iousbhostcontrollerinterfacecommandhandler)

# IOUSBHostControllerInterfaceCommandHandler (Swift)

**Framework:** IOUSBHost  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```swift
typealias IOUSBHostControllerInterfaceCommandHandler = (IOUSBHostControllerInterface, IOUSBHostCIMessage) -> Void
```

## See Also

### Data Types

- [IOUSBHostCIDoorbell](iousbhostcidoorbell.md)
- [IOUSBHostCIPortStatus](iousbhostciportstatus.md)
- [IOUSBHostControllerInterfaceDoorbellHandler](iousbhostcontrollerinterfacedoorbellhandler.md)
- [IOUSBHostIsochronousTransactionCompletionHandler](iousbhostisochronoustransactioncompletionhandler.md)

# IOUSBHostControllerInterfaceCommandHandler (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```objectivec
typedef void (^)(IOUSBHostControllerInterface *, struct IOUSBHostCIMessage) IOUSBHostControllerInterfaceCommandHandler;
```

## See Also

### Data Types

- [IOUSBHostCIDoorbell](iousbhostcidoorbell.md)
- [IOUSBHostCIPortStatus](iousbhostciportstatus.md)
- [IOUSBHostControllerInterfaceDoorbellHandler](iousbhostcontrollerinterfacedoorbellhandler.md)
- [IOUSBHostIsochronousTransactionCompletionHandler](iousbhostisochronoustransactioncompletionhandler.md)
