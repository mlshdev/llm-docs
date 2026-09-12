> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostcicontrollerstatemachine](https://developer.apple.com/documentation/iousbhost/iousbhostcicontrollerstatemachine)

# IOUSBHostCIControllerStateMachine (Swift)

**Framework:** IOUSBHost  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```swift
class IOUSBHostCIControllerStateMachine
```

## Topics

### Instance Properties

- [controllerInterface](iousbhostcicontrollerstatemachine/controllerinterface.md)
- [controllerState](iousbhostcicontrollerstatemachine/controllerstate.md)

### Instance Methods

- [enqueueUpdatedFrame(\_:timestamp:)](iousbhostcicontrollerstatemachine/enqueueupdatedframe%28__timestamp_%29.md)
- [inspectCommand(\_:)](iousbhostcicontrollerstatemachine/inspectcommand%28__%29.md)
- [respond(toCommand:status:)](iousbhostcicontrollerstatemachine/respond%28tocommand_status_%29.md)
- [respond(toCommand:status:frame:timestamp:)](iousbhostcicontrollerstatemachine/respond%28tocommand_status_frame_timestamp_%29.md)

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

- [IOUSBHostCIDeviceStateMachine](iousbhostcidevicestatemachine.md)
- [IOUSBHostCIEndpointStateMachine](iousbhostciendpointstatemachine.md)
- [IOUSBHostCIPortStateMachine](iousbhostciportstatemachine.md)
- [IOUSBHostControllerInterface](iousbhostcontrollerinterface.md)

# IOUSBHostCIControllerStateMachine (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```objectivec
@interface IOUSBHostCIControllerStateMachine : NSObject
```

## Topics

### Instance Properties

- [controllerInterface](iousbhostcicontrollerstatemachine/controllerinterface.md)
- [controllerState](iousbhostcicontrollerstatemachine/controllerstate.md)

### Instance Methods

- [enqueueUpdatedFrame:timestamp:error:](iousbhostcicontrollerstatemachine/enqueueupdatedframe%28__timestamp_%29.md)
- [inspectCommand:error:](iousbhostcicontrollerstatemachine/inspectcommand%28__%29.md)
- [respondToCommand:status:error:](iousbhostcicontrollerstatemachine/respond%28tocommand_status_%29.md)
- [respondToCommand:status:frame:timestamp:error:](iousbhostcicontrollerstatemachine/respond%28tocommand_status_frame_timestamp_%29.md)
- [initWithInterface:error:](iousbhostcicontrollerstatemachine/initwithinterface_error_.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Classes

- [IOUSBHostCIDeviceStateMachine](iousbhostcidevicestatemachine.md)
- [IOUSBHostCIEndpointStateMachine](iousbhostciendpointstatemachine.md)
- [IOUSBHostCIPortStateMachine](iousbhostciportstatemachine.md)
- [IOUSBHostControllerInterface](iousbhostcontrollerinterface.md)
