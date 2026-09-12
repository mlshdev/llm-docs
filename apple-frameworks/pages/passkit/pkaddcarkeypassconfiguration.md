> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddcarkeypassconfiguration](https://developer.apple.com/documentation/passkit/pkaddcarkeypassconfiguration)

# PKAddCarKeyPassConfiguration (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS · visionOS 1.0+

A specialized configuration object that PassKit uses when it creates a digital car key.

## Declaration

```swift
class PKAddCarKeyPassConfiguration
```

## Topics

### Creating a pass configuration

- [init()](pkaddcarkeypassconfiguration/init%28%29.md): Creates a digital car key configuration object.

### Adding identifiers

- [manufacturerIdentifier](pkaddcarkeypassconfiguration/manufactureridentifier.md)
- [productPlanIdentifier](pkaddcarkeypassconfiguration/productplanidentifier.md): The product plan identifier (PPID) supplied by the vehicle’s original equipment manufacturer (OEM).

### Setting the wireless radio technology

- [supportedRadioTechnologies](pkaddcarkeypassconfiguration/supportedradiotechnologies.md): The wireless radio technology that the key uses.
- [PKRadioTechnology](pkradiotechnology.md): Constants that describe the type of wireless radio technology that a pass uses.

### Managing the password

- [password](pkaddcarkeypassconfiguration/password.md): A one-time password that the vehicle manufacturer provides.

### Setting the provisioning template

- [provisioningTemplateIdentifier](pkaddcarkeypassconfiguration/provisioningtemplateidentifier.md)

## Relationships

### Inherits From

- [PKAddSecureElementPassConfiguration](pkaddsecureelementpassconfiguration.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Digital car keys

- [PKVehicleConnectionSession](pkvehicleconnectionsession.md)
- [PKVehicleConnectionDelegate](pkvehicleconnectiondelegate.md)
- [PKVehicleConnectionSessionConnectionState](pkvehicleconnectionsessionconnectionstate.md)

# PKAddCarKeyPassConfiguration (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Class  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS · visionOS 1.0+

A specialized configuration object that PassKit uses when it creates a digital car key.

## Declaration

```objectivec
@interface PKAddCarKeyPassConfiguration : PKAddSecureElementPassConfiguration
```

## Topics

### Creating a pass configuration

- [init](pkaddcarkeypassconfiguration/init%28%29.md): Creates a digital car key configuration object.

### Adding identifiers

- [manufacturerIdentifier](pkaddcarkeypassconfiguration/manufactureridentifier.md)
- [productPlanIdentifier](pkaddcarkeypassconfiguration/productplanidentifier.md): The product plan identifier (PPID) supplied by the vehicle’s original equipment manufacturer (OEM).

### Setting the wireless radio technology

- [supportedRadioTechnologies](pkaddcarkeypassconfiguration/supportedradiotechnologies.md): The wireless radio technology that the key uses.
- [PKRadioTechnology](pkradiotechnology.md): Constants that describe the type of wireless radio technology that a pass uses.

### Managing the password

- [password](pkaddcarkeypassconfiguration/password.md): A one-time password that the vehicle manufacturer provides.

### Setting the provisioning template

- [provisioningTemplateIdentifier](pkaddcarkeypassconfiguration/provisioningtemplateidentifier.md)

## Relationships

### Inherits From

- [PKAddSecureElementPassConfiguration](pkaddsecureelementpassconfiguration.md)

## See Also

### Digital car keys

- [PKVehicleConnectionSession](pkvehicleconnectionsession.md)
- [PKVehicleConnectionDelegate](pkvehicleconnectiondelegate.md)
- [PKVehicleConnectionSessionConnectionState](pkvehicleconnectionsessionconnectionstate.md)
