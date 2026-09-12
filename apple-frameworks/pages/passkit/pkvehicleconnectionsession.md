> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkvehicleconnectionsession](https://developer.apple.com/documentation/passkit/pkvehicleconnectionsession)

# PKVehicleConnectionSession (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS · visionOS 1.0+ · watchOS 8.5+

## Declaration

```swift
class PKVehicleConnectionSession
```

## Topics

### Instance Properties

- [connectionStatus](pkvehicleconnectionsession/connectionstatus.md)
- [delegate](pkvehicleconnectionsession/delegate.md)

### Instance Methods

- [invalidate()](pkvehicleconnectionsession/invalidate%28%29.md)
- [send(\_:)](pkvehicleconnectionsession/send%28__%29.md)

### Type Methods

- [session(for:delegate:completion:)](pkvehicleconnectionsession/session%28for_delegate_completion_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Digital car keys

- [PKAddCarKeyPassConfiguration](pkaddcarkeypassconfiguration.md): A specialized configuration object that PassKit uses when it creates a digital car key.
- [PKVehicleConnectionDelegate](pkvehicleconnectiondelegate.md)
- [PKVehicleConnectionSessionConnectionState](pkvehicleconnectionsessionconnectionstate.md)

# PKVehicleConnectionSession (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS · visionOS 1.0+ · watchOS 8.5+

## Declaration

```objectivec
@interface PKVehicleConnectionSession : NSObject
```

## Topics

### Instance Properties

- [connectionStatus](pkvehicleconnectionsession/connectionstatus.md)
- [delegate](pkvehicleconnectionsession/delegate.md)

### Instance Methods

- [invalidate](pkvehicleconnectionsession/invalidate%28%29.md)
- [sendData:error:](pkvehicleconnectionsession/send%28__%29.md)

### Type Methods

- [sessionForPass:delegate:completion:](pkvehicleconnectionsession/session%28for_delegate_completion_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Digital car keys

- [PKAddCarKeyPassConfiguration](pkaddcarkeypassconfiguration.md): A specialized configuration object that PassKit uses when it creates a digital car key.
- [PKVehicleConnectionDelegate](pkvehicleconnectiondelegate.md)
- [PKVehicleConnectionSessionConnectionState](pkvehicleconnectionsessionconnectionstate.md)
