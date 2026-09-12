> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrxpcdevicecontrollerparameters](https://developer.apple.com/documentation/matter/mtrxpcdevicecontrollerparameters)

# MTRXPCDeviceControllerParameters (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

## Declaration

```swift
class MTRXPCDeviceControllerParameters
```

## Topics

### Initializers

- [init(XPCConnectionBlock:uniqueIdentifier:)](mtrxpcdevicecontrollerparameters/init%28xpcconnectionblock_uniqueidentifier_%29-3wkoh.md)
- [init(XPConnectionBlock:uniqueIdentifier:)](mtrxpcdevicecontrollerparameters/init%28xpconnectionblock_uniqueidentifier_%29-5vgjx.md): Deprecated.
- [init(xpConnectionBlock:uniqueIdentifier:)](mtrxpcdevicecontrollerparameters/init%28xpconnectionblock_uniqueidentifier_%29-44d5q.md): Deprecated.
- [init(xpcConnectionBlock:uniqueIdentifier:)](mtrxpcdevicecontrollerparameters/init%28xpcconnectionblock_uniqueidentifier_%29-9ep5u.md): A controller created from this way will connect to a remote instance of an MTRDeviceController loaded in an XPC Service

### Instance Properties

- [uniqueIdentifier](mtrxpcdevicecontrollerparameters/uniqueidentifier.md)
- [xpcConnectionBlock](mtrxpcdevicecontrollerparameters/xpcconnectionblock.md)

## Relationships

### Inherits From

- [MTRDeviceControllerAbstractParameters](mtrdevicecontrollerabstractparameters.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MTRXPCDeviceControllerParameters (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

## Declaration

```objectivec
@interface MTRXPCDeviceControllerParameters : MTRDeviceControllerAbstractParameters
```

## Topics

### Instance Properties

- [uniqueIdentifier](mtrxpcdevicecontrollerparameters/uniqueidentifier.md)
- [xpcConnectionBlock](mtrxpcdevicecontrollerparameters/xpcconnectionblock.md)

### Instance Methods

- [initWithXPConnectionBlock:uniqueIdentifier:](mtrxpcdevicecontrollerparameters/init%28xpconnectionblock_uniqueidentifier_%29-44d5q.md): Deprecated.
- [initWithXPCConnectionBlock:uniqueIdentifier:](mtrxpcdevicecontrollerparameters/init%28xpcconnectionblock_uniqueidentifier_%29-9ep5u.md): A controller created from this way will connect to a remote instance of an MTRDeviceController loaded in an XPC Service

## Relationships

### Inherits From

- [MTRDeviceControllerAbstractParameters](mtrdevicecontrollerabstractparameters.md)
