> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iousbhost/iousbhostcontrollerinterfacecommandhandler

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
