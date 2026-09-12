> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostcidevicestatemachine](https://developer.apple.com/documentation/iousbhost/iousbhostcidevicestatemachine)

# IOUSBHostCIDeviceStateMachine (Swift)

**Framework:** IOUSBHost  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```swift
class IOUSBHostCIDeviceStateMachine
```

## Topics

### Instance Properties

- [completeRoute](iousbhostcidevicestatemachine/completeroute.md)
- [controllerInterface](iousbhostcidevicestatemachine/controllerinterface.md)
- [deviceAddress](iousbhostcidevicestatemachine/deviceaddress.md)
- [deviceState](iousbhostcidevicestatemachine/devicestate.md)

### Instance Methods

- [inspectCommand(\_:)](iousbhostcidevicestatemachine/inspectcommand%28__%29.md)
- [respond(toCommand:status:)](iousbhostcidevicestatemachine/respond%28tocommand_status_%29.md)
- [respond(toCommand:status:deviceAddress:)](iousbhostcidevicestatemachine/respond%28tocommand_status_deviceaddress_%29.md)

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
- [IOUSBHostCIEndpointStateMachine](iousbhostciendpointstatemachine.md)
- [IOUSBHostCIPortStateMachine](iousbhostciportstatemachine.md)
- [IOUSBHostControllerInterface](iousbhostcontrollerinterface.md)

# IOUSBHostCIDeviceStateMachine (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```objectivec
@interface IOUSBHostCIDeviceStateMachine : NSObject
```

## Topics

### Instance Properties

- [completeRoute](iousbhostcidevicestatemachine/completeroute.md)
- [controllerInterface](iousbhostcidevicestatemachine/controllerinterface.md)
- [deviceAddress](iousbhostcidevicestatemachine/deviceaddress.md)
- [deviceState](iousbhostcidevicestatemachine/devicestate.md)

### Instance Methods

- [inspectCommand:error:](iousbhostcidevicestatemachine/inspectcommand%28__%29.md)
- [respondToCommand:status:error:](iousbhostcidevicestatemachine/respond%28tocommand_status_%29.md)
- [respondToCommand:status:deviceAddress:error:](iousbhostcidevicestatemachine/respond%28tocommand_status_deviceaddress_%29.md)
- [initWithInterface:command:error:](iousbhostcidevicestatemachine/initwithinterface_command_error_.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Classes

- [IOUSBHostCIControllerStateMachine](iousbhostcicontrollerstatemachine.md)
- [IOUSBHostCIEndpointStateMachine](iousbhostciendpointstatemachine.md)
- [IOUSBHostCIPortStateMachine](iousbhostciportstatemachine.md)
- [IOUSBHostControllerInterface](iousbhostcontrollerinterface.md)
