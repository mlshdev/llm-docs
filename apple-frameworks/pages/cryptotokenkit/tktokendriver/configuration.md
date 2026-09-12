> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokendriver/configuration](https://developer.apple.com/documentation/cryptotokenkit/tktokendriver/configuration)

# TKTokenDriver.Configuration (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A configuration for one class of token.

## Declaration

```swift
class Configuration
```

## Topics

### Reporting Configuration Information

- [classID](configuration/classid.md): The class identifier of the token driver.
- [tokenConfigurations](configuration/tokenconfigurations.md): A dictionary of all currently configured tokens for this token class, which the token instance identifier keys.
- [driverConfigurations](configuration/driverconfigurations.md): A dictionary of token class configurations which the class identifier of the token driver keys.

### Adding and Removing Configurations

- [addTokenConfiguration(for:)](configuration/addtokenconfiguration%28for_%29.md): Creates a configuration object for a token with the token instance identifier you specify.
- [removeTokenConfiguration(for:)](configuration/removetokenconfiguration%28for_%29.md): Removes a configuration for a token with the token instance identifier you specify.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### Responding to Token Creation

- [delegate](delegate.md): The token driver delegate.
- [TKTokenDriverDelegate](../tktokendriverdelegate.md): The interface that a token driver delegate implements to respond to token creation events.
- [TKTokenDriver.ClassID](classid.md): The type of the class identifier for the token driver.

# TKTokenDriverConfiguration (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A configuration for one class of token.

## Declaration

```objectivec
@interface TKTokenDriverConfiguration : NSObject
```

## Topics

### Reporting Configuration Information

- [classID](configuration/classid.md): The class identifier of the token driver.
- [tokenConfigurations](configuration/tokenconfigurations.md): A dictionary of all currently configured tokens for this token class, which the token instance identifier keys.
- [driverConfigurations](configuration/driverconfigurations.md): A dictionary of token class configurations which the class identifier of the token driver keys.

### Adding and Removing Configurations

- [addTokenConfigurationForTokenInstanceID:](configuration/addtokenconfiguration%28for_%29.md): Creates a configuration object for a token with the token instance identifier you specify.
- [removeTokenConfigurationForTokenInstanceID:](configuration/removetokenconfiguration%28for_%29.md): Removes a configuration for a token with the token instance identifier you specify.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Responding to Token Creation

- [delegate](delegate.md): The token driver delegate.
- [TKTokenDriverDelegate](../tktokendriverdelegate.md): The interface that a token driver delegate implements to respond to token creation events.
- [TKTokenDriverClassID](classid.md): The type of the class identifier for the token driver.
