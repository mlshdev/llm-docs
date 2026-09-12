> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostisochronoustransactioncompletionhandler](https://developer.apple.com/documentation/iousbhost/iousbhostisochronoustransactioncompletionhandler)

# IOUSBHostIsochronousTransactionCompletionHandler (Swift)

**Framework:** IOUSBHost  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```swift
typealias IOUSBHostIsochronousTransactionCompletionHandler = (IOReturn, UnsafeMutablePointer<IOUSBHostIsochronousTransaction>) -> Void
```

## See Also

### Data Types

- [IOUSBHostCIDoorbell](iousbhostcidoorbell.md)
- [IOUSBHostCIPortStatus](iousbhostciportstatus.md)
- [IOUSBHostControllerInterfaceCommandHandler](iousbhostcontrollerinterfacecommandhandler.md)
- [IOUSBHostControllerInterfaceDoorbellHandler](iousbhostcontrollerinterfacedoorbellhandler.md)

# IOUSBHostIsochronousTransactionCompletionHandler (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```objectivec
typedef void (^)(int, struct IOUSBHostIsochronousTransaction *) IOUSBHostIsochronousTransactionCompletionHandler;
```

## See Also

### Data Types

- [IOUSBHostCIDoorbell](iousbhostcidoorbell.md)
- [IOUSBHostCIPortStatus](iousbhostciportstatus.md)
- [IOUSBHostControllerInterfaceCommandHandler](iousbhostcontrollerinterfacecommandhandler.md)
- [IOUSBHostControllerInterfaceDoorbellHandler](iousbhostcontrollerinterfacedoorbellhandler.md)
