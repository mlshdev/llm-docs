> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostcontrollerinterface](https://developer.apple.com/documentation/iousbhost/iousbhostcontrollerinterface)

# IOUSBHostControllerInterface (Swift)

**Framework:** IOUSBHost  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```swift
class IOUSBHostControllerInterface
```

## Topics

### Instance Properties

- [capabilities](iousbhostcontrollerinterface/capabilities.md)
- [controllerStateMachine](iousbhostcontrollerinterface/controllerstatemachine.md)
- [interruptRateHz](iousbhostcontrollerinterface/interruptratehz.md)
- [queue](iousbhostcontrollerinterface/queue.md)
- [uuid](iousbhostcontrollerinterface/uuid.md)

### Instance Methods

- [capabilities(forPort:)](iousbhostcontrollerinterface/capabilities%28forport_%29.md)
- [description(for:)](iousbhostcontrollerinterface/description%28for_%29.md)
- [destroy()](iousbhostcontrollerinterface/destroy%28%29.md)
- [enqueueInterrupt(\_:)](iousbhostcontrollerinterface/enqueueinterrupt%28__%29.md)
- [enqueueInterrupt(\_:expedite:)](iousbhostcontrollerinterface/enqueueinterrupt%28__expedite_%29.md)
- [enqueueInterrupts(\_:count:)](iousbhostcontrollerinterface/enqueueinterrupts%28__count_%29.md)
- [enqueueInterrupts(\_:count:expedite:)](iousbhostcontrollerinterface/enqueueinterrupts%28__count_expedite_%29.md)
- [getPortStateMachine(forCommand:error:)](iousbhostcontrollerinterface/getportstatemachine%28forcommand_error_%29.md)
- [getPortStateMachine(forPort:error:)](iousbhostcontrollerinterface/getportstatemachine%28forport_error_%29.md)

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
- [IOUSBHostCIPortStateMachine](iousbhostciportstatemachine.md)

# IOUSBHostControllerInterface (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Class  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```objectivec
@interface IOUSBHostControllerInterface : NSObject
```

## Topics

### Instance Properties

- [capabilities](iousbhostcontrollerinterface/capabilities.md)
- [controllerStateMachine](iousbhostcontrollerinterface/controllerstatemachine.md)
- [interruptRateHz](iousbhostcontrollerinterface/interruptratehz.md)
- [queue](iousbhostcontrollerinterface/queue.md)
- [uuid](iousbhostcontrollerinterface/uuid.md)

### Instance Methods

- [capabilitiesForPort:](iousbhostcontrollerinterface/capabilities%28forport_%29.md)
- [descriptionForMessage:](iousbhostcontrollerinterface/description%28for_%29.md)
- [destroy](iousbhostcontrollerinterface/destroy%28%29.md)
- [enqueueInterrupt:error:](iousbhostcontrollerinterface/enqueueinterrupt%28__%29.md)
- [enqueueInterrupt:expedite:error:](iousbhostcontrollerinterface/enqueueinterrupt%28__expedite_%29.md)
- [enqueueInterrupts:count:error:](iousbhostcontrollerinterface/enqueueinterrupts%28__count_%29.md)
- [enqueueInterrupts:count:expedite:error:](iousbhostcontrollerinterface/enqueueinterrupts%28__count_expedite_%29.md)
- [getPortStateMachineForCommand:error:](iousbhostcontrollerinterface/getportstatemachine%28forcommand_error_%29.md)
- [getPortStateMachineForPort:error:](iousbhostcontrollerinterface/getportstatemachine%28forport_error_%29.md)
- [initWithCapabilities:queue:interruptRateHz:error:commandHandler:doorbellHandler:interestHandler:](iousbhostcontrollerinterface/initwithcapabilities_queue_interruptratehz_error_commandhandler_doorbellhandler_interesthandler_.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Classes

- [IOUSBHostCIControllerStateMachine](iousbhostcicontrollerstatemachine.md)
- [IOUSBHostCIDeviceStateMachine](iousbhostcidevicestatemachine.md)
- [IOUSBHostCIEndpointStateMachine](iousbhostciendpointstatemachine.md)
- [IOUSBHostCIPortStateMachine](iousbhostciportstatemachine.md)
