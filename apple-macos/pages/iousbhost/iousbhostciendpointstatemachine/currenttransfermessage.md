> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iousbhost/iousbhostciendpointstatemachine/currenttransfermessage

# currentTransferMessage (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```swift
var currentTransferMessage: UnsafePointer<IOUSBHostCIMessage> { get }
```

## See Also

### Instance Properties

- [controllerInterface](controllerinterface.md)
- [deviceAddress](deviceaddress.md)
- [endpointAddress](endpointaddress.md)
- [endpointState](endpointstate.md)

# currentTransferMessage (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```objectivec
@property (nonatomic, readonly) const IOUSBHostCIMessage * currentTransferMessage;
```

## See Also

### Instance Properties

- [controllerInterface](controllerinterface.md)
- [deviceAddress](deviceaddress.md)
- [endpointAddress](endpointaddress.md)
- [endpointState](endpointstate.md)
