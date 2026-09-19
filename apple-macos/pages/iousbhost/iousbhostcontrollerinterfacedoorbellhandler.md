> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iousbhost/iousbhostcontrollerinterfacedoorbellhandler

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
