> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkvehicleconnectiondelegate](https://developer.apple.com/documentation/passkit/pkvehicleconnectiondelegate)

# PKVehicleConnectionDelegate (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Protocol  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS · visionOS 1.0+ · watchOS 8.5+

## Declaration

```swift
protocol PKVehicleConnectionDelegate : NSObjectProtocol
```

## Topics

### Instance Methods

- [sessionDidChange(\_:)](pkvehicleconnectiondelegate/sessiondidchange%28__%29.md)
- [sessionDidReceive(\_:)](pkvehicleconnectiondelegate/sessiondidreceive%28__%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Digital car keys

- [PKAddCarKeyPassConfiguration](pkaddcarkeypassconfiguration.md): A specialized configuration object that PassKit uses when it creates a digital car key.
- [PKVehicleConnectionSession](pkvehicleconnectionsession.md)
- [PKVehicleConnectionSessionConnectionState](pkvehicleconnectionsessionconnectionstate.md)

# PKVehicleConnectionDelegate (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Protocol  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS · visionOS 1.0+ · watchOS 8.5+

## Declaration

```objectivec
@protocol PKVehicleConnectionDelegate <NSObject>
```

## Topics

### Instance Methods

- [sessionDidChangeConnectionState:](pkvehicleconnectiondelegate/sessiondidchange%28__%29.md)
- [sessionDidReceiveData:](pkvehicleconnectiondelegate/sessiondidreceive%28__%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Digital car keys

- [PKAddCarKeyPassConfiguration](pkaddcarkeypassconfiguration.md): A specialized configuration object that PassKit uses when it creates a digital car key.
- [PKVehicleConnectionSession](pkvehicleconnectionsession.md)
- [PKVehicleConnectionSessionConnectionState](pkvehicleconnectionsessionconnectionstate.md)
