> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpsessionconfigurationdelegate](https://developer.apple.com/documentation/carplay/cpsessionconfigurationdelegate)

# CPSessionConfigurationDelegate (Swift)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A protocol for receiving notifications about changes to vehicle properties and configuration.

## Declaration

```swift
@MainActor protocol CPSessionConfigurationDelegate : NSObjectProtocol
```

## Topics

### Handling Content Style Changes

- [sessionConfiguration(\_:contentStyleChanged:)](cpsessionconfigurationdelegate/sessionconfiguration%28__contentstylechanged_%29.md): Tells the delegate that the vehicle changed its selected content style.

### Handling Limit Changes

- [sessionConfiguration(\_:limitedUserInterfacesChanged:)](cpsessionconfigurationdelegate/sessionconfiguration%28__limiteduserinterfaceschanged_%29.md): Tells the delegate that the system changed keyboard or list limits on the user interface.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Creating a Session Configuration

- [init(delegate:)](cpsessionconfiguration/init%28delegate_%29.md): Creates a session configuration with a delegate.

# CPSessionConfigurationDelegate (Objective-C)

**Framework:** CarPlay  
**Kind:** Protocol  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A protocol for receiving notifications about changes to vehicle properties and configuration.

## Declaration

```objectivec
@protocol CPSessionConfigurationDelegate <NSObject>
```

## Topics

### Handling Content Style Changes

- [sessionConfiguration:contentStyleChanged:](cpsessionconfigurationdelegate/sessionconfiguration%28__contentstylechanged_%29.md): Tells the delegate that the vehicle changed its selected content style.

### Handling Limit Changes

- [sessionConfiguration:limitedUserInterfacesChanged:](cpsessionconfigurationdelegate/sessionconfiguration%28__limiteduserinterfaceschanged_%29.md): Tells the delegate that the system changed keyboard or list limits on the user interface.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Creating a Session Configuration

- [initWithDelegate:](cpsessionconfiguration/init%28delegate_%29.md): Creates a session configuration with a delegate.
