> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostciendpointstatemachine](https://developer.apple.com/documentation/iousbhost/iousbhostciendpointstatemachine)

# IOUSBHostCIEndpointStateMachine (Swift)

**Framework:** IOUSBHost  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```swift
class IOUSBHostCIEndpointStateMachine
```

## Topics

### Instance Properties

- [controllerInterface](iousbhostciendpointstatemachine/controllerinterface.md)
- [currentTransferMessage](iousbhostciendpointstatemachine/currenttransfermessage.md)
- [deviceAddress](iousbhostciendpointstatemachine/deviceaddress.md)
- [endpointAddress](iousbhostciendpointstatemachine/endpointaddress.md)
- [endpointState](iousbhostciendpointstatemachine/endpointstate.md)

### Instance Methods

- [enqueueTransferCompletion(for:status:transferLength:)](iousbhostciendpointstatemachine/enqueuetransfercompletion%28for_status_transferlength_%29.md)
- [inspectCommand(\_:)](iousbhostciendpointstatemachine/inspectcommand%28__%29.md)
- [processDoorbell(\_:)](iousbhostciendpointstatemachine/processdoorbell%28__%29.md)
- [respond(toCommand:status:)](iousbhostciendpointstatemachine/respond%28tocommand_status_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Classes

- [IOUSBHostCIControllerStateMachine](iousbhostcicontrollerstatemachine.md)
- [IOUSBHostCIDeviceStateMachine](iousbhostcidevicestatemachine.md)
- [IOUSBHostCIPortStateMachine](iousbhostciportstatemachine.md)
- [IOUSBHostControllerInterface](iousbhostcontrollerinterface.md)

# IOUSBHostCIEndpointStateMachine (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```objectivec
@interface IOUSBHostCIEndpointStateMachine : NSObject
```

## Topics

### Instance Properties

- [controllerInterface](iousbhostciendpointstatemachine/controllerinterface.md)
- [currentTransferMessage](iousbhostciendpointstatemachine/currenttransfermessage.md)
- [deviceAddress](iousbhostciendpointstatemachine/deviceaddress.md)
- [endpointAddress](iousbhostciendpointstatemachine/endpointaddress.md)
- [endpointState](iousbhostciendpointstatemachine/endpointstate.md)

### Instance Methods

- [enqueueTransferCompletionForMessage:status:transferLength:error:](iousbhostciendpointstatemachine/enqueuetransfercompletion%28for_status_transferlength_%29.md)
- [inspectCommand:error:](iousbhostciendpointstatemachine/inspectcommand%28__%29.md)
- [processDoorbell:error:](iousbhostciendpointstatemachine/processdoorbell%28__%29.md)
- [respondToCommand:status:error:](iousbhostciendpointstatemachine/respond%28tocommand_status_%29.md)
- [initWithInterface:command:error:](iousbhostciendpointstatemachine/initwithinterface_command_error_.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Classes

- [IOUSBHostCIControllerStateMachine](iousbhostcicontrollerstatemachine.md)
- [IOUSBHostCIDeviceStateMachine](iousbhostcidevicestatemachine.md)
- [IOUSBHostCIPortStateMachine](iousbhostciportstatemachine.md)
- [IOUSBHostControllerInterface](iousbhostcontrollerinterface.md)
