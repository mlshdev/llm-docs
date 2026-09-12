> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostciportstatemachine](https://developer.apple.com/documentation/iousbhost/iousbhostciportstatemachine)

# IOUSBHostCIPortStateMachine (Swift)

**Framework:** IOUSBHost  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```swift
class IOUSBHostCIPortStateMachine
```

## Topics

### Instance Properties

- [connected](iousbhostciportstatemachine/connected.md)
- [controllerInterface](iousbhostciportstatemachine/controllerinterface.md)
- [linkState](iousbhostciportstatemachine/linkstate.md)
- [overcurrent](iousbhostciportstatemachine/overcurrent.md)
- [portNumber](iousbhostciportstatemachine/portnumber.md)
- [portState](iousbhostciportstatemachine/portstate.md)
- [portStatus](iousbhostciportstatemachine/portstatus.md)
- [powered](iousbhostciportstatemachine/powered.md)
- [speed](iousbhostciportstatemachine/speed.md)

### Instance Methods

- [inspectCommand(\_:)](iousbhostciportstatemachine/inspectcommand%28__%29.md)
- [respond(toCommand:status:)](iousbhostciportstatemachine/respond%28tocommand_status_%29.md)
- [updateLinkState(\_:speed:inhibitLinkStateChange:)](iousbhostciportstatemachine/updatelinkstate%28__speed_inhibitlinkstatechange_%29.md)

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
- [IOUSBHostCIEndpointStateMachine](iousbhostciendpointstatemachine.md)
- [IOUSBHostControllerInterface](iousbhostcontrollerinterface.md)

# IOUSBHostCIPortStateMachine (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```objectivec
@interface IOUSBHostCIPortStateMachine : NSObject
```

## Topics

### Instance Properties

- [connected](iousbhostciportstatemachine/connected.md)
- [controllerInterface](iousbhostciportstatemachine/controllerinterface.md)
- [linkState](iousbhostciportstatemachine/linkstate.md)
- [overcurrent](iousbhostciportstatemachine/overcurrent.md)
- [portNumber](iousbhostciportstatemachine/portnumber.md)
- [portState](iousbhostciportstatemachine/portstate.md)
- [portStatus](iousbhostciportstatemachine/portstatus.md)
- [powered](iousbhostciportstatemachine/powered.md)
- [speed](iousbhostciportstatemachine/speed.md)

### Instance Methods

- [inspectCommand:error:](iousbhostciportstatemachine/inspectcommand%28__%29.md)
- [respondToCommand:status:error:](iousbhostciportstatemachine/respond%28tocommand_status_%29.md)
- [updateLinkState:speed:inhibitLinkStateChange:error:](iousbhostciportstatemachine/updatelinkstate%28__speed_inhibitlinkstatechange_%29.md)
- [initWithInterface:portNumber:error:](iousbhostciportstatemachine/initwithinterface_portnumber_error_.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Classes

- [IOUSBHostCIControllerStateMachine](iousbhostcicontrollerstatemachine.md)
- [IOUSBHostCIDeviceStateMachine](iousbhostcidevicestatemachine.md)
- [IOUSBHostCIEndpointStateMachine](iousbhostciendpointstatemachine.md)
- [IOUSBHostControllerInterface](iousbhostcontrollerinterface.md)
